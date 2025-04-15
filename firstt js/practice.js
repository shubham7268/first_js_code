// map question 

// let arr = [1,2,3,4,]
// let newArr = arr.map((value)=>{
//     return value * 2
// })
// console.log(newArr)

// question -2
// let arr = ["a","b","c"]
// let newArr = arr.map((value)=>{

//      return value.toUpperCase()
// })
// console.log(newArr)

// question - 3
let arr = ["alice","bob"]
let newArr = arr.map((value)=>{
     return value + " hello"
})
console.log(newArr)

//question - 5
let a = [1,2,3]
let b = a.map((value)=>{
    return value.toString();
})
console.log(b)


let obj = {
    hey : "shubham ",
    adres : function () {
        console.log(this)
        
    }
     
}
console.log(obj.adres())