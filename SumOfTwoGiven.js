// ? Print true, if sum of any 2 numbers is a 3rd given number

// ! Method 1
function checkSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }

  return false;
}

const number = [1, 2, 3, 4, 5];
const targetSum = 7;
console.log(checkSum(number, targetSum));

// ! Method 2

function checkSum(array, target) {
  const numberSet = new Set(array);

  for (let num1 of array) {
    for (let num2 of array) {
      if (num1 !== num2 && numberSet.has(target - num1 - num2)) {
        return true;
      }
    }
  }

  return false;
}

const numbers = [1, 2, 3, 4, 5];
const targetSum2 = 7;
console.log(checkSum(number, targetSum2));


