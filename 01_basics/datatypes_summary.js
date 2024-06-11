// Primitive types 

// 7 types : String , Number , Boolean , null , undefined  , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const outsideTemp = null
const isloggedIN = false

let userName;
const id = Symbol('123')
const anotherID = Symbol("123")

console.log(id === anotherID);


const Bignumber = 32847471491n


// Reference type (Non-Primitive) 

// Arrays , Objects , Functions 

const heroes = ["shaktiman" , "nagraaj" , "doga" ];
let myObj = {
    name: "Neev",
    age: 19,
}

const myFunction = function(){
    console.log("Hello World");
}
console.log(myFunction()); 