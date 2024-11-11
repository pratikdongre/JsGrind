//25
// we are almost done 
// kudos 

// arrow function better than function expression 
// let see if they really are or not 

// syntax
/*
// let func = (arg1, arg2, arg3...,argN) => expression;

shorter version of 

let func = function(arg1,arg2,....argN){
return expression;
}

*/


let sum=(a,b) => a+b;
// sum is shorter version of summation
let summation = function(a,b)
{
    return a+b;
}

alert(sum(4,5));



/*

rules of arrow function

case 1 : if only one argument :- then we can ommit the ()
let double = n => return n*n;
let double = function(n){
return n*n;
}

case 2 : if no arguments is there :- then we can need () empty parentheses
let sayHI = ()=> {
    alert("hello");
    }
*/

// we can use arrow function same as function expression to ccreate dynamic functions 
let age = prompt("enter the age ",18);

let welcome = (age>18) ? 
()=>{alert("hello sir ");}:
()=>{alert("hello kid ");}

welcome();



// multiline arrow function

let power = (a,b) => {
    let result = a**b;
    return result ;

}

alert(power(2,3));


// first quality of arrow function is brevity :- short and quick


/* summary

we have seen two types of arrow function
without curly braces :- let fun = () => expression ; 
with curly brace :- let fun = () => { multiline };

if one argument then then we can omit the () like let fun = n => return n*n;
if no argument then we need to use empty parentheses like let sayHI = ()=> alert("ishq shava");




*/