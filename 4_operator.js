//8

// 13/8/2024

/*
operators :- binary / unary 
*/


let x = 1; // equal to is a binary operator (as it takes two operands)
x = -x ; // operator is unary as it has only one operand 

console.log(x);

let y = 5;
console.log(y-x); // operator is binary as it has two operand 


// operations :- + - / *

// % remainder 

// console.log(5%2);//1

// ** exponential 
console.log(5**2);//power 25 

// string concatenate 
console.log('1'+2);
console.log(1+"2");

console.log("my" + "string");

//use 2 2 1 but answer should be 41 
console.log(2+2+"1");




console.log("6" * "2"); // 12




let ua = 1;
console.log(+ua);

let ub = 1;
console.log(-ub);


console.log(+true); // 1
console.log(+""); // must print 0


//jargon only + is the operator that works with string 
// + can be in binary if two operand that is for arithmetic plus or string concat 
// + can be unary that converts non number, it brings the non number to their number form 
// like true is 1 false is 0 ------- "" represent 0 




// scenario 

let apples = "2";
let oranges = "3";

console.log(apples + oranges); // gives 23 here used concatenate to strings 

console.log(+apples + +oranges); // 5 as we know unary + bring out the number form of it 
//or you could use 
console.log(Number(apples) + Number(oranges)); // longer variant 



// modify in place 

let n = 2; // 2 
n = n + 2; // 4 
// or 
n *= 5;

let a =2;
a *= 3+5; // a*= 8 ---> a =a*8 ----> 16

console.log(n);


//increment and decrment 

// postfix operator after variable eg x++ or x-- 

// prefix operator before  varaiable eg ++x or --x 

let counter = 2;
counter++;


// if you use the value while using postfix or prefix 
// like print(x++) so like it will give the value that was there before increment 
// print(++x) it would give x after increasing the value 
// postfix or prefix can be applied to variable only not like eg 5++ wrong is this 



// bitwise operator treats arguments as 32 bit integer and work on their binary represetnattion 
// bitwise has little use in web dev but in crytography they are damn useful 
// bitwise use when we need to fiddle with number on their lowest level (bitwise)(binary)
/* & and operator 
 |  or operator
 ^ xor 
 ~ not 
  << left shit 
   >>  right shift 
>>> zero fill right shift 


*/



////++++++++++++
let b = (1+2,3+4);

console.log(b); // 7


// tasks 

let ta = 1 ,tb = 1; // ta =1 ,tb =1 
let tc = ++a ; // tc = 2 , ta has become 2 
let td =tb ++; // td = 1 and tb now became 2

// values of ta tb tc td 




console.log("now task");

console.log("" + 1 + 0); // 10 string // we can guess it left to right like first ""+1 gives "1"...

console.log("   -9  " - 5); // -14
console.log("   -9  " + 5); // string so concatentate 

let valu = ("  \t \n" - 2 ); // the string is equivavlent to "" as \t \n are space characters 
console.log(typeof valu); // number and value is -2

// so if it is not + then string would be converted to their numerical form (when we have [- * /] )

// task 3 

let aa = prompt("enter first number",1);
let bb = prompt("enter second number",2);


// modal gives string



alert(+aa+ +bb); // as alert gives string values and so does prompt
alert(Number(aa)+ Number(bb));


