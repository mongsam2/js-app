const images = ["0.jpg", "1.jpg", "2.jpg"];
const img_index = Math.floor(Math.random() * images.length);
const chosenImg = images[img_index];

const background = document.createElement("img");
background.src = `images/${chosenImg}`;
document.body.appendChild(background);
