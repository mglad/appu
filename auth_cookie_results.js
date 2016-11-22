var loading = {
  set: function(message) {
    if(message.isLoading) {
      $("#loading").show();
      $("#results").hide();
    } else {
      $("#loading").hide();
      $("#results").show();

      for(var i in message.data.cookie_sets) {
        $('#cookie-list').append("<li>" + message.data.cookie_sets[i][0] + "</li>");
      }
      
      $("#page-reloads").text(message.data.page_reloads);
      $("#website-name").text(message.data.url);
    }
  }
}

$(document).ready(function() {
  loading.set({isLoading: true});
});

chrome.extension.onMessage.addListener(function(message, sender, send_response) {
    if (message.type == "auth_cookie_results") {
      if(message.category == "loading") {
        loading.set(message);
      }
    }
});
