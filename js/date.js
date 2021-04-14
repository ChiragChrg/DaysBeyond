//Declaration
const Pdate = document.getElementById("date");
const Ptime = document.getElementById("time");

function realTime() {
  var date = new Date();

  var tdate = date.toDateString();
  Pdate.innerHTML = tdate;
  //   var date = d.toLocaleString();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  t = "AM";

  if (h > 12) {
    h = h - 12;
    t = "PM";
  }

  Ptime.innerHTML = h + ":" + m + ":" + s + " " + t;
  // var t = setTimeout(realTime, 1000);
  //   console.log(date);
}
setInterval(realTime, 1000);

// Make double digits
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
