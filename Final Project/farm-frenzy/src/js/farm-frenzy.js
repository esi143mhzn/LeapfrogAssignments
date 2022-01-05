/*
    Game mode selection and menu class

*/

class FarmFrenzy {

    //Home Screen Initialization
    constructor() {
        
        let mainWrapper;
        let homeSceneMenu;
        let FarmFrenzy;
        let imgDuckRight;
        let imgDuckLeft;
        let menuList;
        let newGame;
        let howToPlay;

        this.homeWidth = 1100;
        this.homeHeight = 600;
        this.imgWidth = 80;
        this.imgHeight = 80;

        mainWrapper = document.querySelector(".main-wrapper");
        
        //create div element for home screen
        homeSceneMenu = document.createElement("div");
        homeSceneMenu.classList.add("home-scene-menu");
        homeSceneMenu.style.height = this.homeHeight + "px";
        homeSceneMenu.style.width = this.homeWidth + "px";
        homeSceneMenu.style.top = 20 + "px";
        homeSceneMenu.style.left = 100 + "px";
        homeSceneMenu.style.position = "absolute";
        homeSceneMenu.style.backgroundImage = "url('src/images/background.jpg')";
        mainWrapper.appendChild(homeSceneMenu);

        //create h1 element for heading
        FarmFrenzy = document.createElement("h1");
        FarmFrenzy.classList.add("farm-frenzy");
        FarmFrenzy.style.top = 170 + "px";
        FarmFrenzy.style.left = 425 + "px";
        FarmFrenzy.style.fontFamily = "Jokerman";
        FarmFrenzy.style.fontSize = 50 + "px";
        FarmFrenzy.style.fontWeight = "bold";
        FarmFrenzy.style.color = '#FFF';
        FarmFrenzy.style.position = "absolute";
        FarmFrenzy.style.textShadow = "8px 8px 5px #000";
        FarmFrenzy.innerHTML = "Farm Frenzy";
        homeSceneMenu.appendChild(FarmFrenzy);

        //create img element for duck image 
        imgDuckRight = document.createElement("img");
        imgDuckRight.setAttribute("src", "src/images/duck/duckright1.png")
        imgDuckRight.style.width = this.imgWidth + "px";
        imgDuckRight.style.height = this.imgHeight + "px";
        imgDuckRight.style.position = "absolute";
        imgDuckRight.style.top = 170 + "px";
        imgDuckRight.style.left = 320 + "px";
        homeSceneMenu.appendChild(imgDuckRight);

        imgDuckLeft = document.createElement("img");
        imgDuckLeft.setAttribute("src", "src/images/duck/duckleft1.png");
        imgDuckLeft.style.width = this.imgWidth + "px";
        imgDuckLeft.style.height = this.imgHeight + "px";
        imgDuckLeft.style.position = "absolute";
        imgDuckLeft.style.top = 170 + "px";
        imgDuckLeft.style.left = 740 + "px";
        homeSceneMenu.appendChild(imgDuckLeft);

        //create menu list items
        menuList = document.createElement("ul");
        menuList.classList.add("menu-list");
        homeSceneMenu.appendChild(menuList);

        newGame = document.createElement("li");
        newGame.setAttribute("id", "new-game");
        newGame.innerHTML = "New Game";
        menuList.append(newGame); 

        howToPlay = document.createElement("li");
        howToPlay.innerHTML = "How To Play";
        menuList.append(howToPlay);
    } 

    startGame() {
        document.getElementById("new-game").onclick = function() {
            console.log("I m Clicked bro")
            // this.homeSceneMenu.style.display = "none";
        
        }
    }

}

let farmfrenzy = new FarmFrenzy();
farmfrenzy.startGame();