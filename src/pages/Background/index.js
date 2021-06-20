import { print } from "../Content/modules/print";
import { active_icons, inactive_icons } from "../icon_config";

try {
    chrome.tabs.onActivated.addListener(() => { getActivatedTab() });

    const getActivatedTab = () => {
        chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function (tabs) {
            try {
                if (tabs[0] !== undefined && tabs[0].url) {
                    const url = tabs[0].url;
                    const id = tabs[0].id;
                    if (url.match("https://leetcode.com/*")) {
                        chrome.action.setPopup({ tabId: id, popup: "popup.html" })
                        chrome.action.setIcon({ tabId: id, path: active_icons }, (r) => { print(r) })
                    }
                    else {
                        chrome.action.setPopup({ tabId: id, popup: "inactive.html" })
                        chrome.action.setIcon({ tabId: id, path: inactive_icons }, (r) => { print(r) })
                    }
                }
            }
            catch (err) {
                // print(err)
                setTimeout(function () {
                    getActivatedTab();
                    print("hello")
                }, 100);


            }
        })
    }

} catch (error) {
    console.log(error);
}
