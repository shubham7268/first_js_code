// for(let i=1;i<=20;i++){
//     console.log(i)
// }

// 2nd
// for(let i=0;i<=20;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// 3rd
// let sum = 0
// for(i=0;i<=100;i++){
//     sum += i
//     console.log(sum);
// }

// 4th simple grid

// for(i=0;i<3;i++){
//     str = ""
//     for(j=0;j<=i;j++){
//         str += "* "
//     }
//     console.log(str)
// }

// // 5th
// let fac = 1
// for(i=5;i>0;i--){
//     fac = fac*i
//     console.log(fac);
// }


// Array method


let arr = [15, 5, 8, 44];
let food = ["banana","apple","litchi"]

// push
arr.push("shubham");     
console.log("push method :- ",arr);

// pop
arr.pop()
console.log("pop method :- ",arr);

// tostring
console.log("tostring method :- ",arr.toString());

// concat
let add = arr.concat(food);
console.log("concat method :- ",add);

// unshift
arr.unshift(8055,123)
console.log("unshift method :- ",arr);

// shift
food.shift()
console.log("shift method :- ",food);

// splice
arr.splice(2,3)
arr.splice(2,3,65,76,"shubham",568)
console.log("splice method:-",arr);

let a = [41,1,5,7,8]
a.splice(2,3)
// a.splice(2,3,"shubham ",5424,558)
console.log("splice method-2 :- ",a);

// slice
let b = [55,57,582,78,85,74]
let result=b.slice(2,5)
console.log("slice method:-",result);

// Reverse
food.reverse()
console.log("Reverse method:-",food);

// Sort 
let fullName =["sh","sumit","rahi","vishal","mohit","sindhe"]
fullName.sort()
console.log(fullName)
 
// sort with formulla
let rollNo = [15,35,85,685,588,71,1,54]
rollNo.sort((a,b)=>a-b);
console.log("no sort  method:-",rollNo);

for(let value of rollNo){
    console.log( value);
    
}
 
let arr2 = [15,2,3,4,50]
let max = 0;
for( let i=0;i<arr2.length;i++){
    // console.log(arr2[i])
    if(max<arr2[i]){
        max = arr2[i]
        
    }
}
console.log("maxium no:-",max);
min = max;
for(let j=0;j<arr2.length;j++){
    if(min>arr2[j]){
        min = arr2[j]
    }

}
console.log("minimum no :-",min);


// pramid
let str = ""
for(let triangle = 0; triangle<5; triangle++){
 str +="* ";
 console.log(str);
}


// map method 
let z = [1,2,3,4,5];
let zz = z.map((value)=> {
    return value + value;
})
console.log(zz)

// filter method
let x = [22,55,11,41,2,58]
let xx = x.filter((value)=>{
    return value > 150
})
console.log(xx);

//find method 
let y =[5,5,8,9,2,4,66,71]
let yy =y.find((value)=>{
    return value > 10;
})
console.log("find method",yy)

// reduce 
let m = [1,2,3,4,5]
let mm = m.reduce((acc,value)=>{
     acc <= value;
     return value
})
console.log(mm);


//map question 
 

