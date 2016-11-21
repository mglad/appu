var StatusCodeService = {
    init: function() {
        this.status_codes = {};
        chrome.webRequest.onHeadersReceived.addListener(function(details) {
            if (details.method == "GET" && details.type == "main_frame") {
                StatusCodeService.setStatusCode(details.tabId, details.statusCode);
            }
        }, {
            "urls": ["<all_urls>"]
        }, ["blocking", "responseHeaders"]);
    },
    setStatusCode: function(tab_id, status_code) {
        if (!this.status_codes[tab_id])
            this.status_codes[tab_id] = [];
        this.status_codes[tab_id].push(status_code);
    },
    resetStatusCodes: function() {
        this.status_codes = {};
    },
    hasRedirected: function() {
        var redirect = false;
        for (tab_id in this.status_codes) {
            if (this.status_codes[tab_id].indexOf(301) !== -1 || this.status_codes[tab_id].indexOf(302) !== -1)
                redirect = true;
        }

        return redirect;
    }
};
