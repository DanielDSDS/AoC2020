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
    return input;
});


//Day 3: obstructed path
//Time complexity: prob O(n^2)

function trees(a){
    var t = 0;
    for(var i = 1, j = 0; i < a.length - 1; i++){
        j = j + 3 
        if(j<=a[i].length){
            console.log('i: ',i,'j: ',j)
            if(a[i][j] === '#')
                t++ 
        }else{
            j = 0
        }
    }
    return t;
}

/*
function transpose(m) {
    var reversed = [];
    var transposed = [];
    var pivot = [];
    //Invert matrix
    for(var i = 0; i < m.length - 1; i ++){
        reversed.push(m[i].reverse())
    }    

    //Transpose matrix
    for(var i = 0; i < reversed[i].length; i++){
        for(var j = 0; j < reversed.length; j++){
            pivot.push(reversed[j][i])
        }
        transposed.push(pivot)
        pivot = [];
    }    

    return transposed 
}
*/
















