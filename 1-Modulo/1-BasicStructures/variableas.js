// Variables don't need to be assigned with a type.

let number = 10;
let stringNumber = "10";
let string = "This is a String";
let nullVar = null // it's empty
let undefinedVar = undefined // it's not defined
let  undefinedVar2 // can be assigned after

const constant = "This variable will not be allow to be moded";
const constNumber = 20;

var outdated = "Not very good to use but can show up!"

// Operations

let num1 = 10
let num2 = 20

console.log(`+ ${num1 + num2}`);
console.log(`- ${num1 - num2}`);
console.log(`* ${num1 * num2}`);
console.log(`/ ${num1 / num2}`);
console.log(`% ${num1 % num2}`);

// For receiving a number in a String format you can use the 'parseInt(num)'

console.log(parseInt(stringNumber) + 10); // 20

// You can increment the number

let counter 
let step = 10

counter++; // post increment
++counter; // pre increment

counter += step // count + 10

// Comparison arguments types

console.log(10 > 5);      // true
console.log(10 >= 5);     // true
console.log(10 < 5);      // false
console.log(10 <= 5);     // false
console.log(10 == 10);    // true
console.log(10 === '10'); // false
console.log(10 != 10);    // false
console.log(10 !== '10'); // true

console.log((10 < 5) && (10 > 2));  //  fasle F T 
console.log((10 < 5) && !(10 > 2)); //  fasle F F
console.log((10 < 5) || (10 > 2));  //  true  F F
console.log(!(10 < 5) || (10 > 2)); //  false F F

