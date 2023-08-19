// function findOddEven(num) {
//   if (num % 2 === 0) {
//     console.log("Number is even");
//   } else {
//     console.log("Number is odd");
//   }
// }

// var number = 10;
// findOddEven(number);

function findOddEven(numbers) {
  const even = numbers.filter((item) => {
    return item % 2 === 0;
  });
  const odd = numbers.filter((item) => {
    return item % 2 !== 0;
  });

  console.log("even numbers are ", even);
  console.log("odd numbers are", odd);
}

const numbers = [4, 27, 22];
findOddEven(numbers);
