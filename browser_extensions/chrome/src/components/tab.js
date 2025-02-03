// tab class/object constructor

import IBox from "./ibox.js"
import connectorPrototype from "./connectorPrototype.js"

export default async function tab(App, chrome_tab) { // tab is this application tab object (class, context), chrome_tab - chrome tab object returned by chrome.tabs api

    const tab_object = Object.create(tabPrototype(App)) 
    tab_object.chrome_tab = chrome_tab

    tab_object.connector = Object.assign(Object.create(connectorPrototype(tab_object)), return_connector(App, chrome_tab.url)(tab_object))

    return tab_object

}


function return_connector(App, url) { // what handler/connector to be used for the given url

    let connector = (App.connectors.filter(
        (el)=>{ 
            return el().url_match_pattern?.filter(

                (val)=>{
                    const url_parser = /(.*)\:\/\/(.*)\/(.*)/g

                    const elements = url_parser.exec(val)

                    const protocol = elements[1], hostname = elements[2], pathname = elements[3]

                    const pattern = new URLPattern({ hostname, protocol, pathname })

                    return pattern.test(url)
                }
            
            ).length>0
    }))[0]
    
    if (!connector) { 
        connector = ()=>{}
        App.error("There was issue with the tab-url matching. No connector for the page is found. Url: ", JSON.stringify(url)) 
    } 

    return connector
}


function tabPrototype(App) {

    return {

        tab: this,
        app: App,
        cache: new WeakMap(),

        error() { App.error(...arguments) },
        log() { App.log(...arguments) },

        async config() {

            if (this.cache.has({key: "tab_config"})) { 
                return this.cache.get("tab_config")
            } else {
                const global_config = await this.app.config()
                this.cache.set({key: "tab_config"}, JSON.parse(global_config[this.connector.id].config))
                return JSON.parse(global_config[this.connector.id].config)
            }

        }
        ,
        get data() {

            const tab=this

            return {
                async set(obj) {

                    await App.data.set({[tab.chrome_tab.id.toString()]: { [tab.connector.id]: obj }})

                },
                async get(key) {

                    return (await App.data.get(tab.chrome_tab.id.toString()))[tab.connector.id][key]

                }
            }
        }
        ,
        async init() {
            await this.ibox.init()
            await this.connector.init()

            return 
        }
        ,
        get ibox() {

            return IBox(this)

        }
        ,
        async download() {

            this.log("download method called")

            await this.ibox.state("button2InProcess")

            if (await this.data.get("download")) {

                await json_download(this)
                
            } else {
                this.error("No data in storage to download")
            }

            await this.ibox.state("button2Reset")

            return
        }
        ,
        async upload() {

            await this.ibox.state("dashboardStart")

            await handover_to_dashboard(this)

            await this.ibox.state("dashboardStarted")

            return 

        }
        ,
        async onMessage(message) { 
            
            if (message.sender=="ibox") {
    
                switch (message.content) {
                    case "iboxEvent:click": await this.connector.onClick(1); break
                    case "iboxEvent:button1click": await this.connector.onClick(2); break
                    case "iboxEvent:button2click": await this.connector.onClick(3); break
                    case "iboxEvent:start": await this.init(); break
                    case "iboxEvent:close": await this.connector.onClick(4); break
                }
            }
    
            if (message.sender=="injection") {
                
                await this.connector.onMessage(message)
            
            }

            // TODO: create a listener for the message from the downloader.js

            return 
        }
        ,
        close() {
            
            this.connector.close()

            return 
        }
    }
}


async function json_download(Tab) {

    const handler_id = Tab.connector.id
    await chrome.tabs.create({ url: "./downloader.html?id="+handler_id+"&tab="+Tab.chrome_tab.id, active: false });

    return true
}


async function handover_to_dashboard(Tab) {

    const hook_id = await uploader(Tab)

    if (hook_id) { 
        await launch_dashboard(hook_id, Tab)
    } else { 
        Tab.error("Error: MSD POST upload unsuccessful")
    }

    return true
}


async function uploader(Tab) {

    const handler_id = Tab.connector.id.toLowerCase()
    const data_to_upload = await Tab.data.get("download")
    // add attributes to the file here:

    if (!data_to_upload) {
        Tab.error("Error: No data to upload")
        return 
    }

    const content = JSON.stringify(data_to_upload) 
    const upload_url = (await Tab.app.config()).upload_url

    const formdata = new FormData()
    formdata.append("content", content)
    formdata.append("brand", handler_id)

    try {
        // create fetch which upload the content to a server and returns hook_id

        const res = await fetch(upload_url, {
            method: 'POST',
            headers: {},
            body: formdata
        })

        if (res.status!=200) {

            Tab.error("Error: MSD POST upload unsuccessful "+res.status+res.statusText)

        } else {

            const hook_id = await res.text()
            Tab.log("hook_id: ", hook_id)

            return hook_id
        }
    } catch (e) {
        Tab.error("Error: MSD POST fetch upload unsuccessful "+e)
        return 
    }
} 

async function launch_dashboard(hook_id, Tab) {
  
    const handler_id = await Tab.connector.id
    const url = (await Tab.app.config()).domain + `/?hook=${hook_id}&brand=${handler_id.toLowerCase()}`

    // Open a new tab
    await chrome.tabs.create({ url: url });

    return "ok"
}

