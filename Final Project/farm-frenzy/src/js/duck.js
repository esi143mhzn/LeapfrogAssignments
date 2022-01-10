class Duck {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

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

    this.color = "black";
    this.counter = 0;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.duckWidth,
      this.duckHeight
    );
  }

  update() {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    if (
      this.position.x + this.duckWidth > this.gameWidth / 1.3 ||
      this.position.x < 0
    ) {
      this.speed.x = -this.speed.x;
    }

    if (
      this.position.y + this.duckHeight > this.gameHeight / 1.5 ||
      this.position.y < 0
    ) {
      this.speed.y = -this.speed.y;
    }
  }
}
