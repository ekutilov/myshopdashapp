let searchParams = new URLSearchParams(window.location.search);
let id = searchParams.get('id'),
 tabid = searchParams.get('tab')

if (id) {

    chrome.storage.session.get(tabid).then(
            r=>r[tabid][id]["download"]
        ).then(
            async (r) => {

                if (r) {
                    // TODO: pre-process the data 

                    let blob = new Blob([JSON.stringify(r)], {type: 'application/json'})

                    let url = URL.createObjectURL(blob);

                    chrome.downloads.download({
                        url: url,
                        filename: id+"_receipts.json",
                    }, async function(downloadId) {

                        await chrome.runtime.sendMessage({sender: "downloadScript", tab: tabid, status: "completed"});
                        console.log("message sent to background script")
                        
                        window.close()
                    })
                }
            }
        )

} else {
    console.log("Issue: no id")
    window.close()
}