document.getElementsByName("reload")[0].value = 1;
var radios = document.getElementById("demoForm");
document.getElementsByName('button')[0].onclick = function() {
  function getRadioVal(form, name) {
    var val;
    // get list of radio buttons with specified name
    var radios = form.elements[name];
    
    // loop through list of radio buttons
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    return val; // return value of checked radio or undefined if none checked
  }
  var reload = document.getElementsByName("reload")[0].value;
  var radio = getRadioVal(radios, 'feature');
  chrome.tabs.executeScript(null,{code: `var foots = ${reload}`});
  chrome.tabs.executeScript(null,{code: `var radio = ('${radio}')`});
  chrome.tabs.executeScript(null, {file: "start.js"});
}
document.getElementsByName('button')[1].onclick = function() {
  chrome.tabs.executeScript(null, {file: "stop.js"});
}
