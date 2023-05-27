// Print all even numbers between two given numbers?

function evenNumbers(start,end){
    for(var i = start; i <= end; i++){
        if(i%2 === 0){
            console.log(i);
        }
    }

    
}

var startNumber = 3;
var endNumber = 15;
evenNumbers(startNumber,endNumber);