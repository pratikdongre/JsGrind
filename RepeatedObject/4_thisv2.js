"use strict";
function sayHi(){
    console.log(this.name);
    
}

let user = {name : "pratik"};

user.f =  sayHi;


user.f();

// up until this works 

function sayBye()
{
    console.log(this);
}


sayBye(); // undefined on strict mode 

function saySup(){
    console.log(this.name);
    
}
// the value of this is calculate at run time 

// saySup(); // error at strict mode 
// in non strict mode gets undefined 


/* 
the consequence of unbound this 

in other language there might be concep that method defined in an object always have this referring to object 
but in js this is free its value is evaluated at call0time and does not depend on where method was declared 
but rather on what object is "beforedot"

the cocept of run time evaluated this has both pluses and minuses
a function can be reused for different objects 
on the other hand greater flexiblities creates more possible mistakes 


*/ 


// arrow function have no "this"