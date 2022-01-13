class Vehicle {
  constructor() {
    (this.vehicleWidth = 400),
      (this.vehicleHeight = 150),
      (this.vehicleX = 455),
      (this.vehicleY = 455),
      (this.vehicleSpeedX = 10),
      (this.move = 0);
      this.vechicleEggs=0,
      this.image = "van1"
  }

  draw() {
    if (this.move == 1 && this.vechicleEggs > 0) {
      this.update();
    }
    images.draw(this.image,
    this.vehicleX,
    this.vehicleY,
    this.vehicleWidth,
    this.vehicleHeight
    );
  }
  
  update() {
    this.vehicleX += this.vehicleSpeedX;
    if (this.vehicleX > 1200) {
      this.vehicleSpeedX = -this.vehicleSpeedX;
      if(this.vehicleX == 1205){
        this.image = "van2";
      }
    }
    if (this.vehicleX < 465 && this.move == 1) {
      this.move = 0;
      this.vehicleSpeedX = 10;
      this.image = "van1";
      let egg = new Egg();
      money.money += this.vechicleEggs * egg.eggPrice;
	    money.update();
    }
  }
}
