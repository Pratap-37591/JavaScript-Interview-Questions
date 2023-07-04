var num1 = 10;
var num2 = 5;
var num3 = 8;

if (num1 > num2 && num1 < num3 || num1 < num2 && num1 > num3) {
  console.log(num1 + " is the middle number.");
} else if (num2 > num1 && num2 < num3 || num2 < num1 && num2 > num3) {
  console.log(num2 + " is the middle number.");
} else {
  console.log(num3 + " is the middle number.");
}
