var fruits = [
    {id: 1, name: 'Banana', color: 'Yellow'},
    {id: 2, name: 'Apple', color: 'Red'}
]

var search=prompt("Enter search term: ")

function searchByName(fruits, search){

    var keys = Object.keys(fruits)

    for(var i=0; i<keys.length; i++){

        if(fruits[i].name === search){
            var value = fruits[i]
            console.log(value)
        }
    }
}

searchByName(fruits, search)