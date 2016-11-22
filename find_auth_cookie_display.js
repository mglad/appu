var FindAuthCookieDiplay = {
    init: function() {
        chrome.tabs.create({
            url: "auth_cookie_results.html"
        });
    },
    isLoading: function(loading, data) {
        chrome.extension.sendMessage("", {
            "type": "auth_cookie_results",
            "category": "loading",
            "isLoading": loading,
            "data": data
        });
    }
};
