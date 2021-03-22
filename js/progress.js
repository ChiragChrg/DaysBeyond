//Declaration
const Pdate = document.getElementById("date");
const Year = document.getElementById("pY");
const Month = document.getElementById("pM");
const Day = document.getElementById("pD");
// const Week = document.getElementById("pW");

const Dates = document.getElementById("dates");
const Hrs = document.getElementById("hrs");

//Today
var date = new Date();
var tdate = date.toDateString();
Pdate.innerHTML = tdate;
//Days elapsed since Jan 1st
var start = new Date(date.getFullYear(), 0, 0);
var diff = date - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
console.log("Day of year: " + day);

//Year
var yy = date.getFullYear();
console.log(yy);

//Check for Leap Year
var year;
if ((yy % 4 === 0 && yy % 100 > 0) || yy % 400 == 0) {
  year = 366;
} else {
  year = 365;
}
console.log(year);

//Year Progress bar
var perY = Math.floor((day * 100) / year);
Year.style.width = perY + "%";
Year.innerHTML = perY + "%";
console.log(perY);

//Month Progress bar
var dd = date.getDate();
var mm = date.getMonth() + 1;
var month = new Date(yy, mm, 0).getDate();
var perM = Math.floor((dd * 100) / month);
Month.style.width = perM + "%";
Month.innerHTML = perM + "%";
console.log(perM);

for (var i = 1; i <= month; i++) {
  Dates.innerHTML += `<p>` + i + `</p>`;
}

//Week Progress bar
// var dno = date.getDay() + 1;
// var perW = Math.floor((1 * 100) / 7);
// Week.style.width = perW + "%";
// Week.innerHTML = perW + "%";
// console.log(perW);

//Day Progress bar
var hh = date.getHours();
var perD = Math.floor((hh * 100) / 24);
Day.style.width = perD + "%";
Day.innerHTML = perD + "%";
console.log(perD);

for (var n = 1; n <= 24; n++) {
  Hrs.innerHTML += `<p>` + n + `</p>`;
}

export { day, yy };
