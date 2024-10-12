function ask(question,yes,no)
{
    if(confirm(question)) 
        {
            yes();
        }    
        else {
            no();
        }
}


function showOk(){
    alert("ok so you do agree");
}

//showOk()--> callback function

ask("Do you agree", showOk,
    function(){
        alert("you pressed cancelled");
    }
);



/*

i live my life each day like dying 
saint and sinner two parts of mine 
rags to riches exactly im trying
my pants on fire then i must be lying 
what you like to have red blood red wine 





*/


/*

function declaration vs function expression

function expression is created when execution reaches it and usable only from that moment.

where as function declaration can be called earlier that it is defined 
the internal algoirthm runs all the global function declarations before executing the scripts.

another feature of declaration is there block scope

*/

saySomething("JOhn");

function saySomething(name){
    alert(`Hello ${name}`);
}


//but 

whodancing("pratik"); // error ReferenceError: Cannot access 'whodancing' before initialization

let whodancing = function(name){
    alert(`${name} is dancing`);
}


// in a strict mode , function declaration is within a code block , it s visible everywhere inside a block but not outside of that 
