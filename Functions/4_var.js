// the old var
// this is only to understand the past we dont use it now 

// there are three ways to declare a variable let,const,var

// the var declaration is similar to let 
// most of the time we can replcae let with work and expect things to work

var message = "hi";
console.log(message);


// but internally var is different beast 
/*
var has no block scope 
variable declared with var are either function scope or global scoped 
they are visisble through blocks 

*/

if(true)
{
    var test = true;
}

console.log(test);

// as var ignore code block we got a global variable 

if(true)
{
    let test = false; // this one not accseible out side of scope 
}

console.log(test);

// the same thing with loop :- var cant be block or loop local

{
    for (var i = 0 ; i <= 3 ; i ++){
        var one = 1;
    }
    console.log(i);
    console.log(one);
    
}


// if a code block is inside a function then var becomes a function level variable 

{   
    function sayHi(){
        if (true){
            var name = "pratik"

        }
        console.log("hello" + name);

    }

    sayHi();
    // console.log(name); not defined 

    // as can see var pierces through the if,for,while or other code blocks 
    // because js back then did not has lex env and var is remnant of that 
    
}


// var tolerates re declaration 
// if we declare same variable with let twice thats an error 
{
    let user ;
    // let user ; 
    // error 
}

// with var we can redeclare a variable any number of times 

{
    var user = "Pratik";
    var user = "John"; /// no error 

    console.log(user);
    
}

// var variable can be declared below their use 

// var declaration are processed when a function starts or script starts for globals 

// in other words , var variables are definined in the beginning of the function 
// no matter where the definition is (assuming  definition is not in nested function)

{
    function sayhi(){
        phrase = "hey";
        console.log(phrase);

        var phrase ;
        
    }
    sayhi();
}
// works and is technically same as 

{
    function sayhi(){
        var phrase;
        phrase = "hey";
        console.log(phrase);
        
    }
    sayhi();
}

// or even as this 

{
    function sayhi(){
        phrase = "balma";

        if(false)
        {
            let phrase;
        }

        console.log(phrase);
        
    }
    sayhi();
}

// this is called hoisting /rasising because all var are hoisted to the top of the function

// so in the example above if (branch) never executes but that does not matter 
// the var inside its processed in the beginning of the function 
// so var declaration are processed in the beginning regardless


// declarations are hoisted but assignments are not 

{
    function sayHi(){
        console.log(phrase); // undefined 

        var phrase = "hey";
        
    }

    sayHi();
}

// the declarations are hoisted at the top of the function but the assignment always work at 
// the place where it appears 


// iife 
// in the past there was only var 
// which had no block - level visiblity 
// programmer invented a way to emulate it 
// which is called immediately inovked function expression

// it is somethign which dont use nowawdays 

// iife 

{
    (function(){
        var message = "may";
        console.log(message);
        
    })();
}

// here a function expression is created and immediately called .
// so the code executes it right away and has its own private variables 


// the function expression is wrapped in () , because when js engine encounter a function 
// in the main code  it understans it as a function declarartion 
// and a function declration must have a name 

// even if it has a name we cant call function declration immediately 

{
    // function go(){

    // }(); // wont work 
}

// so () around the function is a trick to show js that functio nis created in the context of 
// another expression  , hence its function expression  
// it need no name and can be called immediately 

// there are other ways to tell js that we meant functional expression
{

    // ways to create iife

    (function (){
        console.log("parenthesis around the function ");
        
    })();

    (function (){
        console.log("parenthiseis aroudn the whole thing ");
        
    }());


    !function(){
        console.log("bitwise not operation start the function");
        
    }();

    +function(){
        console.log("unary plus start the function");
        
    }();
}

//In all the above cases we declare a Function Expression and run it immediately. 
// Let’s note again: nowadays there’s no reason to write such code.

// summary 
// there are two main difference of var compared to let/cosnt 
/*
1. var variables have no block scope theri visiblity is scoped to the current function or global 
if declared outside function

2. var declared are processed at function start aka hoisted (script start for globals)

These differences make var worse than let most of the time. 
Block-level variables is such a great thing. 
That’s why let was introduced in the standard long ago, 
and is now a major way (along with const) to declare a variable

*/