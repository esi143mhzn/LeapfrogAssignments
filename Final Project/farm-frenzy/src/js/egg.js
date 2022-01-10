class Egg {
  constructor(x, y) {
    (this.eggSize = 20), (this.x = x), (this.y = y), (this.color = "purple"), (this.eggPrice = 10);
  }

  draw() {
    // ctx.fillStyle = this.color;
    // ctx.fillRect(this.x, this.y, this.eggSize, this.eggSize);
    images.draw("egg1", this.x, this.y, this.eggSize, this.eggSize)
    // ctx.drawImage(eggImage, this.x, this.y, this.eggSize, this.eggSize)
  }
}
