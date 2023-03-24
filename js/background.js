const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
];
const body = document.querySelector("body");

const IMAGE_CLASS_NAME = "bgimg";
const anImage = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${anImage}`;
bgImg.classList.add(IMAGE_CLASS_NAME);
document.body.appendChild(bgImg);
