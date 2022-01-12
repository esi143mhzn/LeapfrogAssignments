class Task {
    constructor() {

    }

    draw() {
        roundRect(ctx, 940, 10, 150, 30, 10, true);
        ctx.font= this.fontSize + "px Georgia";
        ctx.textAlign="center"; 
        ctx.textBaseline = "middle";
        ctx.fillStyle = "red";
        var rectHeight = 50;
        var rectWidth = 100;
        var rectX = 20;
        var rectY = 10;
        ctx.fillText("Duck: " + eggCounter +"/" + 10, 1000, 25,  rectX+(rectWidth/2),rectY+(rectHeight/2));
    }
}