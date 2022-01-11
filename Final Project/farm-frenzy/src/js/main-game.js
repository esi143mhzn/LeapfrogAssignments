class MainGame {

    constructor() {
        this.splashScreen = new FarmFrenzy();
    }
   
}

let mainGame = new MainGame();

document.getElementById("new-game").onclick = function() {
    mainGame.splashScreen.mainWrapper.style.display = "none";
    canvas.style.display = "block";
    setInterval(gameloop, 100);
    setInterval(timer, 1000)   
}

document.getElementById("how-to-play").onclick = function() {

    mainGame.splashScreen.homeSceneMenu.style.backgroundImage = "url('src/images/howToPlay.png')";
    mainGame.splashScreen.menuList.style.display = "none";
    mainGame.splashScreen.farmFrenzy.style.display = "none";
    mainGame.splashScreen.imgDuckLeft.style.display = "none";
    mainGame.splashScreen.imgDuckRight.style.display = "none";
}

let secs = 60;
let mins = 3;
function timer() {

    secs--;
    if(secs == 0){
        mins--;
        secs = 60;
    }

    ctx.strokeStyle = "red";
    ctx.font = "30px Arial"
    ctx.strokeText("Time: " + mins + "m" + secs + "s", 500, 30)
}