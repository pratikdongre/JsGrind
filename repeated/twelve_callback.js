// bs bahot hua 

// who will get you out me 
// who is the one // me 
// who is the best out there // me 
// whos inner voice is good // me 
// whos is having the peace // me 
// and why // cause i know how good is me 


//callback function 

function ask(question,yes,no)
{
    if(confirm(question)) yes();
    else no();
}

showAgree = function(){
    alert("yes,im great");
}

ask("Do you agree you are great",showAgree,ShowDisagree);



function ShowDisagree(){
    alert("No but you will be");
}


ask("how you doing",
    function(){alert("bs aapko dekh liya,");},
    function(){alert("bas mare jare hai");} 
    // we use anonymouse functino in here 
);


// such function not accessible outside of sawal and thats waht we want 
// see there are two type of funcion we seen 
// how do we access it what is the name
// such code is in the spirit of js 

// those are function declaration and function expression
// and anonymous function comes under function expression 


/*
function is a vlaue represention an action
reugalr values liek string and number repseredn data 
// a function is perceived as action
// we can pass it between variable and run what we want 

*/


/*
so what are callback function
a function that are passed as argumnts and called if necessary
showagree/showdisagree are callback function 
the idea is we pass function and expect it to be called 
back later if necessary

*/


function greeting(){
    return function(){
        console.log("hi there");
        alert("are we reaching here");
    }
}

let greets = greeting();
// why no greeting instead greeting() cause if we do that then the function iteself would be copied not what it returns 
greets();



/*

function declaration vs function expression
function expression is created when execution reached it and is usable only from that moment.

where as function declaration can be called earlier even before they are declared 
the internal algo runs all the global function before running the script 

another feature of declaration is their block scope


in strict mode 
when declaration function is within a code block 
its is only visible in the block scope 
and not outside out of it 


*/


// example 

// functional declaration 
sayEverything();

function sayEverything(){
    alert("yeeee");
}


// functional expression called before definition

sayToHer();

sayToHer = function (){
    alert("sigaar");
}

// not working right 
// error :- reference error;- cant access before intializations

// in a strict mode :- , function declaration is withing a code block, it is visisble everywhere inside a block but not outside of it 



