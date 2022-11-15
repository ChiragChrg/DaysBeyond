var Root = document.querySelector(':root');
var Sidepanel = document.getElementById("sidepanel")

var date = new Date();
var day = date.getDay();

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

Root.style.setProperty("--primary", color1);
Root.style.setProperty("--secondary", color2);
Root.style.setProperty("--footer", color3);
Root.style.setProperty("--bars", color4);

// Navigation Width
function openNav() {
  Sidepanel.style.width = "50%";
}

function closeNav() {
  Sidepanel.style.width = "0%";
}
