// class basic syntax 
// in oop a class is an extensible program code template for creating objects ,providing 
// initial values for state (member variables) and implementation of behavior (member functions or methods)

// in practice we often need to create many objects of same kind like users , goods

// as already know from the chapter 
// Constructor , operator "new" , new Function can help with that 

// but in the modern js theres more advanced class construct that introduces great new features 
// which are useful for object oriented programming 

// the Class syntax 

/*
class Myclass {
    // class methods 
    constructor (){...}
    method1(){...}
    method2(){...}
    method3(){...}
}

then use new Myclass() to create new object with all the listed methods 
the constructor() method is called automatically by new 
we can intitialize the object there 


*/

{
    class User {
        constructor(name){
            this.name = name;
        }
        sayHi(){
            console.log(this.name);
        }
    }
    let user = new User("pratik");
    user.sayHi();
    
}

// when a new User("Pratik") is called
// a new object is created
// the constructor runs with the given argument and assign this.name 
// the we call user.sayHi()

// no comma betwee class methods 
// comma is a thing with object literal 
// not with class methods 

// what is a class 
// class is not like an entirely new language level entity 
// class is a kind of function only

{
    class User {
        constructor(name) {this.name = name;}
        sayHi() {console.log(this.name);}
    }

    console.log(typeof User); // function
}


// what class user {...} construct really does is 
// Createa function name User that becomes the result of the class declaration
// the function code is taken from the constructor method 
// (assumed empty if we dont write such method )
// stores class method such as SayHi in user.prototype

/*
After new User object is created when we call its method its taken from the prototype 
so the object has acces to class methods 

User 
constructor(name) {
this.name = name;
}

prototype of this 
User.prototype 
sayHi : function
constructor : User


*/

{
    class User{
        constructor (name){
            this.name = name;
        }

        sayHi(){
            console.log(this.name);
        }
    }

    console.log(typeof User); // function

    console.log(User ===User.prototype.constructor); // true 

    console.log(User.prototype.sayHi);

    console.log(Object.getOwnPropertyNames(User.prototype));
    console.log(Object.getOwnPropertyNames(User));

}

// not just a syntactic sugar 
/*
class is a syntactic sugar 
syntax that is designed to make things easier to read
 but does not introduce anything new 

 because we cant actually declare the same thing without using the class keyword at all 

*/

{
    // rewriting class User in pure function 

    // 1. Create constructor function
    function User(name){
        this.name = name;
    }

    // a function protoype has "constructor" property by default,
    // so we dont need to creat it 

    // 2. Add the method to prototype
    User.prototype.sayHi = function(){
        console.log(this.name);
    };

    // User();

    let user = new User("TOughest");
    user.sayHi();

}

// the reesult of this definition is about the same 
// so there are indeed rason why class be can be consider a syntatix sugar to define a constructor 
// together with its protype methods

/*
1. first a function created by class is labelled by a special internal property 
[[IsClassConstructor]]: true
so its not entirely the same as creating it manually 

the langauge checks for that proeprty in a varity of placaes 
for example unlike a regualr function it must be called with new 

*/

{
    class User {
        constructor() {}
    }
    console.log(typeof User);

    // User(); // cant be invoked without new 

}

{
    // a string representation of a class constructor in most js engines starts with the class...

    class User {
        constructor(){}
    }
    console.log(User);
}

/*
2 class methods are non enumerable 
a class definition set enumerable flag to false for all methods in the protoype

if we for..in over an object we usually dont want its class methods


3. Classes always use strict 
all code inside the class ocnstruct is automatically in strict mode 

*/

// Class expression 
// just like function clases can be defined inside another expression ,
// passes around 
// return, assigned etc

{
    let User = class {
        sayHi(){
            console.log("hello");
        }
    };

    // similar to Named Function Expression ,class expresssion may have a name

    // if a class epxression has a name 
    // its visible inside the class only


}

{
    // Named class Expression 
    // no such term in spec but similar to Named Function Expression

    let User = class Myclass{
        sayHi(){
            console.log(Myclass); // viisble inside the class only
        }
    };

    new User().sayHi(); // works shows Myclass defintion

    // console.log(Myclass); //not dfined
}

// we can even make class dynamically on demand 
{
    function makeClass(phrase){
        // declare a class and return it 
        return class {
            sayHi(){
                console.log(phrase);
            }
        };
    }

    let User = makeClass("hello");
    new User().sayHi();
}

// Getters/Setters
// just like literal object 
// classes may include getter/setter ,computed properties 

// user.name implemented using get/set:

{
    class User {
        constructor(name){
            this.name = name;
            // invoeks the setter
        }

        get name(){
            return this._name;

        }
        
        set name(value){
            if(value.length< 4){
                console.log("Name is too short.");
                return ;
            }
            this._name = value;
        }

    }
    let user = new User("Toughest");
    console.log(user.name);

    user = new User("");

    // techniically such class declaration works by creatin getter and setter in User.prototype
}

// Computed names [...]
{
    class User {
        ['say' + "Hi"](){
            console.log("hola");
        }
    }

   new  User().sayHi();

}

// class fields 
// old browser may new a polyfill
// as class fields are a recend addition to the lang 

// class fields is a syntax that allows to add any properties 

// lets add name property to class User 

{
    class User {
        name = "John";
        sayHi() {
            console.log(`Hello, ${this.name}`);
        }
    }

    new User().sayHi();
    
}

// so we jsut write = in the delcaration and thats it 

// the important differnce of class fields is that they are set on individual object not User.prototype

{
    class User {
        name = "John";
    }
    let user = new User();
    console.log(user.name);
    console.log(User.prototype.name); // undefined 

}

// we can also assign values using more complex expression and function calls 

{
    class User {
        // name = prompt("Name, please?", "Don");
        name =  "don";

    }
    let user = new User();
    console.log(user.name);
}

// Making bound methods with class fields 
// function in  js have a dynamic this 
// it depends on the context of the call 
// so if an object method is passed around and called in another context 
// this wont be a reference to its object any more

{
    class Button {
        constructor(value){
            this.value = value;
            // bind 

            // this.click = this.click.bind(this);
        }
        click (){
            console.log(this.value);
        }
    }
    let button = new Button("Hello");

    // console.log(button);

    // setTimeout(button.click,1000); // undefined

}

// the problem is called losing "this"
// there are two approeaches to fixing it 
// 1. pass a wrapperfunction such as setTimeout(()=> button.click(),1000);
// 2. bind the method to object eg in the constructor 

{
    // class fiels provide another quite elegant syntax 
    class Button {
        constructor(value){
            this.value = value;
        }
        click = ()=>{
            console.log(this.value);
        }
    }
    let button = new Button ("Hello");
    setTimeout(button.click,1000);
}

// the class field click = ()=> {...} 
// is created on a perobject basiss 
// theres separate function for each Button object with this
// inside it referencing that object 
// we cna pass button.click around anywhere and the value of this will always be correct 

// thats specailly useful in broswer env for evennt listeners 

// summary 
/*
the basic lcass syntax 
class myClass(){
    prop = value // property
    constructor (...){
    // constructr 
    }
    method (...) {}

    get something(...) {} // getter method 
    set something(...) {} // setter method 

    [Symbol.iterator]() {} // method with compted name (symbol here )
}
    myClass is technically a function (the one that we proved as constructor ) 
    whie methods getter and setter are writtent to Myclass.prototype


*/


// tasks 1 

{
    class Clock {
        constructor({template}){
            this.template = template;
        }

        render (){
            let date = new Date();

            let hours = date.getHours();

            if(hours < 10) hours = "0"+ hours;

            let mins = date.getMinutes();
            if(mins < 10) mins = "0"+mins;

            let secs = date.getSeconds();
            if(secs < 10) secs = "0"+secs;

            let output = this.template
                    .replace('h',hours)
                    .replace('m',mins)
                    .replace('s',secs);

            console.log(output);
        }

        stop(){
            clearInterval(this.timer);
        }

        start(){
            this.render();
            this.timer = setInterval(()=> this.render(),1000);
        }
        
    }
    let clock = new Clock({template : 'h:m:s'});
    clock.start();
}

