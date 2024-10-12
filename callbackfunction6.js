//22
//let end this 
//here we come the power the urge the passsion to live fire 


//callback function 

function ask(question,yes,no)
{
    if (confirm(question)) yes()
        else no();
}

function showOK(){
    alert("ok");
}

function showCancel(){
    alert("you canceled the fucking execution");
}

ask("Do you agree ?",showOK,showCancel);


function puchna(question,yes,no){
    if(confirm(question)) yes()
        else no ();
}

puchna("do you fucking agree",
    function(){alert("ok bro");}, // this are anonymous function 
    function(){alert("nah you dont agree");}

   
)

 //such function not accessible outside of puchna(and that's what we want ) 
    // because the are not assigned variables 
    // how do we access it what is the name ? 
    // such code is :-its in the spirit of js 

/*
function is a value representing an action 
regular values like string or number represents data
a function percieves as action
we can pass it between variables and run what we want   

*/


function createGreeter() {
    return function() {
        console.log("Hi there!");
    };
}

let greeter = createGreeter;
greeter(); // Outputs: Hi there!
