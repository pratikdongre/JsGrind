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


{
    let arr = [1,2,3];

    console.log(arr.__proto__ === Array.prototype);
    console.log(arr.__proto__.__proto__ === Object.prototype);
    console.log(arr.__proto__.__proto__.__proto__);
}

// some methods in protypes may overlap 
// for instance Array.prototype has its own toString that lists comma -delimited elements 

{
    let arr = [1,2,3];
    console.log(arr);
    // Object.Prototype has toString as well but Array.prototype is closer in the chain so the array variant is used 
}


// other built in objects also work the same way 
// even function they are objects of a bulit in Function Constructor and their method call/apply and other are taken 
// from Function.prototype 
// Function have their own toString too 

{
    function f() {}
    console.log(f.__proto__ == Function.prototype);
    console.log(f.__proto__.__proto__ === Object.prototype);
}

// Primitives 
// the most intricate thing happens with strings ,numbers and booleans 
// they are not object but if we try to access theri properties , temporary wrapper objects are 
// created using built in constructor String,Number, and Boolean 
// they provide the methods and disapper 

/*
these objects are created invisibly to use and most engine optimize them out 
method of these bojects also resides in prototypes available as String.prototype 
Number.prototype and Boolean.prototype

values null and undefined have no object wrappers
Special values null and undefined stand apart 
they have no object wrapper so method and proeprties are not available for them 
and there are no corresponding prototypes either 

*/

// Changing native prototypes 
// Native prototypes can be modified 
/*
for instance if we add a method to string.prototype
it becomes available to all strings 

*/

{
    String.prototype.show = function(){
        console.log(this);
    }
    "Boom".show();
}

/*
During the process of dev we may have ideas for new built-in methods 
we may be tempted to add them to native prototypes 

protoypes are global so its easy to get a conflict 
if two lib add a method 
String.prototype.show then one of them will be overwriting the method of the other 
so generally modifiying a native prototype is consider a bad idea

*/

/*
in modern programming 
there is only one case where modifying native prototypes is approved thats polyfilling
Polyfilling is a term for making a substitue for a method that exits in the js specification but is not yet 
supportedd by a particualr js engine 

we may then implement it manually and populate the builtin prototype with it 
*/

{
    if(!String.prototype.repeat){
        String.prototype.repeat = function(n){
            //repeates the string n times 

            // atcually the code sould lit more compelnxt 
            // but even an imperfect pollyfills is often considered good negouth 
            return new Array(n+1).join(this);
            // creates an array of size n+1 ie 4 
            // where each element of an array is emtpy 
            // and we join them using this ie in this case la

        };
    }

    console.log("la".repeat(3));

}

// Borrowing  from prototypes 
// when we take a method from one object and copy it into another 
// some method of native protoypes are often borrowed

// for instance if we making an array like object we may want to copy some array methods to it 

{
    let obj = {
        0 : "hello",
        1 : "world",
        length :2,
    };

    obj.join = Array.prototype.join;
    console.log(obj.join(','));
}

/*
it works because the interal algo of the builtin join method only cares about hte index and the lenght property 
it does not check if the object is indedd an array 
many builtin methods are like that 

another possiblit is to inherit by steting obj.__proto__ to array.prottype so all array methods are automatically avaialbe in obj 

but thast impossible if obj already inherits from another object as 
one can inherit from one object at a time 

borrowing method is flexible it allows to mix functionaliedites from different object if needed

*/


/*
summary 
all builtin object follow smae pattern 
the methods are stored in the prototype 
(Array.protoype,Object.prototype, Date.prototype, etc)

the object itself stored only the data (array items ,object properties, the date)

Primitives also store methods in prototypes of wrapper object 
Number.protoype , string.prototype and Boolean.prototype 
only undefined and null do not have wrapper objects 

built in prototype can be modified or populated with new methods 
but not recommeded to chanage them 
the oly allowable case is probably wehn we add in new standart but its not yet supported by js engine 
*/

// task 1
// add method f.defer(ms) to function 
{
    Function.prototype.defer = function (ms){
        setTimeout(this,ms);
    }
    function f(){
        console.log("hello!");
    }


    f.defer(1000);
}


// task 2 
// add the decoration defer() to function 

{

    Function.prototype.defer = function (ms){
        let f = this;
        return function(...args){
            setTimeout(()=> f.apply(this,args),ms);

        }
    }

    function f(a,b){
        console.log(a+b);
    }

    f.defer(1000)(1,2);
}