// function shubh(a,b) {
//     console.log(a);
//     b();
    
// }
// function hello() {
//     console.log("shubham");
    
// }
// shubh(10,hello);

// multiplication table 
// let a = 8
//  let i = 1
//  let tab = setInterval(() => {
    
//     console.log(`${a} * ${i} = ${a*i}`)
//     i++;
//  }, 1500)

//  setTimeout(()=>{
//     clearInterval(tab)
//  },20000);


//date method 
 let newDate = new Date()
 console.log(newDate.toDateString());
 console.log(newDate.toJSON());
 console.log(newDate.toUTCString());
 console.log(newDate.getMonth()+1);


function hello (b){
   b();
}
function h2() { setTimeout(()=>{
   console.log("hello")
},5000);
   
}
hello(h2)
 

for(i=10;i>=0;i--){
   console.log(i)
}
 
 
 
 