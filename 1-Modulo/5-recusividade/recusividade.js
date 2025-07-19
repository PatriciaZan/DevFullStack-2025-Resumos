// Used to break the problem in small problens
function countDown(fromNumber){
    console.log(fromNumber);
    
    let nextNumber = fromNumber - 1

    if(nextNumber > 0){
        countDown(nextNumber);
    }
}

countDown(3)

//------------------------
// Fatorial
//------------------------

function fatorial(n){
    if(n <= 1){
        return 1
    }
    // function will subtract 1 from it and call itself again
    return m * fatorial(n-1)
}

console.log('Fatorial de 5 =', fatorial(5)); // 5*4*3*2*1 = 120
console.log('Fatorial de 0 =', fatorial(0)); // 1

//
function fibRec(n){
    if(n < 2){
        return n
    }

    return fibRec(n - 1) + fibRec(n -2);
}

console.log('Fibonacci of 6 = ', fibRec(6)); // fib(6)=8
