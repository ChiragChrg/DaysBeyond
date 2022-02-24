const Top = document.getElementById("top");
const Down = document.getElementById("down");
const Year = document.getElementById("pY");
const Month = document.getElementById("pM");
const Day = document.getElementById("pD");
const Per0 = document.getElementsByClassName("percent")[0];
const Per1 = document.getElementsByClassName("percent")[1];
const Per2 = document.getElementsByClassName("percent")[2];
const Active = document.getElementsByClassName("active")[0];
const Side = document.getElementsByClassName("sidebar")[0];
// const Body = document.querySelector(".body");
const Age = document.querySelector(".age");
const CheckAge = document.querySelector("#ageCheck");
const FrmHd = document.querySelector("#formhead");
const DD = document.querySelector("#DD");
const MM = document.querySelector("#MM");
const YY = document.querySelector("#YY");
const AgeTitle = document.querySelector("#ageTitle");
const Sbmt = document.querySelector("#submit");
const Tryagn = document.querySelector("#freset");

var date = new Date();
var day = date.getDay();
// var day = 6;
console.log("Day : " + day);
// 0 is Sunday

var color1; //Top
var color2; //Age
var color3; //Down
var color4; //Per

if (day == 0) {
  color1 = "#AD0000"; //Red
  color2 = "#ff4d4d";
  color3 = "#990000";
  color4 = "#ff6666";
} else if (day == 1) {
  color1 = "#DBAF00"; //Yellow
  color2 = "#ffdb4d";
  color3 = "#cca300";
  color4 = "#ffe680";
} else if (day == 2) {
  color1 = "#AD0057"; //Pink
  color2 = "#ff66b3";
  color3 = "#99004d";
  color4 = "#ff80bf";
} else if (day == 3) {
  color1 = "#009900"; //Green
  color2 = "#4dff4d";
  color3 = "#008000";
  color4 = "#80ff80";
} else if (day == 4) {
  color1 = "#C75000"; //Orange
  color2 = "#ff8533";
  color3 = "#b34700";
  color4 = "#ffb380";
} else if (day == 5) {
  color1 = "#0052CC"; //Blue
  color2 = "#4d94ff";
  color3 = "#0047b3";
  color4 = "#80b3ff";
} else if (day == 6) {
  color1 = "#6200F5"; //Purple
  color2 = "#8533ff";
  color3 = "#5c00e6";
  color4 = "#b380ff";
}

Top.style.backgroundColor = color1;
Age.style.backgroundColor = color2;
Down.style.backgroundColor = color3;

Year.style.backgroundColor = color1;
Month.style.backgroundColor = color1;
Day.style.backgroundColor = color1;

Per0.style.backgroundColor = color4;
Per1.style.backgroundColor = color4;
Per2.style.backgroundColor = color4;

Active.style.backgroundColor = "#fff";
Active.style.color = color1;
Side.style.backgroundColor = color1;

CheckAge.style.backgroundColor = color1;
FrmHd.style.color = color1;
DD.style.border = "2px solid " + color1;
MM.style.border = "2px solid " + color1;
YY.style.border = "2px solid " + color1;
AgeTitle.style.color = color1;
Sbmt.style.backgroundColor = color1;
Tryagn.style.backgroundColor = color1;

// Sbmt.style.color = "#fff";

// Navigation Width
function openNav() {
  document.getElementById("sidepanel").style.width = "50%";
}

function closeNav() {
  document.getElementById("sidepanel").style.width = "0%";
}
