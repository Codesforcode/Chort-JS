function asynchWait(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Async Wait")
        },1000)
    })
}
// function onDone(data){
// console.log(data)
// }
// asynchWait().then(onDone)
async function onDone2(data){
    let value = await asynchWait();
    console.log(value)
}
onDone2()