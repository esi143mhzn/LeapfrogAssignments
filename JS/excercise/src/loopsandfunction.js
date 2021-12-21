var num = prompt("Enter a number");
var str = "";

function asterisk(num){
    for(let i = num; i > 0; i--){
        for(let j = 1; j <= i; j++){
            str += "*";
        }
        str += "\n";
    }
    console.log(str);
}

asterisk(num);