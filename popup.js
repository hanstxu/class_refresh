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
    var e = document.getElementById('refreshOn');
    e.addEventListener('click',  refreshClock.onHandler );
    var e = document.getElementById('refreshOff');
    e.addEventListener('click',  refreshClock.offHandler );
  }
};

document.addEventListener('DOMContentLoaded', function () {
    refreshClock.setup();
});