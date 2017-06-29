/*chrome.alarms.onAlarm.addListener(function(alarm) {
  chrome.tabs.reload();
});
*/

chrome.alarms.onAlarm.addListener(function(alarm) {
  chrome.storage.local.get('TabID', function (result) {
    chrome.tabs.reload(result.TabID);
  });
});