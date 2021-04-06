const Top = document.getElementById("top");
const Down = document.getElementById("down");

var date = new Date();
var day = date.getDay();
console.log(day);

if (day == 1) {
  Top.style.backgroundColor = "#6600ff"; //Purple
  Down.style.backgroundColor = "#5200cc";
} else if (day == 2) {
  Top.style.backgroundColor = "#ff1a1a"; //Red
  Down.style.backgroundColor = "#e60000";
} else if (day == 3) {
  Top.style.backgroundColor = "#00ff00"; //Green
  Down.style.backgroundColor = "#00cc00";
} else if (day == 4) {
  Top.style.backgroundColor = "#ffcc00"; //Yellow
  Down.style.backgroundColor = "#e6b800";
} else if (day == 5) {
  Top.style.backgroundColor = "#ff3399"; //Pink
  Down.style.backgroundColor = "#e60073";
} else if (day == 6) {
  Top.style.backgroundColor = "#0066ff"; //Blue
  Down.style.backgroundColor = "#0052cc";
} else if (day == 7) {
  Top.style.backgroundColor = "#ff6600"; //Orange
  Down.style.backgroundColor = "#e65c00";
}
