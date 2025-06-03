// String methods, self explanatory

let nome = 'Your Name'

console.log(nome);
console.log('Using -> .length()      ->'  , nome.length); 
console.log('Using -> .charAt()      -> ' , nome.charAt(0));
console.log('Using -> .indexOf()     ->'  , nome.indexOf('C'));
console.log('Using -> .replace()     ->'  , nome.replace('Your', 'Mine'));
console.log('Using -> .substr()      -> ' , nome.substr(5, 6));
console.log('Using -> .toUpperCase() ->'  , nome.toUpperCase());
console.log('Using -> .toLowerCase() -> ' , nome.toLowerCase());
console.log('------------');
console.log('       Empty'.trim());

console.log('-------------');

console.log('Using -> .ceil()'  ,Math.ceil(100.2));
console.log('Using -> .floor()' ,Math.floor(200.2));
console.log('Using -> .round()' ,Math.round(200.2));

console.log('Using -> .sqrt()' ,Math.sqrt(81));
console.log('Using -> .cbrt()' ,Math.cbrt(81));
console.log('Using -> .pow()'  ,Math.pow(9, 2));

console.log('Using -> .abs()'    ,Math.abs(-100.2));
console.log('Using -> .random()' ,Math.random() * 100);