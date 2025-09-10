// Reverse String in JavaScript

const str = "Hello World";

// 1 Split + Reverse + join
// console.log(str.split('').reverse().join(''))

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseString(str));

// 2 Using a for loop

// function reverseString(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }

//   return reversed;
// }

// console.log(reverseString(str));

// 3 Using ES6 Spread Operator

const reverseString = (str) => [...str].reverse().join("");
console.log(reverseString(str));
