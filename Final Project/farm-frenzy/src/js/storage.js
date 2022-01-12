class Storage {
  constructor() {
    this.x = -10;
    this.y = 455;
    this.eggs = [];
    this.storageSpace = 21;
  }

  drawStorage() {
    ctx.drawImage(storageImage, this.x, this.y, 300, 150);
  }

  drawEggs() {
    ctx.fillStyle = "white";

    for (let i = 0; i < this.eggs.length; i++) {
      images.draw("egg1", (this.x + 50) + i * 30, this.y + 35, 20, 20);
    }
  }
}
