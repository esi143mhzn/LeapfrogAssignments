class Vehicle {
  constructor() {
    (this.vehicleWidth = 400),
      (this.vehicleHeight = 150),
      (this.vehicleColor = "red"),
      (this.vehicleX = 455),
      (this.vehicleY = 455),
      (this.vehicleSpeedX = 10),
      (this.move = 0);
      this.vechicleEggs=0
  }

  draw() {
    if (this.move == 1 && this.vechicleEggs > 0) {
      this.update();
    }
    // ctx.fillStyle = this.vehicleColor;
    images.draw("van1",
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
      images.draw("van2", this.vehicleX, this.vehicleY, this.vehicleWidth, this.vehicleHeight)
    }
    if (this.vehicleX < 465 && this.move == 1) {
      this.move = 0;
      this.vehicleSpeedX = 10;
      let egg = new Egg();
      money.money += this.vechicleEggs * egg.eggPrice;
	    money.update();
    }
  }
}
