class Well {
  constructor(color) {
    (this.x = 950),
      (this.y = 50),
      (this.water = "lightblue"),
      (this.color = "grey"),
      (this.waterLevel = 0),
      (this.waterLevelHeight = 40);
    this.isempty = true;
  }

  draw() {
    if (this.isempty) {
      ctx.fillStyle = "grey";
      ctx.fillRect(this.x, this.y, 100, 200);
    } else {
      ctx.fillStyle = "lightblue";
      ctx.fillRect(
        this.x,
        this.y + (5 - this.waterLevel) * this.waterLevelHeight,
        100,
        this.waterLevelHeight * this.waterLevel
      );
      ctx.fillStyle = "grey";
      ctx.fillRect(
        this.x,
        this.y,
        100,
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
