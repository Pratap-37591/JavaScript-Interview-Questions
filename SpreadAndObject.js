//  Difference between Spread Operator and Object.assign();

//spread operator

const source1 = { bar: 1 };
const source2 = { baz: 2, foo: 2 };

const target = { ...source1, ...source2 };

console.log(target);
console.log(source1);
console.log(source2);

//Object.assign() Method

const obj1 = { bar: 1 };
const obj2 = { baz: 2, foo: 2 };

const memory = Object.assign({}, obj1, obj2);

console.log(memory);
console.log(obj1);
console.log(obj2);
