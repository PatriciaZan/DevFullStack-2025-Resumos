function putWatterToBoil(){
    console.log('Boil the water');
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('We have boiled the water');
            resolve()
        }, 5000)
    })
}

function getReadyToMakeCoffe(callback){
    console.log('Grind coffe beans');
    console.log('Line the basket of your coffe maker with a filter');
    console.log('Wet the filter, and let it drain into your cup');
    console.log('Discat the wather in the cup');
    console.log('Measre the fround coffe into the wet filter');
}

function makeCoffe(callback){
    console.log('Pour water to wet the ground beans and drain into your cup');
}

// putWatterToBoil().then(getReadyToMakeCoffe).then(makeCoffe).then(() => {
//     console.log('Your coffe is ready');
// }).catch((error) => {
//     console.error('ERROR', error)
// })

// As duas tarefas serão executadas e paralelas, porém dependem que as duas finalizem pra prosseguir
// Promise.all([putWatterToBoil(), Promise.resolve(getReadyToMakeCoffe())])
// .then(makeCoffe)
// .then(() => {
//     console.log('Your coffe is ready');  
// })


async function makeCoffeRountine() {
    try{
        await putWatterToBoil()
        await getReadyToMakeCoffe()
        await makeCoffe()
        console.log('Your coffe is ready!');
    } catch(error){
        console.error('Something went wrong', error)
    }
}

makeCoffeRountine()