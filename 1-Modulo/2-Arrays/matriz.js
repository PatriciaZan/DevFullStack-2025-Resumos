// Matriz is a data set divided by rows and columns

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let mercado = []
mercado['fruteira'] = ['maça', 'abacate', 'pera']
mercado['acougue']  = ['picanha', 'alcatra', 'file']

// using 2 for loops to show the matriz

function showMatriz(matriz){
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            console.log(matriz[i][j] + " ");
        }
    }
}
