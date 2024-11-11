// comparisions 
// < > >= <= == !=

// all comparision return boolean value
// true or false // 0 or 1 

console.log(+(2 > 1)); 
console.log(Number(2 == 1));
console.log(2 != 1);


// comparison result can be assigned to any variable 

let result = 4 > 3; // result = 1
console.log(++result); // 2 


//strings comparision

console.log("Z" > "A");
console.log("Glow" > "Glew");
console.log("Bae" > "Be");


console.log("a" > "A"); // true

// comparision of different types 

console.log("different types");

console.log('2' > 1);
console.log('01' == 1);
console.log('00' == 0);


let a = 0;
let b = "0";

console.log(a==b); // t
console.log(Boolean(a));
console.log(Boolean(b));


// it is possible that two values are equal but there booleans are different 

// so we introduce === strict equality operator

console.log(0 == false); // t
console.log(0 === false); // f

console.log('' == false); // t 
console.log('' === true); // f 

console.log("health");

console.log(undefined == null);
console.log(undefined === null);

// in math null get converted to 0 
// and undefined get converted to nan

// lets compare null with zero 

console.log("strange");

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// null is only == to undefined
// but null when comapared with number it is treated as 0

// this is because equality check works differently than comparisions


// an imcomparable undefined

// undefined gets converted to nan when dealing with Number 
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);


// comparision operator convert null to 0
// equality operator only null == undefined 
// strict check ki picture toh alag hi hai 


console.log(null == "\n0\n"); //false
// only null == undefined

// 5 > 4 → true
// "apple" > "pineapple" → false
// "2" > "12" → true
// undefined == null → true
// undefined === null → false
// null == "\n0\n" → false
// null === +"\n0\n" → false // different types 



