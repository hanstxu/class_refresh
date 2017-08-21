chrome.alarms.onAlarm.addListener(function(alarm) {
  chrome.storage.local.get('TabID', function (result) {
    //chrome.tabs.reload(result.TabID);
  });
});

function doStuffWithDom(domContent) {
  console.log('DOM content:\n' + domContent);
}

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, doStuffWithDom);
});