// eval: run a code string 
/*
the built in eval function allows to execute  a string of code 
*/

// let result = eval(code);

let code = "console.log('Hello')";
eval(code); // hello

/*
a string of code mya be long contain line break ,function declaraiotn variables and son on 
the resutl of eval is the result of the last statemnt 

*/
let value = eval("1+1");
console.log(value);

/*
the evalved code is executed in the current lexical env so it can see outer variables 

*/

{
    let a = 1;

    function f(){
        let a = 2;
        eval("console.log(a)");
    }

    f();
}


{
    // it can change outer var as well 
    let x = 5;
    eval('x = 10');
    console.log(x);
    
}

/*
in stric mode eval has its own lex env 
so function and variables declared inside eval are not visible outside 

// remevinder use strict is enabled in runnable ex by default
*/
{
    eval("let x = 5; function f() {}");

    console.log(typeof x );
    // undefined 
    // function f is also not visisble 
    
    // wihtout use strict ,eval doesnt have its own lex env 
    // so we would see x and f outside 
}


/*
using eval 
in modern prog eval is used very sparingly 
it often said that eval is evil 

the reason is simple 
long time ago js was much weaker lng 
may things could only doen with eval

right now theres not reason to use eval
if someone is usingit 
there good change they can replace it wtih a modern language constructor 
or js module 


its abiltyt to access outer variable has side effects 

code minifers (toosl used befored js gets to production to compress it )
rename local var into shorter one 
its safea but not if eval is used 
as lcoal var may be accessed form evaled code string 
so minifger dont do that renaming for all var potentailly visisble from eval 

that negatively affecs code compression ration 

using outer local var inside eval is also bad 
as it makes mainigatin the code more difficult 


*/

/*
if evaled code does not use outer var please call eval as window.eval(...)

this way code is executed in the global scope 

*/

{
    let x = 1;
    {
        let x = 5;
        // window.eval("console.log(x)"); // 1 
    }
}

/*
if eva code needs local var change eval to neew fnction and pass them as argument 

*/
{
    let f = new Function('a','console.log(a)');
    f(5);
}


/*
the new function construct 
it creates a function from a string 
also in the global scope 
so it can see local var 
but it so claerers to pas sthem explictly as arugment 


*/

/*
summary 
a call do eval(code) runs the string of code and returns the result of the last stataemnt 

rarely used in moder njs as there no need 
can accees outer local var bad
instead to eval the code in the global scope use window.eval(code)

or ithe code needs some date form the outer scope use new Function and pass it as argumetn 
*/

// tasks 1 
// eval calculator

// create a cal that prompst ofr a arithmetic expression and returns its result 
// theres no need to check the expression for correcntess 
// just eval and return the resutl 

{
    let total_delivered = 80000;
    let arith_expre = `0.8 * ${total_delivered}`;


    console.log(eval(arith_expre));
}


/*
to make this safe and limit it to arithmetic only 
we can check the expr using regualr expression
so that it only may contain digits and operators 
*/