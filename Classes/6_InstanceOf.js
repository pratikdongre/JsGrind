// Class Checking Instanceof 

// the instanceof operators allows to check whether an object belong to a ceratin class 
// it also takes inhhertiance into account 

// such a check may be necessary
// for example it can be used for building a polymorphic function the one that treats arguments differenly depending on their type 

// the instanceOf operator 
// obj instnaceOf Class 
// it returns true if obj belongs to the class or class inheriting from it 

{
    class Rabbit {}
    let rabbit = new Rabbit();

    console.log(rabbit instanceof Rabbit);
}

{
    // it also works with constructor function 
    // instead of class
    function Rabbit(){

    }

    console.log(new Rabbit() instanceof Rabbit);
}

// with builtin classes like Array 
{
    let arr = [1,2,3];

    console.log(arr instanceof Array);
    console.log(arr instanceof Object);
}

// arr belongs to the object class 
// Array prototypically inherits from Object 

// normally instanceOf examiens the prototype chain for the check we can also set a custom logic in the static method 
// Symbol.hasInstance

// the algorithm of obj instanceOf Class works 
/*

1. if thers a stataic method Symbol.hasInstance then just call it 
class[Symbol.hasInstance](obj) 
it should return either true or false 
and we are done 
// thats how we can customize the behaviour of instanceof

*/

{
    // setup instanceOf check that assumes that 
    // anything with canEat property is an animal

     class Animal {
        static [Symbol.hasInstance](obj){
            if(obj.canEat) return true;
        }
     }

     let obj  = {canEat : true};
     console.log(obj instanceof Animal);
     // true Animal[Symbol.hasInstance](obj) is called 
}


/*
most classes do not have Symbol.hasInstance

in that cases the standard logic is used obj instanceOf Class check whether 
Class.prototype is equal to one of the prototypes in the obj protoype chain 

{
obj.__proto__ === class.prototype 
obj.__proto__.__proto__ === Class.prototype
obj.__proto__.__proto__.__proto__ === Class.prototype

if any answer is true return ture 
otherwise if we reache the end of the chain return false 

}
*/

{
    class Animal {}

    class Rabbit extends Animal {}

    let rabbit = new Rabbit();

    console.log(rabbit instanceof Animal);

    // rabbit.__proto__ === Animal.prototype
    // rabitt.__proto__.__proto__ === Animal.prototype
}


/*
rabbit instanceof Animal compares with Animal.prototype 

null 

[[prototype]]

Object.prototype

[[prototype]]

Animal.prototype ------------------------ which of this is === Animal.prototype

[[prototype]] 

Rabbit.prototype

[[prototype]]

rabbit


by the way theres also a method objA.isPrototypeOf(objB) that returns true if objA is somewhere in the chain of 
prototypes for objB 
so the test of obj instanceof Class can be rephrase as Class.prototype.isPrototypeOf(obj)

class constructor itself does not participate in the check only the chain of prototypes and class.protoype matters 

that can lead to interesting consequences when a prototype property is changed after the object is created 

*/

{
    function Rabbit() {}
        let rabbit = new Rabbit();
      Rabbit.prototype = {};
      
      console.log(rabbit instanceof Rabbit);
      // no more 

    
}


// Bonuse Object.prototype.toString for the type 
// we already know that plain object are converted to string as [object Object]

{
    let obj = {};
    console.log(obj);

    console.log(obj.toString());
}

/*
we can use it as an extened typeof and an alternative for instanceOf 

by specification the builtin toString can be extracted from the object and executed in the context of any other value 
and its result depends on that value 

For a number it will be [object Number]
for a boolean it will be [object Boolean]
for null [Object Null]
for undefined [object undefined]
for arrays [object Array]


*/


{
    let objectToString = Object.prototype.toString;

    let arr = [];

    console.log(objectToString.call(arr));
    // call to get context this = arr 
}


{
    // internally the toString algorithm examines this and returns the corresponding result 
    let s = Object.prototype.toString;
    console.log(s.call(213));
    console.log(s.call(null));
    console.log(s.call(console.log));
}


/*
Symbol.toStringTag
the behavior of Object toString can be customize using a speical object property Symbol.toStringTag

*/

{
    let user =  {
        [Symbol.toStringTag] : "User"
    };
    console.log({}.toString.call(user));
}

// for most env spefici boject there is such a property 
/*
alert(window[Symbo.toStringTag]); // window
alert(XMLHttpRequest.prototype[Symbol.toStringTag]); // XMLHttpRequest

alert({}.toString.call(window)); [Object window]


alsow we have 
typeof on steroids that not only works for primtivve data types but also for builtin objects 
and even can be customzied 

we can use {}.toString.call instead of instanceof for builtiin ofbject
 when we want tot get the type as string rather thaan just to check

*/


/*
Summary 
typeof works for Pritimives returns string
{}.toString primitives built in object,objects with Symbol.toStringTag return string 

instnaceof works for objects returns true/false

as we see {}.toString is more advanced of typeof 

and instanceof operator really shines when we are woking with a calss hierarcy and want to check 
for the class taking into account inheritance 

*/


// tassk 
// Strange instanceof 

{
    function A(){}
    function B(){}

    A.prototype = B.prototype = {}

    let a = new A();

    console.log(a instanceof B );

    // actaully instnaceof does not care about the function 
    // but rather about its prototype 
    // that it mataches against the prototype chain 

    // a.__proto__ == B.prototype 
    // so instanceOf returns true 

    // so by the logic of instnaceof 
    // the prototype actaullyes defines the type , not the constructor function 
}