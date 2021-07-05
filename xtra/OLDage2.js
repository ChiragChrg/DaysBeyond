const UDay = document.querySelector("#DD");
const UMonth = document.querySelector("#MM");
const UYear = document.querySelector("#YY");
// const Hours = document.querySelector("#hrs");
// const Mins = document.querySelector("#min");
const CheckTime = document.querySelector("#tCheck");
const Time = document.querySelector(".time");
const Form = document.querySelector(".form");
const Submit = document.querySelector("#submit");
const Display = document.querySelector(".ageInfo");
const Reset = document.querySelector("#freset");
// const PM = document.querySelector("#PM");
// const AM = document.querySelector("#AM");

// Display Variables init
const DisYear = document.querySelector("#year");
const DisMonth = document.querySelector("#month");
const DisDay = document.querySelector("#day");
const DisHour = document.querySelector("#hour");
const DisMin = document.querySelector("#minute");
const DisSec = document.querySelector("#second");

// function timeCheck() {
//   if (CheckTime.checked) {
//     Time.style.display = "block";
//   } else {
//     Time.style.display = "none";
//   }
// }

// Global Time
const gdate = new Date();
var yearG = gdate.getFullYear();

function getAge() {
  var day = parseInt(UDay.value);
  var month = parseInt(UMonth.value);
  var year = parseInt(UYear.value);
  // var hrs = parseInt(Hours.value);
  // var min = parseInt(Mins.value);

  // var day = 1;
  // var month = 6;
  // var year = 2001;
  // var hrs = 10;
  // var min = 2;

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

  // if (CheckTime.checked) {
  //   // Convert to PM
  //   if (PM.checked) {
  //     var hrs = hrs + 12;
  //   }
  //   if (hrs > 24) {
  //     alert("Invalid Hours!");
  //     var error = true;
  //   }

  //   if (min > 60) {
  //     alert("Invalid Minutes!");
  //     var error = true;
  //   }
  // }

  if (!error) {
    Submit.style.display = "none";
    calcAge({ day, month, year });
  }
  //   console.log(day, month, year, hrs, min);

  function calcAge() {
    if (error) return;
    Form.style.display = "none";
    Display.style.display = "block";

    var xdate = new Date();
    var usrDt = new Date(year, month, day);

    var yearD = xdate.getFullYear();
    var monthD = xdate.getMonth() + 1;
    var dayD = xdate.getDate();
    var hrsD = xdate.getHours();
    var minD = xdate.getMinutes();
    var secD = xdate.getSeconds();

    var fYY = usrDt.getFullYear();
    var fMM = usrDt.getMonth();
    var fDD = usrDt.getDate();

    // Year
    var fYear = yearD - fYY;

    // If Birth date not yet reached
    if (fMM <= monthD) {
      if (fDD < dayD) {
        yearD--;
      }
    }

    // Month
    var fMonth = fYear * 12 + monthD;

    // Day
    var leap;
    var tmpDate = 0;
    for (let i = 0; i <= fYear; i++) {
      //Check for Leap Year
      if ((i % 4 === 0 && i % 100 > 0) || i % 400 == 0) {
        leap = 366;
      } else {
        leap = 365;
      }
      tmpDate = tmpDate + leap;
    }
    var fDays = tmpDate + dayD;
    // console.log(tmpDate);

    if (yearD == fYY) {
      fYear = 0;
      if (monthD == fMM) {
        fMonth = 0;
        fday = dayD - fDD;
        if (dayD == fDD) {
          fDays = 0;
        }
      }
    }

    //Hours
    var h = fDays * 24;
    var fHours = h + hrsD;

    //Minutes
    var m = fHours * 60;
    var fMins = m + minD;

    //Seconds
    var s = fMins * 60;
    var fSec = s + secD;

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

    function disAge() {
      DisYear.innerHTML = sYear + " Years";
      DisMonth.innerHTML = sMonth + " Months";
      DisDay.innerHTML = sDay + " Days";
      DisHour.innerHTML = sHour + " Hours";
      DisMin.innerHTML = sMin + " Minutes";
      DisSec.innerHTML = sSec + " Seconds";
      // console.log(sYear);
    }
  }
  var loop = setInterval(calcAge, 1000);

  Reset.addEventListener("click", function () {
    clearInterval(loop);
    window.location.reload();
  });
}
