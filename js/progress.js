//Declaration
const Year = document.getElementById("pY");
const Month = document.getElementById("pM");
const Day = document.getElementById("pD");
// const Week = document.getElementById("pW");

const Dates = document.getElementById("dates");
const Hrs = document.getElementById("hrs");

var month;

getdata();

function getdata() {
  var date = new Date();

  //Days elapsed since Jan 1st
  var start = new Date(date.getFullYear(), 0, 0);
  var diff = date - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  // console.log("Day of year: " + day);

  //Year
  var yy = date.getFullYear();
  // console.log(yy);

  //Check for Leap Year
  var year;
  if ((yy % 4 === 0 && yy % 100 > 0) || yy % 400 == 0) {
    year = 366;
  } else {
    year = 365;
  }
  // console.log(year);

  //Year Progress bar
  var perY = ((day * 100) / year).toFixed(2);
  Year.style.width = parseFloat(perY) + 4 + "%";
  Year.innerHTML = perY + "%";
  // console.log(perY);

  //Month Progress bar
  var dd = date.getDate();
  var mm = date.getMonth() + 1;
  month = new Date(yy, mm, 0).getDate();
  var perM = ((dd * 100) / month).toFixed(2);
  Month.style.width = perM-2 + "%";
  Month.innerHTML = perM + "%";
  // console.log(mm);

  //Week Progress bar
  // var dno = date.getDay() + 1;
  // var perW = Math.floor((1 * 100) / 7);
  // Week.style.width = perW + "%";
  // Week.innerHTML = perW + "%";
  // console.log(perW);

  //Day Progress bar
  var xh = date.getHours();
  var xm = date.getMinutes();
  var xmh = xh * 60;
  var xmm = xmh + xm;
  var perD = ((xmm * 100) / 1440).toFixed(2);
  Day.style.width = perD-4 + "%";
  Day.innerHTML = perD + "%";
  // console.log(perD);
}
setInterval(getdata, 20000);

//Display Month No.
for (var i = 1; i <= month; i++) {
  Dates.innerHTML += `<p>` + i + `</p>`;
}

//Display Day No.
for (var n = 1; n <= 24; n++) {
  Hrs.innerHTML += `<p>` + n + `</p>`;
}
