function putWatterToBoil(callback){
    console.log('Boil the water');
    setTimeout(() => {
        console.log('We have boiled the water');
        callback()
    }, 5000)
}

function getReadyToMakeCoffe(callback){
    console.log('Grind coffe beans');
    console.log('Line the basket of your coffe maker with a filter');
    console.log('Wet the filter, and let it drain into your cup');
    console.log('Discat the wather in the cup');
    console.log('Measre the fround coffe into the wet filter');
    callback()
}

function makeCoffe(callback){
    console.log('Pour water to wet the ground beans and drain into your cup');
    callback()
}

//putWatterToBoil()
//getReadyToMakeCoffe()
//makeCoffe()

putWatterToBoil(() => {
    getReadyToMakeCoffe(() => {
        makeCoffe(() => {
            console.log('Your coffe is ready');
        })
    })
})

putWatterToBoil()
getReadyToMakeCoffe()
