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
        input.push(data[item].match(/[.#]/g));
    }

    var t = trees(input)
    console.log('trees: ',t)
    console.log('1,3',input[1][3],'2,6',input[1][6])
    return input;
});


//Day 3: obstructed path
//Time complexity: prob O(n)

function trees(a){
    var t = 0;
    for(var i = 1, j = 0; i < a.length - 1; i++){
        j = j + 3 
            if(a[i][j%a[i].length] === '#'){
                console.log('i: ',i,'j: ',j,'X')
                t++ 
            }else{
                console.log('i: ',i,'j: ',j)
            }
    }
    return t;
}









