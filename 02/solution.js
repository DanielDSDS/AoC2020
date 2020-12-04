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
   
    console.log("\n Day 2 Part 1: ",evaluatePasswords(input),"!")
    console.log("\n Day 2 Part 2: ",evaluatePasswordsPt2(input),"!")
    
    return input;
});

//This is the main function that will traverse the input and evaluate each line
function evaluatePasswords(input) {
    var sum = 0;
    input.reduce( (curr, acum, i, arr) => {
        if(arr[i].length){
            console.log(arr[i])
            //split the line in 3 main pieces
            var items = arr[i].split(' ')
            var policy = getPolicy(items[0])
            var char = getChar(items[1])
            var password = items[2]
            var isValid = evaluatePassword(policy,char,password)

            if(isValid)
                sum = sum + 1
        }
    },0)

    return sum
}

function evaluatePasswordsPt2(input) {
    var sum = 0;
    input.reduce( (curr, acum, i, arr) => {
        if(arr[i].length){
            //split the line in 3 main pieces
            var items = arr[i].split(' ')
            var policy = getPolicy(items[0])
            var char = getChar(items[1])
            var password = items[2]
            var isValid = evaluatePasswordPt2(policy,char,password)

            if(isValid)
                sum = sum + 1
        }
    },0)

    return sum
}

//get both limits for the policy values
function getPolicy(str) {
    return [+str.split('-')[0],+str.split('-')[1]]
}

//get the char to be evaluated
function getChar(str) {
    return str.split(':')[0].toString()
}

//check if the password matches the right ammount of characters
function evaluatePassword(policy,char,password) {
    //create a regex for the char from the current policy
    const regex = new RegExp(`${char}`,"g")
    //count each appearance of said regex inside the password
    var policyCount = (password.match(regex) || []).length 
    console.log(policy, "count: ",policyCount)

    if(policyCount >= policy[0] && policyCount <= policy[1])
        return true
    return false
} 

//This function will evaluate the position of the policy characters inside of the password
function evaluatePasswordPt2(policy,char,password) {
    if(password.charAt(policy[0]-1) === char ^ password.charAt(policy[1]-1) === char){
        return true
    }
    return false
} 


