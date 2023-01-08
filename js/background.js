const images = ["1.jpg", "2.jpg"];
const warp = document.querySelector(".wrap");

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
warp.style.backgroundImage = `url('img/${chosenImage}')`;
