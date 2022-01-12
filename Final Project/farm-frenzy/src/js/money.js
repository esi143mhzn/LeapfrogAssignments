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
    // ctx.font = this.fontSize + "px Jokerman";
    // ctx.strokeStyle = this.color;
    // ctx.strokeText("Money: Rs." + this.money, this.position.x, this.position.y);

    roundRect(ctx, this.position.x, this.position.y-20, 100, 30, 10, true);
      ctx.font= this.fontSize + "px Georgia";
      ctx.textAlign="center"; 
      ctx.textBaseline = "middle";
      ctx.fillStyle = this.color;
      var rectHeight = 50;
      var rectWidth = 100;
      var rectX = 20;
      var rectY = 10;
      ctx.fillText("Money: Rs." + this.money, this.position.x + 50, this.position.y-5,  rectX+(rectWidth/2),rectY+(rectHeight/2));
  }

  update() {
    this.money = this.money;
    this.draw();
  }
}
