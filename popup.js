"use strict";

var refreshClock = {
  onHandler : function(e) {
    chrome.alarms.create("refreshAlarm", {
      delayInMinutes: 0,
      periodInMinutes: 0.1
    } );
    window.close();
  },

  offHandler : function(e) {
    chrome.alarms.clear("refreshAlarm");
    window.close();
  },

  setup: function() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.storage.local.set({'TabID':tabs[0].id});
	});
    var el = document.getElementById('refreshOn');
    el.addEventListener('click',  refreshClock.onHandler );
    var el = document.getElementById('refreshOff');
    el.addEventListener('click',  refreshClock.offHandler );
  }
};

document.addEventListener('DOMContentLoaded', function () {
  refreshClock.setup();
});