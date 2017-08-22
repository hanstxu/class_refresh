function notify(matched) {
  if (matched) {
    chrome.notifications.create(
      'open_class',
      {
        type: 'basic',
        iconUrl: 'icon128.png',
        title: "Class is now open!",
        message: "Hurry up and sign up!"
      },
      function() {}
    );
  }
  else {
    chrome.notifications.clear(
      'open_class',
      function() {}
    );
  }
}

chrome.alarms.onAlarm.addListener(function(alarm) {
  chrome.storage.local.get('TabID', function (result) {
    chrome.tabs.reload(result.TabID);
    chrome.tabs.sendMessage(result.TabID, {text: 'report_back'}, notify);
  });
});