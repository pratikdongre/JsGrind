// there is one more way to create a function 
// rarely used but sometimes there is no alternative 


// syntax 
// let func = new Function ([arg1,arg2,...argN], functionBody);

let sum =  new Function ("a","b","return a + b ");

console.log(sum(1,2));

let sayHi = new Function ('console.log("Hello")');
sayHi();

// the major difference from other ways is that the function is createed literally from string 
// that is passed at run time 

// all previous delcaraiton requirest us programmer to write the function code in the script 

// but new function allows to turn any string into a function 
// we can recieve a new function from a server and then execture it 


// let str = ...a function receivied from the server.
// let func  = new Function (str);
// func();


// Closure 
// Usually a function remeere where it as born in the speicla property [[environment]]
// it reference the lex env from where its created 

// but when a function is created using new function its [[env]] is seto reference not the current lex env but the global one 

{
    function getFunc(){
        let value = "test";
        let func = new Function ("console.log(value)");
        return func;
    }

    // getFunc()(); // value is not defined

}

{
    function getFunc(){
        let value = "test";
        let func = function(){
            console.log(value);
        };
        return func;
    }
    getFunc()();
}



/*
imagine we must create a function from a string 
the code of that function is not known at the time of writing the script (that why we regular function)
but will be known in the process of execution 

we may recive it from the server or from another source 


our new function needds to interact with main script 

what if it could access the outer variables 

the provlem is that before js is publish to production 
its compressed using a minifier 
a special program that shrnks code by removing extra comments ,space and renames local var into shortern onees 

if a function has let userName minifier replaces it with let a and does it everywhere 
that usually a safe thing to do because the variable is local nothing outside the function can acess it 
and inside the function minifer replaces every metion of it 

so if new function had access to outer variables it would be unable to find rename userName 

if new function had access to outer var it would have problems iwht minifier 

to pass something to a function created as new Function we should use its arguments 


*/


/*
summary 
syntax 
let func = new Function ([arg1,arb2 ... argN],functionBody);

new Function('a','b','return a +b ');
new Function('a,b','return a + b');
new Function('a,b', 'return a + b');

Function created with new Function have [[env]] referencing to the global lex env 
not the outer one 

hence they can not use outer variables 
which is good as it insures us from error 

passing params explictly is much better method architecturally and causes no problems with minifers 
*/