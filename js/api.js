// let api = `https://chiragchrg.github.io/data.json`;
// let apix = `https://chiragchrg.github.io/day.json`;
let api = `/js/data.json`;
let apix = `/js/day.json`;

const Title = document.getElementById("todayTitle");
const Img = document.getElementById("todayImg");
const BoxImg = document.getElementsByClassName("stoday")[0];
const Info = document.getElementById("todayInfo");
const Src = document.getElementById("todaySrc");

const DayTitle = document.getElementById("day");
const DayImg = document.getElementById("dayImg");
const DayBoxImg = document.getElementsByClassName("stoday")[1];
const DayInfo = document.getElementById("dayInfo");
const DaySrc = document.getElementById("daySrc");

// Fetch Date from the System
var date = new Date();
var month = date.getMonth();
var day = date.getDate();
var xDay = date.getDay();

// console.log(day);

// Run function on page load
window.onload = getxdata();
window.onload = getxday();

// Function to get today's Special date of the Month
async function getxdata() {
  let x = await fetch(api);
  let data = await x.json();
  // console.log(data[0][1]);

  if (x.ok) {
    return data;
  }
}

var dMain;
var dData;
getxdata()
  .then((Tdata) => {
    // var dData = Tdata[1][2];
    // var dData = Tdata[0][month][0][day];
    dMain = Tdata[month][day-1];
    // var dlen = dData.length;

    // dMain = dData[0];
    // console.log(Tdata);
    // console.log(dMain);
    // console.log(dData)
  })
  .then(() => {
    Title.innerHTML = dMain.title;
    Img.innerHTML = `<img src="${dMain.image}" alt="${dMain.title}"/>`;
    BoxImg.style.backgroundImage = `url("${dMain.image}")`;
    Info.innerHTML = dMain.info;
    Src.innerHTML = `<a href="${dMain.source}" target="_blank">Source</a>`;
  });

// Function to get today's special day of the week
async function getxday() {
  let res = await fetch(apix);
  let info = await res.json();
  // console.log(info);

  if (res.ok) {
    return info;
  }
}

var xxDay;
getxday()
  .then((Day) => {
    var dDay = Day[xDay];
    xxDay = dDay;
    // console.log(xxDay);
  })
  .then(() => {
    DayTitle.innerHTML = xxDay.day;
    DayImg.innerHTML = `<img src="${xxDay.img}" alt="${xxDay.day}"/>`;
    DayBoxImg.style.backgroundImage = `url("${xxDay.img}")`;
    DayInfo.innerHTML = xxDay.info;
    DaySrc.innerHTML = `<a href="${xxDay.source}" target="_blank">Source</a>`;
  });
