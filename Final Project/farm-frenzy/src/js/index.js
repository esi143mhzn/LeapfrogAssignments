const canvas = document.getElementById("game-screen");

const ctx = canvas.getContext("2d");

const GAME_WIDTH = 1100;
const GAME_HEIGHT = 600;

let duck = new Duck(GAME_WIDTH, GAME_HEIGHT);

let grasses = [];
let eggs = [];
let lastTime = 0;
let grassCount = 0;

// const mainWrapper = document.querySelector(".main-wrapper");

// const money = document.createElement("div");

// const landscape = document.createElement("div");
// landscape.innerHTML = "Money"
// landscape.classList.add("landscape");
// landscape.style.top = 1000 + "px"
// landscape.style.width = 40 + "px";
// landscape.style.height = 40 + "px";
// landscape.style.color = "green";
// mainWrapper.appendChild(landscape);

// const wellBucket = document.createElement("div");
let vehicle = new Vehicle();
let wellColor = "grey";
let well = new Well(wellColor);

let money = new Money();
let storage = new Storage();

function gameloop(timeStamp) {
  // Clear canvas
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  // Draw ground area
  ctx.fillStyle = "#c29b25";
  ctx.fillRect(0, 0, 855, 405);

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
setInterval(gameloop, 50);

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

  if (x < 846 && y < 400) {
    if (well.waterLevel > 0) {
      grassCount++;
      grasses.push(grass);
      well.setWaterLevel();
      if (grassCount == 5) {
        grassCount = 0;
      }
    }
  } else if (x > 950 && x < 1050 && y > 50 && y < 250) {
    if (money.money > 0 && well.waterLevel == 0) {
      well.refillWell();
      money.money -= 20;
      money.update();
    }
  } else if (x > 465 && x < 855 && y > 420 && y < 580) {
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
    console.log("Egg removed!", egg);
    removeElementFromArray(eggs, egg);
    storage.eggs.push(egg);
  }

});