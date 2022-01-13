class Task {
    constructor() {
        this.x = 940,
        this.y = 10
    }

    draw() {
        roundRect(ctx, this.x, this.y, 150, 30, 10, true);
        ctx.font= this.fontSize + "px Georgia";
        ctx.textAlign="center"; 
        ctx.textBaseline = "middle";
        ctx.fillStyle = "red";
        var rectHeight = 50;
        var rectWidth = 200;
        var rectX = 0;
        var rectY = 10;
        ctx.fillText("Eggs: " + eggCounter +"/" + 10 + "   (TASK)", 1000, 25,  rectX+(rectWidth/2),rectY+(rectHeight/2));
    }
}