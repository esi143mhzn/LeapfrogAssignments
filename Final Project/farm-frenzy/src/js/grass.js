class Grass{
    constructor(x,y) {
        this.grassWidth = 20,
        this.grassHeight = 20,
        this.color = "green",
        this.x = x,
        this.y = y
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x - 20, this.y - 20, this.grassWidth, this.grassHeight);
    }
}