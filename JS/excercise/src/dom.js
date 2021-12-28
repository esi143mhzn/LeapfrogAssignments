let container = document.getElementById('hello');

container.style.background = "lightblue";
container.style.padding = "20px";
container.style.border = "1px solid black";
container.style.width = "100px";
container.style.height = "100px";

// var number = prompt("Enter how many coordinates: ");

// function coordinate(num){
//     var coordinate = [];

//     for(var j=0; j<num; j++){
//         coordinate[j] = prompt("Enter X"+[j]+ "coordinates: ")
//         coordinate[j] = prompt("Enter Y"+[j]+ "Coordinates: ")
//     }
//     console.log(coordinate)
// }

// coordinate(number);

const coordinates = [
    {x : 10, y: 20},
    {x: 40, y: 30},
    {x: 45, y: 10},
    {x: 15, y: 70},
    {x: 65, y: 60},
    {x: 95, y: 100},
    {x: 105, y: 20},
    {x: 130, y: 90},
]

for(var i=0; i<coordinates.length; i++)
{
    const point = document.createElement("div");

    point.style.position = "absolute";
    point.style.width = "10px";
    point.style.height = "10px";
    point.style.borderRadius = "8px";
    point.style.top = coordinates[i].y + "px";
    point.style.left = coordinates[i].x + "px";
    point.style.background = "green";

    container.appendChild(point);
}



