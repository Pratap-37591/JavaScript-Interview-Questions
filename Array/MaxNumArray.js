// Find the maximum number in an array.

const num = [1, 3, 22, 33, 8, 4];

// console.log(Math.max(...num));

let maxNum = num[0];

for (let i = 1; i < num.length; i++) {
  if (num[i] > maxNum) {
    maxNum = num[i];
  }
}

console.log(maxNum);
