// function waitAndPrint() {
//     setTimeout(()=>{
//         console.log("done waiting is over ")
//     },5000)
    
// }

// async function print() {
//     await waitAndPrint();
    
// }
// print()

// questtion 2

// async function greet() {
//     return "Hello!";
//   }
  
//   const result = greet();
//   console.log(result);
  
// question 3

// async function getUserData() {
//     const response = await fetch('https://api.example.com/user');
//     const data = await response.json();
//     console.log(data);
//   }
// getUserData()  

// question 4

// function fetchA() {
//     return new Promise(resolve => setTimeout(() => resolve("A"), 1000));
//   }
  
//   function fetchB() {
//     return new Promise(resolve => setTimeout(() => resolve("B"), 1000));
//   }
//   async function runSequentially() {
//     console.time("Sequential");
  
//     const resultA = await fetchA();
//     console.log("Result A:", resultA);
  
//     const resultB = await fetchB();
//     console.log("Result B:", resultB);
  
//     console.timeEnd("Sequential");
//   }
  
//   runSequentially();
    

