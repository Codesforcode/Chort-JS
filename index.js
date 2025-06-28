// const fs = require("fs");
// fs.readFile("a.txt","utf-8",(error,data)=>{
//     console.log(data);

// })

// console.log("OUT of async finction")

let res=0
function sum (){
    for(let i= 0;i<10;i++){
       res+=i
    }
    return console.log(res)
}
setTimeout((sum),1000);
console.log("Ruko jra intejar kro")