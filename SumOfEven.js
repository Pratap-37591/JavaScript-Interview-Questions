// Find out sum of all even numbers between given numbers


function sumOfEvenNumbers(start,end){
    var sum = 0;
   for(var i= start; i<=end; i++){
    if(i%2 === 0){
         sum += i;
    }
   }
   return sum;
}

var startNumber = 5;
var endNumber = 8;
var result = sumOfEvenNumbers(startNumber,endNumber);
console.log(result);