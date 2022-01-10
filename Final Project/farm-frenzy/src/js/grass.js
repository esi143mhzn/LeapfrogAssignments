class Grass{
    constructor(x,y) {
        this.grassWidth = 80,
        this.grassHeight = 40,
        this.color = "green",
        this.x = x,
        this.y = y
    }

    draw() {
        ctx.fillStyle = this.color;
        images.draw("grass1", this.x - 20, this.y - 20, this.grassWidth, this.grassHeight);
    }
}