 let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
// let mycreatedDate = new Date(2024,0,23)
// console.log(mycreatedDate.toDateString());
let mycreatedDate = new Date("2024-03-12") // when written in this format month starts from 01
console.log(mycreatedDate.toDateString()); 

let timeStamp =  Date.now()
console.log(timeStamp);