let sApi = `https://chiragchrg.github.io/data.json`;

const SearchIn = document.getElementById("sValue");

const TitleS = document.getElementById("todayTitle");
const ImgS = document.getElementById("todayImg");
const BoxImgS = document.getElementsByClassName("stoday")[0];
const InfoS = document.getElementById("todayInfo");
const SrcS = document.getElementById("todaySrc");

var f;
var s;
var day;
var month;

// SearchIn.addEventListener("keypress", setQuery);
// function setQuery(evt) {
//   if (evt.keyCode == 13) {
//     var xValue = SearchIn.value;
//     var xInt = xValue.split(" ");
//     var f = xInt[0];
//     var s = parseInt(xInt[1]);
//     checkData();
//   }
// }

function checkData() {
  console.log("check start");
  var xValue = SearchIn.value;
  var xInt = xValue.split(" ");
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

    console.log(month);
    console.log(nan);
    console.log(xValue);
    // searchData();
  }
  // return month;
}

// function searchData() {

// var s = xInt[1];
// console.log(xInt[1]);
// console.log(s);

// window.onload = searchData();

function searchData() {
  //   let x = await fetch(sApi);
  //   let data = await x.json();
  //   //   console.log(data[0]);

  //   if (x.ok) {
  //     return data;
  //   }
  // }

  searchData()
    .then(sData => {
      console.log(sData[0][month]);
      var dataX = sData[0][month][0][day];
      xData = dataX[0];
    })
    .then(() => {
      TitleS.innerHTML = xData.title;
      ImgS.innerHTML = `<img src="${xData.img}" alt="${xData.title}"/>`;
      BoxImgS.style.backgroundImage = `url("${xData.img}")`;
      InfoS.innerHTML = xData.info;
      SrcS.innerHTML = `<li><a href="${xData.source}" target="_blank">Source</a></li>`;
    });
}
