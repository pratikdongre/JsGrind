// Native Prototype 
// the prototype property is widely used by the core of js itself 
// all builtin contructor function use it 

// Object.prototype
let obj = {};
console.log(obj);

// where the code that generates the string [object Object] 
// thats a builtin toString Method but where is it the obj is empty 

// but the short notation obj = {} is the same as obj = new Object(), 
// where object is a builtin ojbect 
// constructor function with its own prototype referencing a huge object with toString and other methods 

// when new Object() is called (or a literal object) {...} is created 
// the [[prototype]] of it is set to Object.prototype 

// so when obj.toString() is called the method is taken from Object.prototype

{
    let obj = {};
    console.log(obj.__proto === Object.prototype);
    console.log(obj.toString === obj.__proto__.toString);
    console.log(obj.toString === Object.prototype.toString);

    console.log(Object.prototype.__proto__);
    // there is no more [[prototype]] in the chain Object.prototype

}

// other built in prototypes 
/*
other built in objects such as Array,Date,Function and others also keep method in prototypes

for instance when we create an array [1,2,3] the default new Array() constructor is used internally 
so Array.prototype becomes its prototype and provide methods 
// thats very memory efficient 
all of the builtin prototypes have Object.prototype on the top 

that is why we can say 
everything inherits from objects 

*/



