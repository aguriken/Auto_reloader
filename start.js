localStorage["start"] = 1;
console.log("スタート");
var n = 1;

var timer1 = setInterval("reload()",foots * 10000);

function reload() {
  if ( localStorage["start"] == 1 ) {
  	c = document.getElementsByClassName('_1rp5252');

    for (var i = 0; i<c.length; i=i+2) {
      c[i].click();
      console.log(n+"リロード");
      n++;
      };
   } else {
    clearInterval(timer1);
   }
}
