let sApi = `https://chiragchrg.github.io/data.json`;
// let sApi = `../js/data.json`;

const SearchIn = document.getElementById("sValue");
const BoxImgS = document.getElementsByClassName("stoday")[0];
const TitleS = document.getElementById("todayTitle");
const ImgS = document.getElementById("todayImg");
const InfoS = document.getElementById("todayInfo");
const SrcS = document.getElementById("todaySrc");
var query;
var day;
var month;
// console.log(SearchIn.value);

// I didnt know PHP back then,
// so i used COOKIES to store and transfer values
// from one html page to another...
// Now i know PHP so will make the changes soon
function setCookie(sname, svalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = sname + "=" + svalue + ";" + expires + ";path=/";
  getc();
}

function getCookie(sname) {
  var name = sname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setValue() {
  var sKey = SearchIn.value;
  if (sKey != null && sKey != "") {
    setCookie("query", sKey, 5);
    // console.log(sKey);
  } else {
    alert("Enter a Valid Date\nEg: Oct 24 ");
  }

  var sKey = getCookie("query");
  getc();
}

// window.onload = function () {
//   var sKey = getCookie("query");
//   getc();
// };

function getc() {
  // setValue();
  var sKey = getCookie("query");
  if (sKey != "") {
    var query = sKey;
  }

  var xInt = query.split(" ");
  var f = xInt[0];
  var s = parseInt(xInt[1]);
  var nan = Number.isInteger(s);

  if (nan) {
    var day = s;
    var month = f.toLowerCase();
    if (month == "jan") month = 1;
    else if (month == "feb") month = 2;
    else if (month == "mar") month = 3;
    else if (month == "apr") month = 4;
    else if (month == "may") month = 5;
    else if (month == "jun") month = 6;
    else if (month == "jul") month = 7;
    else if (month == "aug") month = 8;
    else if (month == "sep") month = 9;
    else if (month == "oct") month = 10;
    else if (month == "nov") month = 11;
    else if (month == "dec") month = 12;

    // var monthx = 4;
    searchData();
  }

  // Search By Date
  async function searchData() {
    let x = await fetch(sApi);
    let data = await x.json();
    //   console.log(data[0]);
    console.log("Date");

    if (x.ok) {
      return data;
    }
  }

  searchData()
    .then((sData) => {
      console.log(sData[month][day]);
      var dataX = sData[month][day];
      xData = dataX[0];
    })
    .then(() => {
      SearchIn.placeholder = query;
      SearchIn.value = "";
      TitleS.innerHTML = xData.title;
      ImgS.innerHTML = `<img src="${xData.img}" alt="${xData.title}"/>`;
      BoxImgS.style.backgroundImage = `url("${xData.img}")`;
      InfoS.innerHTML = xData.info;
      SrcS.innerHTML = `<li><a href="${xData.source}" target="_blank">Source</a></li>`;
    })
    .catch(() => {
      alert("Enter the Imput in a Valid Format!\nMMM [SPACE] dd \nEg: Oct 24");
    });

  // Search By Event Name

  //   async function searchEvent() {
  //     let x = await fetch(sApi);
  //     let info = await x.json();
  //     console.log("Event");

  //     if (x.ok) {
  //       return info;
  //     }
  //   }
  //   searchEvent().then(sInfo => {
  //     console.log(sInfo[0][month][0][day].title);
  //   });
  //   console.log(query);
}
