const bird = document.querySelector(".bird");
const gameScreen = document.querySelector(".game-container");
const ground = document.querySelector(".ground");
const sky = document.querySelector(".sky");
const score = document.querySelector(".score-area span");

let scoreLabel = document.getElementById("score-label");
let topScoreLabel = document.getElementById("top-label");

let birdLeft = 220;
let birdBottom = 100;
const GRAVITY = 2;
let isGameOver = false;
let myScore = 0;
let highScore = 0;

function startGame() {
	birdBottom -= GRAVITY;
	bird.style.left = birdLeft + 'px';
	bird.style.bottom = birdBottom + 'px';
}

let gameTimerId = setInterval(startGame, 20);


function jump() {
	if(birdBottom < 500) birdBottom += 50;
	bird.style.bottom = birdBottom + 'px';
}

document.addEventListener('keyup', control);

function control(e) {
	if(e.keyCode === 32) {
		jump();
	} 
}

function generateObstacles() {
	let obstacleLeft = 500;
	let randomHeight = Math.floor(Math.random() * 60);
	let obstacleBottom = randomHeight;
	let obstacleTop = randomHeight;
	let gap = 450;

	const obstacleDown = document.createElement("div");
	const obstacleUp = document.createElement("div");

	if(!isGameOver) {
		obstacleDown.classList.add("obstacle-bottom");
		obstacleUp.classList.add("obstacle-top");
	}

	obstacleDown.style.left = obstacleLeft + 'px';
	obstacleDown.style.bottom = obstacleBottom + 'px';
	
	obstacleUp.style.left = obstacleLeft + 'px';
	obstacleUp.style.bottom = obstacleTop + gap + 'px';
	

	gameScreen.appendChild(obstacleDown);
	gameScreen.appendChild(obstacleUp);

	function moveObstacles() {
		obstacleLeft -= 2;
		obstacleDown.style.left = obstacleLeft + 'px';
		obstacleUp.style.left = obstacleLeft + 'px';

		if (obstacleLeft === 220) {
			myScore++;
			setTimeout(() => {
			  sortLeaderboard();
			}, 400);
		}

		if (obstacleLeft === -60){
			clearInterval(obstacleTimerId);
			gameScreen.removeChild(obstacleDown);
			gameScreen.removeChild(obstacleUp);
		}

		if (obstacleLeft > 200 && obstacleLeft < 280 && (birdBottom < obstacleBottom + 153 || birdBottom > obstacleBottom + gap - 200) || birdBottom === 0) {
			gameOver();
			clearInterval(obstacleTimerId);
		}
	}

	let obstacleTimerId = setInterval(moveObstacles, 20);
	if(!isGameOver) setTimeout(generateObstacles, 3000);

}

generateObstacles();

function gameOver() {
	scoreLabel.innerHTML += " | Game Over";
    clearInterval(gameTimerId);
    isGameOver = true;
    document.removeEventListener("keydown", control);
}

function sortLeaderboard() {
    scoreLabel.innerHTML = "Score: " + myScore;
    
	localStorage.setItem("high-score", myScore);
	topScoreLabel.innerHTML = localStorage.getItem("high-score");
}

