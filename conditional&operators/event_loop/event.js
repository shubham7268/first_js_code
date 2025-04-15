console.log("shubham")
setTimeout(()=>{
    console.log("hey i am settimeout and macro ")
},2000)
function child(){
    return new Promise((resolve)=>{
        resolve("i am promise and micro ")
    })
}

// child().then((val)=>{
//     console.log(val)
// })

async function res() {
    await console.log(child())
    
}
res()
console.log("i am synchronus things")