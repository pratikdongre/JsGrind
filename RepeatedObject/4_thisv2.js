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
// so if we reference this from such function then its taken from the outer normal function 
// thats a special feature of arrow function, its useful when we actually dont want to have a separate this, 
// but rather to take it from outer context 

console.log("working");
user = {};
user = {
    firstname : "pratik",
    logout(){
        let arrow = ()=> {
            console.log("loggin out " + this.firstname);
            
        }
        arrow();
    }
}

user.logout();

// lets call it special feature instead of "kami" in arrow function 
// there are situation when we actually dont want to have separate this but rather to take it from outer context


/*
jargon 
function that are stored in object properties are called methods 
methods allows object to act like object.doSomething()
methods can reference the object with this instead of directly using objectName

the value of this is defined at run-time
so when a function is declared, it may use this but "this" has no value until the function is called 
a function can be copeid between objects 

when a function is called in the "method" syntax : object.method() the value of this during the call is "object"
Please note that arrow functions are special: they have no this. When this is accessed inside an arrow function, it is taken from outside.
*/


// tasks of "this"

function makeUser(){
    return {
        name : "john",
        ref : this
    };
}

// other version of above 
function makeuser(){
    return this;
}
// console.log(makeuser().name); // would cause error

 user = makeUser();

 

// console.log(user.ref.name);


function workingUser (){
    return {
        name : "pat",
        ref(){
            return this;
        }
    };
}

let uzer = workingUser();
console.log(uzer.ref().name);



// khulasa

let uzers = {
    name : "mons",
    ref(){
        return this;
    }
};

console.log(uzers.ref());


// when "this" is used with primtive properties then it has globalcontext
// in function or method called on an object "this" refers to the object that invoked the method 

let person = {
    name : "alic",
    sayName (){
        return this.name;
    },
    globalreference: this,
}

console.log(person.sayName());
console.log(person.globalreference); // {} in node js and window in browser 



// task 2 

let calculator = {
    read(){
       // this.a = prompt("enter value of a ",2);
        //this.b = prompt("enter value of b",2);

        this.a = 2;
        this.b = 4;
        
    },

    sum(){
        return Number(this.a) + Number(this.b);
    },

    check(){
        console.log("checking started");
        console.log(typeof this.a);
        console.log(typeof this.b);
        console.log("checked finish");

    }

};

calculator.read();
calculator.check();
console.log(calculator.sum());


// task 3 
// chaining 

let ladder = {
    step : 0 ,
    up(){
        this.step++;
       
    },
    down(){
        this.step--;
    },
    showstep(){
        console.log(this.step);
    }
}

ladder.up();
ladder.up();
ladder.down();
ladder.showstep();
ladder.down();
ladder.showstep();


ladder = {};

ladder = {
    step : 0 ,
    up(){
        this.step++;
        return this;
        // this is called as circular reference
        // this is referring to ladder(the object)
       
    },
    down(){
        this.step--;
        return this;
    },
    showstep(){
        console.log(this.step);
        return this;
    }
}

ladder.up().up().down().showstep().down().showstep(); // shows 1 then 0


// extras

function consider (){
    console.log("toing");
    return consider;
    // function recursion 
    
}

let say = {
    fun(){
        console.log("where are you now ");
        return this;
        // method chaining 
    }

}

console.log(consider()());

console.log(say.fun().fun());
