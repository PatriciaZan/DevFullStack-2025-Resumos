// ### 01 #############################################################################
// Crie um array 'numeros contendo 10 valores númericos à sua escolha.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Use métodos de array para calcular.
// A soma de todos os elementos
let soma = numeros.reduce((acc, value) => acc + value,0)

// Gere um novo array chamado pares que contenha apeas os numeros pares.
let pares = numeros.filter((num => num % 2 === 0))

// A media dos elementos
let media = 0
media = soma/numeros.length

// Imprima no console
// 1) O array original 'numeros
console.log(`O array Original -> ${numeros}`);
// 2) A soma
console.log(`A Soma é => ${soma}`);
// 3) A média
console.log(`A média é -> ${media}`);
// 4) O array pares
console.log(`O Array de pares é -> ${pares}`);

// ordene o array numeros em ordem crescente
console.log(`O crescente -> ${numeros.sort((a,b) => a - b)}`);

// ! FORMA DO PROFESSOR !
// bubbleSort - log(n2)

let numerosDesordenados = [3, 6, 1, 2, -3]
let n = numerosDesordenados.length

for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        if(numerosDesordenados[j] > numerosDesordenados[j + 1]){
            let temp = numerosDesordenados[j]
            numerosDesordenados[j] = numerosDesordenados[j + 1]
            numerosDesordenados[j + 1] = temp
        }
    }
}

console.log(numerosDesordenados);


// ### 02 #############################################################################

