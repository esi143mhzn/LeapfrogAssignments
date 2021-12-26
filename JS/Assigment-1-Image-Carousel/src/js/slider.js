const wrapper = document.getElementById("wrapper");
const images = document.querySelector("carousel-image-wrapper");

const imageWidth = 200;
const imageCount = images.children.length;

images.style.width = `${imageCount * imageWidth}px`;

for (let i = 0; i < imageCount; i++) {
  const image = images.children[i];

  image.style.left = `${i * imageWidth}px`;
}

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

let interval;
let dx = 0;
nextBtn.onclick = function () {
  // const currentImage = images.children[currentIndex];
  // currentIndex++;
  // currentImage.style.left = `-${currentIndex * imageWidth}px`;

  currentIndex++;
  // images.style.left = `-${currentIndex * imageWidth}px`;

  interval = setInterval(() => {
    dx++;
    images.style.left = `-${dx}px`;

    if (dx >= 200) clearInterval(interval);
  }, 10);
};

prevBtn.onclick = function () {
  // const currentImage = images.children[currentIndex];
  // currentIndex++;
  // currentImage.style.left = `-${currentIndex * imageWidth}px`;

  currentIndex--;
  images.style.left = `-${currentIndex * imageWidth}px`;
};

function slider(properties) {
  // const { imageWidth, imageHeight } = properties;

  properties.imageWidth;
}

slider({
  imageWidth: 200,
  imageHeight: 75
});

function abd() {
  // asfas
  // as
  // gas
  // gas
  // g
  // asg

  return false;
}

/**
 *
 * @param {number} width - Width of image
 * @param {number} height - Height of image
 * @param {string} wrapperId - Id of wrapper element
 */
function Slider(width, height, wrapperId, transitionTime, holdTime) {}

// Magic Numbers
const inlineImageGap = 4;
images.style.width = `${
  imageCount * imageWidth + imageCount * inlineImageGap
}px`;

// const PI = 3.14159265;

// // const value = PI * r * r;

// const GRAVITY = 9.81;
// const result = GRAVITY * x + y;

// Math.random();
// console.log(Math.random() * 5);
