// Find out  sum of all odd numbers between given numbers 


function sumOfOddNumbers(start,end){
    var sum = 0;
    for(var i = start; i <= end; i++){
        if(i%2 !== 0){
            sum += i;
        }
    }

    return sum;
}

var startNumber = 5;
var endNumber = 7;
var result = sumOfOddNumbers(startNumber,endNumber);

console.log(result);