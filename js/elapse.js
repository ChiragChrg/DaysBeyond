// Import Days from Progress
// import { day, yy } from "./progress.js";

const Days = document.getElementById("days");
const Hour = document.getElementById("hour");
const Min = document.getElementById("min");
const Sec = document.getElementById("sec");
const Year = document.getElementById("year");

function elapse() {
  var date = new Date();

  //Year
  var yy = date.getFullYear();

  //Days elapsed since Jan 1st
  var start = new Date(date.getFullYear(), 0, 0);
  var diff = date - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);

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

  Days.innerHTML =
    day + `<span style="font-size: 18px; font-weight: 500;"> Days</span>`;
  Hour.innerHTML =
    Hrs + `<span style="font-size: 18px; font-weight: 500;"> Hours</span>`;
  Min.innerHTML =
    Mns + `<span style="font-size: 18px; font-weight: 500;"> Minutes</span>`;
  Sec.innerHTML =
    Snd + `<span style="font-size: 18px; font-weight: 500;"> Seconds</span>`;
  Year.innerHTML = "since 1st Jan " + yy;
}
setInterval(elapse, 1000);
