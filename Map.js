// const persons = [
//   { firstname: "Malcom", lastname: "Reynolds" },
//   { firstname: "Kaylee", lastname: "Frye" },
//   { firstname: "Jayne", lastname: "Cobb" },
// ];

// function getFullName(item) {
//   return [item.firstname, item.lastname].join(" ");
// }

// console.log(persons.map(getFullName));

const arr = [2, 5, 6, 3, 5, 10];

// const output = arr.map((x) => x.toString(2)); // Binary

// console.log(output);

const original = [2, 3, 4, 5, 3];

// const newarr = original.map(item => item * 2).filter( item => item > 5)

// console.log(original);

// const newarr = original
//   .map((item) => item.toString(2))
//   .filter((item) => item > 5);

// console.log(newarr);

const persons = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" },
];

const output = persons.map((user) => {
  return [user.firstname, user.lastname].join(" ");
});
console.log(output);
