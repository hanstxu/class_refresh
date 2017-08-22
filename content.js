// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.text === 'report_back') {
    var enrl_mtng_info = document.getElementById("enrl_mtng_info");
    var info_table = enrl_mtng_info.firstElementChild.nextElementSibling;
    var enrollment_status = info_table.firstElementChild.firstElementChild;
    var check_string = enrollment_status.innerHTML.substring(0,4);
    sendResponse(check_string);
  }
});