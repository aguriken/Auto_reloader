localStorage["start"] = 1;
console.log("スタート");
var n = 1;
console.log(radio)
console.log(typeof radio)
console.log(foots)
console.log(typeof foots)

if (radio == "airbnb") {
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
} else {
  alert("正しいアプリケーションを設定して下さい")
  localStorage["start"] = 0;
  console.log("停止");
};