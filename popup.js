
function disable(minutes) {
    console.log("Disabling for: " + minutes);
    message = {};
    message.type = "statuschange";
    message.status = "disable";
    message.minutes = minutes;
    chrome.extension.sendMessage("", message, function() {});
    return false;
}

function enable() {
    console.log("Enabling extension");
    message = {};
    message.type = "statuschange";
    message.status = "enable";
    chrome.extension.sendMessage("", message, function() {});
    return false;
}

function openTab(url) {
    chrome.tabs.create({ url: url });
    window.close();
}

function report() {
    console.log("Reporting");
    openTab(chrome.extension.getURL('report.html'));
    return false;
}

function options() {
    console.log("Options");
    openTab(chrome.extension.getURL('options.html'));
    return false;
}

function about() {
    console.log("About");
    openTab(chrome.extension.getURL('about.html'));
    return false;
}

function click_handler_new() {
    console.log("I am here");
}

document.addEventListener('DOMContentLoaded', function () {
    $("#disable60").bind("click", function() { disable(60);});
    $("#disable180").bind("click", function() { setTimeout( function() { disable(180);} , 1); });
    $("#enable").bind("click", function() { setTimeout( function() { enable();} , 1); });
    $("#report").bind("click", function() { setTimeout( function() { report();} , 1); });
    $("#options").bind("click", function() { setTimeout( function() { options();} , 1); });
    $("#about").bind("click", function() { setTimeout( function() { about();} , 1); });
});
