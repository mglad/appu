var loading = {
  //Sets test information on the webpage using jQuery
  set: function(message) {
    if(message.isLoading) {
      $("#loading").show();
      $("#results").hide();
    } else {
      $("#loading").hide();
      $("#results").show();
      $('#cookie-list').html("");

      for(var i in message.data.cookie_sets) {
        $('#cookie-list').append("<li>" + message.data.cookie_sets[i][0] + "</li>");
      }

      $("#page-reloads").text(message.data.page_reloads);
      $("#website-name").text(message.data.url);
      $("#cookie-total").text(message.data.cookie_total);
    }
  }
}

//Sets loading as true by default
$(document).ready(function() {
  loading.set({isLoading: true});
});

//Listens for messages from FindAuthCookieDiplay
chrome.extension.onMessage.addListener(function(message, sender, send_response) {
    if (message.type == "auth_cookie_results") {
      if(message.category == "loading") {
        loading.set(message);
      }
    }
});
