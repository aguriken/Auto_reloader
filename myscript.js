document.getElementsByName("reload")[0].value = 1;
document.getElementsByName('button')[0].onclick = function() {
  var reload = document.getElementsByName("reload")[0].value;
  chrome.tabs.executeScript(null,{code: "var foots = "+reload+";"});
  chrome.tabs.executeScript(null, {file: "start.js"});
}
document.getElementsByName('button')[1].onclick = function() {
  chrome.tabs.executeScript(null, {file: "stop.js"});
}
