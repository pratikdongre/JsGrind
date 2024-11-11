// so we have seen 

/*
// function declaration

function song(){
alert("tujhe bhula diya");
}


*/

/*
// function expression
let song = function(){
alert("tujhe bhula diya");
}
*/

/*
// arrow function 
let song = ()=>{
    alert("tujhe bhula diya");
    }
*/


// arrow functio more refined version of function expression
// let see 

// syntax
/*
let func = (arg1,arg2,arg3....,argN) => expression;

shorter version of 

let func = function(arg1,arg2,....argN)
{
return expression;
}
*/


let sum = (a,b) => a+b;
// sum is shorter version of summation
let summation = (a,b) => 
{
    return a+b;
}


alert(sum(5,10));


/*

rules of arrow function 

case 1 : if one one argument is there then 
omit the ()
let double = n = n*n;
same as saying 
let double = function(n){
return n*n;
}

case 2 : if no arguments is there :- then empty parentheses () is all we need
let sayHi = ()=>{
alert("hello");
}

// we can use arrow function same as function expression to create dynamic functions

*/


let lang = prompt("enter the language:- english or hindi ","english");

let songPlayed = (lang == "hindi") ? 
() => {alert("babuji zara dhere");}
:
() => {alert("Im the one");};

songPlayed();



// multiline arrow function

let power = (a,b) => {
    let result = a**b;
    return result;
}

alert(power(2,3));

// first quality of arrow function is brevity :- short and quick 


/*
arrow function comes in two flavors 
with curly braces 
let wcb = () =>{
    multiline;
    } 

without curly braces
let wocb = () => expression;
// example as saying
let wobc = () => return value; 

if one argument when we can omit the () like 
fun = n => return n*n;

if no argument then we need to use empty parentheses like 
let sayHi = ()=> alert("fck im lonely");

*/


// task 


function ask(question,yes,no){
    if(confirm(question)) yes();
    else no();
}
yup = () => {alert("han ji hanji");};
nope = () => {alert("na baba na ");};

ask("sad ? ",yup,nope);

ask("khush ?",
    ()=>{alert("bhot jyada");},
    ()=>{alert("jhuth hai");}
);

