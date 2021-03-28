let api = `https://chiragchrg.github.io/data.json`;

const Title = document.getElementById("todayTitle");
const Img = document.getElementById("todayImg");
const Info = document.getElementById("todayInfo");
const Src = document.getElementById("todaySrc");

var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate();

console.log(day);

window.onload = getxdata();
async function getxdata() {
  let x = await fetch(api);
  let data = await x.json();
  // console.log(data[0][1]);

  if (x.ok) {
    return data;
  }
}

getxdata()
  .then(Tday => {
    // var dData = Tday[0][1][0][7];
    var dData = Tday[0][month][0][day];
    // var dlen = dData.length;

    dMain = dData[0];
    console.log(dMain);
  })
  .then(() => {
    Title.innerHTML = dMain.title;
    Img.innerHTML = `<img src="${dMain.img}" alt="${dMain.title}" width="350px" height="350px" />`;
    Info.innerHTML = dMain.info;
    Src.innerHTML = `<li><a href="${dMain.source}" target="_blank">Source</a></li>`;
  });
