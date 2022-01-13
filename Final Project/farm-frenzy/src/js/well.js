class Well {
  constructor(color) {
    (this.x = 800),
      (this.y = 150),
      (this.water = "lightblue"),
      (this.color = "grey"),
      (this.waterLevel = 0),
      (this.waterLevelHeight = 40);
    this.isempty = true;
  }

  draw() {
    if (this.isempty) {
      ctx.fillStyle = "grey";
      ctx.fillRect(this.x + 250, this.y + 100, 20, 190);
      images.draw("well1", this.x, this.y, 300, 300);
      images.draw("bucketEmpty", this.x + 90, this.y + 150, 100, 150);
    } else {
      ctx.fillStyle = "blue";
      images.draw("well2", this.x, this.y, 300, 300);
      images.draw("bucketFull", this.x + 90, this.y + 150, 100, 150);
      ctx.fillRect(
        this.x + 250,
        this.y + 100 + (5 - this.waterLevel) * this.waterLevelHeight,
        20,
        this.waterLevelHeight * this.waterLevel
      );
      ctx.fillStyle = "grey";
      images.draw("well1", this.x, this.y, 300, 300);
      images.draw("bucketFull", this.x + 90, this.y + 150, 100, 150);
      ctx.fillRect(
        this.x + 250,
        this.y + 100,
        20,
        this.waterLevelHeight * (5 - this.waterLevel)
      );
    }
  }

  refillWell() {
    this.waterLevel = 5;
    this.isempty = false;
  }

  setWaterLevel() {
    this.waterLevel -= 1;
    if (this.waterLevel == 0) {
      this.isempty = true;
    }
  }
}
