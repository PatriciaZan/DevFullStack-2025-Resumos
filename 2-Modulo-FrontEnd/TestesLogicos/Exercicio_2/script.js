// gerar um board


const matriz = [
    [],
    [],
    [],
    [],
]

function sudoku(){
   
   console.log(randomNumber);
   
    for(let i = 0; i <= 4; i++){
        let number = randomNumber()

        matriz[i] = randomNumber()
    }

}


function randomNumber(){
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    return randomNumber
}

sudoku()
console.log(matriz);