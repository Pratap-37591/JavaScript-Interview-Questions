// Find out immediate next 5 multiple of a given number?

function findNextMultiples(number,count){
    
    var multiple = [];
    for(var i=1; i<count; i++){
        var multiples = number * i;
        multiple.push(multiples);
    }

    return multiple;
}

var givenNumbers = 7;
var nextMultiples = findNextMultiples(givenNumbers, 5);

console.log(nextMultiples);