// const student = {
//  username: "shubham",
//  age: 24,
// }
// student["age"] = student["age"] + 4;
// console.log(student)
// var a="hello";
// if(!!-15){
//     console.log(a);
//     let a = ++10;
//     console.log(a);
    
// }else{
//     console.log(a);
    
// }
// console.log('a');

// for (let step = 0; step <= 5; ++step) {
//     //     // Runs 5 times, with values of step 0 through 4.
//     //     console.log("Walking east one step");
//     //   }

// for(let i=0;i<=5; i++){
//     console.log("shubham");
// }
// let a = 1;
// do{
// console.log(a);
// a++;
// }while(a<=5);

// for(let i=1; i<11 ; i++){
//     let b=2;
//     console.log(`${b} * ${i} = ${b*i}`)
    
// // }
// let i=1;
// while(i<11){
//     let b=2;
//     console.log(`${b} * ${i} = ${b*i}`)  
//     i++;
// }

// console.log("table of 3");
// let a = 1;
// do{
//     let c=3
// console.log(`${c} * ${a} = ${c*a}`)
// a++;
// }while(a<11);

// let house ={
//     houseName : "rahi apartment",
//     noRooms : 6,
//     splForRoom : "couple",
//     Room_type : ["kitchen","bedroom","toilet","diningRoom"],
//     rent : {
//         room_rent :{
//             room_2bhk : 7000,
//             room_3bhk : 10000,
//             room_1bhk : 5000,
//         },
//         water_bill :[{kitchen_bil : 250,bed_room_bill : 300  },{total:55500}],
//         electricity : 300,
//     }

// }
// console.log(house.rent.water_bill[1].total);

// const person = { name: "John", age: 30, occupation: "Engineer" };
// console.log(person.name,person.age);

// const person = { 
//     name: "John", 
//     address: { city: "New York", zipCode: 10001 }
//   };
// console.log(person.address.city)

// const person = { name: "Jane", age: 25, occupation: "Artist" };
// const c = "occupation";
// const occupationValue = person[c]; // Using bracket notation
// console.log(occupationValue); // Output: "Artist"

// const person = { name: "Anna", age: 22, occupation: "Teacher" };
// console.log(person.email);

// const student = { "first-name": "Lucas", "last-name": "Smith", age: 21 };
// let newAge = "age";
// let shu = student[newAge];
// console.log(shu)


const users = [
    { name: "Alice", age: 28 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 22 }
  ];

  console.log(users[0].name,users[1].name,users[2].name);
  
  const arr = [1, 2, [3, 4, [5, "deep"]]];
console.log(arr[2][2][1]);
