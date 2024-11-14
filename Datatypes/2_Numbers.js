/*
In modern js there are two types of numbers: 
1. regular number 
2. Bigint numbers ;


regular numbers :- these are stored in 64-bit format IEEE 754  aka double precision floating point number
these are the numbers that we use most of the time.

Bignint numbers :- these repsent arbitrary length of numbers.
these are needed because the regulare integers cant safely exceed (2power53 -1)  or less than -(2power53 -1)

*/


// more ways to write a number 
let billion = 1000000000;

billion = 1_000_000_000;
// here the _ plays the role of syntactic sugar , it makes the number more readable 
// the js engine ingore _ so its exactly the same as 1 billion

// in real life we avoid wrtiing zeros we write 1b or 1bln or 1.73 for 1 billion 300 million

// in js we can shorten a number by appending the letter 'e' to it specifying the zeros count

billion = 1e9;
console.log(7.3e9);  //7300000000

// in simple words e multiple the given number before decimal with the count of zeroes

// 1e3 === 1000;
// 1.23e6 === 1.23 * 1000000

let mcs = 0.00001;

mcs = 1.e-5;

console.log(mcs);

// in other words a negative number after e means a divsion by 1 with the count of zeroes

// 1.23e-6 === 1.23 / 1000000

// 1234e-2 === 1234/100




/*
Hex,binary and octal numbers 

hexadecimal numbers are widely used in js to represent colors,encode characters and for many other things 
so naturally, there exists a shorter way way to write them : 

*/

console.log(0xff);
console.log(0xFF);// case does not fukcing matter at all 


/*
binary and octal numeral systems are rearely used but also supporeted with 0b and 0o prefixes 
*/

let a = 0b11111111;
let b = 0o377;

console.log(a == b);
// there are only 3 numeral system with such supports
// for other numeral systems we should use the function parseInt

//toString(base)
//the method num.toString(base) returns a string representation of num in the numeral system with the given base

let num = 255;
console.log(num.toString(16)); // hexadecimal
console.log(num.toString(2)); // binary
console.log(num.toString(10)); // 255 

// the base can vary from 2 to 36 , by default its 10
// a funny but useful case for 36 is when we need to turn a long numeric identifer into something shorter 

let bignum = 45465465465465465;
console.log(bignum.toString(36));

// base = 36 is the maximum, digits can be 0 ....9 or A....Z 

console.log(45465465465465465..toString(36));
// need .. two dots if direclty calling on method on a number 
// or put() this around 
console.log((456456465).toString(36));

// rounding 


