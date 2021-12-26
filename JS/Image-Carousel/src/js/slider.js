const images = document.querySelector(".carousel-image-wrapper");

const imageWidth = 600;
const imageCount = images.children.length;

images.style.width = `${imageCount * imageWidth}px`;

for (let i = 0; i < imageCount; i++) {
    const image = images.children[i];

    image.style.left = `${i * imageWidth}px`;
}

var dots = document.querySelector('.dots');

for (let i = 1; i < imageCount - 1; i++) {
    const dot = document.createElement("li");
    dot.classList.add("dot");
    dots.appendChild(dot);
    dot.addEventListener("click", dotClick.bind(null, i), false);
}

const allDots = dots.querySelectorAll(".dot");
allDots[0].classList.add("active");

function setActive(index){
    for(let i = 0; i < imageCount-2 ; i++) {
        allDots[i].classList.remove("active");
    }
    if(index >= imageCount-2){
        index = 0;
    }
    allDots[index].classList.add("active");
}

function dotClick(index) {
    currentIndex = index;
    dx = currentIndex * imageWidth;
    images.style.left = `-${dx}px`;
    setActive(index-1);
}

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

images.style.left = `-600px`;
let currentIndex = 1;

let interval;
let dx = 0;

nextBtn.onclick = function () {
    if(currentIndex >= (imageCount - 1)) {
        currentIndex = 1;
    }

    dx = currentIndex * imageWidth;

    interval = setInterval(() => {
        dx++;
        images.style.left = `-${dx}px`;
        
        if (dx >= currentIndex * imageWidth) clearInterval(interval);
    }, 10);

    currentIndex++;
    setActive(currentIndex-1);
};

prevBtn.onclick = function () {
    if(currentIndex <= 1) {
        currentIndex = imageCount - 1;
    }

    dx = currentIndex * imageWidth;
    
    interval = setInterval(() => {
        dx--;
        images.style.left = `-${dx}px`;
        
        if (dx <= currentIndex * imageWidth) clearInterval(interval);
    }, 10);

    currentIndex--;
    setActive(currentIndex-1)
};

