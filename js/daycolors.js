const ColorName = document.getElementById("cDay");
const ColorImg = document.getElementById("cImg");
const ColorInfo = document.getElementById("cInfo");
const ColorMain = document.querySelector(".cMain");

var date = new Date();
var day = date.getDay();
// var day = 5;
// 0 is Sunday

if (day == 0) {
  ColorName.innerHTML = "Red";
  ColorImg.innerHTML = `<img src="https://images.unsplash.com/photo-1622399126828-b965470f068f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHJlZCUyMGJhY2tncm91bmR8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Red"/>`;
  ColorInfo.innerHTML =
    "Red is the color of heat and blood, so it is associated with energy, war, danger, strength, power, determination, as well as passion, desire and love. Red is an emotionally intense color. It is thought that it tends to raise blood pressure and make people breathe faster. It is very easy to notice, which is why stop signs, stoplights, and fire equipment are usually painted red.  Red is associated with energy, so it may be used to promote energy drinks, games, cars, items related to sports and high physical activity. ";
  ColorMain.style.backgroundImage = `url("https://images.unsplash.com/photo-1622399126828-b965470f068f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHJlZCUyMGJhY2tncm91bmR8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`;
} else if (day == 1) {
  ColorName.innerHTML = "Yellow";
  ColorImg.innerHTML = `<img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8eWVsbG93fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Yellow"/>`;
  ColorInfo.innerHTML =
    "Yellow can represent light and the sun's rays as well as lightning. The phrase 'yellow' used to be used as a sign of cowardice. In China, yellow is the color of royalty. Emperors used to wear yellow. On road signs in the USA, yellow means 'warning'.";
  ColorMain.style.backgroundImage = `url("https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8eWVsbG93fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`;
} else if (day == 2) {
  ColorName.innerHTML = "Pink";
  ColorImg.innerHTML = `<img src="https://images.unsplash.com/photo-1529244927325-b3ef2247b9fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE3fHxwaW5rfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Pink"/>`;
  ColorInfo.innerHTML =
    "Pink is the color for embarrassment, because of the pink blushing cheeks. Around the world, pink is used to represent love and eroticism. In the west, pink is the color for the female gender. Pink means one is in a good condition of health. That is why there is an idiom called 'in the pink', example: These animals are in the pink today. ";
  ColorMain.style.backgroundImage = `url("https://images.unsplash.com/photo-1529244927325-b3ef2247b9fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE3fHxwaW5rfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`;
} else if (day == 3) {
  ColorName.innerHTML = "Green";
  ColorImg.innerHTML = `<img src="https://images.unsplash.com/photo-1520121401995-928cd50d4e27?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3JlZW58ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Green"/>`;
  ColorInfo.innerHTML =
    "Green is used as a color associated with jealousy. The phrase 'green-eyed monster' means a jealous person. The color green is the color of nature. Having a 'green thumb' means that you're good at gardening. Green is also the color of sickness. The phrase 'green around the gills' is an expression implying that the person is nauseated. Green is a color associated with poison. Paris green is a highly toxic element. Green is a color of the Islamic religion. Search the shade 'Islamic Green' below.";
  ColorMain.style.backgroundImage = `url("https://images.unsplash.com/photo-1520121401995-928cd50d4e27?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3JlZW58ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`;
} else if (day == 4) {
  ColorName.innerHTML = "Orange";
  ColorImg.innerHTML = `<img src="https://images.unsplash.com/photo-1598048150218-53ab5609ef31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG9yYW5nZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Orange"/>`;
  ColorInfo.innerHTML =
    "To the eye, orange is a very 'hot' color, so it gives the sensation of fire. But orange is not as heated a colour as red. As a citrus color, orange is associated with healthy food and is appetising. Orange is the color of Autumn and harvest. Though rare in heraldry, orange is symbolic of strength and endurance. Orange is very easy to see, so people can use it to catch attention and highlight the most important elements of a design. Orange is very effective for promoting food products and toys. On road signs, the color orange means there is construction work ahead. It is used for these signs because it can easily be seen even at night.";
  ColorMain.style.backgroundImage = `url("https://images.unsplash.com/photo-1598048150218-53ab5609ef31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG9yYW5nZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`;
} else if (day == 5) {
  ColorName.innerHTML = "Blue";
  ColorImg.innerHTML = `<img src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGJsdWUlMjBhZXN0aGV0aWN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Blue"/>`;
  ColorInfo.innerHTML =
    "Blue is a color used to show coldness. It is also one of the colors your lips can turn if you are chilly. Blue is the color of the Earth's sky and sea. Earth looks blue when seen from outer space by astronauts. The color blue is sometimes associated with sadness, which may be where the name of the music style The Blues comes from. Blue is a color of the Jewish religion. In Western cultures since the 1940s, blue is associated with men/boys, while pink is associated with women/girls. Before the 1940s, it was the other way around, so blue was for women/girls and pink was for men/boys. Nobody knows exactly why it changed.";
  ColorMain.style.backgroundImage = `url("https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGJsdWUlMjBhZXN0aGV0aWN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`;
} else if (day == 6) {
  ColorName.innerHTML = "Purple";
  ColorImg.innerHTML = `<img src="https://images.unsplash.com/photo-1575737698350-52e966f924d4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHB1cnBsZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Purple"/>`;
  ColorInfo.innerHTML =
    "Purple is associated with wisdom, dignity, independence, creativity, mystery and magic. Tyrian Purple is used to represent royalty. It is a sign of power, nobility, luxury, and ambition. Dark purple may create sad feelings. It can cause frustration.";
  ColorMain.style.backgroundImage = `url("https://images.unsplash.com/photo-1575737698350-52e966f924d4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHB1cnBsZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`;
}
