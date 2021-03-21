//Declaration
const Progress = document.getElementById("pbar");
const Pdate = document.getElementById("date");

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
var bar = Math.floor((day * 100) / year);
Progress.style.width = bar + "%";
Progress.innerHTML = bar + "%";
console.log(bar);

export { day, yy };
