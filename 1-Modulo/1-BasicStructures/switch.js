// it's a control structure, better for executing blocks of commands
// for testing must have the prompt-sync library

const prompt = require('prompt-sync')();

let num1 = Number(prompt("Firts Number: "))
let num2 = Number(prompt("Second Number: "))

let operation = prompt("Wich operation? (+ | - | / | *): ")

switch(operation){
    case '+':
        console.log(num1 + num2);
        break
    case '-':
        console.log(num1 - num2);
        break
    case '*':
        console.log(num1 * num2);
        break
    case '/':
        if(num2 !== 0){
            console.log(num1 / num2);
        } else{
            console.log("Trying to divide by zero");
        }
        break
    default:
        console.log('Operation invalid!!');
        break
}