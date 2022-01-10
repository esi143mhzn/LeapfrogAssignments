class Storage {
  constructor() {
    this.x = -10;
    this.y = 455;
    this.eggs = [];
    this.storageSpace = 2;
  }

  drawStorage() {
    // ctx.fillStyle = "purple";
    // ctx.fillRect(0, 420, 300, 150);

    ctx.drawImage(storageImage, this.x, this.y, 300, 150);
  }

  drawEggs() {
    ctx.fillStyle = "white";
    for (let i = 0; i < this.eggs.length; i++) {
      // ctx.fillRect((this.x + 50) + i * 30, this.y + 35, 20, 20);

      images.draw("egg1", (this.x + 50) + i * 30, this.y + 35, 20, 20);
    }
  }
}
