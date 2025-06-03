// ### 01 #############################################################################
// Façam uma função que retora um array ordenado

function retornaArayOrdenado(array){
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

    return array
}

console.log(retornaArayOrdenado([3, 6, 1, 2, -3]));


// ! FORMA DO PROFESSOR ! com .sort
function ordenaArray(arr){
    return arr.sort((a,b) => a - b)
}

console.log(ordenaArray([1,3,7,10,2]));

// ### 02 #############################################################################
// Criar uma função que soma os elementos de um Array e retorna esse valor

let soma = (arr) => {
    let soma = 0

    for(let i = 0; i < arr.length; i++){
        soma += arr[i]
    }
    return soma
}

console.log(soma([1,2,3,4,5])); 

// ### 03 #############################################################################
// Retorna o maior numero em um array

function maiorNumero(arr){
    let maior = arr[0]

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > maior){
            maior = arr[i]
        }
    }
    console.log(maior);
    
}

console.log(maiorNumero([1,2,3,40,5]));
