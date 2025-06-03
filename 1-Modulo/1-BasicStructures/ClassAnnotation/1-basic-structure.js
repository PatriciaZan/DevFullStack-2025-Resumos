/*
console.log("Hello World!");
console.log('hello World!');
console.log('"Utilizando aspas"');

console.log(typeof("Olá"));
console.log(typeof(2.4));

console.log(1.5);

// Comentario em linhas

//-----------------------------------------------
// Variáveis

let variavelLet = 'Conteudo let pode ser modificado'
console.log(variavelLet);

var variavelVar = 'Var não muito utilizado, por causa do escopo global'
console.log(variavelVar);

const variavelConst = 'Const não é modificada, constante'
console.log(variavelConst);

let test
console.log(test); // undefined não foi inicializada (tipo undefined)
test = 'teste'
console.log(test);

let variavelVazia = null
console.log(variavelVazia); // anicializa a var vazia (tipo objeto)

//-------------------------------------------------
// Operações

let num1 = 10
let num2 = 2
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);

// Ordem de precedência -> () -> ** -> * / -> + -

let num = "10"
console.log(num + 10); 
console.log(parseInt(num) + 10);  // or +num


let counter = 1;
let step = 10;

counter++; // post increment
++counter; // pre increment
console.log(counter);

counter += step
console.log('Step:' + counter);


console.log(10 > 5);      // true
console.log(10 >= 5);     // true
console.log(10 < 5);      // false
console.log(10 <= 5);     // false
console.log(10 == 10);    // true
console.log(10 === '10'); // false
console.log(10 != 10);    // false
console.log(10 !== '10'); // true

console.log((10 < 5) && (10 > 2)); //   fasle F T 
console.log((10 < 5) && !(10 > 2)); //  fasle F F
console.log((10 < 5) || (10 > 2)); //   true F F
console.log(!(10 < 5) || (10 > 2)); //  false F F


// ------------------------------------------
// if else

const nota = 90
if(nota <= 60){
    console.log('Reprovado');
} else if(nota > 90) {
    console.log('Aprovado +90');
} else {
    console.log('Aprovado');
}

(nota < 60) ? console.log('Repro') : console.log('Aprov');

*/


// let a = true
// let b = false
// console.log(a && (b || !a))


// -----------------------------------------------
// Switch
/*
const prompt = require('prompt-sync')();

let numero1 = Number(prompt("Primeiro numero: "))
let numero2 = Number(prompt("Segundo numero: "))

let operacoes = prompt("Qual é a operação? (+ | - | / | *): ")

switch(operacoes){
    case '+':
        console.log(numero1 + numero2);
        break
    case '-':
        console.log(numero1 - numero2);
        break
    case '*':
        console.log(numero1 * numero2);
        break
    case '/':
        if(numero2 !== 0){
            console.log(numero1 / numero2);
        } else{
            console.log("Tentando dividir pro zero");
        }
        break
    default:
        console.log('Operação invalida!!');
        break
}
*/

//-----------------------------------------------------------
// Loops
// --- while ---
/*
//    while(condição for verdadeira){
//        faça isso aqui até que a condição mude
//   }

// Mais comum utilizar com contadores
let contador = 0
while (contador <= 5){
    console.log(contador);
    contador++
}
    */

// --- for ---
// Sabe o numero de repetições
// inicializa ; condição ; atualiza o valor
/*
for(let cont = 0; cont <= 10; cont++){
    console.log(cont); 
}
*/

// --- do while ---
// Pelo menos uma vez irá executar
/*
let contador = 0
do {
  console.log(contador, contador++);
}while(contador < 10)
*/

// --- methodos string ---
/*
let nome = 'Julio César'

console.log(nome);
console.log('.Utilizando .length()      ->' , nome.length);
console.log('.Utilizando .charAt()      -> ' , nome.charAt(0));
console.log('.Utilizando .indexOf()     ->' , nome.indexOf('C'));
console.log('.Utilizando .replace()     ->' , nome.replace('Julio', 'Cleyton'));
console.log('.Utilizando .substr()      -> ' , nome.substr(5, 6));
console.log('.Utilizando .toUpperCase() ->' , nome.toUpperCase());
console.log('.Utilizando .toLowerCase() -> ' , nome.toLowerCase());
console.log('------------');
console.log('       Wesley'.trim());

console.log('-------------');

console.log('.Utilizando .ceil()' ,Math.ceil(100.2));
console.log('.Utilizando .floor()' ,Math.floor(200.2));
console.log('.Utilizando .round()' ,Math.round(200.2));

console.log('.Utilizando .sqrt()' ,Math.sqrt(81));
console.log('.Utilizando .cbrt()' ,Math.cbrt(81));
console.log('.Utilizando .pow()' ,Math.pow(9, 2));

console.log('.Utilizando .abs()' ,Math.abs(-100.2));
console.log('.Utilizando .random()' ,Math.random() * 100);

*/

// --- Datas ---
/*
let data = new Date()
console.log(data);
console.log(data.getMonth() + 1);
console.log(data.getFullYear());
console.log(data.toString());
*/

let date1 = new Date(2015, 7, 7)
let date2 = new Date(2025, 7, 7)

console.log(date1.getTime());
console.log(date2.getTime());

let milissegundosEntreDatas = Math.abs(date1.getTime() - date2.getTime())
console.log(milissegundosEntreDatas);

let milissegundosPorDia = (1 * 24 * 60 * 60 * 1000);
console.log(`A diferença entre ${milissegundosEntreDatas/milissegundosPorDia}`);





