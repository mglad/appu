var FindAuthCookieDiplay = {
    init: function() {
        //Creates new tab to display the results of the test
        chrome.tabs.create({
            url: "auth_cookie_results.html"
        });
    },
    //Sends a message to the results tab with whether the operation is complete\
    //and data to display
    isLoading: function(loading, data) {
        chrome.extension.sendMessage("", {
            "type": "auth_cookie_results",
            "category": "loading",
            "isLoading": loading,
            "data": data
        });
    }
};
