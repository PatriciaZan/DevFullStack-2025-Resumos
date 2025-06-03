// Creating new Dates and manipulating then

let date = new Date()
console.log(date);

console.log(date.getMonth() + 1);
console.log(date.getFullYear());
console.log(date.toString());

console.log(date1.getTime());
console.log(date2.getTime());

let millisecondsBetweenDates = Math.abs(date1.getTime() - date2.getTime())
console.log(millisecondsBetweenDates);

let millisecondsbyDay = (1 * 24 * 60 * 60 * 1000);
console.log(`A diferença entre ${millisecondsBetweenDates/millisecondsbyDay}`);
