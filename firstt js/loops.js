// Ques 1

// for( let i=0;i<=10;i++){
//     console.log(i)
// }

// Question 2
 
// for(let j=10;j>=0;j--){
//     console.log(j)
// }

// question 3

// let sum = 0;
// for(i=0;i<100;i++){
//     sum += i    
// }
// console.log(sum);

// Question 4
// let even = 0
// for(let i=0;i<=20;i++){
//     if(i%2==0){
//         even = i
        
//         console.log(even);
//     }
// }

// Question 5
// let odd = 0;
// for(let i=0;i<=50;i++){
//     if(i%2!==0){
//         odd = i
//         console.log(odd);
//     }
// }

// question 6
// let fact = 1;
// for(let i=1;i<=5;i++){
//     fact *= i 
// }
// console.log(fact);

// Question 7

// for(let i=0;i<=10;i++){
//      let multi = 5;
//      console.log(`${multi} * ${i} = ${ multi*i}`) 
//  }


// reversed array without using reversed


// let food = ["apple","Banana","orange","graphes"]
// let reverseFood = []
// for(let i = food.length -1; i>=0; i--){
//     reverseFood.push(food[i]);
// }
// console.log(reverseFood);

// let a = "10"+5;
// console.log(a);

let arr = [1,2,3,4]
let num = arr.map((value)=>{
    return arr.filter((value)=>{
       return  value > 3;
    })
})
console.log(num)

let obj = {
    hey : "shubham ",
    arr : [1,2,3,4],
    sh : function(){
        console.log(this.arr[3])
    }

}
obj.sh()