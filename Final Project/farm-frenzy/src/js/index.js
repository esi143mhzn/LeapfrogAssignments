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
let eggCounter = 0;

let vehicle = new Vehicle();
let wellColor = "grey";
let well = new Well(wellColor);

let money = new Money();
let storage = new Storage();
let task = new Task();

function gameloop() {
 
  // Clear canvas
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  
  // Draw ground area
  images.draw("background",0,0,GAME_WIDTH, GAME_HEIGHT);
  images.draw("main", 0, 100, GAME_WIDTH - 250, GAME_HEIGHT - 240);

  // Draw objects
  well.draw();
  money.draw();
  duck.draw();
  vehicle.draw();
  storage.drawStorage();
  storage.drawEggs();
  task.draw();

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

  if (duck.counter % 100 == 0) { //laying eggs time interval
    let egg = new Egg(duck.position.x, duck.position.y);
    eggs.push(egg);
  }

  timer(); //game timer

  if(mins == 0 && secs == 0){
    gameOver();
  }

  if(eggCounter == 10) {
    gameComplete();
  }

}

function gamePopUp(text) {
  ctx.lineWidth = 4;
  ctx.strokeStyle = "#000000";
  ctx.fillStyle = "#abc";
  roundRect(ctx, 400, 200, 100, 50, 10, true);
  ctx.font="20px Georgia";
  ctx.textAlign="center"; 
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#000000";
  var rectHeight = 50;
  var rectWidth = 100;
  var rectX = 20;
  var rectY = 10;
  ctx.fillText(text, 450, 225,  rectX+(rectWidth/2),rectY+(rectHeight/2));
  duck.resetDuck();
  duck.counter = 101;
  isGameOver=true
}

function gameOver() {
  gamePopUp("GAME OVER!!!");
}
  

function gameComplete() {
  gamePopUp("TASK COMPLETED!!!");
}


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

  if ((x < 770 && x > 80) && (y < 430 && y > 150 )) {  //set grass boundary
    if (well.waterLevel > 0) {
      grassCount++;
      grasses.push(grass);
      well.setWaterLevel();
      if (grassCount == 5) {
        grassCount = 0;
      }
    }
  } else if ((x > 850 && x < 1000) && (y > 200 && y < 450)) { //set well boundary
    if (money.money > 0 && well.waterLevel == 0) {
      well.refillWell();
      money.money -= 20;
      money.update();
    }
  } else if ((x > 465 && x < 855) && (y > 420 && y < 580)) { //set vehicle boundary
    vehicle.move = 1;
    vehicle.vechicleEggs = storage.eggs.length;
    storage.eggs = [];
  }
  
  const egg = eggs.find(
    (eggPosition) =>
    x >= eggPosition.x &&
    x <= eggPosition.x + egg.eggSize + 5 &&
    y >= eggPosition.y &&
    y <= eggPosition.y + egg.eggSize + 5
    );
    
  if (egg && storage.eggs.length < storage.storageSpace) {
    removeElementFromArray(eggs, egg);
    storage.eggs.push(egg);
    eggCounter++;
  }
});
