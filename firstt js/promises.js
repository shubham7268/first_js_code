// console.log("hello shubham");
// let prm = new Promise((resolve,reject)=>{
//     // resolve("compeleted")
//     // reject("fail")
//     if(false){
//         resolve("promise pura ho gya ")
//     }else {
//         reject("promise pura nhi hua ")
//     }

// })
// console.log(prm);

// let userName = "user@shubham"
// let user = new Promise((resolve,reject)=>{
//     if(userName === "user@shubham"){
//         resolve(`true username ${userName}`)
//     }else{
//         reject(`not fond user name `)
//     }
// })
// console.log(user)

// function fxn(){
//     return new Promise((resolve,reject)=>{
//         if(userName === "user@shubham"){
//             resolve(`true username ${userName}`)
//         }else{
//             reject(`not fond user name `)
//         }
//     })
// }
// console.log(fxn());
// user.then((val)=>{
//     console.log(`result is ${val}`)
// }).catch((error)=>{
//     console.log(`error  ${error}`)
// })

let a = []
let arr = new Promise((resolve,reject)=>{
    if(a.length == 0){
        a.push(5)
        resolve(a)
    }else {
        reject("error")
    }
})
arr.then((val)=>{
    console.log(`its your array ${val}`)

}).catch((error)=>{
    console.log(`its empty ${error}`)
})
