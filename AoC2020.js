//import file system to scrape input from text files
var fs = require("fs")

//defining the read input file function
function read(file, cb) {
  fs.readFile(file, 'utf8', function(err, data) {
    if (!err) {
        cb(data.toString().split('\n'))
    } else {
        console.log(err)
    }
  });
}

//Day 1: Sum up to 2020, then multiply

//obtain input array from text file and run solution
read(__dirname+'/01/input.txt', function(data) {
    var input = [];
    for(var item in data){
        input.push(+data[item].match(/\d+/g));
    }
   
    console.log("Day 1 part 1 solution:",elfsAccounting(input))
    console.log("Day 1 part 2 solution:",elfsAccounting2(input))
});

//Part 1 first try done with brute force
//Time complexity: O(n^2)
function elfsAccounting(inputArr) {
    for( var i = 0; i < inputArr.length; i++){
        for( var j = 0; j < inputArr.length; j++){
            var sum = inputArr[i] + inputArr[j];
            if(sum === 2020)
                return inputArr[i]*inputArr[j]
        }
    } 
}

//Part 2 first try: brute force also
//Time complexity O(n^)
function elfsAccounting2(inputArr) {
    for( var i = 0; i < inputArr.length; i++){
        for( var j = 0; j < inputArr.length; j++){
            for( var k = 0; k < inputArr.length; k++){
                var sum = inputArr[i] + inputArr[j] + inputArr[k]
                if(sum === 2020 && inputArr[i] && inputArr[j] &&inputArr[k]) 
                    return inputArr[i]*inputArr[j]*inputArr[k]
            }
        }
    } 
}

