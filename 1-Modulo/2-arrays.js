let listaFrutas = Array()
let listaNomes = ['Nome1', 'Nome2']

listaFrutas[0] = 'maça'
listaFrutas[1] = 'morango'

//console.log(listaFrutas);
//onsole.log(listaNomes);

// Utilizando o for

for(let i = 0; i < listaFrutas.length; i++){
    console.log(listaFrutas[i]);
}

// push -> adiciona ao final do array
// unshift -> adiciona no começo do array

// pop -> remove do fina ldo array
// shift -> remove no começo do array

let matriz = []
let soma = 0
for(let i = 0; i < 3; i++){
    matriz[i] = []

    for(let j = 0; j < 3; j++){
        matriz[i][j] = 10
        // Calcule a diagonal da matriz
        if(i == j){
            soma += matriz[i][j]
        }
    }
}
console.table(matriz);
console.log(soma);


// outra forma
let mercado = []
mercado['fruteira'] = ['maça', 'abacate', 'pera']
mercado['acougue'] = ['picanha', 'alcatra', 'file']

//console.log(mercado);


// BubbleSort
let array = [3, 6, 1, 2, -3]
let n = array.length

for(let i = 0; i < n; i++){
    for(let j = 0; j < n - 1 - i; j++){
        if(array[j] > array[j + 1]){
            let temp = array[j]
            array[j] = array[j + 1]
            array[j + 1] = temp
        }
    }
}

// Arrays para matriz

let listaCoisas = Array()
listaCoisas['Hardware'] = ['Placa de Vídeo'] // diz que é um array e já declara o valor na primeira posição
listaCoisas['Hardware'][1] = 'Smartwatch'
listaCoisas['games'] = ['GTA V']
listaCoisas['games'][1] = 'The Witcher'

console.table(listaCoisas)