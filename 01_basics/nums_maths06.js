const number = 300
//console.log(number);

const newNum = new Number(400)
//console.log(newNum);

//console.log(newNum.toString().length); // changing number value to sting and then using string functions 

//console.log(number.toFixed(2));  // function toFixed provides prints the number upto two decimal digits  

const newd = 32.4283
// console.log(newd.toPrecision(2));
// console.log(newd.toPrecision(3));
// console.log(newd.toPrecision(4));

const hundreds = 1000000000000
//console.log(hundreds.toLocaleString('en-IN'));
// toLocaleString converts the number to the suitable readable form act european standard 

 // *******************Math******************
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6)); // normal daily life round-off
// console.log(Math.ceil(4.2)); // ceil value means the uppr limit value will be shown 

// console.log(Math.floor(9.8)) // floor rounds off the number to the nearest lowest integer value 
// console.log(Math.min(4,5,6,3,8));

// console.log(Math.random()); // Always give values bet 0 and 1

console.log((Math.random()*10)+1);

const min = 10 
const max = 20 

console.log(Math.floor(Math.random() * (max-min + 1))+ min )