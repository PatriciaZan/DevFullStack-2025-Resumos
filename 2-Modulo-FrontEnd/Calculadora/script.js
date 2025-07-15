// pega os elementos
const resultado = document.querySelector('.resultado')
const botoes = document.querySelectorAll('button')
const btn = document.querySelectorAll('.btn')



let calculo = '';
let valorArray = [];
let arrayCalculo = []
let valor;

botoes.forEach(function(btn){
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        
        if(btn.value == "="){
            calcular(valorArray)
        }

        
        valor = valorArray.push(btn.value)

        //console.log('valorArray: ');
        console.log(valorArray);
    })

})



function calcular(valorArray){
    // .join() ??
    //let stringCalculo = valorArray.join("")
    //console.log("StringCalculo: ");
    //console.log(stringCalculo);


    let index = valorArray.indexOf('X')
    console.log(index);




    // for(let i = 0; i <= valorArray.length; i++){
        
    //     console.log(valorArray[i]);
        
    //     let num1
    //     let num2

        
    // }

    

    // for(let i = 0; i <= valorArray.length; i++){
    //    if(+valorArray[i] !== NaN) {
    //         arrayCalculo.push(+valorArray[i])
    //    }else if(isNaN(valorArray[i])){
    //         arrayCalculo.push(valorArray[i])
    //    }else{
    //         console.log('erro');
    //    }
    // }

    // console.log('ArrayCalculo: ');
    // console.log(arrayCalculo);
    
}

