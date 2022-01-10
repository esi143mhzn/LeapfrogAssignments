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
    mainGame.splashScreen.mainWrapper.style.display = "none";
    mainGame.splashScreen.howToPlay.style.display = "block"

    // mainGame.splashScreen.howToPlay.style.background = "url('../images/howToPlay.png')"
}