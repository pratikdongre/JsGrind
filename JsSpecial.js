//27

/* 
1. delimter :- semicolon or new line 

// delimted with semicolon
// alert("sweety"); alert(tera);
or 

alert("pyar")
alert("chaeda")
// called automatic semicolon insertion

((((((
alert("There will be an error after this message")

[1, 2].forEach(alert)
))))))))
// this would give error if not mention semicolon because automatic semicolon insertion might not work here


//lastly 
{} in block code ; not required 
 but you can put extra ; somewhere that not error it ll be ignored 


2. "use strict;"
for modern js 

w/o  this the script still works but some features might work old fashioned 


3. variables 
let 
const :- constant cant changed 
var :- old style 

variables are dynamically typed means they can store any value 

let $letsee = 5;
let _thisworkstoo = "what the fu";
console.log($letsee +" "+ _thisworkstoo);

a variable name may include letters and digits 
but may not start with digits

8 datatypes 
string,number,bigint,boolean, null and undefined
non primitive :- object,symbol


typeof return type for a value ,with two exception
typeof null == "object" ----error in language 
typeof function(){} == "function" ----function are treated specially

3. Interaction
prompt(question,[default])
confirm(question)
alert(message)

all these are modal the pause the code and prevent visitor from interacting with the page until they answer 

let username = prompt("Your name ?","Alice");
let isTeaWanted = confirm("Do you want some tea ?");


alert("Visitor " + username);
alert("Tea wanted " + isTeaWanted);

4. operators :- * + - / % **
the binary plus can concatenate strings 
if one operand is string then other is converted to string too
alert("1" + 2);
alert(1 + "2");

---assignment like a=b or a*=2
---bitwise opeerator work with 32 bit integer at the lowest ,bit level
---ternary operator/ conditional operator :- contains three parameter
like if cond ? result A : result B;
so if cond is truthy then result A would be executed
if condi is falsy then result B

---logical operator :- && || and ! 
performs short circuit evaluation 

like && if its founds falsy value then overall result would surely be false so it stops right here 
like || if its found first true then the whole would surely be true so it stops right here 
! not operator converts the value to their opposite like 
!true == false 

---nullish coalescing operator :- ?? provides a way to choose the first defined value 
the result of a ?? b is a unless its null/undefined
if both are undefined/null then last value 

---comparisons 
null == undefined equal each other 

--- equality check == for values of different types convert them to a number 
like 0 == 'false' // true
     0 == '' // true
     1 == "string" // true 

---strict equality operator does not do conversion 
0 === 'false' // false 

--- loops 
while(cond){
}

do {
}while()

for(let i = 0;i<=10;i++)

the var declared in for(let i = 0;i<=10;i++) is visible inside loop only
we can also omit the let and resue the exisiting variable 

directives such as break/continue


--- the switch construct can replace multiple if checks / it uses === (strict equality) for comparison
let age = prompt("enter your age",18);
switch(age)
{
    case 18 : 
    {
        console.log("this wont execture because the result of prompt is string not a number");
        break;
    }

    case '18':
        {
            console.log("This works!");
            break;
        }
    default : 
    {
        console.log("any value not equal to any of above");
    }    
}



--- functions can be created using three ways 
1. function declarations
function sum(a,b)
{
let result =a+b;
return result ;
}

2. function expression
let sum = function(a,b){
let result = a+b;
return result;
}

3. Arrow functions
let sum =(a,b) => return a+b;
or let summation = (a,b) => {
    let result =a+b;
    alert(result);
    return result;
    }

3.1 without arguments 
    let sayHi = ()=>{
        alert("sayhi");
        }

3.2 with single argument
    let double = n =>{
        return n*n;
        }        




// functions may have local variables those declared inside the body or as parameters 
such variables are only visible inside a function

// parameters can have default value function sum(a=1,b=2){...}

// function always return somethings if its does not then the return is undefined 

*/





