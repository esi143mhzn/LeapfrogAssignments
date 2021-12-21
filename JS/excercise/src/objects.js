let obj = {
    name: "Promise",
    address: "xyz",
    emails:"abc",
    interests: [],
    education: [
        {
            name: "ABC",
            enrolledDate: "2006"
        },
        {
            name: "XYZ",
            enrolledDate: "2000"
        }
    ]
}

var keys = Object.keys(obj);

var len = keys.length;

for (var i=0; i<keys.length; i++){
    var key = keys[i];
    var value = obj[key];
     
    if(keys[i] === keys[4])
    for(j=0; j<value.length; j++){
        var edu = value[j]

        console.log("Name: " + value[j].name + ", " + "Date: " + value[j].enrolledDate);
    }
}
