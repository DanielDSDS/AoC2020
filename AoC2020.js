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
//First try: brute force
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

//obtain input array from text file

read(__dirname+ '/01/input.txt', function(data) {
  var input = [];
  for(var num in data){
    input.push(+data[num].match(/\d+/g));
  }
});

function elfsAccounting2(inputArr2){
    
}

console.log(elfsAccounting(inputArr));
