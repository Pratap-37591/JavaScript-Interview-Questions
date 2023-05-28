// ? What are the possible ways to create objects in JavaScript

// !Method 1:  Using Object Literal

const person = {
    name: 'pratap',
    age: 21
}

console.log(person);


// !Method 2:  Using Object constructor

const myObject = new Object();

myObject.name = 'Pratap';
myObject.age = 21;
myObject.sayHello = () =>{
    console.log(`Hello ${myObject.name} your age is ${myObject.age}`); 
}

myObject.sayHello();


// !Method 3:  Using new keyword

function Person(name,age){
    this.name =name;
    this.age =age;

    this.sayhello = function() {
        console.log(`hello ${this.name}and ${this.age}`)
    }
}

var person1 = new Person('pratap', 20);

console.log(person1.sayhello());


//  Todo  or 

var date = new Date();

console.log(date.getFullYear());



// !Method 4:  using Object.create() Method


const personPrototype = {
    greeting: function() {
        console.log(`Hello my name is ${this.name}`)
    }
}

const john = Object.create(personPrototype);
john.name = 'harry';
john.age = 21;

john.greeting();



// !Method 5:  Using class ES6 

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hello my name is ${this.name}`);
    }
}

const john = new Person('bharath',23);


console.log(john.greet());