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
    roundRect(ctx, this.position.x, this.position.y-20, 100, 30, 10, true);
      ctx.font= this.fontSize + "px Georgia";
      ctx.textAlign="center"; 
      ctx.textBaseline = "middle";
      ctx.fillStyle = this.color;
      const rectHeight = 50;
      const rectWidth = 100;
      const rectX = 20;
      const rectY = 10;
      ctx.fillText("Money: Rs." + this.money, this.position.x + 50, this.position.y-5,  rectX+(rectWidth/2),rectY+(rectHeight/2));
  }

  update() {
    this.draw();
  }
}
