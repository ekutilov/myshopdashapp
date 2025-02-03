export default function connectorPrototype(Tab) {

    return {
        tab: Tab,
        app: Tab.app,
        cache: new WeakMap(),
        async init(args) {
            return 
        }
        ,
        async pull(filter={}) { // download requested data
            Tab.error("Pull function is not defined in this connector")
            return {}
        }
        ,
        async page_is_authorised() {
            return true 
        }
        ,
        async credentials() {
            return {} 
        }
        ,
        async onMessage(message) { 

            return 
        }
        ,
        async onClick(n) { 
            switch (n) {
                case 1: await Tab.connector.pull(); break
                case 2: await Tab.upload(); break
                case 3: await Tab.download(); break
                case 4: await Tab.connector.close(); break
            }

            return 
        }
        ,
        async close() {

            Tab.ibox.close()
            return 

        }
        ,
        download_preprocessor(data) {
            return data
        }
        ,
        log() { Tab.log(...arguments) },
        error() { Tab.error(...arguments) }
    }

}