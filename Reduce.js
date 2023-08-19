// // sum of the numbers

const values = [90, 4, 5, 33, 200];

// // function findSum(params) {
// //   let sum = 0;
// //   for (let index = 0; index < values.length; index++) {
// //     sum = sum + values[index];
// //   }
// //   return sum;
// // }

// // console.log(findSum(values));

// // In using Reduce method

// // const output = values.reduce(function (acc, curr) {
// //   acc = acc + curr;
// //   return acc;
// // }, 0);

// // console.log(output);

// function findMax(params) {
//   let max = 0;
//   for (let i = 0; i < values.length; i++) {
//     if (values[i] > max) {
//       max = values[i];
//     }
//   }
//   return max;
// }

// console.log(findMax(values));

// const output = values.reduce(function (acc, curr) {
//   if (curr > acc) {
//     acc = curr;
//   }
//   return acc;
// }, 0);

// console.log(output);

// function findMax(params) {
//   let min = 0;
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] < max) {
//       max = arr[index];
//     }
//   }
//   return max;
// }

// const arr = [3, 33, 222, 220];
// console.log(findMax(arr));

const output = values.reduce(function (acc, cur) {
  return cur < acc ? cur : acc;
});

console.log(output);
