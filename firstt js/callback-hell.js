// const rollNo = ()=>{
//     setTimeout(()=>{
//         console.log("get roll no :-")
//         let roll = [1,2,3,4,5]
//         console.log(roll)
//         setTimeout((roll)=>{
//             let obj = {
//                 nn:"shubham",
//                 class : 12
//             }
//             console.log(`${roll}.${obj.nn} and the class is ${obj.class}`)

//             setTimeout((name)=>{
//                 obj.gender = "male"
//                 console.log(`${obj.nn} and the class is ${obj.class} and here gender ${obj.gender}`)

//             },2000,obj.name)

//         },2000,roll)

//     },2000)

// }
// rollNo()

// const bake = () => {
//   setTimeout(() => {
//     let bread = "🍞";
//     console.log("here is your bread ", bread);
//     setTimeout(() => {
//       let cheese = bread + "🧀";
//       console.log(
//         `"here is your both chesse and bread now starting chief mr chief shubham"${cheese}`
//       );
//       setTimeout(() => {
//         let pizza = cheese + bread + "🍕🍕🍕🍕";
//         console.log(`here is your pizza enjoy with love${pizza}`);
//       }, 4000);
//     }, 5000);
//   }, 2000);
// };
// bake();


// function hello(callback){
//     callback();
// }
// function h2(callback){
//     callback();
// }
// hello(()=>{
//     h2(function (){
//         console.log("shubham")
//     });
        
    
// })


// morning 

// let person = "shubham"
// let routine = ()=>{
//     setTimeout(() => {
//         console.log("wake up and start your day",person)
//         setTimeout(()=>{
//             console.log("clean your face and brush your teeth ")
//             setTimeout(()=>{
//                 console.log("Eat break fast")
//                 setTimeout(()=>{
//                     console.log("go to work for earn money ")
//                 },2000)
//             },1500)
//         },1000)
        
//     }, 1000);
// }
// routine();

// // call back 
// function person(name, callback) {
//     console.log(`Hello, ${name}!`);
//     callback();
//   }
  
//   function saybye() {
//     console.log("Goodbye!");
//   }
  
//   person("Alice", saybye);
  
