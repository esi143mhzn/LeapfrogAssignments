class Duck {
  constructor() {
    this.gameWidth = 1100;
    this.gameHeight = 600;
    this.duckWidth = 50,
    this.duckHeight = 50,
    this.position = {
      x: this.gameWidth / 3,
      y: this.gameHeight / 3,
    },
    this.speed = {
      x: 7,
      y: 2,
    },

    this.duckCounter = 3,
    this.counter = 0,
    this.direction = ["left", "right"],
    this.image = "duckright1",
    this.duckHunger = 100,
    this.ishungry = false;
    this.grassDistances = {},
    this.indexMenor = null 
  }

  draw() {
    images.draw(this.image,
      this.position.x,
      this.position.y,
      this.duckWidth,
      this.duckHeight
    );
  }

  update() {
    this.position.x += this.speed.x; 
    this.position.y += this.speed.y;

    //decrease hunger level bar
    if(this.duckHunger <= 100 && this.ishungry == false) {
      this.duckHunger -= 1;
    }

    if(this.duckHunger == 0) {
      this.ishungry = true;
    }

    this.hungerDuck();

    const rightGroundBoundary = 350;
    const leftGroundBoundary = 80;
    const rightGroundBoundaryWall = 702.6666666666667;
    const downGroundBoundary = 200;
    const topGroundBoundary = 150;
    const topGroundBoundaryWall = 150;

    if(
      this.position.x + this.duckWidth > this.gameWidth - rightGroundBoundary ||
      this.position.x < leftGroundBoundary
    ) {
      if (this.position.x === rightGroundBoundaryWall) {
        this.image = "duckleft1";
        this.image = "duckleft2";
        this.image = "duckleft3";
        this.image = "duckleft4";
      } else {
        this.image = "duckright1";
        this.image = "duckright2";
        this.image = "duckright3";
        this.image = "duckright4";
      }
      this.speed.x = -this.speed.x;
    }

    if (
      this.position.y + this.duckHeight > this.gameHeight - downGroundBoundary ||
      this.position.y < topGroundBoundary
    ) {
      if (this.position.y === topGroundBoundaryWall) {
        this.image = "duckleft1";
        this.image = "duckleft2";
        this.image = "duckleft3";
        this.image = "duckleft4";
      } else {
        this.image = "duckright1";
        this.image = "duckright2";
        this.image = "duckright3";
        this.image = "duckright4";
      }
      this.speed.y = -this.speed.y;
    }
  }

  hungerDuck() {
    ctx.fillStyle = "green";
    ctx.fillRect(this.position.x, this.position.y + 50, this.duckHunger, 10);

    if (this.ishungry == true) {
      if (grasses.length == 0) {
        gameOver();
      } else {
        if (this.indexMenor == null) { //find the nearest grass to eat
          for (let i = 0; i < grasses.length; i++) {
            this.grassDistances[i] = this.calculateDistance(grasses[i]); //distance calculation
          }
          let arr = Object.values(this.grassDistances); 
          this.indexMenor = this.getKeyByValue(this.grassDistances, Math.min(...arr)); //get index of grass with minimun distance
        }
        this.position.x = grasses[this.indexMenor].x;
        this.position.y = grasses[this.indexMenor].y - this.duckHeight;
        this.speed.x = 0;
        this.speed.y = 0;
        this.image = "duckeatleft";

        const hungerLevel = 96;

        if (this.duckHunger > hungerLevel) {
          this.ishungry = false;
          this.speed = {
            x: 7,
            y: 2,
          };
          removeElementFromArray(grasses, grasses[this.indexMenor]); //after eating grass removes
          this.indexMenor = null;
          this.grassDistances = {};
        }
        this.duckHunger += 2;
      }
    }
  }

  //distance formula
  calculateDistance(obj2) {
    let x = this.position.x - obj2.x;
    let y = this.position.y - obj2.y;

    return Math.sqrt(x * x + y * y);
  }

  //get key from the value in json object
  getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  resetDuck() {
    this.speed.x = 0;
    this.speed.y = 0;
  }
}
