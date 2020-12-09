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

    var slopes = [[1,1],[3,1],[5,1],[7,1],[1,2]]
    var t = trees(input,slopes,1)
    var s = p2(input,slopes)
    console.log('\np1 trees: ',t)
    console.log('p2 ans: ',s)
    return input;
});


//Day 3: obstructed path
//Time complexity: prob O(n)

function trees(a,sl,ix){
    var t = 0;
    var inc1 = sl[ix][0];
    var inc2 = sl[ix][1];
    for(var i = inc2, j = 0; i < a.length - 1; i += inc2){
        j = j + inc1 
            if(a[i][j%a[i].length] === '#'){
                console.log('i: ',i,'j: ',j,'X')
                t++ 
            }else{
                //console.log('i: ',i,'j: ',j)
            }
    }
    return t;
}

function p2(i,s){
    var ans = 1;
    s.forEach((sl,k)=>{
        ans *= trees(i,s,k) 
    })

    return ans
}









