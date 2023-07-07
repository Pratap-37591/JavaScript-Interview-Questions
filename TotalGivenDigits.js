// ? Find out total digits of a given number

// ! Method 1:

var digits = 2345632234;
console.log(Math.floor(Math.log10(digits)) + 1);


// ! Method 2:

var numbers = 12345;
console.log(String(numbers).length);

// Method 3:
function CountDigits(){
    const numberString = String(number).trim().replace(/\D\g, ""/);
    return numberString.length;
}

number = 123456;
const digitCount = CountDigits(number);
console.log(`The number ${number} has ${digitCount} digits.`);