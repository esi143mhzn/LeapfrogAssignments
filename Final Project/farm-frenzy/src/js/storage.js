class Storage {
  constructor() {
    this.x = 0;
    this.y = 420;
    this.eggs = [];
    this.storageSpace = 2;
  }

  drawStorage() {
    ctx.fillStyle = "purple";
    ctx.fillRect(0, 420, 300, 150);
  }

  drawEggs() {
    ctx.fillStyle = "white";
    for (let i = 0; i < this.eggs.length; i++) {
      ctx.fillRect(this.x + i * 30, this.y, 20, 20);
    }
  }
}
