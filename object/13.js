// new.target

function User(name){
    if(!new.target){
        return new User(name);
    }
    this.name = name;
}


let john = User("John");

// console.log(typeof john);

// console.log(john);


// return from constructors 
// so usually constructors do not have return statement as 
// we have seen that they implicity put everything into this and return this 

// if there is return statemnt then the rule simple 
/*

if return is called if return is an object then it override "this"
but if return is called with a primitive then its ignored and "this" is returned 

*/

function Biguser(){
    // this = {}; implicity
    this.name = "jonwa";

    return {
        name : "Godzilla"
    }

    // return this ; implicit if not already exist return object

}

let saved = new Biguser();
console.log(new Biguser().name);
console.log(saved.name);


// let see example of primitive return or empty return 

function Smalluser(){

    this.name = "bonwa";
    return ; 
    // return 5; // primtive return get ignored ooohhhh 

}

console.log(new Smalluser().name);


// we dont need to use return with constructor/ we just discover it natures if we 

// we can ommit () after new 
/*
new Smalluser();
same as
new Smalluser; // not good style but yeah can do  

*/


// so constructor gives use flexibility like we can have parameters that tells us how to construct the object 

// ofcourse we can to "this" object not only properties but methods as well


// pratik = {
//     name : "pratik",
//     sayHi : function(){
//         console.log("my name is pratik");
//     }
// }


function User(name){
    this.name = name;
    this.sayHi = function(){
        console.log(`My name is ${this.name}`);
    }

}


let pratik = new User("pratik");
pratik.sayHi();


/*

summary 
constructor function are regular function but there's a common agreement to name them with capitla letter first 
and constructor function should only be called using "new" 
such call implies creation of  empty this object and return "this"

we can use constructor function to make multiples similar objects 

*/