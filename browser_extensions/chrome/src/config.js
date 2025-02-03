const ver = chrome.runtime.getManifest().version

const extensionIds = {
    PROD: "kjnoihdmllddkmfhikjlkbfcdcmghhji",
    TEST: "pnihdnfihhdebokploanalnebmobpefd", 
    BETA: "gngjbmkffdaopddhghcdlbdbieildnkd"
}

const config_files = {
    TEST: "https://storage.googleapis.com/myshopdash/p/dev_extension_conf.json" ,
    BETA: "https://storage.googleapis.com/myshopdash/p/dev_extension_conf.json",
    PROD: "https://storage.googleapis.com/myshopdash/p/extension_conf.json"
}

const ENV = Object.entries(extensionIds).filter((k)=> k[1]===chrome.runtime.id)[0][0]

export default {

    currentExtensionId: chrome.runtime.id,
    extensionId: chrome.runtime.id,
    env: ENV,
    extensionIds: {
        PROD: "kjnoihdmllddkmfhikjlkbfcdcmghhji",
        TEST: "pnihdnfihhdebokploanalnebmobpefd", 
        BETA: "gngjbmkffdaopddhghcdlbdbieildnkd"
    },
    ver: ver,
    msdExtensionVer: ver,
    config_url: config_files[ENV]
    
}