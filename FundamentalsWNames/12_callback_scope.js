//23
// as we know function declaration is visible with in the scope 
"use strict";
// so when you use modeern using use strict welcome() wont be able to see the function as its not in same scope 

let age = prompt("what's you age ?",18);



if(age > 18)
{//from this to 
    welcome();
    function welcome(){
        alert("welcome");
    }

}//to this function welcome is available

else {

    welcome(); // here the welcome is not defined 
    // function welcome (){
    //     alert("Greetings");
    // }
}

// welcome();



// in such siitutation we can use function expression instead of function declaration




