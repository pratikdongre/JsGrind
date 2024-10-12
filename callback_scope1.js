//24

let age = prompt ("enter the age",18);

let welcome ;


if (age>18)
{
    welcome = function(){
        alert("hello sir");
    }

    // welcome();

}

else {
    welcome = function(){
        alert("hello kid");
    }
    // welcome();
}


welcome(); // welcome is accessible 


// or we could do ternary operator/conditional operator

/*
let umar = prompt("apni umar dale",18);

let welcome = (age>18) ? function(){
alert("hello");}
:
function(){
alert("hi");}

welcome();

*/





// when to choose function declaration and when to function expression
/*
first priority should be function declaration 

but in some scenarios we cant help 
and we must use functional expression 

like we need conditional declaration as we seen like if ...

*/




/*
summary
function are values , they can be assigned,copied,declared 
two types function declaration and function expression
function declaration are processed before code block is executed / visisble exerywhere in the block 
function expression are created when exeuction flow reaches them 

priority should be function declaration as it provides hoisting 
it is visible priot to its declaration / we can use even before its declaration

there are some cases we cant use function declaraiton so we must use function expression there 

*/