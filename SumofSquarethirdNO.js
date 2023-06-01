// ? Print true, if sum of squares of any 2 numbers is a 3rd given number

function checkSumOfSquares(num1,num2,num3){
    const squareSum = Math.pow(num1,2) + Math.pow(num2,2);
    return squareSum === num3;
}

const number1 = 3;
const number2 = 4;
const number3 = 25;

console.log(checkSumOfSquares(number1,number2,number3));