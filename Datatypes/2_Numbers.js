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

console.log( "why not is this workding ", a == b);
// console.log( "why not is this workding " +  a == b); ye to sahi nhi hai
// console.log( "why not is this workding " +  (a == b)); 

console.log("above");
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

/*

one of the most used operation when working with number is round 
there are many built in function for rounding 
*/

// Math.floor
// rounds down 3.1 becomes 3 , and -1.1 becomes -2

// Math.ceil 
// rounds down 3.1 to 4 and -1.1 to 1

// Math.round
// rounds to the nearest "Integer" 3.1 becomes 3 
// 3.6 becomes 4 
// in the middle cases 3.5 becoms 4 
// -3.5 becomes -3 on the bigger side if you know 

// Math.trunc -- not supported by inernet exploler
// removes anything after the decimal point without rounding 3.1 becomes 3 , -1.1 becomes -1


// but what if we want to round the number to the n-th digit after the decimal
// let say 1.2345 to 1.23

// there are two ways to do so 

// 1. multiply and divide ----multiply the number and then round it and then divide 
num = 1.2345;
console.log(Math.round(1.2345 * 100)/100);

// 2. toFixed(n) rounds the number to n digits after the point 
console.log(num.toFixed(2)); // type is string
// if the decimal part is shorter then appended with zeroes

console.log((1.22).toFixed(4));

// we can convert the string num to number using unary plus or Number() call

console.log(+num.toFixed(2)); 


// imprecise calculations
/*
internally a number is represented in 64 bit format 
so there are exactly 64 bits to store a number. 
52 of them are used to store digit 
11 of them for decimal point
1 for the sign 

but if the number is very long then it will exceed the 64 bit storage and beome a special numeric value infinity

*/

console.log(1e500); // infinity

// what may be little less obvious , but happens quite often , is the loss of precision.

console.log(0.1 + 0.2 ==0.3);

console.log(0.1+0.2); //0.30000000000000004

/*
0.1 and 0.3 that looks fine in decimal number system are actually unending fraction in binary form

*/

console.log(0.3.toString(2));

console.log(1/3);
console.log(1/10);

/*
0.1 == 1/10 is guaranteeed to work well in decimal system as the base is 10 
but not 1/3 in decimal system 

same way 
in binary divsion by power of 2 is guaraneteed to wwoek but 1/10 or 1/3 beomes enedless bianry fraction
*/

console.log(typeof ((1/4).toString(2))); // string
console.log(typeof (1/4..toString(2))); // number



console.log((1/2).toString(2)); // string // not infinite 

console.log(1/2..toString(10)); // number 

console.log((1/10).toString(2)); // string


//There’s just no way to store exactly 0.1 or exactly 0.2 using the binary system,
//  just like there is no way to store one-third as a decimal fraction.


/*
the solution solved by numeri format IEEE-754 for this is by rounding to the nearest possible number
these rounding rules normally did not allow us to see 'tiny precision rules' but it exists

*/

console.log(0.1.toFixed(20)); //0.10000000000000000555

/*
1/10 is 0.1 in decimal 
but in binary its is never ending number 


like we know 0.1 is endless binary fraction in binary but it still has tobe stored right in binary 
and how much can it store
Rounding to Fit IEEE 754: Since JavaScript uses 64-bit floating-point numbers (IEEE 754),
 it has to truncate the endless binary fraction to fit into

 so number 0.1 becomes inaccutrate 
 and when we didd 0.1.toFixed(20) it reveals the full precision till 20 which reveal the rounding error introducedby binary representeation

*/

// how do we overcome this so 0.1 +0.2 becomes 0.3
// rounding // using toFixed(2)
let sum = 0.1 + 0.2;
console.log(sum.toFixed(1)); // toFixed returns a string it sutialbe also like in eshopping we show "$0.30"
console.log(+sum.toFixed(1)); // number // we can anyway coerce to a number using unary plus


// or you can use another approach that is multiply/divide

console.log((0.1 *10 + 0.2*10)/10);

//suppose we want to round of the number till decimal 2 then its 100 to divide and multply with as it has 2 zeross
console.log(Math.round((1.2345) *100)/100);
console.log(Math.round((0.1+0.2) *100)/100);
console.log(((0.1+0.2) *100)/100);
console.log(Math.round((0.1+0.2) *100)/100);

console.log("delimeter");


console.log((0.28 *100 + 0.14 *100)/100);
// so the multipley divide approach reduces the error but does not remotve it totally




/*Sometimes we could try to evade fractions at all. Like if we’re dealing with a shop,
 then we can store prices in cents instead of dollars. But what if we apply a discount of 30%? 
In practice, totally evading fractions is rarely possible. Just round them to cut “tails” when needed.

Fractions are Unavoidable

*/


console.log(9999999999999999);//10000000000000000
/*

This suffers from the same issue: a loss of precision. 
There are 64 bits for the number, 52 of them can be used to store digits, but that’s not enough. 
So the least significant digits disappear.

JavaScript doesn’t trigger an error in such events. 
It does its best to fit the number into the desired format, but unfortunately, this format is not big enough.
*/



/*
another funny 2 zeroes

-0 and +0 
thats because a sign is represent by a single bit 
so it can be set or not set for any number inlcuding zero
In most cases, the distinction is unnoticeable, because operators are suited to treat them as the same.


*/


/* Tests :- isFinite(value) , isNan(value) 
Remembers these two special numeric values 
Infinity and (-Infinity) is a special numeric value that is greater(less) than anything
Nan represent an erro not a number

they belong to type number,but are not normal numbers so there are special function to check for them.
isNan(value) converts its arguments to a number and then test it for being Nan: 

*/

console.log(isNaN(NaN));

console.log(isNaN("str"));

//why do we need this function cant we just use the comparison === "NaN" 
// the value is unique it does not equal to anything including itself 

console.log(NaN === NaN); // false

/*
isFinite(value) convert its argument to a number and returns true if its regular number,not 
Nan/Infinity/-Infinity

*/

console.log("infinties");
console.log(isFinite(NaN));
console.log(isFinite(15));
console.log(isFinite(Infinity));
console.log(isFinite("15")); // ture cause got convert 

console.log(isFinite("str"));

// sometimes isFinite canbe used to validate whether a string value is a regualar number 
// not Nan,infinity,-Infinity

//  num = +prompt("enter a number");

//  alert(isFinite(num));

console.log(isFinite(null)); // true

console.log(null == undefined); // true reminder 

//Please note that an empty or a space-only string is treated as 0 in all numeric functions including isFinite.

/*
Number.isNan and Number.isFinite methods are more strict version of isNan and isFinite functions.

They do not auto convert their argument into a number but check if it belongs to the number type instead.

Number.isNan(value) returns true if the argument belongs to the number type and it is Nan
in any other case it return false,

*/
console.log("Number.isNaN")

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("str"/2));
console.log("str"/2); // nan


// note the difference 
console.log(Number.isNaN("str")); // false because it checks 
console.log(isNaN("str"));


// .. Number.isFinite() return true if the value is number type and is not nan,infinite,-infinite
// in any other case it return false
console.log("Number.isFinite");
console.log(Number.isFinite(123));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(2/0));

// note the difference 

console.log(isFinite("123"));
console.log(Number.isFinite("123"));

/*
In a way, Number.isNaN and Number.isFinite are simpler and more straightforward than isNaN and isFinite functions.
 In practice though, isNaN and isFinite are mostly used, as they’re shorter to write.
*/

/*
comparison with object.is

there is a special built in method object.is that compares values like === , but is more reliable for two edge cases.
1. it works with NaN : Object.is(NaN,Nan) === true, thats good thing
2. values 0 and -0 are different , Object.is(0,-0) === false
technically thats correct becuase internally the number has a sign bit that may be different even if all other bits are zeroes 

in all other cases , object.is(a,b) is same as a===b 

we mention Object.is here, because its often used in javascript specifcation 
when an internal algo need to compare two values for being exactly same it uses object.is(internally called SameValue)
*/


console.log("more");

console.log(NaN == NaN);  //false as Nan does not qeual to anything includign itself
console.log(NaN === NaN);  // false

console.log(0 ==-0); // true
console.log(0 ===-0); // true

// but with object.is its different picture 

console.log(Object.is(NaN,NaN)); //true



// ParseInt and ParseFloat
console.log("ParseInt and ParseFloat");

//Numeric conversion using a pluse + or Number() is strict.
// if a value is not exactly a number, it fails.
console.log(+"100px");

console.log(+"   1000 ");// sole excpetion if a number is in string with space it gets converted successfully

// but in real life we often have values like 100px or 12pt or 6inches of wood in css
// from this 100px we would liek to extract numeric part 
// That is what parseInt, and parseFloat are for 


/*
//They read a number from a string until they cant.
in case of any error the gather number is returned 
the function ParseInt returns an integer 
whilist function ParseFloat will return a float pointing number

*/

console.log(parseInt('100px'));
console.log(parseFloat('12.5em'));

console.log(parseInt('12.3'));
console.log(parseFloat('12.3.4'));

// there are situtation when parseInt,parseFloat will return NaN.
// it happens when no digits could be read

console.log(parseInt('a123')); // Nan // the first symbol stop the precess

// therse is second argument of parseInt(str,radix)
// it specifies the base of the numeral system 
// so parseInt can also parse string of hex number, binary number and so on.


console.log(parseInt('0xff',16)); //255
console.log(parseInt('ff',16));//255 without 0x also works

console.log(parseInt('2n9c',36));


// other math functions 

/*
javascript has built in math object which contains a small library of mathematical functions and constants 

Math.random() - returns a randome number  from 0 to 1 (not including 1)
Math.max(a,b,c....) and Math.min(a,b,c....) - returns the greatest and smallest from the arbitrary numbers of arguments 
Math.pow(2,10) Math.pow(n,power) return n raised to the given power

there are more function in Math object including trignometry

*/
console.log("Math functions");
console.log(Math.random());
 a =1;
 b = 5;
console.log(Math.max(a,b,6));
console.log(Math.min(a,b,6));

let n = 10;
console.log(Math.pow(2,n));


/*
summary 

to use bigint ther are two ways 
either use n at the end 
or BigInt()


1. to write numbers with many zeroes 
// append "e" with the zeroes count 
like 123e6 is the same as 123 with 6 zeroes

2. a negative number after e cause number to be divided by 1 with given zeroes 
eg 123e-6 means 0.000123

for different numeral systems 

can write numbers directly in hex (0x),Octal (0o) and binary (0b) systems.
parseInt(str,base) parses the string str into an integer in numeral system with the given base 2 <=base <=36

num.toString(base) -- converts the number to a string in the numeral system with the given base.

For regualar tests :- 
isNaN(value) convert its argument to a type number and then test it for being NaN
Number.isNaN(value) chceks whether its argument belong to number type and if so tests if its NaN

isFinite(value) convert its argument to number type an then check for it being finite and not begin Nan,infinity,-infinity
Number.isFinite(value) check whether the the argument belong to Number type and if so test for being finite



for converting values like 12px or 6inches
use parseInt,parseFloat for the soft conversion
which reads a number from a string and then returns the value they could read before the error

For fractions
Round using Math.floor,Math.ceil,Math.round or num.toFixed(precision).
make sure to remember theres a loss of precision when working with fractions

*/

// tasks
console.log('tasks');

// sum numbers from visitor
// a = +prompt("Enter first number",'2');
// b = Number(prompt("Enter second number",'4'));

 sum = a + b ;
// alert("the sum is " + sum);
// alert("the sum is " , sum); wont work cause alert accepts only argument 


//task2
/*
according to docs Math.round and Math.fixed round the number to the nearest number
0...4 lead down 
5...9 lead up
for instance 1.35 gives 1.4
6.35 gives 6.3
why 
one thing we are sure in both cases there is internal endless binary fraction 
the precision loss can cause both increase or decrease in a number

in our case at 6.35 the number become less that is why it rounded down 

*/


// console.log((1/5).toString(10)); 0.2
// console.log(1/5); 0.2
// console.log(0.1+0.2); 0.300000000000004

console.log(1.35.toFixed(20)); // on greater side 
console.log(6.35.toFixed(20)); // 6.34..... lower side 

console.log(1.35.toFixed(1)); // 1.4
console.log(6.35.toFixed(1)); // 6.3 as internally it is stored 6.34... so 4 goes lead down so 3 statys as it it as its floor

// how to get 6.4

let ans =Math.round(6.35 *10) /10;
console.log(ans); //6.4


// tasks 3

// create a function readNumber which prompts for a number until enter a valid numerical value

function readNumber(){
    let value = +prompt("enter a valid number");

    if(typeof Number(value) == "number") //type would always be number but its the value that we want to check 
    {
        return +value;
    }
    else if(value== null || value == "")
    {
        return null;
    }
    else {
        readNumber();
    }

}

// alert(readNumber());


const v2ReadNumber = function(){
    let value = prompt("enter a number");

    if(isFinite(value))
    {
        return +value;

    } else if (value === null || value ==='')
    {
        return null;
    } else {
       return v2ReadNumber();
    }

}

// alert(v2ReadNumber());

// console.log(typeof typeof +(5)); string "number"



function readNumber() {
    let num;
  
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  // alert(`Read: ${readNumber()}`);

  /*
  why are we not getting null and getting 0 
  even when we have if condititon 
  because 
  isFinite(value) convert the value to their number type and then check whether is finite or not 
  so null or '' are 0 in theri number form
  
  to Overcome this use Number.isFinite(value)

  */


  const refinedv2ReadNumber = function(){
    let value = prompt("enter a number");

    if(Number.isFinite(value) || parseInt(value))
    {
        return +value;

    } else if (value === null || value ==='')
    {
        return null;
    } else {
       return v2ReadNumber();
    }

}

// alert(v2ReadNumber()); 


function RefinedreadNumber() {
    let num;
  
    do {
      num = prompt("Enter a number please?", 0);

      if (num === null || num === '') return null;
        
      
    } while ( !isFinite(num) );
    //while ( !isFinite(num) || num != null || num != '' ); might not work as one of the condition would always be true 

  
  
    return +num;
  }
  
//   alert(`Read: ${readNumber()}`);


/*
refinedv2ReadNumber in this we use Number.isFinite(value) that does not convert the type so this solves null and '' problem 
and parseInt() to get number 

RefinedreadNumber in this we put the if condition isnide the do while 

*/


  //task 3

//   let i = 0;
//   while(i!=10)
//   {
//     i+=2;
//   }
  // the loop never ends why 

  let i =0;
  while(i<11)
  {    i +=0.2;
  
      if(i> 9.8 && i <10.2)
      {
          console.log(i);
      }
  }
  
  /*
Such things happen because of the precision losses when adding fractions like 0.2.

Conclusion: evade equality checks when working with decimal fractions.
  */

// tasks 4

// a random number from min to max;

const random =  (min,max)=> {
  let value = Math.random();
  value = Math.round(value *100)/10;

  if(value > min && value < max)
  {
    return value ;
  }
  else {
    return random(min,max);
  }
  
}

console.log(random(1,5));

console.log("another way of 4 ");


const random1 = (min,max)=>{
  // return (min + Math.random() * (max - min)).toFixed(2); 
  // if not want to include max 
 
  // if want to incldue max also 
  // return Math.round((Math.random() * (max-min)+min));
  
  
  
  // this is but 
  /*
  let sya min max is 1, 3 two would come twice often than others 
The probability to get edge values min and max is two times less than any other.

If you run the example above many times, you would easily see that 2 appears the most often.

That happens because Math.round() gets random numbers from the interval 1..3 and rounds them as follows:

values from 1    ... to 1.4999999999  become 1
values from 1.5  ... to 2.4999999999  become 2 // see the range of 2 form 1.5 to 2.499 
values from 2.5  ... to 2.9999999999  become 3

// we can generate values from 0.5 to 3.5
1st correct solution 
min = 1 max = 3 
return (Math.random() * (max-min +1) + min -0.5)

let say Math.random gives 0 
0*(3-1+1) + 1 -0.5
0.5 min value if we round this we get 1 the min value 

Math.random() gives 0.9999
0.999*(3-1+1) + 1 -0.5
0.999*(3) 
3.49999997 max alue so if we do round we get 3 as the max  value 


another solution 
using floor
min 1 
max 3 

min + Math.random() * (max-min + 1)  

at Math.random() 0 we get 1 which is min value
0*(3-1+1) + 1 = 1 

for max 
1 + 0.9999 * (3) = 3.999999  floor 3 

1 + (0.555) * 3 = 2.666 floor 2 
1+(0.2)*3 gives 1 

// how do i map for which value i would get wihch 
so the values we would get [1,4)

for 1 
the value should before doing floor  
1<= value <2
1<= 1 + Math.random()*3 < 2
0 <= Math.random()*3 < 1
0 <= Math.random() < 1/3 

from 0 to 1/3 we will get 1 

for 2 
2<= value < 3
2 <= 1 + Math.random() * 3 < 3
1/3 <= Math.random < 2/3
from 1/3 to 2/3 will get 2 

for 3 
3 <= value <4
2/3 <= math.random() < 1
from 2/3 to 1 will get 3 


All intervals have the same length, making the final distribution uniform.


  */




}

console.log(random1(1,5));

