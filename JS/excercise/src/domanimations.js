let area = document.getElementById('hello');

area.style.background = "lightblue";
area.style.padding = "20px";
area.style.border = "1px solid black";
area.style.width = "200px";
area.style.height = "200px";
area.style.margin = "0 auto";


var x = 750;
var y = 0;


const ball = document.createElement("div");

ball.style.position = "absolute";
ball.style.width = "40px";
ball.style.height = "40px";
ball.style.borderRadius = "20px";
ball.style.top = y + "px";
ball.style.right = x + "px";
ball.style.background = "green";

area.appendChild(ball);

setInterval(() => {
    const newY = y + "px";
   
    if(y<=200){
        console.log(y);
        y++;
    }
    else if(y>=0){
        console.log(y)
        y--;
    }
    ball.style.top = newY ;
},50 );