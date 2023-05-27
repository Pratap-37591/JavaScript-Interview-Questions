// Method 1: 

//Remove Duplicates from array in javaScript

const originalArray = [1,22,33,22,33];
console.log([...new Set(originalArray)]);


// Method 2:

var myArray = [1,2,3,3,4,4,5];
var unqiueArray = myArray.filter((value, index, self) => {
    return self.indexOf(value) === index;
})

console.log(unqiueArray);

// Method 3:

var array = [1,2,3,4,5,4,4,3];
var uniqArray = array.reduce((accumulator, currentValue) => {
    if(!accumulator.includes(currentValue)) {
        accumulator.push(currentValue);
    }

    return accumulator;
}, []);

console.log(uniqArray);
