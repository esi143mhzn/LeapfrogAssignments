let container = document.querySelector(".container");
let scoreSpeed = container.querySelector(".score-speed");
let startScreen = document.querySelector(".start-screen");
let endScreen = document.querySelector(".end-screen");
let gameArea = document.querySelector(".game-area");
let carList = ["car2.png", "car3.png", "car4.png", "car5.png", "car6.png"];
let chosenOne = carList[Math.floor(Math.random() * carList.length)];

let fromLeft = ["47px", "115px", "186px"];
let fromTop = ["-90px", "-225px", "-400px"];

let car = document.createElement("div");

let speedUserCar = 1;
let speedOppoCar = 1;

let rightLane = false;
let leftLane = false;
let middleLane = false;

let opponents = [];
let score = 0;

let finalScore = document.querySelector("#final-score");

const NUMBER_OF_INSTANCES = 3;

//showing score and gameArea after button is clicked
let startButton = document.querySelector("#start");
startButton.addEventListener("click", startGame);

//showing score and gameArea after button is clicked
let restartButton = document.querySelector("#restart");
restartButton.addEventListener("click", restartGame);

//initially hiding score and gameArea
scoreSpeed.classList.add("hide");
gameArea.classList.add("hide");
endScreen.classList.add("hide");

let stop = [];
let userCarLeft = 115;
let enemyCar = [];

let roadDiv = document.createElement("div");
let roadImg = document.createElement("img");

//generates opponent car
function generateOpponentCar() {
    let self = this;
    this.updater = 1;

    this.makeOpponentCar = function () {
        let leftPositionEnemyCar =
        fromLeft[Math.floor(Math.random() * fromLeft.length)];
        let topPositionEnemyCar =
        fromTop[Math.floor(Math.random() * fromTop.length)];

        self.oppoCar = document.createElement("div");
        self.oppoCar.setAttribute("class", "opponent-car");
        self.oppoCar.style.width = "67px";
        self.oppoCar.style.height = "90px";
        self.oppoCar.style.background = `url("./src/images/${chosenOne}")`;
        self.oppoCar.style.backgroundSize = "cover";
        self.oppoCar.style.backgroundPosition = "center center";
        self.oppoCar.style.position = "absolute";
        self.oppoCar.style.zIndex = 1;
        self.oppoCar.style.top = topPositionEnemyCar;
        self.oppoCar.style.borderRadius = "5px";
        self.oppoCar.style.left = leftPositionEnemyCar;
        gameArea.appendChild(self.oppoCar);
        opponents.push(self.oppoCar);
    };

    //moving the enemy car
    this.moveOppo = function () {
        self.updater++;
        if (self.updater === 1500) {
        self.updater = 0;
        changeSpeed();
        }
        var top = parseInt(self.oppoCar.style.top);
        top = top + speedOppoCar;
        if (top === 630) {
        score = score + 1;
        updateScore();
        top = -90;
        self.oppoCar.style.left =
            fromLeft[Math.floor(Math.random() * fromLeft.length)];
        self.oppoCar.style.top =
            fromTop[Math.floor(Math.random() * fromTop.length)];
        }
        self.oppoCar.style.top = top + "px";
        moveRoad();

        //collision with others
        for (let i = 0; i < opponents.length; i++) {
            if (opponents[i] === self.oppoCar) continue;

            let car1 = {
                x: userCarLeft,
                y: 530,
                width: 67,
                height: 90,
            };
            let car2 = {
                x: parseInt(opponents[i].style.left),
                y: parseInt(opponents[i].style.top),
                width: parseInt(opponents[i].style.width),
                height: parseInt(opponents[i].style.height),
            };

            if (
                car1.x < car2.x + car2.width &&
                car1.x + car1.width > car2.x &&
                car1.y < car2.y + car2.height &&
                car1.y + car1.height > car2.y
            ) {
                self.updater = 0;
                gameEnd();
            }
        }
    };
}

function clearEverything() {
    let opponentCars = document.querySelectorAll(".opponent-car");

    opponents = [];
    score = 0;
    updater = 1;
    speedUserCar = 1;
    speedOppoCar = 1;

    rightLane = false;
    leftLane = false;
    middleLane = false;
    stop = [];
    userCarLeft = 115;

    for (let i = 0; i < opponentCars.length; i++) {
        opponentCars[i].parentElement.removeChild(opponentCars[i]);
    }
}

//upadating speed
function updateSpeed() {
    scoreSpeed.querySelector("#speed").innerText = speedUserCar;
}

//updating scores
function updateScore() {
    scoreSpeed.querySelector("#score").innerText = score;
}

//start game
function startGame() {
    startScreen.classList.add("hide");
    scoreSpeed.classList.remove("hide");
    scoreSpeed.classList.add("show");
    gameArea.classList.remove("hide");
    gameArea.classList.add("show");

    createRoad();
    generateUserCar();
    updateScore();
    updateSpeed();
    runCars();
}

//restart game 
function restartGame() {
    clearEverything();

    startGame();
}

//generates user car
function generateUserCar() {
    car.style.width = "67px";
    car.style.height = "90px";
    car.style.background = 'url("./src/images/car1.png")';
    car.style.backgroundSize = "cover";
    car.style.backgroundPosition = "center center";
    car.style.position = "absolute";
    car.style.left = "115px";
    car.style.borderRadius = "5px";
    middleLane = true;
    car.style.top = "530px";
    gameArea.appendChild(car);
}

//Code that moves the User Car Vertically
document.addEventListener("keydown", moveCar);
function moveCar(e) {
    if (e.key === "a" && middleLane) {
        car.style.left = "47px";
        userCarLeft = 47;
        middleLane = false;
        leftLane = true;
    }
    if (e.key === "a" && rightLane) {
        car.style.left = "115px";
        userCarLeft = 115;
        middleLane = true;
        rightLane = false;
    }
    if (e.key === "d" && middleLane) {
        car.style.left = "186px";
        userCarLeft = 186;
        middleLane = false;
        rightLane = true;
    }
    if (e.key === "d" && leftLane) {
        car.style.left = "115px";
        userCarLeft = 115;
        middleLane = true;
        leftLane = false;
    }
}

//speed increases
function changeSpeed() {
    if (!(speedUserCar === 5 || speedOppoCar === 5)) {
        speedUserCar += 1;
        updateSpeed();
        speedOppoCar++;
    }
}

//create car lane
function createRoad() {
    gameArea.appendChild(roadDiv);
    roadDiv.style.position = "absolute";
    roadDiv.style.width = "300px";
    roadDiv.style.height = "1260px";
    roadDiv.style.top = "-630px";
    roadImg.setAttribute("src", "./src/images/road.png");
    roadImg.style.height = "100%";
    roadImg.style.width = "100%";

    roadDiv.appendChild(roadImg);
}

//move car lane
function moveRoad() {
    var topOfImage = parseInt(roadDiv.style.top);
    
    if (speedUserCar % -topOfImage === 0) {
        roadDiv.style.top = "-630px";
    } else {
        topOfImage = topOfImage + speedUserCar;
        roadDiv.style.top = topOfImage + "px";
    }
}

//End game showing scores
function gameEnd() {
    for (let i = 0; i < NUMBER_OF_INSTANCES; i++) {
        clearInterval(stop[i]);
    }
    finalScore.innerText = score;
    endScreen.classList.remove("hide");
    endScreen.classList.add("show");
    scoreSpeed.classList.add("hide");
    scoreSpeed.classList.remove("show");

    gameArea.classList.add("hide");
    gameArea.classList.remove("show");
    // clearEverything();
}

//movement of opponent cars
function runCars() {
    for (let i = 0; i < NUMBER_OF_INSTANCES; i++) {
        enemyCar[i] = new generateOpponentCar();
    }
    for (let i = 0; i < NUMBER_OF_INSTANCES; i++) {
        enemyCar[i].makeOpponentCar();
        stop[i] = setInterval(enemyCar[i].moveOppo, 10);
    }
}