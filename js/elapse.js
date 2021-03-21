// Import Days from Progress
import { day, yy } from "./progress.js";

const Days = document.getElementById("days");
const Hour = document.getElementById("hour");
const Min = document.getElementById("min");
const Sec = document.getElementById("sec");
const Year = document.getElementById("year");

function elapse() {
  var date = new Date();

  //Hours
  var h = day * 24;
  var isH = date.getHours();
  var hh = h + isH;
  var Hrs = numeral(hh).format("0,0");

  //Minutes
  var m = hh * 60;
  var isM = date.getMinutes();
  var mm = m + isM;
  var Mns = numeral(mm).format("0,0");

  //Seconds
  var s = mm * 60;
  var isS = date.getSeconds();
  var ss = s + isS;
  var Snd = numeral(ss).format("0,0");

  Days.innerHTML = day + `<span style="font-size: 18px"> Days</span>`;
  Hour.innerHTML = Hrs + `<span style="font-size: 18px"> Hours</span>`;
  Min.innerHTML = Mns + `<span style="font-size: 18px"> Minutes</span>`;
  Sec.innerHTML = Snd + `<span style="font-size: 18px"> Seconds</span>`;
  Year.innerHTML = "Since 1st Jan " + yy;
}
setInterval(elapse, 1000);
