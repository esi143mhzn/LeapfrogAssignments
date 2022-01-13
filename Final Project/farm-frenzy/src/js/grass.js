class Grass{
    constructor(x,y) {
        this.grassWidth = 80,
        this.grassHeight = 40,
        this.x = x,
        this.y = y
    }

    draw() {
        images.draw("grass1", this.x - 20, this.y - 20, this.grassWidth, this.grassHeight);
    }
}