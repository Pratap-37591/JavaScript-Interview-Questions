// Number System

// 1. Print a bigger number from 2 given numbers

//Method 1:
var num = [1, 3, 4, 2, 4, 0];
console.log(Math.max(...num));

// Method 2:

var a = 3;
var b = 10;

if (a > b) {
  console.log(a + " is bigger");
} else if (a < b) {
  console.log(b + " is bigger");
} else {
  console.log("both are bigger");
}
