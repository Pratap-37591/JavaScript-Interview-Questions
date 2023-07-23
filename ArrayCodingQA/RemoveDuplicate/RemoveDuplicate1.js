// input
// const duplicateArray = [1, 2, 5, 2, 1, 8];

// // output [1,2,5,8]

// const unique = [];

// for (let i = 0; i < duplicateArray.length; i++) {
//   if (unique.indexOf(duplicateArray[i]) === -1) {
//     unique.push(duplicateArray[i]);
//   }
// }

// console.log(unique);

// const duplicateArray = [1, 2, 5, 2, 1, 8];

// // // output [1,2,5,8]

// const unique = [];

// duplicateArray.sort();

// let temp;

// for (let i = 0; i < duplicateArray.length; i++) {
//   if (duplicateArray[i] !== temp) {
//     unique.push(duplicateArray[i]);
//     temp = duplicateArray[i];
//   }
// }

// console.log(unique);

// method 3

const duplicateArray = [1, 2, 5, 2, 1, 8];

// // output [1,2,5,8]
obj = {};

for (const i of duplicateArray) {
  obj[i] = true;
}

console.log(Object.keys(obj));


