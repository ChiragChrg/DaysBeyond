const UDay = document.querySelector("#DD");
const UMonth = document.querySelector("#MM");
const UYear = document.querySelector("#YY");
const Hours = document.querySelector("#hrs");
const Mins = document.querySelector("#min");
const CheckTime = document.querySelector("#tCheck");
const Time = document.querySelector(".time");
const Submit = document.querySelector("#submit");
const Reset = document.querySelector("#reset");
const PM = document.querySelector("#PM");
// const AM = document.querySelector("#AM");

// Display Variables init
const DisYear = document.querySelector("#year");
const DisMonth = document.querySelector("#month");
const DisDay = document.querySelector("#day");
const DisHour = document.querySelector("#hour");
const DisMin = document.querySelector("#minute");
const DisSec = document.querySelector("#second");

function timeCheck() {
  if (CheckTime.checked) {
    Time.style.display = "block";
  } else {
    Time.style.display = "none";
  }
}

// Global Time
const gdate = new Date();
var yearG = gdate.getFullYear();

function getAge() {
  // var day = parseInt(UDay.value);
  // var month = parseInt(UMonth.value);
  // var year = parseInt(UYear.value);
  // var hrs = parseInt(Hours.value);
  // var min = parseInt(Mins.value);

  var day = 3;
  var month = 5;
  var year = 2001;
  var hrs = 7;
  var min = 35;

  //   Finding Invalid Entries
  if (day > 31) {
    alert("DAY cant be greater than 31..");
    var error = true;
  }
  if (month > 12) {
    alert("MONTH cant be greater than 12..");
    var error = true;
  }
  if (year > yearG) {
    alert(
      "YEAR cant be greater than " + yearG + ".. \nAre you from Future? XD"
    );
    var error = true;
  }

  if (!day || !month || !year) {
    alert("Enter the required Day, Month, Year !");
    var error = true;
  }

  if (CheckTime.checked) {
    // Convert to PM
    if (PM.checked) {
      var hrs = hrs + 12;
    }
    if (hrs > 24) {
      alert("Invalid Hours!");
      var error = true;
    }

    if (min > 60) {
      alert("Invalid Minutes!");
      var error = true;
    }
  }

  if (!error) {
    calcAge({ day, month, year, hrs, min });
  }

  Submit.style.display = "none";

  console.log(day, month, year, hrs, min);
}

Reset.addEventListener("click", function () {
  Submit.style.display = "block";
});

// function Age(ageData) {
//   clearInterval(calcAge);

// calcAge();

function calcAge(ageData) {
  const xdate = new Date();
  // var yearD = 2021;
  var yearD = xdate.getFullYear();
  var monthD = xdate.getMonth();
  // var dayD = xdate.getDate();
  var hrsD = xdate.getHours();
  var minD = xdate.getMinutes();
  var secD = xdate.getSeconds();
  console.log(secD);

  // Year
  var fYear = Math.abs(ageData.year - yearD);
  if (ageData.month >= monthD) {
    //if Bday month not yet reached
    fYear--;
  }
  console.log("No. of Years: " + fYear);

  // Month
  var fMonth = fYear * 12;
  console.log("No. of Months: " + fMonth);

  // Day
  //Days elapsed since Jan 1st of current Year
  var start = new Date(xdate.getFullYear(), 0, 0);
  var diff = xdate - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  console.log("Since 1st Jan: " + day);

  var fDays = 0;
  for (let i = ageData.year; i < yearD; i++) {
    //Check for Leap Year
    var leap;
    if ((i % 4 === 0 && i % 100 > 0) || i % 400 == 0) {
      leap = 366;
    } else {
      leap = 365;
    }
    // console.log("\nLeap: " + leap);

    fDays = fDays + leap;
    // console.log("Days acc to Leap: " + fDays);
  }

  fDays = fDays + day;
  console.log("Total Days: " + fDays);

  // Hours
  var fHours = fDays * 24 + hrsD;

  // Minutes
  var fMins = fHours * 60 + minD;

  // Seconds
  var fSec = fMins * 60 + secD;

  // Final
  var sYear = numeral(fYear).format("0,0");
  var sMonth = numeral(fMonth).format("0,0");
  var sDay = numeral(fDays).format("0,0");
  var sHour = numeral(fHours).format("0,0");
  var sMin = numeral(fMins).format("0,0");
  var sSec = numeral(fSec).format("0,0");

  console.log(
    "\nYears: " +
      sYear +
      "\nMonths: " +
      sMonth +
      "\nDays: " +
      sDay +
      "\nHours: " +
      sHour +
      "\nMinutes: " +
      sMin +
      "\nSeconds: " +
      sSec
  );

  disAge();
}

// }

function disAge() {
  // setInterval(calcAge, 1000);

  DisYear.innerHTML = sYear;
  DisMonth.innerHTML = sMonth;
  DisDay.innerHTML = sDay;
  DisHour.innerHTML = sHour;
  DisMin.innerHTML = sMin;
  DisSec.innerHTML = sSec;

  console.log(sYear);
}
