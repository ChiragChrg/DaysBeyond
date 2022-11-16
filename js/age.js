const UDay = document.querySelector("#DD");
const UMonth = document.querySelector("#MM");
const UYear = document.querySelector("#YY");
// const Hours = document.querySelector("#hrs");
// const Mins = document.querySelector("#min");
const CheckTime = document.querySelector("#tCheck");
const Time = document.querySelector(".time");
const Form = document.querySelector(".form");
const Submit = document.querySelector("#submit");
const Display = document.querySelector(".elapse");
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

  // var day = 3;
  // var month = 10;
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
    Reset.style.display = "block";

    var xdate = new Date();
    // var usrDt = new Date(year, month, day);

    var yearD = xdate.getFullYear();
    var monthD = xdate.getMonth() + 1;
    var dayD = xdate.getDate();

    // var fYY = usrDt.getFullYear();
    // var fMM = usrDt.getMonth();
    // var fDD = usrDt.getDate();

    var fYear = 0;
    var fMonth = 0;
    var fDays = 0;
    // var countY = 0;
    // var countM = 0;
    // var countD = 0;

    for (let i = year; i <= yearD; i++) {
      //   console.log("Year: " + i);
      //Check for Leap Year
      var leap;
      if ((i % 4 === 0 && i % 100 > 0) || i % 400 == 0) {
        leap = 366;
      } else {
        leap = 365;
      }
      //   console.log(leap);

      var NoM = 12;
      for (let j = month; j <= NoM; j++) {
        // console.log("Month: " + j);
        if (i == yearD) {
          if (j < monthD) {
            NoM = monthD;
          }
        }
        var NoD;
        if (j == 1) NoD = 31;
        j == 2 && leap == 366 ? (NoD = 29) : (NoD = 28);
        if (j == 3) NoD = 31;
        if (j == 4) NoD = 30;
        if (j == 5) NoD = 31;
        if (j == 6) NoD = 30;
        if (j == 7) NoD = 31;
        if (j == 8) NoD = 31;
        if (j == 9) NoD = 30;
        if (j == 10) NoD = 31;
        if (j == 11) NoD = 30;
        if (j == 12) NoD = 31;

        for (let k = day; k <= NoD; k++) {
          //   console.log("Day: " + k);
          if (i == yearD && j == monthD && k < dayD) {
            NoD = dayD;
          }

          fDays = fDays + 1;
        }
        day = 1;
        fMonth = fMonth + 1;
      }
      month = 1;
      fYear = fYear + 1;
    }
    // console.log("xtraDays :" + countD);

    // var fHours = 0;
    // var fMins = 0;
    // var fSec = 0;

    // Final

    function reptime() {
      var xtime = new Date();
      var hrsD = xtime.getHours();
      var minD = xtime.getMinutes();
      var secD = xtime.getSeconds();
      //Hours
      var h = fDays * 24;
      var fHours = h + hrsD;

      //Minutes
      var m = fHours * 60;
      var fMins = m + minD;

      //Seconds
      var s = fMins * 60;
      var fSec = s + secD;

      var sYear = numeral(fYear - 1).format("0,0");
      var sMonth = numeral(fMonth).format("0,0");
      var sDay = numeral(fDays).format("0,0");
      var sHour = numeral(fHours).format("0,0");
      var sMin = numeral(fMins).format("0,0");
      var sSec = numeral(fSec).format("0,0");

      //   console.log(
      //     "\nYears: " +
      //       sYear +
      //       "\nMonths: " +
      //       sMonth +
      //       "\nDays: " +
      //       sDay +
      //       "\nHours: " +
      //       sHour +
      //       "\nMinutes: " +
      //       sMin +
      //       "\nSeconds: " +
      //       sSec
      //   );

      disAge();

      function disAge() {
        // console.log("Display ON");
        DisYear.innerHTML =
          sYear +
          `<span style="font-size: 16px; font-weight: 500;"> Years</span>`;
        DisMonth.innerHTML =
          sMonth +
          `<span style="font-size: 16px; font-weight: 500;"> Months</span>`;
        DisDay.innerHTML =
          sDay +
          `<span style="font-size: 16px; font-weight: 500;"> Days</span>`;
        DisHour.innerHTML =
          sHour +
          `<span style="font-size: 16px; font-weight: 500;"> Hours</span>`;
        DisMin.innerHTML =
          sMin +
          `<span style="font-size: 16px; font-weight: 500;"> Minutes</span>`;
        DisSec.innerHTML =
          sSec +
          `<span style="font-size: 16px; font-weight: 500;"> Seconds</span>`;
        // console.log(sYear);
      }
    }
    setInterval(reptime, 1000);
  }

  Reset.addEventListener("click", function () {
    window.location.href = "age.html";
  });
}
