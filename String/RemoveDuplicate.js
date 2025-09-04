// Remove Duplicates from String In JavaScript

const str = "Hello World";

// 1 Using Set

// console.log([...new Set(str)].join(''))

// function RemoveDuplicates(str) {
//     return [...new Set(str)].join('')
// }

// console.log(RemoveDuplicates(str))

// 2 Using filter

// function RemoveDuplicates(str) {
//   return str
//     .split("")
//     .filter((char, index, arr) => arr.indexOf(char) === index)
//     .join("");
// }

// console.log(RemoveDuplicates(str));

// 3 Using for loop

// function RemoveDuplicates(str) {
//   let unquie = "";
//   for (let i = 0; i < str.length; i++) {
//     if (!unquie.includes(str[i])) {
//       unquie += str[i];
//     }
//   }

//   return unquie;
// }

// 4 Using reduce

// function RemoveDuplicates(str) {
//   return str.split("").reduce((unique, char) => {
//   return  !unique.includes(str[char])) {
//       unique.push(str[char]);
//     }
// }

// }

// console.log(RemoveDuplicates(str));
