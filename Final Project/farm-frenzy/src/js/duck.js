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

    this.duckCounter = 3;
    this.counter = 0;
  }

  draw() {
    images.draw("duckleft1",
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
      this.position.x + this.duckWidth > this.gameWidth - 350 ||
      this.position.x < 80
    ) {
      this.speed.x = -this.speed.x;
    }

    if (
      this.position.y + this.duckHeight > this.gameHeight - 200 ||
      this.position.y < 150
    ) {
      this.speed.y = -this.speed.y;
    }
  }
}
