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
        input.push(data[item])
        input[item] = input[item].replace(/\r/g,'') 
    }
		
		console.log(calculateSeat(input))

    return input;
});

const calculateSeat = (seats) => {
	let max = 0
	for(var line in seats){	
		let ID = calculateID(seats[line])	
			if(ID > max){
				console.log(seats[line])	
				max = ID
			}
	}
	return max
}

const calculateID = (ticket) => {
	let arr = ticket.split("")
	let start = 0
	let ref = 127
	let colStart = 0
	let colRef = 7
	let a1 = 0
	let a2 = 0
	for(let i=0; i<10; i++){
		let delta = ref - start 
		let colDelta = colRef-colStart  
		if(i<7)
			if(arr[i] === 'F' ){	
				ref = Math.trunc(ref - delta/2)
				a1 = ref
			}else{
				start = Math.trunc(start + delta/2)
				a1 = start 
			}
		else
			if(arr[i] === 'L' ){	
				colRef = Math.trunc(colRef - colDelta/2)
				a2 = colRef
			}else{
				colStart = Math.trunc(colStart + colDelta/2)
				a2 = colStart+1 
			}
		//	console.log('[',arr[i],'] pos',i,' s: ',start,' r:', ref)
	}

	return a1*8+a2 

}










