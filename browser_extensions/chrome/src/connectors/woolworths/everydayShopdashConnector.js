export default function(Tab) {

    return { 
        // connector settings
        name: "Woolworths",
        id: "woolworths",
        url_match_pattern: ["*://*.everyday.com.au/*"],
        ver: "3.0.0"
        ,
        // specific methods below. Refer to connectorPrototype for minimal set of methods - effectively, expectation is only pull() method is required, 
        // but there's should be a way the connector interacts with ibox - i.e. activate it what page is authorised, etc. It may be 
        // encapsulate in INIT method as watchers, or some other way (i.e. onMessage handlers, etc.)
        async init() {


            if (await this.page_is_authorised()) { 

                await this.tab.data.set({ auth_state: "authenticated" }) 
                this.tab.log("Page is authorised, activate ibox")
                await this.tab.ibox.active(true)

            } else { 
                await this.tab.data.set({ auth_state: "unauthenticated" })
                await this.tab.ibox.active(false)
                await this.tab.ibox.set_tooltip_text(["Login and navigate to Rewards->My Activity", "to download your ereceipts"])
            }

            await this.tab.ibox.shown(true)

            await chrome.scripting.executeScript({
                target : { tabId : this.tab.chrome_tab.id },
                func : authorisation_watcher_injection,
                args : [this.tab.app.id],
                world: "MAIN"
            })

            return
        }
        ,
        async pull(filter=()=>{}) {

            if (await this.page_is_authorised()) {

                await this.tab.ibox.state('downloadInProgress')
                await this.tab.ibox.pc(undefined) // intermidiate state

                const transactions = await this.get_transactions(filter)
                console.log(transactions)
                let l = transactions.length // > 5 ? 5 : transactions.length // for debug

                if (l>0) {
                    for (let i = 0; i < l; i++) {

                        let ereceipt = await this.get_receipt(transactions[i].receipt)

                        transactions[i].ereceipt = ereceipt
                        
                        await Tab.ibox.pc(i/l*100)
                    }

                    // pre-process download (make it ready for download)
                    await Tab.data.set({ download: this.download_preprocessor(transactions) })

                    await Tab.ibox.wheelOff(); await Tab.ibox.unroll(); await Tab.ibox.state('downloadComplete')

                    return transactions
                
                } else {

                    await Tab.ibox.wheelOff(); await Tab.ibox.state('downloadError')
                    Tab.error("No ereceipts found on the page")
                    return []
                
                }

            } else {

                Tab.error("Page is not authorised and pull data is called")

            }
        }
        ,
        async page_is_authorised() {

            let res = await chrome.scripting.executeScript({
                target : { tabId : Tab.chrome_tab.id },
                func : authorisation_status_injection,
                args : [],
                world: "MAIN"
            })

            return res[0].result
        }
        ,
        async onAuthStateChange(content) {

            if (content == "authenticated") {

                await Tab.data.set({auth_state: "authenticated"})

            } else {

                await Tab.data.set({auth_state: "unauthenticated"})
                await this.tab.ibox.reset()
                await this.tab.ibox.active(false)

            }
            
            return
        }
        ,
        async onMessage(message) {

            // Tab.log("onMessage is called ", JSON.stringify(message))
            
            if (message.topic == "auth_state") {
                await this.onAuthStateChange(message.content)
            }

            if (message.sender=="downloadScript" && message.status=="completed") {
                await this.tab.ibox.state("button2Reset")
            }

            return
        }
        ,
        async get_transactions(filter=()=>{}) {
            const credentials = await this.credentials()
            return await _get_receipt_list(this, filter)
        }
        ,
        async get_receipt(id) {
            const credentials = await this.credentials()
            return await _get_receipt(this, id)
        }
        ,
        async credentials() {

            // if (this.cache.has({key: "credentials"})) {
            //     this.log("Credentials found in cache")
            //     return this.cache.get({key: "credentials"})
            // }

            let result = await chrome.scripting.executeScript({
                target : { tabId : Tab.chrome_tab.id },
                func : credentials_injection,
                args : [],
                world: "MAIN"
            })

            // this.cache.set({key: "credentials"}, result[0].result)

            return result[0].result
        }
        ,
        download_preprocessor(download_data) {

            var data_normalised 

            try {
                data_normalised = download_data.map(
                    (x) => {

                        const day = x.displayDate.split(" ")[1]
                        var month, year
                        if (x.title.includes("This Month")) { month = new Date().toLocaleString('default', { month: 'long' }); year = new Date().getFullYear() }
                        else if (x.title.includes("Last Month")) { month = (new Date(new Date() - 2624016000)).toLocaleString('default', { month: 'long' }); year = (new Date(new Date() - 2624016000)).getFullYear() }
                        else { month = x.title.split(" ")[0]; year = x.title.split(" ")[1] }

                        const transaction_ts = new Date(year + " " + month + " " + day + " 12:00").toISOString()
                        let store = x.ereceipt?.activityDetails?.tabs[0]?.page?.details?.filter((x) => x.__typename=="ReceiptDetailsHeader")[0]

                        if (!store) { store = x.ereceipt?.activityDetails?.tabs[0]?.page?.cards
                            ?.filter(card=>card.__typename==="OnlineReceiptHeaderCard")[0]

                            if (store) store.title = store?.heading 
                        }

                        const storename = x.transaction?.origin
                        const total = x.transaction?.amountAsDollars
                        const id = x.id

                        // const transaction_ts = x.displayDate + " " + x.title // .split(" ")[1]).toISOString()

                        let items = x.ereceipt?.activityDetails?.tabs[0]?.page?.details?.filter((x) => x.__typename=="ReceiptDetailsItems")[0]?.items

                        if (items)  {
                            items = items.map( x=> { return {item_total: x.amount, product: x.description, unit: 'ea', quantity: 1, unit_price: x.amount} } )
                        }   else {
                            items = x.ereceipt?.activityDetails?.tabs[0]?.page?.cards
                                ?.filter(card=>card.__typename==="OnlineReceiptDepartmentCard")[0]
                                ?.departmentBlocks?.map((block)=>{ const dept = block.department.description; return block.departmentItems.map(i=>{return {...i, dept: dept }}) })
                                .flat().map(x=>{return {item_total: x.value, product: x.description, unit: 'ea', quantity: 1, unit_price: x.value, sku: undefined}})
                        }
                        
                        return { transaction_id: id, card: x.clientId, transactionTime: transaction_ts, store_name: storename, store_number: store?.storeNo, total:total, points: 0, items: items}
                    })


            } catch (e) {
                this.error("Error in download preprocessor: ", e)
            }

            return { 
                brand: this.id, 
                metabrand: this.id,
                captureTime: (new Date()).toISOString(), 
                ver: this.tab.config().ver,
                connector_ver: this.ver,
                ext_id: chrome.runtime.id,
                download: download_data,
                normalised_data: data_normalised
            }
        }

    }
}


// Injections 

function authorisation_status_injection() {

    try {
        const authStatusData = JSON.parse(localStorage.authStatusData)
        if (authStatusData.reason == "AUTHENTICATED" && defaultClientId) {
            return true
        } else {
            return false
        }
    } catch (e) {
        console.log('MSD: authStatusData not found in local storage')
        return false
    }
}

function authorisation_watcher_injection(extension_id) {

    const messenger = async (auth_status) => { 
        await chrome.runtime.sendMessage(extension_id, { sender: "injection", topic: "auth_state", content: auth_status, context: "everyday"}).then(response => { console.log("MSD: ", response) })
    }
    // creating proxy for local storage to watch changes in authStatusData
    const tmp = localStorage.setItem 

    localStorage.setItem = (key, value) => {
        tmp.call(localStorage, key, value)

        if (key == "authStatusData") {
            console.log('MSD: storage event, extension: ', extension_id, " key: ", key, " value: ", value)

            const authStatusData = JSON.parse(value)
            if (authStatusData.reason == "AUTHENTICATED") {
                messenger("authenticated")
            } else {
                messenger("unauthenticated")
            }
        }

    }
}

function credentials_injection() {
    try {
        return { access_token: JSON.parse(localStorage.authStatusData).access_token,
            client_id: defaultClientId,
            host: "woolworths" }
    } catch (e) {
        console.log('MSD: authStatusData not found in local storage')
        return
    }
}


// Helper functions

async function _get_receipt_list(connector, filter, credentials = undefined) {
            
    const handler_config = await connector.tab.config()
    const app_config = await connector.tab.app.config()

    const graphql_url = handler_config.graphql_url,
        ver = app_config.ver // handler_config.ver

    const activity_query = handler_config.activity_query

    let credentials_ = credentials

    if (credentials_==undefined) {
        connector.log("Credentials not passed")
        credentials_ = await connector.credentials()
    }

    if (credentials_==undefined) {
        connector.error("Credentials not provided")
        return []
    }

    const access_token = credentials_.access_token,
        client_id = credentials_.client_id

    let file = []

    let nextPageToken='FIRST_PAGE'

    do {
        try {
            let response = await fetch(graphql_url, {
                            method: 'POST',
                            headers: {
                                'client_id': client_id,
                                'authorization': "Bearer " + access_token,
                                'Content-Type': 'application/json; charset=utf-8'
                            },
                            body: activity_query.replace('FIRST_PAGE', nextPageToken)
            })

            if (response.status!==200) { return tab.log("non-200 fetch status", response.statusText) }

            let response_parsed = await response.json()
            nextPageToken = response_parsed.data.rtlRewardsActivityFeed.list.nextPageToken
            file = file.concat(response_parsed.data.rtlRewardsActivityFeed.list.groups.map(x => x.items?.map((z) =>{ return {...z, title: x.title, clientId: client_id, ver: ver, captureTime:(new Date()).toISOString()}} )).flat())
        } catch (e) { connector.tab.error("Error in fetch (receipts list function): ", JSON.stringify(e)) }        

    } while (nextPageToken)

    return file
}


async function _get_receipt(connector, id, credentials) {

    const handler_config = await connector.tab.config()
    const receipt_query = handler_config.receipt_query

    let credentials_ = credentials

    if (credentials_==undefined) {
        credentials_ = await connector.credentials()
    }

    if (credentials_==undefined) {
        connector.error("Credentials not provided")
        return {}
    }

    const access_token = credentials_.access_token,
        client_id = credentials_.client_id

    const graphql_url = handler_config.graphql_url

    if (!id) {
        connector.error("No id provided")
        return {}
    }

    try {
        let response = await fetch(graphql_url, {
                        method: 'POST',
                        headers: {
                            'client_id': client_id,
                            'authorization': "Bearer " + access_token,
                            'Content-Type': 'application/json; charset=utf-8'
                        },
                        body: receipt_query.replace('RECEIPT_ID', btoa(JSON.stringify(id)))
        })

        if (response.status!==200) { return connector.log("Non-zero fetch return code: ", response.statusText) }

        let response_parsed = await response.json()
        return response_parsed.data
    } catch (e) { connector.error("Error in fetch (receipt function): ", JSON.stringify(e)); return {} }

}