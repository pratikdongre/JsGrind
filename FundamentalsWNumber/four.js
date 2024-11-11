// operators

// unary and binary

// operand is what operators are applied to 
// for exmaple 4 + 2  4 and 2 are the operands where the operators is applied to 

// we have seen operator before that is typeof 


let x = 1 ; //equal to is a binary operators as it takes two operands 
x = -x ; // operator is unary as it has only one operand this only revers the sign


console.log(x);

let a = 1 ,b = 4;
console.log(a-b); // in this - is binary operators that subtracts 


// operators 

// math operators 
// + - * /
// % remainder
// ** exponential

console.log(7%3);
console.log(3**3);


let calculationRemainder = 8%3;
let afterExponential = 2**calculationRemainder;

console.log(calculationRemainder);
console.log(afterExponential);


// could also do square root or others roots like 1/2

console.log("square root of 4 ",4**(1/2));


//string concatenation with binary + 

let s = "my" + "string";
console.log(s);
// if any one of the operand is string the others get string ed too
console.log("1" + 2);
console.log(1 + "2");


// question usee 221 but asnwer should be 41;

console.log(2+2+"1");

// 122 
console.log("1" + 2 + 2);
// it must start from left to right 
// so if first thing it see is string then it cconvert the rest of them to string
// if its  sees number then it first do the mathematical operation then add with string like we seen above 


// this is only with + 

// rest of mathematical operators convert string to number 
console.log("6" * 2 );
console.log(6 - "2" );


// unary + does nothing to numbers 
// but if operand is not number it conver them into a number 

let p = 1;
console.log(+p);

console.log(+true);
console.log(+"");
// similar as doing Number(true)
// using Number type


// summary 
// only + is the operator that works with string 
// + can be in binary in two situtations one 
// 1+2 
// "string got" + "concatenated"

// + can be unary that converts non number 
// it brings the non number to theri number form 
// like true is 1 false is 0 ------ "" represent 0 



// scenario in html form we get values in form of strings 


let apples = "2";
let oranges = "3";

console.log(apples + oranges); // it concate the string 
// what if we want to sum 
console.log(+apples + +oranges);
// or you could use
console.log(Number(apples) + Number(oranges));
// longer variant


// operator precedence 

// if an expression has more than one operator the execution order is defined by their precedence 

// 1 + 2 * 2 in this example we know * has more precendence 
// this would give use 5 

// but parenthesis override any precedence like 
// (1+2) * 2 =  6

// some precedence 
// 15	unary plus	+
// 14	unary negation	-
// 13	exponentiation	**
// 12	multiplication	*
// 12	division	/
// 11	addition	+
// 11	subtraction	-
// …	…	…
// 2	assignment	=

// note unary plus has more precedence than mathematical addtion 
// this is why when you do 
// +apples + +oranges 
// unary + happens first and then mathematical + 


//assignment = returns a value 
 a = 1;
 b = 2;
let c= 3 - (a=b+1);

console.log(a);
console.log(b);


// chaining assignments 
let l,m,n;
l = m = n = 2+2;

console.log(l);
console.log(m);
console.log(n);

// or you could do 
l = 2+2 ;
m = l;
n = l ;


// modify in place 

a = 2;
a = a+2;
// or 
a+=2

a = 2;
a *= 3 + 5; // a*= 4 // 8 
console.log(a);


//increment and decrement 
// postfix operatore after variable "baadme" x++ or x--
// prefix operator before variable "baadake do "eg ++x or --x 

let counter = 2 ;
counter++;
console.log(counter);

a = 2;
console.log(++a); // 3 
// it will increase the value and gave it to you right after at that moment
b=2
console.log(b++); // / This prints 2, but b increases right after the line.



// three scenarios 

// if the resutl of increment/decrement is not use there is no difference in which form to use 
let count = 0;
count++;
++count;

console.log(count);


// if we like to increase/decrease a value and immediately use that value 
// then we need to perform prefix 

count = 0;
console.log(++count);

// if we like to incrase a value but dont plan to use previos value 
// then postfix 

count = 0 ;
console.log(count++);



// you can use ++ -- inside other operations 

let insides = 1;
console.log(2 * ++insides);// 2*2 = 4 

insides = 1;
console.log(2 * insides++); // 2 
// less readable instead 

insides = 1;
let answer = 2*insides;
insides++; 


// bitwise operator treats arguments as 32 bit integer and work on their binary representation
// bitwise has little usei n web dev but in cryptography they are heavily used 
// bitwise is used when we need to fiddle with number on their lowest level on binary(bitwise)
/* 
& and operator 
| or operator
^ xor
~ not 
<< left shift
>> right shift 
>>> zero fill right shift 

*/

let z = (1+2 , 3+4);// 1+2 is calculated got ignored and 3+4 calculated and stored into z 
console.log(z);
//stuff like this is use it more complex constructs to put several actions in one line 
// used in javascript frameworks such as 




a = 1 ,b=1;
c= ++a ;
let d = b++;

// a =2 b= 2  c= 2 d = 1  


a = 2;
x = 1 + (a *= 2);

// a = 4 
// x = 5;



//type conversion 
console.log("" + 1 + 0); // "10" cause from left to right
console.log("" - 1 + 0); // -1
console.log(true + false); //1
console.log(6 / "3");//2
console.log("2" * "3");//6
console.log(4 + 5 + "px");//9px
console.log("$" + 4 + 5);// $45
console.log("4" - 2);//2
console.log("4px" - 2);//nan
console.log("  -9  " + 5); //  --9  -5
console.log("  -9  " - 5); //-14
console.log(null + 1); //1
console.log(undefined + 1); // nan
console.log(" \t \n" - 2); // -2 in this string is equivalent to "" as \t\n are space charactes

// so if its not + then string would be converted to thei numerical form(when we have [* / -] )


let aa = prompt("enter first number",1);
let bb = prompt ("enter second number", 2 );
 
alert(aa+bb); // gives 12 modal gives string that is why 
// but we need three 

confirm("is the value right");
alert(+aa + +bb);
