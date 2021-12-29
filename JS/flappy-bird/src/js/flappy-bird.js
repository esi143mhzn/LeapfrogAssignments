const bird = document.querySelector(".bird");
const gameScreen = document.querySelector(".game-container");
const ground = document.querySelector(".ground");
const sky = document.querySelector(".sky");

let birdLeft = 220;
let birdBottom = 100;
const GRAVITY = 2;
let isGameOver = false;

function startGame() {
	birdBottom -= GRAVITY;
	bird.style.left = birdLeft + 'px';
	bird.style.bottom = birdBottom + 'px';

}

let gameTimerId = setInterval(startGame, 20);

function control(e) {
	if(e.keyCode === 32) {
		jump();
	} 
}

function jump() {
	if(birdBottom < 500) birdBottom += 50;
	bird.style.bottom = birdBottom + 'px';
}

document.addEventListener('keyup', control);

function generateObstacles() {
	let obstacleLeft = 500;
	let randomHeight = Math.floor(Math.random() * 60);
	let obstacleBottom = randomHeight;
	let gap = 450;

	const obstacleDown = document.createElement("div");
	const obstacleTop = document.createElement("div");
	if(!isGameOver) {
		obstacleDown.classList.add("obstacle-bottom");
		obstacleTop.classList.add("obstacle-top");
	}
	obstacleDown.style.left = obstacleLeft + 'px';
	obstacleDown.style.bottom = obstacleBottom + 'px';
	
	obstacleTop.style.left = obstacleLeft + 'px';
	obstacleTop.style.bottom = obstacleBottom + gap + 'px';
	

	gameScreen.appendChild(obstacleDown);
	gameScreen.appendChild(obstacleTop);

	function moveObstacles() {
		obstacleLeft -= 2;
		obstacleDown.style.left = obstacleLeft + 'px';
		obstacleTop.style.left = obstacleLeft + 'px';

		if (obstacleLeft === -60){
			clearInterval(obstacleTimerId);
			gameScreen.removeChild(obstacleDown);
			gameScreen.removeChild(obstacleTop);
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
	clearInterval(gameTimerId);
	isGameOver = true;

	document.removeEventListener('keyup', control)
}