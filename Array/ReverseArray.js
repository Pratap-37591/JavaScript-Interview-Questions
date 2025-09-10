// Reverse Array in JavaScript

const array = ["abhi", "shiva", "ganesh", "shankar"];

// 1 Using Reverse [ Builtin method]

// console.log(array.reverse());

// 2 Using for loop

// function reverseString(arr) {
//   let reversed = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
//   }

//   return reversed;
// }

// console.log(reverseString(array));

// 3 Using while loop

// function reverseString(arr) {
//   let start = 0;
//   end = arr.length - 1;

//   while (start < end) {
//     [arr[start], arr[end]] = [arr[end], arr[start]];
//     start++;
//     end--;
//   }
//   return arr;
// }

// console.log(reverseString(array));

// 4 Using map

function reverseString(arr) {
  return arr.map((_, i, a) => a[a.length - 1 - i]);
}

console.log(reverseString(array));

// 5 Using Spread Operator

console.log();
