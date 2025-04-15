
// function fetchData() {
//     return new Promise((resolve, reject) => {
//       const success = Math.random() > 0.2;
  
//       setTimeout(() => {
//         if (success) {
//           resolve("Data fetched successfully!");
//         } else {
//           reject("Failed to fetch data.");
//         }
//       }, 1000);
//     });
//   }
// console.log(fetchData().then((val)=>{
//     console.log(val)
// }).catch((error)=>{
//     console.log("error",error)
// }))  

// Place an order: Returns a promise that resolves with the order ID after 1 second.
// function order(){
//   return new Promise((resolve,reject)=>{
//     let user = 123456789
//     setTimeout(() => {
//       if(user == 123456789){
//         resolve("order id ",user)
//       }else{
//         reject("failed to order ")
//       }
      
//     }, 1000);
//   })
// } 
// console.log(order().then((val)=>{
//   console.log("order confirm")
// }).catch((error)=>{
//   console.log("error")
// }))

// // empty arr

// let a = []
// let arr = new Promise((resolve,reject)=>{
//     if(a.length == 0){
//         a.push(5)
//         resolve(a)
//     }else {
//         reject("error")
//     }
// })
// arr.then((val)=>{
//     console.log(`its your array ${val}`)

// }).catch((error)=>{
//     console.log(`its empty ${error}`)
// })



// function deg(a,delay) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log(a)
//         resolve ();
        
//       },delay);
  
//     })
//   }   
// deg("45",2000)
// .then(()=>deg("42",2000))
// .then(()=>deg("43",2000))


// function deg(a){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve(a)
//     },2000)
//   })
// }
// deg("45").then((val)=>{
//   console.log(val)
//   return deg("42")
// })
// .then((val1)=>{
//   console.log(val1)
//   return deg("45")
// })
// .then((val2)=>{
//   console.log(val2)
// })

// function temp(a) {
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       console.log(a)
//       resolve(a)
//       },2000)
//     })
// }
// async function result() {
//   await temp("45")
//   await temp("42")
//   await temp ("46")
  
// }
// result();

// function intro(a) {
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       console.log(a)
//       resolve(a)
//     },1000)
//   })
  
// }
// async function result() {
//   await intro(" Name : shubham")
//   await intro("age : 26")
//   await intro("roll : 45")
  
// }
// result()

// function tarik(time,delay) {
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       console.log(time)
//       resolve(time)
//     },delay)

//   })
  
// }
// async function res() {
//   await tarik(new Date().toLocaleTimeString(),2000)
//   await tarik(new Date().toLocaleTimeString(),5000)
//   await tarik(new Date().toLocaleTimeString(),0)
  
// }
// res()