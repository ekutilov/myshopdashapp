import Tab from "./tab.js" // Tab object prototype and constructor // 
import connectors from "../connectors/connectors.js"
import local_config from "../config.js"


// IDE/environmental settings
const storage = chrome.storage.session, 
    persistent_storage = chrome.storage.local

// APP object - root execution context

export default {

    connectors,
    storage, persistent_storage,
    id: chrome.runtime.id,

    dataCache: new WeakMap(),

    async init() {
        
        // initiate/cache the configuration (TODO)
 
        // initiate the listeners
        // Messagaging service initialisation (incoming)
        chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => { await this.messageRouter(message, sender); sendResponse('ok'); })
        chrome.runtime.onMessageExternal.addListener(async (message, sender, sendResponse) => { await this.messageRouter(message, sender); sendResponse('ok'); })

        // Tab events listener: TODO - ? like onUpdated, onRemoved, onCreated

        this.log("App is initialised, env: ", (await this.config()).env)

        return
    }
    ,
    async messageRouter(message, sender) {

        this.log("Message to app received | message: ", JSON.stringify(message), " | sender: ", JSON.stringify(sender))

        // app root level messages are handled here 
        // let the MSD website to listen // detection is that the extension is installed
        // TODO: rewrite it in the same format as other incoming messages
        if (message.msdVerRequest) {
            await sendResponse({msdExtensionVer: this.config.msdExtensionVer});
        }

        if (message.sender=="downloadScript") {
            const tab_object = await chrome.tabs.get(Number(message.tab)) // download script is being opened in a new tab - but the (completed) message to be returned to the origin tab
            await (await this.tab(tab_object)).connector.onMessage(message)
            return
        }

        // tab-level messages are handled here
        const tab = await this.tab(sender.tab)
        await (tab).onMessage(message)

        return 
    }
    ,
    get data() {
        
        const App = this

        return {
            async set(args) {
                if (typeof args=="object") {
                    await App.storage.set(args)

                    for (let key in args) { 
                        App.dataCache.set({ key }, args[key])
                    }

                    return
                }
                else if (arguments.length==2&&typeof arguments[0]=="string") { // legacy API

                    await App.storage.set({ [arguments[0]] : arguments[1] })
                    App.dataCache.set({key: arguments[0]}, arguments[1])

                }

                return
            },
            async get(key) {

                if (App.dataCache.has({key: key})) return App.dataCache.get({key: key})

                return (await App.storage.get(key))[key]

            }
        }
    }
    ,
    async tab(chrome_tab) {
            return await Tab(this, chrome_tab)
    }
    ,
    async config() {

        let online_config = await this.__get_online_configuration(local_config.config_url)

        return { ...local_config, ...online_config }
    }
    ,
    log() {

        const date_formatted = new Date().toLocaleString()

        const stack_parser = /.*\/(.*:\d+:\d+)/
        const stack_parsed = (new Error().stack.split("\n")).map((el)=>{ return stack_parser.exec(el) }).filter((el)=>{ return el!=null }).map(el=>el[1]).join(' <- ')

        console.log(date_formatted, [...arguments].join(""), " ::: ",stack_parsed)

    }
    ,
    error() {

        this.log("ERROR! - " , ...arguments)

    }
    ,
    async __get_online_configuration(url) {

        let c = (await this.persistent_storage.get("online_config"))["online_config"]

        if (!c||c.fetch_ts<Date.now()-1000*60*60*24) {
 
            // fetch from server and cache it
            let response = await fetch(url)

            if (response.status!=200) { return this.error("Online config unavailable: ", response.statusText) }
            
            c = await response.json()
            this.log("Online config fetched: ", JSON.stringify(c))
            c.fetch_ts = Date.now()
            await this.persistent_storage.set({ online_config: c})

            return c

        } else { 
            return c 
        }
    }
}