class Money {
  constructor() {
    this.money = 100;
    this.position = {
      x: 10,
      y: 30
    },
    this.color = "white",
    this.fontSize = 24
  }

  draw() {
    ctx.font = this.fontSize + "px Jokerman";
    ctx.strokeStyle = this.color;
    ctx.strokeText("Money: Rs." + this.money, this.position.x, this.position.y);
  }

  update() {
    this.money = this.money;
    this.draw();
  }
}
