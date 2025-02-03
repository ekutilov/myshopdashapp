export default function(Tab) {

    return {
        name: "Coles",
        id: "coles",
        url_match_pattern: ["*://*.coles.com.au/*"],
        ver: "3.0.0",

        async init() {

            // Add dashboard_active status in the configurations (TODO)

            await this.tab.ibox.shown(true)

            await chrome.scripting.executeScript({
                target : { tabId : Tab.chrome_tab.id },
                func : auth_watcher_injection,
                args : [chrome.runtime.id],
                world: "MAIN"
            })

            if (await this.page_is_authorised()) {
                await this.tab.data.set({ auth_state: "authenticated" }) 
                this.tab.log("Page is authorised, activate ibox")
                await this.tab.ibox.active(true)
            } else {
                await this.tab.data.set({ auth_state: "unauthenticated" })
                await this.tab.ibox.active(false)
                await this.tab.ibox.set_tooltip_text("Login to download your ereceipts")
            }
            await this.tab.ibox.shown(true)
        }
        , 
        async pull(filter={}) {

            if (await this.page_is_authorised()) {

                await Tab.ibox.state('downloadInProgress')
                await Tab.ibox.pc(undefined) // intermidiate state

                const transactions = await this.get_transactions(filter)
                
                let length = transactions.length // > 15 ? 15 : transactions.length // debug mode

                for (let i=0; i<length; i++) {
                    try {
                        let ereceipt = await this.get_ereceipt(transactions[i]) // scraper_ereceipt(this, credentials, transactions[i])

                        this.log('ereceipt: ', ereceipt)
                        
                        transactions[i].ereceipt = ereceipt
                    
                    } catch (e) {

                        this.error('error in ereceipt scraper: ', e, " for transaction: ", JSON.stringify(transactions[i]))
                        transactions[i].ereceipt = {error: e}

                    }
                    await Tab.ibox.pc(i/length*100)
                }

                if (length>0) { 
                    transactions[0].scraper = { clientId: 'unknown', ver: (await this.tab.config()).ver, captureTime:(new Date()).toISOString() }

                    await Tab.data.set({ download: this.download_preprocessor(transactions) })

                    await Tab.ibox.wheelOff(); await Tab.ibox.unroll(); await Tab.ibox.state('downloadComplete')

                } else {
                    await Tab.ibox.error("No transactions found or download error: try to refresh the page")
                    // TODO: investigate why the capture on Coles is often fails at first attempt
                }

                return transactions

            } else {
                this.error("Appempt to call pull when page is not authorised")
                return []
            }
        }
        , 
        async credentials() {

            const access_token = (await chrome.cookies.get({name: "accessToken", url: "https://www.coles.com.au"}))

            const next_config = this.cache.has({key: "next_config"}) ? this.cache.get({key: "next_config"}) : await chrome.scripting.executeScript({ 
                target : { tabId : this.tab.chrome_tab.id },
                func : coles_configuration_injection,
                args : [],
                world: "MAIN"
            })

            if (!this.cache.has({key: "next_config"})) this.cache.set({key: "next_config"}, next_config)

            return { access_token: access_token?.value, next_buildId: next_config[0].result.buildId }
        }
        ,
        async get_transactions(filter={}) {

            const transactions_ = await scraper_transactions(this, filter)

            try {

                let transactions = [
                    // ...transactions_["getOrders({\"status\":\"past\"})"]?.data?.orders, 
                    // ...transactions_["getOrders({\"status\":\"active\"})"]?.data?.orders,
                    ...transactions_["getOrders({\"status\":\"in-store\"})"]?.data?.orders 
                ]

                return transactions
            } catch (e) {
                this.log('error in transactions scraper: ', e)
                return []
            }
        }
        ,
        async get_ereceipt(transaction_id) {
            return await scraper_ereceipt(this, transaction_id)
        }
        ,
        async page_is_authorised() {

            const res = await chrome.scripting.executeScript({
                target: { tabId: Tab.chrome_tab.id },
                func: auth_status_injection,
                args: [],
                world: "MAIN"
            })

            this.log('auth_status_injection is executed ', res[0].result)

            if (res[0].result == "authenticated") {
                await Tab.data.set({auth_state: "authenticated"})
                return true
            } else {
                await Tab.data.set({auth_state: "unauthenticated"})
                return false
            }
        }
        , 
        async onMessage(message) {
            if (message.topic == "auth_state") {
                await this.onAuthStateChange(message.content)
            }
            
            if (message.sender=="downloadScript" && message.status=="completed") {
                await this.tab.ibox.state("button2Reset")
            }

            return
        }
        ,
        async onAuthStateChange(content) {
            if (content == "authenticated") {

                await Tab.data.set({auth_state: "authenticated"})
                this.tab.ibox.active(true)

            } else {

                await Tab.data.set({auth_state: "unauthenticated"})
                await this.tab.ibox.reset()
                await this.tab.ibox.active(false)

            }
            
            return
        }
        ,
        download_preprocessor(data) {
            
            var data_normalised 

            try {
                data_normalised = data.map(d=>{
                    let ereceipt_ = d.ereceipt
                    let ereceipt_data = ereceipt_[Object.keys(ereceipt_)[0]]?.data

                    let items = ereceipt_data.items?.map(d=>{return {item_total: d.orderItem?.itemTotalPrice, product: d.name, 
                        unit: d.orderItem.hasOwnProperty('weight') ? "kg" : "ea", 
                        quantity: d.orderItem.hasOwnProperty('weight') ? d.orderItem.weight : d.orderItem.quantity, unit_price: d.orderItem.unitPrice,
                        sku: d.id
                        }
                    })

                    return {
                        transactionId: d.transactionId,
                        card: ereceipt_data.orderAttributes?.flybuysNumber,
                        transactionTime: new Date(ereceipt_data.orderPlacementTime), 
                        store_name: ereceipt_data.storeName, 
                        store_number: ereceipt_data.store?.storeId, 
                        total: ereceipt_data.orderAttributes?.orderTotalPrice, 
                        points: ereceipt_data.orderAttributes?.flybuysPointsEarned, items: items
                    }
                })
            } catch (e) {
                this.error('error in download preprocessor: ', e)
                data_normalised = undefined
            }

            return { 
                brand: this.id, 
                metabrand: this.id,
                captureTime: (new Date()).toISOString(), 
                ver: this.tab.config().ver,
                connector_ver: this.ver,
                ext_id: this.tab.app.id,
                download: data,
                normalised_data: data_normalised
            }
        }
    }
}


// injection functions

function auth_status_injection() {
    
    const colesAuthCheck = () =>{
        return window.colData?.filter(d=>d.event==='auth_summary')[0].data?.customer?.auth_state==='authenticated'
    }
    
    return colesAuthCheck() ? "authenticated" : "unauthenticated"

}

function coles_configuration_injection() {

    const config = window.__NEXT_DATA__ 
    return config

}


function auth_watcher_injection(arg_msdExtID) {
    
    const msdExtID = arg_msdExtID  ? arg_msdExtID : "kjnoihdmllddkmfhikjlkbfcdcmghhji" 

    const messenger = async (auth_status) => { 
        return await chrome.runtime.sendMessage(msdExtID, {sender: "injection", topic: "auth_state", content: auth_status, context: "coles"})
    },
        colesAuthCheck = () =>{
            return window.colData?.filter(d=>d.event==='auth_summary')[0].data?.customer?.auth_state==='authenticated'
    }
    
    document.addEventListener("at_dataReady", async ()=>{
        try { 
            if (colesAuthCheck()) {
                await messenger("authenticated")
            } else {
                await messenger("unauthenticated")
            }
        } catch (_) { 
            await messenger("unauthenticated")
        }
    })
}




async function scraper_transactions(connector, filter) {

    const handler_config = await connector.tab.config()

    connector.log("scraper transactions is called ", JSON.stringify(handler_config))

    const credentials = await connector.credentials()

    const bearer_token = credentials.access_token
    const next_build = credentials.next_buildId

    const orders_url = (handler_config.orders_url ? handler_config.orders_url : `https://www.coles.com.au/_next/data/___NEXTBUILDID___/en/account/orders.json`).replace('___NEXTBUILDID___', next_build)

    try {
  
        let req = await fetch(orders_url, 
            {
                method: 'GET',
                cookies: { accessToken: bearer_token },
                headers: {}
            }
        )

        if (req.status !== 200) {
            connector.log('Unauthorized request to coles bff')
            connector.log('fetch response: ', JSON.stringify(req))
            connector.log('fetch_object: ', req, req.status)
        }

        let req_json = await req.json()

        return req_json?.pageProps?.initialState?.bffApi?.queries

    } catch (e) {
        connector.log('error in transactions scraper: ', e)
        return {}
    }

}

async function scraper_ereceipt(connector, transaction_id) {

    const handler_config = await connector.tab.config()
    const credentials = await connector.credentials()

    const bearer_token = credentials.access_token
    const next_build = credentials.next_buildId

    const order_instore_link_ = handler_config.instore_order_link ? handler_config.instore_order_link : 'https://www.coles.com.au/_next/data/___NEXTBUILDID___/en/account/orders/in-store/___ORDERID___.json?transactionId=___TRANSACTIONID___&orderId=___ORDERID___'
    const order_instore_link = order_instore_link_.replace('___NEXTBUILDID___', next_build).replaceAll('___ORDERID___', transaction_id.orderId).replace('___TRANSACTIONID___', transaction_id.transactionId)
    
    try {

        let req = await fetch(order_instore_link,
            {
                method: 'GET',
                cookies: { accessToken: bearer_token },
                headers: {}
            }
        )
        
        if (req.status !== 200) {
            connector.log('Unauthorized request to coles bff')
            connector.log('fetch response: ', JSON.stringify(req))
            return {error: req.status}
        } else {

            const req_json = await req.json()
            return req_json.pageProps.initialState.bffApi.queries
        }

    } catch (e) {
        this.log('error in ereceipt scraper: ', e)
    }

}
