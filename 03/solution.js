var fs = require("fs");
var input = [];

//defining the read input file function
function read(file, cb) {
    var readInput = []; 
    fs.readFile(file, 'utf8', function(err, data) {
        if (!err) {
            readInput = cb(data.toString().split('\n'))
        } else {
            console.log(err)
        }
    });

}

//obtain input array from text file and run solution
read(__dirname+'/input.txt', function(data) {
    var input = [];
    for(var item in data){
        input.push(data[item]);
    }
   
    console.log(input)
    return input;
});

