const canvas = document.getElementById("game-screen");
canvas.style.display = "none";

const ctx = canvas.getContext("2d");

const GAME_WIDTH = 1100;
const GAME_HEIGHT = 600;

let duck = new Duck();

let grasses = [];
let eggs = [];
let lastTime = 0;
let grassCount = 0;

const mainWrapper = document.querySelector(".game-wrapper");
const backgroundImage = document.createElement("img");
backgroundImage.setAttribute("src", "src/images/background.png");
backgroundImage.style.display = "none";
mainWrapper.appendChild(backgroundImage);

const groundImage = document.createElement("img");
groundImage.setAttribute("src", "src/images/main.png");
groundImage.style.display = "none";
mainWrapper.appendChild(groundImage);

const storageImage = document.createElement("img");
storageImage.setAttribute("src", "src/images/shed.png");
storageImage.style.display = "none";
mainWrapper.appendChild(storageImage);

const bucketEmpty = document.createElement("img");
bucketEmpty.setAttribute("src", "src/images/bucketEmpty.png");
bucketEmpty.style.display = "none";
mainWrapper.appendChild(bucketEmpty);

const well1 = document.createElement("img");
well1.setAttribute("src", "src/images/well1.png");
well1.style.display = "none";
mainWrapper.appendChild(well1);

const bucketFull = document.createElement("img");
bucketFull.setAttribute("src", "src/images/bucketFull.png");
bucketFull.style.display = "none";
mainWrapper.appendChild(bucketFull);

let vehicle = new Vehicle();
let wellColor = "grey";
let well = new Well(wellColor);

let money = new Money();
let storage = new Storage();

function gameloop(timeStamp) {

  // Clear canvas
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  // Draw ground area
  ctx.drawImage(backgroundImage,0,0,GAME_WIDTH, GAME_HEIGHT);
  ctx.drawImage(groundImage, 0, 100, GAME_WIDTH - 250, GAME_HEIGHT - 240);

  // Draw objects
  well.draw();
  money.draw();
  duck.draw();
  vehicle.draw();
  storage.drawStorage();
  storage.drawEggs();

  for (let e = 0; e < eggs.length; e++) {
    eggs[e].draw();
  }

  if (grasses.length != 0) {
    for (let i = 0; i < grasses.length; i++) {
      grasses[i].draw();
    }
  }

  // Update objects
  duck.counter++;
  duck.update();

  if (duck.counter % 100 == 0) {
    //laying eggs time interval
    let egg = new Egg(duck.position.x, duck.position.y);
    eggs.push(egg);
  }
}

// gameloop()


function removeElementFromArray(arrayList, element) {
  const index = arrayList.indexOf(element);
  if (index > -1) {
    arrayList.splice(index, 1);
  }
}

canvas.addEventListener("click", function (event) {
  let x = event.clientX;
  let y = event.clientY;

  let grass = new Grass(x, y);

  if ((x < 770 && x > 80) && (y < 430 && y > 150 )) {
    if (well.waterLevel > 0) {
      grassCount++;
      grasses.push(grass);
      well.setWaterLevel();
      if (grassCount == 5) {
        grassCount = 0;
      }
    }
  } else if ((x > 850 && x < 1000) && (y > 200 && y < 450)) {
    if (money.money > 0 && well.waterLevel == 0) {
      well.refillWell();
      money.money -= 20;
      money.update();
    }
  } else if ((x > 465 && x < 855) && (y > 420 && y < 580)) {
    vehicle.move = 1;
    vehicle.vechicleEggs = storage.eggs.length;
    storage.eggs = [];
  }
  
  const egg = eggs.find(
    (egg) =>
      x >= egg.x &&
      x <= egg.x + egg.eggSize + 5 &&
      y >= egg.y &&
      y <= egg.y + egg.eggSize + 5
  );

  if (egg && storage.eggs.length < storage.storageSpace) {
    removeElementFromArray(eggs, egg);
    storage.eggs.push(egg);
  }
});
