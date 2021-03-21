//Declaration
const Ptime = document.getElementById("time");

function realTime() {
  var date = new Date();
  //   var date = d.toLocaleString();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);

  Ptime.innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(realTime, 1000);
  //   console.log(date);
}

// Make double digits
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
