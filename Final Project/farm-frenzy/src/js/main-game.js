class MainGame {

    constructor() {
        this.splashScreen = new FarmFrenzy();
    }
   
}

let mainGame = new MainGame();

document.getElementById("new-game").onclick = function() {
    mainGame.splashScreen.mainWrapper.style.display = "none";
    canvas.style.display = "block";
}

document.getElementById("how-to-play").onclick = function() {

    mainGame.splashScreen.homeSceneMenu.style.backgroundImage = "url('src/images/howToPlay.png')";
    mainGame.splashScreen.menuList.style.display = "none";
    mainGame.splashScreen.farmFrenzy.style.display = "none";
    mainGame.splashScreen.imgDuckLeft.style.display = "none";
    mainGame.splashScreen.imgDuckRight.style.display = "none";
}