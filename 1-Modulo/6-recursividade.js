/*
function fatorial(n){
    if(n === 0){
        return 1
    } else{
        return n * fatorial(n-1)
    }
}

// 5 * fatorial(4)
// 4 * fatorial(3)
// 3 * fatorial(2)
// 2 * fatorial(1)
// 1 * fatorial(0)

// 1 * 1 = 1
// 2 * 1 = 2
// 3 * 2 = 6
// 4 * 6 = 24
// 5 * 24 = 120

console.log(fatorial(5));
*/

// Soma dos números de 1 até N
/*
function soma(n){
    if(n === 1){
        return 1
    }else{
        return n + soma(n-1)
    }
}

console.log(soma(5));
*/

//Fibonacci
/*
function fibo(n){
    if(n <= 1){
        return 0
    } else if(n === 1){
        return 1
    } else{
        return fibo(n- 1) + fibo(n - 2)
    }
}
// 8 - 1 + 8 - 2
// 7 - 1 + 6 - 2
// 6 - 1 + 4 - 2
// 5 - 1 + 2 - 2
// 4 - 1
// 3 - 1
// 2 - 1

fibo(4) = fibo(3) + fibo(2)
fibo(3) = fibo(2) + fibo(1)
fibo(2) = fibo(1) + fibo(0)

fibo(2) = 1 + 0
fibo(3) = 1 + 1
fibo(2) = 1 + 1
fibo(4) = 2 + 1

console.log(fibo(5));
*/

// #####
let categorias = [
    {
        id: 1,
        nome: "Eletrônicos",

        filhos: [
            {id: 2, nome: "Celulares", filhos: []},
            {id: 3, nome: "Computadores", filhos: [
                {id: 4, nome: "Tablets", filhos: []},

            ]},
        ]
    },
    {
        id: 5,
        nome: "Louças",
        filhos:[]
    }
]

// Eletronicos
//     Celulares
//     Computadores
//         Tablets
// Louças

//console.log(categorias);
//RECURSIVIDADE

function printNomes(lest, nivel = 0){
    for(let categoria of lista){
        console.log(" ".repeat(nivel * 2) + categoria.nome);
        if(categoria.filhos.length > 0){
            printNomes(categoria.filhos, nivel + 1)
        }
    }
}

printNomes(categorias)

// TAD - Tipos Abstratos de Dados

// Abstração
// Encapsulamento
// Ocultação de informação
// Separação entre interface e Implementação

// Listas (encadedadas duplamente encadeadas e circulares)
// Pilhas
// Filas
// Arvores de decisão binária e de busca
// Hash
// Mapa
// Grafo