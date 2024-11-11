
// as we know function declaration is visisble within scope 

// in strict mode 
// whena function declaration is within a code block , its visible everywhere inside that but not outside of it 


// for instance declare a function welcome based on the age 
"use strict";

let age = prompt("please enter your age","22");

if(age > 18)
{
    function welcome (){
        alert("hello sir");
    }
}
else 
{
    function welcome (){
        alert("hey");
    }
}


// welcome();

// this works in non strict mode 
// but does not in strict mdoe that is modern javascript 


// another example

if (age > 18)
{
    welcome();

    function welcome(){
        alert("adult");
    }

    welcome();
}
else {
    function welcome(){
        alert("teen");
    }
}
// welcome();

// so when you enter age <=18
// you would go to else part and as 
// we know function declaration is not visible outside the scope


// lets see with functional expression 


let msg ;
if(age > 18)
{
    msg = function (){
        alert("you are man now ");
    }
}
else {
    msg = function(){
        alert("enjoy these days ");
    }
}


msg();


// can you simplify the msg more 

msg = (age > 18) ? function (){alert("enjoy you above 18");}
: function(){alert("enjoy you are below 18");};

msg();


// summary 
// functiona declaration are executed before running the script
// so you can call them even before there intialization
// and they have block scope in modern javascript

// functional expression are created when execution reaches it and only avaiable from that moment/

// most commonly we use functional declaration
// readability , there privileges such as calling before intializations

// but there are cases such as conditional declaration as we have seen above 
// in those cases we can use functional expression



// overall summary
// function are values 
// they can be assigned,copied or declared in any place of code

// if function is declared as a separate statement 
// then that is functional declaration

// if function is created as part of an expression 
// then that is functinal expression 

// functinal delcaration are processed before the code is executed
// they are visible everything in the block

// where functional expression are created when exeuction flow reaches them

