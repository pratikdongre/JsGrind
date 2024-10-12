// mostly operators and function automatically convert the values given to them to the right type 
// for example alert convert any values to string to show it 
// mathematical operators converts values to numbers 


// string conversion 
// when we need to changes type of value into string


let value = null;
console.log(`before ${typeof value}`);
value = String(value);
console.log(`after ${typeof (value)}`);


// numeric conversion 
// when we do add it does string concatenates if two strings but numbers are used wiht + 

console.log("6"/ "2"); // 3
console.log("6" - "2"); // 4 
console.log("6" * "2"); // 12
console.log("6" + "2"); // 62

let str = "1230";
let num = Number(str);
console.log(num);
console.log(typeof num);

// above works as we put numbers into the "" but what if we try to convert text to number
// results in nan

let age = Number("this is not my age");
console.log(age); // string is invalid number 
console.log("this " +typeof age); // type got change to number 

// numeric conversion rules 
value = undefined; 
value =  Number(value);

console.log(value);
console.log("im looking for this "  +typeof value); 

value = Number(null);
console.log(value); // 0
console.log(typeof value);


value = Number(true);
console.log(value);

value = Number(" 123 ");
console.log(value); // 123
console.log(typeof value); // Number 

value = Number("1234s");

console.log(value); // nan
console.log(typeof value);


// summary 
// Number(undefined) nan
// Number(null) 0 
// Number(true or false) 1 or 0 
// Number(string) NAN execpt when its like 
// Number("123") or Number(" 123 ") with space or /t  or /n and only number 


console.log("from");

// Boolean conversion occurs in logical operations
// boolean conversion values that are intutively empty like 
// 0,null,empty string and nan become false
// rest become true 
console.log(Boolean("")); // false - empty string
console.log(Boolean(" "));// true
console.log(Boolean("0")); // true

console.log(Boolean(NaN)); //false
console.log(Boolean(null)); //false


// 0,null,NaN,undefined,"" gives 0 
// any other value gives 1 















