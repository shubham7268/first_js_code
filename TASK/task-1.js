// // What is the difference between var, let, and const? Explain with examples.
// // in var  redifine and reassign the variable are allow. for example :- 
// var a = 10;
// var a = 20;
// console.log( "this is var ",a);
// // in let redifine are not allow only rassign are allow. for example :-
// let b = 20;
//     b = 30;
//     console.log("this is a let ",b)
// // in const redifineand reassign both are not allow.for example:-
// const c = 10;
// console.log("this is a constant:- ",c)

// // QUESTION:-2 What will be the output of the following code?
// // undifine

// // QUESTION-3 Rewrite the following code using let instead of var. What changes do you observe?
// let x = 5; 
// if (true) { 
//  let x = 10; 
// } 
// console.log(x);

// // questoin-4 Can we reassign a const variable? Write an example to support your answer.
// // No, we can't reassign the const variable because in const reassign or redifine is not allow.

// // // Question-5 5. What will be the output of this code? Explain
// // let a = 5; 
// // let a = 10; 
// // console.log(a);
// // ansswer :- synteax error because we already declared a 

// // Question-7 Predict the output of the following code: 
l
// let z = "10"; 
// let y = 10; 
// console.log(z == y); 
// console.log(z === y);

// // Question-8 What will be the output of the following?
// console.log(typeof null); 
// console.log(typeof undefined); 
// console.log(typeof []); 
// console.log(typeof {});

// if({}){
//     console.log("yes")
// }else{
//     console.log("no")
// }

// // Question-9 How can you convert a string "123" into a number in JavaScript? Write two different methods
// let s = "123"
// let a = number("123")
// console.log(typeof (a))
// console.log(typeof+(s))

// // QUestion-10 What will be the output?
// let a; 
// console.log(a); 
// // undifine
// console.log(b); 
// let b = 10;
// // refrence error

// // Question-11 . What will be the output of this code?
// let a = 10; 
// let b = "10"; 
// console.log(a + b); 
// console.log(a - b);

// Question-12 Write a program that swaps two numbers without using a third variable.
// let s = 10;
// let x = 15;
// console.log("before swap s=",s,"x=",x);
// s = s+x
// x = s-x
// s = s-x
// console.log("after swap s=",s,"x=",x)

// // /
// let a = "hello";/ // question-13
// // console.log(5 + true); 
// // console.log(5 + false); 
// // console.log(5 + null);

// Predict the output of the following: 
// console.log(5 + true); 
// console.log(5 + false); 
// console.log(5 + null);
// answer:- 6,5,5


// // // Question-15 . What will be the output?
// // let a = 5; 
// // let b = "5"; 
// // console.log(a != b); 
// // console.log(a !== b)

// // Question-16 Write a JavaScript program to check whether a given number is even or odd.

// let a = 11
// if(a%2==0){
//     console.log("its a odd number")
// }else{
//     console.log("its a even number");
    
// }
// // Question-20 . Write a program that checks whether a year is a leap year or not.
// let year = 2028;
// if(year%4==0){
//     console.log("its a leap year")
// }else if(year%1000==0){
//     console.log("its not a leap year");
// }else if(year%2000==0){
//     console.log();
    
// }else{
//     console.log("its not a leap year");
    
// }




// Question-19 What will be the output of this code?
// let x = 10; 
// if (x = 5) { 
//  console.log("Yes"); 
// } else { 
//  console.log("No"); 
// } 

// Question-18 . Write a program that takes a number and checks if it is divisible by both 3 and 5.
// let a = 12;
// if(a%3==0 && a%5==0){
//     console.log("its divided  by both 3 & 5");
// }
// else if(a%3==0){
//   console.log("its divide by 3");
  
// }
// else if(a%5==0){
//     console.log("its divide by 5");
    
// }else{
//     console.log("its not divide by both")
// }

// Question-17 . Write a program that prints "Positive", "Negative", or "Zero" based on given number.
// let num = 1
// if(num>0){
//     console.log("positive no"); 
// }else if(num<0){
//     console.log("negative no")
// }else if(num==0){
//     console.log("zero")
// }

