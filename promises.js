const fs= require("fs");
function readFilePromise(){
    return new Promise((resolve)=>{
        fs.readFile("a.txt","utf-8",(err,data)=>{
            resolve(data)
        })
    })
}
function onDone (data){
    console.log(data);
}
readFilePromise().then(onDone)