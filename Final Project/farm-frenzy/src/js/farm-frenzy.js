/*
    Game mode selection and menu class

*/

class FarmFrenzy {

    //Home Screen Initialization
    constructor() {
        
        this.mainWrapper;
        this.homeSceneMenu;
        this.farmFrenzy;
        this.imgDuckRight;
        this.imgDuckLeft;
        this.menuList;
        this.newGame;
        this.howToPlay;

        this.homeWidth = 1100;
        this.homeHeight = 600;
        this.imgWidth = 80;
        this.imgHeight = 80;

        this.mainWrapper = document.querySelector(".main-wrapper");
        
        //create div element for home screen
        this.homeSceneMenu = document.createElement("div");
        this.homeSceneMenu.classList.add("home-scene-menu");
        this.homeSceneMenu.style.height = this.homeHeight + "px";
        this.homeSceneMenu.style.width = this.homeWidth + "px";
        this.homeSceneMenu.style.position = "absolute";
        this.homeSceneMenu.style.backgroundImage = "url('src/images/background.png')";
        this.mainWrapper.appendChild(this.homeSceneMenu);

        //create h1 element for heading
        this.farmFrenzy = document.createElement("h1");
        this.farmFrenzy.classList.add("farm-frenzy");
        this.farmFrenzy.style.top = 170 + "px";
        this.farmFrenzy.style.left = 425 + "px";
        this.farmFrenzy.style.fontFamily = "Jokerman";
        this.farmFrenzy.style.fontSize = 50 + "px";
        this.farmFrenzy.style.fontWeight = "bold";
        this.farmFrenzy.style.color = '#FFF';
        this.farmFrenzy.style.position = "absolute";
        this.farmFrenzy.style.textShadow = "8px 8px 5px #000";
        this.farmFrenzy.innerHTML = "Farm Frenzy";
        this.homeSceneMenu.appendChild(this.farmFrenzy);

        //create img element for duck image 
        this.imgDuckRight = document.createElement("img");
        this.imgDuckRight.setAttribute("src", "src/images/duckright1.png")
        this.imgDuckRight.style.width = this.imgWidth + "px";
        this.imgDuckRight.style.height = this.imgHeight + "px";
        this.imgDuckRight.style.position = "absolute";
        this.imgDuckRight.style.top = 170 + "px";
        this.imgDuckRight.style.left = 320 + "px";
        this.homeSceneMenu.appendChild(this.imgDuckRight);

        this.imgDuckLeft = document.createElement("img");
        this.imgDuckLeft.setAttribute("src", "src/images/duckleft1.png");
        this.imgDuckLeft.style.width = this.imgWidth + "px";
        this.imgDuckLeft.style.height = this.imgHeight + "px";
        this.imgDuckLeft.style.position = "absolute";
        this.imgDuckLeft.style.top = 170 + "px";
        this.imgDuckLeft.style.left = 740 + "px";
        this.homeSceneMenu.appendChild(this.imgDuckLeft);

        //create menu list items
        this.menuList = document.createElement("ul");
        this.menuList.classList.add("menu-list");
        this.homeSceneMenu.appendChild(this.menuList);

        this.newGame = document.createElement("li");
        this.newGame.setAttribute("id", "new-game");
        this.newGame.innerHTML = "New Game";
        this.menuList.append(this.newGame); 

        this.howToPlay = document.createElement("li");
        this.howToPlay.setAttribute("id", "how-to-play");
        this.howToPlay.innerHTML = "How To Play";
        this.menuList.append(this.howToPlay);
    } 
}
