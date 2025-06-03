// Objects are used to store a collection of values

// Creating a Object ##################################################
// firts way of creating 
const nameObject = {
    firstName: "Object",
    category: "Solid",
    number: 10,
}

// second way
const secondObject = {};

secondObject.name = "SecondObject"
secondObject.category = "Empty"
secondObject.number = 20

// third way
const thirdObject = new Object();

thirdObject.name = "ThirdObject";
thirdObject.category = "Plasmatic";
thirdObject.number = 30;

// Accessing Object Properties #######################################
let name = nameObject.firstName;
let category = nameObject["category"]

// Adding new Properties #############################################
nameObject.newProp = "ThisIsNew!"

// Deleting Props ####################################################
delete nameObject.category

// Nested Objects ####################################################
obj = {
    name: "Object",
    age: 10,
    nestedObject: {
        num1: "num1",
        num2: "num2",
        num3: "num3",
    }
}

console.log(obj.nestedObject.num1);
console.log(obj.nestedObject[num2]);

// Object Methods ####################################################
const personObject = {
    firstName: "Your",
    lastName: "Name",
    age: 32,

    person: function(){
        return this.firstName + " " + this.lastName + " has a age of " + this.age
    }
}

console.log(personObject.person());

// Object Constructor ##################################################

function Person(first, last, age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

const firstPerson = new Person("Sally", "Smith", 23)
