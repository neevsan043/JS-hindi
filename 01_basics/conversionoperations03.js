let score = "80abc" //for Nan  // 0 for null , Nan for undefined and 1 for true and 0 for false 

console.log(typeof (score));

let valueinNumber = Number(score)
console.log(typeof (valueinNumber)); // type will be converted to  number though its not 
console.log(valueinNumber); // Nan value will show 

let isloggedin = 1
let BooleanisLoggedIn = Boolean(isloggedin)
console.log(BooleanisLoggedIn);

let somenum = 33
let stringnum = String(somenum)
console.log(stringnum);
console.log(typeof stringnum);