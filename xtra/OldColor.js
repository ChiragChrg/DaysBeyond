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
const Body = document.querySelector(".body");
const CheckAge = document.querySelector("#ageCheck");
const FrmHd = document.querySelector("#formhead");
const DD = document.querySelector("#DD");
const MM = document.querySelector("#MM");
const YY = document.querySelector("#YY");
const Sbmt = document.querySelector("#submit");
// const Close = document.getElementsByClassName("closebtn")[0];
// const Home = document.getElementsByClassName("home")[0];
// const About = document.getElementsByClassName("about")[0];
// const Dev = document.getElementsByClassName("dev")[0];

var date = new Date();
var day = date.getDay();
// var day = 6;
console.log("Day : " + day);
// 0 is Sunday

if (day == 0) {
  Top.style.backgroundColor = "#ff1a1a"; //Red
  Down.style.backgroundColor = "#e60000";
  Body.style.backgroundColor = "#ff4d4d";

  Year.style.backgroundColor = "#ff1a1a";
  Month.style.backgroundColor = "#ff1a1a";
  Day.style.backgroundColor = "#ff1a1a";

  Per0.style.backgroundColor = "#ff6666";
  Per1.style.backgroundColor = "#ff6666";
  Per2.style.backgroundColor = "#ff6666";

  Active.style.backgroundColor = "#fff";
  Active.style.color = "#ff1a1a";
  Side.style.backgroundColor = "#ff1a1a";

  CheckAge.style.backgroundColor = "#ff1a1a";
  FrmHd.style.color = "#ff1a1a";
  DD.style.border = "2px solid #ff1a1a";
  MM.style.border = "2px solid #ff1a1a";
  YY.style.border = "2px solid #ff1a1a";
  Sbmt.style.backgroundColor = "#ff1a1a";
  Sbmt.style.color = "#fff";
} else if (day == 1) {
  Top.style.backgroundColor = "#ffcc00"; //Yellow
  Down.style.backgroundColor = "#e6b800";
  Body.style.backgroundColor = "#ffdb4d";

  Year.style.backgroundColor = "#ffcc00";
  Month.style.backgroundColor = "#ffcc00";
  Day.style.backgroundColor = "#ffcc00";

  Per0.style.backgroundColor = "#ffe680";
  Per1.style.backgroundColor = "#ffe680";
  Per2.style.backgroundColor = "#ffe680";

  Active.style.backgroundColor = "#fff";
  Active.style.color = "#ffcc00";
  Side.style.backgroundColor = "#ffcc00";

  CheckAge.style.backgroundColor = "#ffcc00";
  FrmHd.style.color = "#ffcc00";
  DD.style.border = "2px solid #ffcc00";
  MM.style.border = "2px solid #ffcc00";
  YY.style.border = "2px solid #ffcc00";
  Sbmt.style.backgroundColor = "#ffcc00";
  Sbmt.style.color = "#fff";
} else if (day == 2) {
  Top.style.backgroundColor = "#ff3399"; //Pink
  Down.style.backgroundColor = "#e60073";
  Body.style.backgroundColor = "#ff66b3";

  Year.style.backgroundColor = "#ff3399";
  Month.style.backgroundColor = "#ff3399";
  Day.style.backgroundColor = "#ff3399";

  Per0.style.backgroundColor = "#ff80bf";
  Per1.style.backgroundColor = "#ff80bf";
  Per2.style.backgroundColor = "#ff80bf";

  Active.style.backgroundColor = "#fff";
  Active.style.color = "#ff3399";
  Side.style.backgroundColor = "#ff3399";

  CheckAge.style.backgroundColor = "#ff3399";
  FrmHd.style.color = "#ff3399";
  DD.style.border = "2px solid #ff3399";
  MM.style.border = "2px solid #ff3399";
  YY.style.border = "2px solid #ff3399";
  Sbmt.style.backgroundColor = "#ff3399";
  Sbmt.style.color = "#fff";
} else if (day == 3) {
  Top.style.backgroundColor = "#00ff00"; //Green
  Down.style.backgroundColor = "#00cc00";
  Body.style.backgroundColor = "#4dff4d";

  Year.style.backgroundColor = "#00cc00";
  Month.style.backgroundColor = "#00cc00";
  Day.style.backgroundColor = "#00cc00";

  Per0.style.backgroundColor = "#80ff80";
  Per1.style.backgroundColor = "#80ff80";
  Per2.style.backgroundColor = "#80ff80";

  Active.style.backgroundColor = "#fff";
  Active.style.color = "#00ff00";
  Side.style.backgroundColor = "#00ff00";

  CheckAge.style.backgroundColor = "#00ff00";
  FrmHd.style.color = "#00ff00";
  DD.style.border = "2px solid #00ff00";
  MM.style.border = "2px solid #00ff00";
  YY.style.border = "2px solid #00ff00";
  Sbmt.style.backgroundColor = "#00ff00";
  Sbmt.style.color = "#fff";
} else if (day == 4) {
  Top.style.backgroundColor = "#ff6600"; //Orange
  Down.style.backgroundColor = "#e65c00";
  Body.style.backgroundColor = "#ff8533";

  Year.style.backgroundColor = "#ff6600";
  Month.style.backgroundColor = "#ff6600";
  Day.style.backgroundColor = "#ff6600";

  Per0.style.backgroundColor = "#ffb380";
  Per1.style.backgroundColor = "#ffb380";
  Per2.style.backgroundColor = "#ffb380";

  Active.style.backgroundColor = "#fff";
  Active.style.color = "#ff6600";
  Side.style.backgroundColor = "#ff6600";

  CheckAge.style.backgroundColor = "#ff6600";
  FrmHd.style.color = "#ff6600";
  DD.style.border = "2px solid #ff6600";
  MM.style.border = "2px solid #ff6600";
  YY.style.border = "2px solid #ff6600";
  Sbmt.style.backgroundColor = "#ff6600";
  Sbmt.style.color = "#fff";
} else if (day == 5) {
  Top.style.backgroundColor = "#0066ff"; //Blue
  Down.style.backgroundColor = "#0052cc";
  Body.style.backgroundColor = "#4d94ff";

  Year.style.backgroundColor = "#0066ff";
  Month.style.backgroundColor = "#0066ff";
  Day.style.backgroundColor = "#0066ff";

  Per0.style.backgroundColor = "#80b3ff";
  Per1.style.backgroundColor = "#80b3ff";
  Per2.style.backgroundColor = "#80b3ff";

  Active.style.backgroundColor = "#fff";
  Active.style.color = "#0066ff";
  Side.style.backgroundColor = "#0066ff";

  CheckAge.style.backgroundColor = "#0066ff";
  FrmHd.style.color = "#0066ff";
  DD.style.border = "2px solid #0066ff";
  MM.style.border = "2px solid #0066ff";
  YY.style.border = "2px solid #0066ff";
  Sbmt.style.backgroundColor = "#0066ff";
  Sbmt.style.color = "#fff";
} else if (day == 6) {
  Top.style.backgroundColor = "#6600ff"; //Purple
  Down.style.backgroundColor = "#5200cc";
  Body.style.backgroundColor = "#8533ff";

  Year.style.backgroundColor = "#6600ff";
  Month.style.backgroundColor = "#6600ff";
  Day.style.backgroundColor = "#6600ff";

  Per0.style.backgroundColor = "#b380ff";
  Per1.style.backgroundColor = "#b380ff";
  Per2.style.backgroundColor = "#b380ff";

  Active.style.backgroundColor = "#fff";
  Active.style.color = "#6600ff";
  Side.style.backgroundColor = "#6600ff";

  CheckAge.style.backgroundColor = "#6600ff";
  FrmHd.style.color = "#6600ff";
  DD.style.border = "2px solid #6600ff";
  MM.style.border = "2px solid #6600ff";
  YY.style.border = "2px solid #6600ff";
  Sbmt.style.backgroundColor = "#6600ff";
  Sbmt.style.color = "#fff";
}
