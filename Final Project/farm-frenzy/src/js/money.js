class Money {
  constructor() {
    this.money = 100;
  }

  draw() {
    ctx.fillStyle = "green";
    ctx.font = "18px Arial";
    ctx.fillText("Money: Rs." + this.money, 950, 30);
  }

  update() {
    this.money = this.money;

    ctx.fillStyle = "green";
    ctx.font = "18px Arial";
    ctx.fillText("Money: Rs." + this.money, 950, 30);
  }
}
