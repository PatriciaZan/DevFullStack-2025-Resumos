// 6 -  memoirzation

//capturar uma função chamada fn

// vai receber uma funcçã oque quer optimizar
function memoize(fn){
    const cache = new Map()

    return function(...args){
        const key = JSON.stringify(args)

        if(cache.has(key)){
            return cache.get(key)
        }

        const result = fn.apply(this, args)
        cache.set(key, result)
        return result
    }
}

// muito lento
function fibonacci(n){
    if(n < 2) return n
    return fibonacci(n -1) + fibonacci(n- 2)
}

const fastFib = memoize(function fibonacci(n){
    if(n < 2) return n
    return fastFib(n - 1) + fastFib (n - 2)
})

console.log(fibonacci(5));
console.log(fastFib(5));



