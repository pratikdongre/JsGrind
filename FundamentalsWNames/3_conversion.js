//3
let value = true;
console.log(typeof value); // value is of boolean datatype

value = String(value); // value is of string datatype 
console.log(typeof value);


console.log("6"/"2"); // 3 

console.log("6"+"2"); // string concatenates not addition this time 




let str = "123";
console.log(typeof str);


let num = Number(str);

console.log(typeof num);


let age = Number(undefined);
console.log(age); //nan



// +++++++++++++++++++++++++++++++++++ 13/8/2024 

let thisone = Number("string instead of number");

console.log(thisone);


// Number(undefined) nan
// Number(null)   0
// Number(true or false )   1 or 0 

// Number(string)   NAN


console.log(Number("   ")); // 0
console.log(typeof (Number("  123  "))); // 123 that is number




// boolean conversion values that are intutively empty like 0, null, empty string, and nan,become false 
// rest becomes true but like (Boolean("")) // 0 
// (Boolean(" ")) // true  
// (Boolean("0")) true




// the only tough part is undefind when numbered becomes nan , null becomes  0

