const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];
const wrapper = document.querySelector("#wrapper div");

// const bgImage = document.getElementById("wrapper").createElement("img");
const bgImage = document.createElement("img");

bgImage.src = `./img/${chosenImage}`

// document.body.appendChild(bgImage);

wrapper.appendChild(bgImage);
