// ############ Exercicios ###########################################################
// Para testar o código basta remover a abertura e fechamento de comentários no respectivo exercicio /* */
// Para alguns exercicios não foram utilizados o prompt como inpu devido a erro de conflito de meu sistema

// ### 01 #############################################################################
//  Verifique se o um numero é par ou impar.

/*
function verificar(num){
    num % 2 === 0 ? console.log('Par') : console.log('Impar')
}
// OU
function verificar2(num){
    let res = num % 2 === 0 ? 'PAR' : 'IMPAR'
    console.log('verificar2: ' , res);
}

verificar(11);
verificar2(10);
/*

// ### 02 #############################################################################
//  Encontrar o maior entre três numeros.

/*
function findBiggerNumber(num1, num2, num3){
    let bigger;
    if((num1 > num2) && (num1 > num3)){
        bigger = num1
        console.log('O maior numero é o 1º : ' , bigger); 
    } else if ((num2 > num3) && (num2 > num3)){
        bigger = num2
        console.log('O maior numero é o 2º : ' , bigger); 
    } else if ((num3> num2) && (num3 > num1)){
        bigger = num3
        console.log('O maior numero é o 3º : ' , bigger); 
    } else{
        bigger = num1 == num2 || num1 == num3 ? num1 : num2
        console.log('2 ou mais numeros são iguais a ' , bigger);  
    }
    //console.log('if/else if: ' + bigger);
}

// OU

function findGreaterNumber(num1, num2, num3){
    console.log('Math.max: ' , Math.max(num1, num2, num3));
}

findBiggerNumber(30,10,30);
findGreaterNumber(10,1,30);
*/

// ### 03 #############################################################################
//  Façam uma calculadora simples usando entrada de usuário.

/*
const prompt = require('prompt-sync')();

let numero1 = Number(prompt("Primeiro numero: "))
let numero2 = Number(prompt("Segundo numero: "))

let operacoes = prompt("Qual é a operação? (+ | - | / | *): ")
let resposta = 0;

if(operacoes === '+'){
    resposta = numero1 + numero2
} else if(operacoes === '-'){
    resposta = numero1 - numero2
} else if(operacoes === '*'){
    resposta = numero1 * numero2
}else if(operacoes === '/'){
    if(numero2 !== 0){
        resposta = numero1 / numero2
    } else{
        console.log("Tentando dividir pro zero");
        resposta = 0
    }
} else{
    console.log("operação invalida");
    resposta = 0
}

if(resposta !== undefined){
    console.log("O Resultado é: ", resposta);
    
}
*/

// Versão em Switch

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

// ### 04 ############################################################################# 
//  Verificar se um número é positivo, negativo ou zero. 

/*
function verifica(numero){
    switch(true){
        case numero > 0:
            return 'O número é positivo!';
            break
        case numero < 0:
            return 'O número é negativo!';
            break
        case numero === 0:
            return 'O número é igual a zero!';
            break
        default:
            return 'Algo deu errado!';
            break
    }}

console.log(verifica(5));
console.log(verifica(-10));
console.log(verifica(0));
*/

// ### 05 #############################################################################
//  Verificar se um número é bissexto. 

/*
let respostaBissexto
function bissexto(numero){
    if(numero % 4 === 0){
        respostaBissexto = 'É Bissexto'
        return respostaBissexto
    } else {
        respostaBissexto = 'Não é bissexto!'
        return respostaBissexto
    }
}
console.log(bissexto(16))
console.log(bissexto(10))
*/


// ### 06 ############################################################################# 
//  Definam faixas etárias para crianças, adolescentes e adultos
//  com switch apresentem na tela se a pessoa que informou a idade está em uma 
//  e qual a faxia etária. 

/*
function faixaEtaria(idade){
    switch(idade != null){
        case idade <= 12:
            return 'Criança'
            break
        case idade > 12 && idade <= 20:
            return 'Adolescente'
            break
        case idade > 20:
            return 'Adulto'
            break
    }
}

console.log(faixaEtaria(9));
console.log(faixaEtaria(15));
console.log(faixaEtaria(42));
*/

// ### 07 ############################################################################# 
// Tabuada usando while

/*
let numero = 1
let tabuada = 2
while(numero <= 10){
    console.log(numero * tabuada);
    numero++
}


// Forma do Professor
const prompt = require('prompt-sync')();
let numeroTabuada = Number(prompt("Qual nuemro da tabuada você quer?"))

let contadora = 1
while(contadora <= 10){
    console.log(`${numeroTabuada} X ${contadora} = ${numeroTabuada * contadora}` );
    contadora++
}

let contadoraMenos = 10
while(contadoraMenos >= 0){
    console.log(contadoraMenos);
    contadora--
}
    */

// ### 08 ############################################################################# 
// Faça a média aritmética de números inseridos até que o usuário digite 0
/*
const prompt = require('prompt-sync')();

let cont = 0
let numero
let media = 0

while(numero != 0){
    numero = Number(prompt("Informe os números que deseja calcular a média, para finalizar digite 0 : "))
    media += numero
    cont++
}

let valorFinal = media / ( cont - 1);
console.log(`Sua média final é = ${valorFinal}`);
*/

// !! Explicação utilizando o do while do professor !!
/*
let cont = 0
let numero
let media = 0

do {
    numero = Number(prompt("Informe os números que deseja calcular a média, para finalizar digite 0 : "))
    media += numero
    cont++
} while(numero != 0)

let valorFinal = media / ( cont - 1);
console.log(`Sua média final é = ${valorFinal}`);
*/

// ### 09 ####### aula06 ############################################################## 
// Escreva um algoritmo que leia uma temperatura em graus Celsius e devolva em Fahrenheit

/*
const prompt = require('prompt-sync')();
let numero = Number(prompt("Digite o numero que deseja converter: "))
let resultado =  (numero * 9/5) + 32

console.log(`${resultado} F`);
*/

// ### 10 ####### aula06 ############################################################## 
// Escreva um algoritmo para ler o número de eleitores de um munícipio, 
// o número de votos brancos, nulos e válidos.
// Calcular e escrever o percentual que cada um representa em relação ao total de eleitores
/*
const prompt = require('prompt-sync')();
let totalEleitores = Number(prompt("Informe o total de Eleitores:"))
let votosBranco = Number(prompt("Informe o total de votos brancos:"))
let votosNulo = Number(prompt("Informe o total de votos nulos:"))
let votosValidos = Number(prompt("Informe o total de votos válidos: "))

let checaTotal = votosBranco + votosNulo + votosValidos

if(totalEleitores === checaTotal){
    let percentualBranco = (votosBranco/totalEleitores) * 100
    let percentualNulos = (votosNulo/totalEleitores) * 100
    let percentualValidos = (votosValidos/totalEleitores) * 100

    console.log(`O percentual de votos é: 
                Brancos: ${percentualBranco}
                Nulos: ${percentualNulos}
                Validos: ${percentualValidos}
                `);
} else{
    console.log(`O numero total de eleitores ${totalEleitores} 
    não bate com a soma dos Brancos/Nulos/Validos ${checaTotal}`);
        
}
*/

// ### 11 ####### aula06 ############################################################## 
// A turma C é composta de 60 alunos, e a turma D de 20 Alunos.
// Escreva um algoritmo que leia o percentual de alunos reprovados na turma C,
// o percentual de aprovados na turma D, calcule e escreva:

// a) O número de alunos reprovados na turma C
// b) O número de alunos reprovados na turma D
// c) A percentagem de alunos reprovados em relação ao total de alunos das duas turmas.

//[Exemplo de dados de entrada]
//10 (percentual de alunos repovados na turma C)
//85 (percentual de alunos aprovados na turma D)

//[Saída para os dados de entrada acima]
// 6 (quantidade de alunos repovados na turma C)
// 3 (quantidade de alunos reprovados na turma D)
// 11.25 (percentual de alunos reprovados em relação ao total de alunos das duas turmas)

/*
const prompt = require('prompt-sync')();

let turmaC = 60
let turmaD = 20

let totalAlunos = turmaC + turmaD

// recebe os valores de percentual
let percentualEntradaC = Number(prompt("Qual o percentual de reprovados na tuma C: "))
let percentualEntradaD = Number(prompt("Qual o percentual de aprovados na tuma D: "))

// Calcula o percentual da turma C e D, transformando a entrada de aprovados D para reprovados
let quantiaReprovadoC = (percentualEntradaC * turmaC) / 100
let quantiaAprovadoD = (percentualEntradaD * turmaD) / 100
let quantiaReprovadoD = turmaD - quantiaAprovadoD

// calcula o pecentual de ambas as turmas
let totalReprovados = (quantiaReprovadoC + quantiaReprovadoD) / totalAlunos * 100

console.log(`
    A quantia de alunos reprovados é:
    Turma C ${quantiaReprovadoC}
    Turma D ${quantiaReprovadoD}

    O total de reprovados em C e D é:
    ${totalReprovados}
    `);
*/

// ### 12 ####### aula06 ############################################################## 
// Faça um programa que leia o dia da semana 
// (Domingo, Segunda, Terça, Quarta, Quinta, Secta e Sabado)
// Esse dia deve ser em texto. Se for Sábado ou Domingo imprimir "Final de Semana"
// Se não imprimir "Dia Útil"

/*
const prompt = require('prompt-sync')();

let diaDaSemana = prompt("Qual é o dia da Semana: ")

const diaUtil = ['segunda', 'terça', 'quarta', 'quinta', 'sexta']
const finalDeSemna = ['sabado', 'domingo']

if(diaUtil.includes(diaDaSemana.toLowerCase())){
    console.log('Dia Útil');
} else if(finalDeSemna.includes(diaDaSemana.toLowerCase())){
    console.log('Fim de semana');
} else{
    console.log('Dia inválido');
}

// ! Forma do professor !

let diaDaSemana2 = prompt("Informe o dia da Semana: ")

switch(diaDaSemana2){
    case 'Sabado':
    case 'Domingo':
        console.log('Final de Semana');
        break
    default:
        console.log('Dia útil');
        break    
}
*/

// ### 13 ####### aula06 ############################################################## 
// Escreva um algoritmo para repetir a leitura de um número enquanto o valor fornecido for 
// diferente de 0.
// para cada número fornecido, imprimir se ele é NEGATIVO ou POSITIVO. 
// Quando o número for fornecido a repetição deve ser encerrada sem imprimir mensagem alguma
/*
const prompt = require('prompt-sync')();

let numero

do{
    numero = Number(prompt('Informe um numero: '))

    if(numero > 0){
        console.log('POSITIVO');
    } else if(numero == 0){
        break
    }else{
        console.log('NEGATIVO');
    }

} while(number !== 0)
*/

// ### 14 ####### aula06 ############################################################## 
// Escreva um algoritmo para repetir a leitura de uma senha até que ela seja válida
// Para cada leitura de senha incorreta informada escrever a mensagem 'SENHA INVALIDA".
// Quando a senah for informada corretamente deve ser impressa a mensagem 'ACESSO PERMITIDO'
// e o algoritmo encerrado. Considere que a senha correta é o valor 2807
/*
let prompt = require('prompt-sync')();

do{
    senha = Number(prompt('informe a sua senha: '))

    if(senha !== 2807){
        console.log('Senha Incorreta');
    } else{
        console.log('ACESSO PERMITIDO');
    }

}while(senha !== 2807)
*/

// ### 15 #############################################################################
// Faça uma função que inverta uma string
/*
function reverterString(string){
    let stg = string.split("").reverse().join("")
    return console.log(stg); 
}

reverterString('Julio César')

// ! FORMA DO PROFESSOR !
function reversedString(str){
    let reversed = ''

    for(let i = str.length - 1; i>= 0; i--){
        reversed += str[i]
    }
    return reversed
}
console.log(reversedString('Olá Mundo'));
*/

// ### 16 #############################################################################
// Encontrem o número de vogais de uma String
/*
function acharVogais(string){
    const vogais = ['a', 'á', 'à', 'ã', 'â',
                    'o', 'ó', 'ò', 'õ', 'ô',
                    'e', 'é', 'è', 'ê', 
                    'i', 'í', 'ì',
                    'u', 'ú', 'ù' ]
    let count = 0
    for(let i = 0; i < string.length; i++){
        if(vogais.includes(string[i].toLowerCase())){
            count++
        }       
    }
    return console.log(count);
    
}

acharVogais('Olá mundo!')

// ! FORMA DO PROFESSOR !


function countVowels(str){
    let vowels = str.match(/[aeiou]/gi)
    return vowels ? vowels.length : 0
}

console.log(countVowels('Conte Vogais'));
*/
// ### 17 #############################################################################
// gere um número aleatório entre dois valores
/*
function randomNumberBtw(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log(randomNumberBtw(1,8));
*/

// ### 18 #############################################################################
// Formatar uma data
// resolução com o professor
/*
let date1 = new Date(2015, 7, 7)

function formatarData(date){
    let dia = date.getDate().toString().padStart(2, '0')
    let mes = (date.getMonth() + 1).toString().padStart(2, '0')
    let ano = date.getFullYear().toString()

    return `${dia}/${mes}/${ano}`
}


console.log(formatarData(date1));
*/
// ### 19 #############################################################################
// A soma de duas matrizes

let matriz1 = [
    [1, 1, 1],
    [1, 1, 1]
]

let matriz2 = [
    [1, 1, 1],
    [1, 1, 1]
]

function somaMatriz(mat1, mat2){
    
}