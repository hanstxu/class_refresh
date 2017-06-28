chrome.alarms.onAlarm.addListener(function(alarm) {
  chrome.tabs.reload();
});