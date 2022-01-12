class Duck {
  constructor() {
    this.gameWidth = 1100;
    this.gameHeight = 600;

    (this.duckWidth = 50),
      (this.duckHeight = 50),
      (this.position = {
        x: this.gameWidth / 3,
        y: this.gameHeight / 3,
      });

    this.speed = {
      x: 7,
      y: 2,
    };

    this.duckCounter = 3,
    this.counter = 0,
    this.direction = ["left", "right"],
    this.image = "duckright1",
    this.duckHunger = 100
    this.ishungry = false
    this.grassDistances = {}
    this.indexMenor=null
  }

  draw() {
      images.draw(this.image, this.position.x, this.position.y, this.duckWidth, this.duckHeight);
  }
  
  update() {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    
    if(this.duckHunger <= 100 && this.ishungry==false){
      this.duckHunger-= 1;
    }
    if(this.duckHunger==0){
      this.ishungry=true;
    }

    this.hungerDuck();
    
    if (this.position.x + this.duckWidth > this.gameWidth - 350 || this.position.x < 80) {
      if(this.position.x === 702.6666666666667) {
        this.image = "duckleft1"
        this.image = "duckleft2"
        this.image = "duckleft3"
        this.image = "duckleft4"
        
      }
      else{
        this.image = "duckright1"
        this.image = "duckright2"
        this.image = "duckright3"
        this.image = "duckright4"
      }
      this.speed.x = -this.speed.x;
    }
      
    if (this.position.y + this.duckHeight > this.gameHeight - 200 || this.position.y < 150) {

      if(this.position.y === 352) {
        this.image = "duckleft1"
        this.image = "duckleft2"
        this.image = "duckleft3"
        this.image = "duckleft4"
          
      }
      else {
        this.image = "duckright1"
        this.image = "duckright2"
        this.image = "duckright3"
        this.image = "duckright4"
      }
      this.speed.y = -this.speed.y;
    }
  }

  hungerDuck() {
    ctx.fillStyle = "green"
    ctx.fillRect(this.position.x, this.position.y + 50, this.duckHunger, 10)

    if(this.ishungry ==true){
      if(grasses.length == 0) {
        gameOver();
      }
      
      
      else {
        

        // if(this.position.x > grasses[0].x){
        //   this.position.x -= 1;
        //   console.log(this.position.x)
        // }
        if(this.indexMenor==null){

        
        for (let i=0; i<grasses.length; i++){
          this.grassDistances[i] = this.calculateDistance(grasses[i])
        }
        let arr = Object.values(this.grassDistances);
        this.indexMenor = this.getKeyByValue(this.grassDistances,Math.min(...arr))
      }
        this.position.x = grasses[this.indexMenor].x
        this.position.y = grasses[this.indexMenor].y - this.duckHeight
        this.speed.x = 0
        this.speed.y = 0
        this.image = "duckeatleft"
        if(this.duckHunger>96)
        {
          this.ishungry=false
          this.speed = {
            x: 7,
            y: 2,
          };
          removeElementFromArray(grasses,grasses[this.indexMenor])
          this.indexMenor=null
          this.grassDistances={}
        }
        this.duckHunger +=2;
      }
     
    }
  }

  calculateDistance(obj2){
    let x = this.position.x - obj2.x;
    let y = this.position.y - obj2.y;
    
    return Math.sqrt(x * x + y * y);
  }
   getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  resetDuck(){
    this.speed.x = 0
    this.speed.y = 0
  }
}
