class MainGame {

    constructor() {
        this.splashScreen = new FarmFrenzy();
    }
   
}

let mainGame = new MainGame();

document.getElementById("new-game").onclick = function() {
    console.log(mainGame)
    mainGame.splashScreen.mainWrapper.style.display = "none";
    canvas.style.display = "block";
}