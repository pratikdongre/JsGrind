// "this" is not bound

"use strict";

// like it can be use in any function even if it not method of an object 
// like 

function sayHi(){
    console.log(this.name);
}

// this is evaluated during runtime 

let user = { name : "pratik"};
let admin = {name : "monu"};

user.f = sayHi;
admin.f = sayHi;


user.f();
admin.f();
admin['f']();

// calling wihtout an object using this would give undefined on modern js 
// without modernjs that is use strict would give object window(global object)

function sayBye(){
    // alert(this);
    console.log(this);
}

sayBye(); // undefined


/*
the consequence of unbound this

in other languages there might be concept that method defined in an object always have this referring to object 
but in js , this is free ,its value is evaluated at call-time and does not depend on where the method was declared 
but rather on what object is "beforedot"


the concecpt of run time evluated this has both pluses as well as negas 
a function can be reused for different objects 
on the other hand the greater flexilites create more possiblities for mistakes 



*/



// arrow function have no "this"
// so if we reference this from such function then its taken from the outer normal function

user = {};

user = {
    firstname : "pratik",
    sayHi() {
        let arrow = ()=>console.log(this.firstname);
            arrow();
        
    }

};


user.sayHi();

// lets call it special feature instead of "cummi" in arrow function 
// there might be scenario when we actually dont want to have separate this but rather to take it from outer context



/*
jargons summary 
function that are stored in object properties are called methods 
methods allows object to act like object.doSomething()
methods can reference the object as this 

the value of this is defined at run-time
so when a function is declared, it may use this but that "this" has no value until the function is called 
a function can be copied between objects 

a function can be copied between objects 

when a function is called in the "method" syntax : object.method() the value of this during the call is object 

arrow function are special and have no "this" 
if this is accessed inside an arrow function it is taken from outside 

*/