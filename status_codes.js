var StatusCodeService = {
    //Initialize status code object and set listener
    init: function() {
        this.status_codes = {};
        //Listens for response headers to send status codes in the "main_frame"
        //and fromn the "GET" method to setStatusCode
        chrome.webRequest.onHeadersReceived.addListener(function(details) {
            if (details.method == "GET" && details.type == "main_frame") {
                StatusCodeService.setStatusCode(details.tabId, details.statusCode);
            }
        }, {
            "urls": ["<all_urls>"]
        }, ["blocking", "responseHeaders"]);
    },
    //Sets status code in this.status_codes object
    setStatusCode: function(tab_id, status_code) {
        if (!this.status_codes[tab_id])
            this.status_codes[tab_id] = [];
        this.status_codes[tab_id].push(status_code);
    },
    //Resets status_codes to an empty object
    resetStatusCodes: function() {
        this.status_codes = {};
    },
    //Returns true if 301, 302 ,or 303 exists within status_codes
    //Returns false otherwise
    hasRedirected: function() {
        for (tab_id in this.status_codes) {
            if (this.status_codes[tab_id].indexOf(301) !== -1 || this.status_codes[tab_id].indexOf(302) !== -1 || this.status_codes[tab_id].indexOf(303) !== -1)
                return true;
        }

        return false;
    }
};
