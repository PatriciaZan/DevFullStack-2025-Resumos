// pega os elementos
const resultado = document.querySelector('.resultado')
const botoes = document.querySelectorAll('button')
const btn = document.querySelectorAll('.btn')

let valorArray = [];
let valor;


botoes.forEach(function(btn){
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        
        valorArray.push(btn.value)
        valor = valorArray.join('')

        resultado.innerText = valor
        

        if(btn.value === 'C') {
            resultado.innerText = ''
            valorArray = []
        }

        if(btn.value === '='){
            calcular()
        }
    })

})

function calcular(array){
    let string = valorArray.join('')

    let operacao = string.split('X' || '-' || '+')

    console.log(operacao);
}