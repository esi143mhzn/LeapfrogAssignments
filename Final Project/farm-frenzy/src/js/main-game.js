class MainGame {

    constructor() {
        this.splashScreen = new FarmFrenzy();
    }
   
}

let mainGame = new MainGame();
let isGameOver = false

document.getElementById("new-game").onclick = function() {
    mainGame.splashScreen.mainWrapper.style.display = "none";
    canvas.style.display = "block";
    
    setInterval(function() {
        if(isGameOver==false) gameloop()
    }, 100);
    
}

document.getElementById("how-to-play").onclick = function() {

    mainGame.splashScreen.homeSceneMenu.style.backgroundImage = "url('src/images/howToPlay.png')";
    mainGame.splashScreen.menuList.style.display = "none";
    mainGame.splashScreen.farmFrenzy.style.display = "none";
    mainGame.splashScreen.imgDuckLeft.style.display = "none";
    mainGame.splashScreen.imgDuckRight.style.display = "none";
}

let secs = 60;
let millisec=0;
let mins = 3;
function timer() {
    millisec ++;
    if(millisec==10 && secs > 0){
        secs -= 1;
        millisec=0
    }
    if(secs == 0 && mins > 0){
        mins--;
        secs = 60;
    }

    ctx.strokeStyle = "red";
    ctx.font = "30px Arial"
    ctx.strokeText("Time: " + mins + "m" + secs + "s", 500, 30)
}



function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
    if (typeof stroke == "undefined" ) {
      stroke = true;
    }
    if (typeof radius === "undefined") {
      radius = 5;
    }
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    if (stroke) {
      ctx.stroke();
    }
    if (fill) {
      ctx.fill();
    }        
  }