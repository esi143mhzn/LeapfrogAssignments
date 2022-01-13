class Egg {
  constructor(x, y) {
    this.eggSize = 20, 
    this.x = x, 
    this.y = y, 
    this.eggPrice = 10
  }

  draw() {
    images.draw("egg1", this.x, this.y, this.eggSize, this.eggSize);
  }
}
