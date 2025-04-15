// // // function demo(){
// // //     let a = 20
// // //     console.log(a)
// // //     console.log("shubham");
// // // }
// // // console.log(demo());

// // function demo() {
// //     console.log("hey shubham")
    
// //     return 'hey coder' 
    
// // }
// // console.log(demo());


// // function result(sub1,sub2,sub3) {
// //     return sub1+sub2+sub3    
// // }
// // console.log(result());   //why its return nan 
// // console.log(result(85,21,51));

// // function menu(fastfood , main = 400,desert){
// //     return fastfood + main + desert;
// // }
// // // console.log(menu(400,menu.main,600))
// // // console.log(menu(undefined,600,200));
// // // console.log(menu(200,400,500));
// // console.log(menu({fastfood:200,desert:200}))

// // Regular Functions
// // Write a function named greet that logs "Hello, World!" to the console.

// // Create a function sum that takes two numbers and returns their sum.

// // Define a function isEven that takes a number and returns true if it's even, otherwise false.

// // Write a function printNumbers that prints numbers from 1 to 10 using a loop.

// // Implement a function reverseString that takes a string and returns its reverse.


// // // // ques -1
// // function greet() {
// //     console.log("hello , world!")
// // }
// // greet();

// // // ques - 2
// // function sum(a=10,b=20){
// // return a+b
// // }
// // console.log(sum())

// // ques - 3
// // function ifeven(a=5) {
// //    if(a%2==0){
// //         console.log("true")
// //     }else{console.log("false")}
    
// // }
// // console.log(ifeven())

// // question -4
// // function printNum() {
// //     for(let i=0; i<=10;i++){
// //       console.log(i)
// //     }
// // }
// // printNum();

// // question - 5

// // // fxn();
// // let fxn = function () {
// //     console.log("hello");
    
// // }
// // fxn();
// // console.log(fxn());

// //  let num= function (a){
// //     if(a%2==0){
// //         console.log("even no")
// //     }else{
// //         console.log("odd no")
// //     }
// // }
// // num(5);
// // num(2);

// // // arrow funcution

// // let sum = (b)=>{
// //     console.log("hey...coder")
// //     return b;
// // }
// // console.log(sum(45));
// // let jj = ()=> "shubham";
// // console.log(jj());

// // // single parameter in arrow function

// // let n = d => d+50;
// // console.log(n(40));

// // // function in object called method 

// // let person = {
// //     fname : "hari om",
// //     age : 21,

// // }

// // make a function take two no and make a table
//  function table(no1,no2) {
//     for(let i=1;i<=no2;i++){
//         if(i%2==0){
//             // console.log(no2)
//             console.log(`${no1} * ${i} = ${no1*i}`)
//         }
//     }
//  } 
//  table(8,20)

// //lexical  & clousures  fucntion

// // function sum(num,num2) {
// //     return num+num2
    
// // }
// // console.log(sum(45,55))

// // function double(b) {
// //     for(i=1;i<=b;i++){
// //         console.log(b)
// //     }   
// // }
// // double(2);
 
// // function arr(a){
// //     if(a.lenght<=0){
// //         console.log("empty")
// //     }else{
// //         console.log(a)
// //     }
// // }
// // // arr([])
// // arr([1,2,3])


// // factorial
// // function fac(f) {
// //     for (let i = f; i <; i++){
// //         const element = array[i];
       
// //     }
    
// // }

// // pattern by usser
// function pattern(num){
//     for(i=0;i<=num;i++){
//         let str = ""
//         for(j=0;j<=i;j++){
//              str += "* "
//             }
//             console.log(str);
//     }
// }
// pattern(5)

// // patterlike that 
// // *
// // **
// // *
// // **
// // *
// // **
// // Write a function called convertToFahrenheit that takes a Celsius value as input and returns the Fahrenheit equivalent.
// // function temprature(clacius) {
// //     return f=(clacius*9/5)+32
    
// // }
// // console.log(temprature(40));

// // Create a function isPalindrome that checks if a given word is a palindrome (same forward and backward). Return true or false.


// // Write a function calculateInterest that takes in principal, rate, and time, and returns the simple interest.
// // function interest(principal,rate,time) {
// //     return (principal*rate*time)/100
    
// // }
// // console.log(interest(10000,5,2));

// // Write a function findMax that takes an array of numbers and returns the largest number.

// // function findmax(a=[1,2,3,45,78,88,45]){
// //     let max=0;
// //     for(i=0;i<=a.length;i++){
// //         if(max<a[i]){
// //             max = a[i]
// //         }
        
// //     }
// //     console.log(n)
// // }
// // findmax();

// // Create a function factorial that returns the factorial of a given number using recursion.

// function fact(num) {
    
//     for(i=num;i>=1;i--){
//         num *= i
//     } 
//     console.log(num);
      
// }
// fact(5);

// let hello =()=> {
//     console.log(this);
    
// }
// hello();

// let shubham ={
//     n : "shubham",
//     age : 21,
//     adress :{
//         pincode : 160055,
//         city : "mohali",

//         sayhi : function () {
//             console.log(this.n);
            
//         }
//     }
// }
// shubham.adress.sayhi();

// in case arrow function give empty object

// let obj = {
//     n : "rahi",
//     age : 21,
//     adress : {
//         city: "mohali ",
//         add: ()=>{
//             console.log(this);
            
//         }
//     }
// }
// obj.adress.add()

// with the help of regular function we can access arrow function in this keyword
// let obj = {
//     n : "rahi",
//     age : 21,
//     adress : {
//         city: "mohali ",
//         add: function () {

//             let arr = ()=>{
//                 console.log(this);
                
//             }
//             arr();
//         }
//     }
// }
// obj.adress.add()


const obj = {
    name: "JS",
    regular: function() {
        console.log(this.name);
    },
    arrow: () => {
        console.log(this);
    }
};
obj.regular();
obj.arrow();

console.log(this)