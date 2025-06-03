// Array is a type of global object to store values
// It's unidimensional

let list = Array()

let nameList = ['Name1', 'Name2']
let numbers = [1, 2, 3, 4, 5, 6, 6]
let random = [1, '2', 'String', true]

// You can use a 'for loop' to iterate the array

for(let i = 0; i <= numbers.length; i++){
    console.log(numbers[i]);  // 1 2 3 4 5 6 6
}

// You can create a new array with new or less elements using:
// push -> add in the end of the array
// unshift -> add in the end beginning of the array

// pop -> remove the last element of the array
// shift -> remove the firts element of the array

let arrayMethods = ['Juice', 'Milk', 'Cheese', 'Banana']

console.log(arrayMethods.push('push'));
console.log(arrayMethods.unshift('unshift'));
console.log(arrayMethods.pop());
console.log(arrayMethods.shift());

