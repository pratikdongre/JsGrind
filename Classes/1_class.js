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

