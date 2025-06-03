// Functions are statemes that perform taks or calculates a value
// Using the class exemples:
function retornaParOuImpar(valor){
    let resultado

    if(valor % 2 === 0){
        resultado = "PAR"
    } else{
        resultado = "IMPAR"
    }
    return resultado
}

let resultado = retornaParOuImpar(2)
console.log(resultado);

// 
function calculaArea(altura, largura){
    return altura * largura
}

console.log(calculaArea(10, 10));

// Funçoes anonimas
let exibirNome = function(nome){
    console.log(nome);
}
exibirNome('Paty')

let exibirNomeArrow = (nome) => console.log(nome);
exibirNomeArrow('PatyArrow')

// --- exemplos  ----
let sucesso = (mensagem) => console.log(mensagem);
let erro = () => console.log('Deu Erro!');

function requisicao(sucesso, erro) {
    if(true){
        sucesso('Requisição deu certo')
    }else{
        erro()
    }
}

requisicao(sucesso, erro)
