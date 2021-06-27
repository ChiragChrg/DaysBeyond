let api = `https://chiragchrg.github.io/data.json`;
let apix = `https://chiragchrg.github.io/day.json`;

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

var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate();
var xDay = date.getDay();

console.log(day);

window.onload = getxdata();
window.onload = getxday();

async function getxdata() {
  let x = await fetch(api);
  let data = await x.json();
  // console.log(data[0][1]);

  if (x.ok) {
    return data;
  }
}

getxdata()
  .then((Tdata) => {
    // var dData = Tdata[0][4][0][6];
    var dData = Tdata[0][month][0][day];
    // var dlen = dData.length;

    dMain = dData[0];
    console.log(dMain);
  })
  .then(() => {
    Title.innerHTML = dMain.title;
    Img.innerHTML = `<img src="${dMain.img}" alt="${dMain.title}"/>`;
    BoxImg.style.backgroundImage = `url("${dMain.img}")`;
    Info.innerHTML = dMain.info;
    Src.innerHTML = `<li><a href="${dMain.source}" target="_blank">Source</a></li>`;
  });

async function getxday() {
  let res = await fetch(apix);
  let info = await res.json();
  // console.log(info);

  if (res.ok) {
    return info;
  }
}

getxday()
  .then((Day) => {
    var dDay = Day[xDay];
    xxDay = dDay;
    console.log(xxDay);
  })
  .then(() => {
    DayTitle.innerHTML = xxDay.day;
    DayImg.innerHTML = `<img src="${xxDay.img}" alt="${xxDay.day}"/>`;
    DayBoxImg.style.backgroundImage = `url("${xxDay.img}")`;
    DayInfo.innerHTML = xxDay.info;
    DaySrc.innerHTML = `<li><a href="${xxDay.source}" target="_blank">Source</a></li>`;
  });
