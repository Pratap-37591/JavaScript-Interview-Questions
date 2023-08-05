const fruits = [
  "Apple",
  "Orange",
  "Grapes",
  "Banana",
  "Banana",
  "Orange",
  "Apple",
  "Lemon",
];



// by using set method

// 1 : Normal using new keyword with Set operator
const uniqueFruits = new Set(fruits);

// 2 : using Spread Operator
// const uniqueFruits = [...new Set(fruits)];

// 3 : using Array.from() method
// const uniqueFruits = Array.from(new Set(fruits));



// const uniqueFruits = fruits.filter(item,index,self => {
//      uniqueFruits.includes(item !== index){
//         uniqueFruits.push(item)
//      }
// })

console.log(uniqueFruits);



document.querySelector("#myDropdown").innerHTML = `
${uniqueFruits.map((value) => {
  return `<option>${value}</option>`;
})}
`;
