// F.Prototype
// Remeber new objects can be created with acontruction function like new F()
// if F.prototype is an object then the new operator uses it to set [[Prototype]] for the new object

// js had prototypal inheritance from the beginning 
// it was one of the core features 
// but in the old times there was no direct access to it 
// the only thing that worked reliably was a "Prototype" Property of the constructor function 

// F.prototype here means a regualar property name "Prototype" on F 
// it sound something similar to the term prototype but here we really mean a regular property with this name 

{
    let animal  = {
        eats : true,
    };

    function Lion(name){
        this.name = name;
    }

    Lion.prototype = animal;

    let lion = new Lion("white Lion"); // lion.__proto__ = animal

    console.log(lion.eats);
}

/*
setting Lion.prototype = animal literally states when a new Rabbit is created assign its [[prototype]] to animal

till the moment Lion is a function it has property :- Lion.prototype that has animal  ---regualar property
and when we create a object using Lion then we get prototype for lion ie animal -- [[prototype]]


F.prototype only used at new F time 
F.prototype property is only used when new F is called 
it assigne [[prototype]] of the new object 

if after the creation F.prototype property changes F.prototype = < another object > 
then new objects created by new F will have noather objects as [[prototype]]
but already existing objects keep old one 
*/


// Default F.prototype , constructor property
// Every function has the "prototype" property even if we dont supply it 
// the default prototype is an object with only property constructor thats points back to the function itself 

/*
function Lion(){}

defaulat prototype
Lion.prototype = {constructor : Lion};

*/

{
    function Lion(){
        // by default : 
        // Lion.prototype = {constructor : Lion}
    }
    console.log(Lion.prototype.constructor == Lion);

    
}

{
    // naturally if we do nothing 
    // the constructor property is avaiable to all Lion through [[Prototype]]
    function Lion(){}
    let lion = new Lion();
    console.log(lion.constructor == Lion);
}


// we can use constructor property to create anew object using the smae constructor as the existing one 

{
    function Lion(name){
        this.name = name;
        console.log(name);
    }
    let lion = new Lion("white Lion");
    let lion2 = new lion.constructor("Black Lion");

    /*
    thats handy when we have an object dont wknow which constructor was used for it 
    eg it comes from a 3rd party library 

    and we need to create another one of the same kind 

    the imp thing about constructor is that 
    js itself does not ensure the right constructor value 

    yes it exsits in the default prototype for fucntion but thats all 
    what happens with it later is totally on us

    in particular if we replace the default prototype as a whole 
    then there will be no constructor in it


    */


}

{
    function Lion(){}
        Lion.prototype = {
            jumps : true,
        
    };

    let lion = new Lion();
    console.log(lion.constructor === Lion);
}

// so to keep the right constructor we can choose to add/remove properties to the default protoype 
// instead of overwriting it as whole 

{
    function Lion(){}
    // not overwwrtie Lion.prototype totally 
    // just add to it 
    Lion.prototype.jumps = true;
    // the defualt Lion.prototype.constructor is preserverd 

    // or recreate the cosntructor property manually 

    Lion.prototype = {
        jumps : true,
        constructor : Lion,
    }
}


// summary 
/*
[[prototype]] for objects created via constructor function 

F.prototype proeprty is not [[prototype]] but it sets the [[prototype]] of new objects when new F() is called 

the value of F.prototype should be either an object or null other vlaues wont work 

the prototype property only has such a special effect when set on constructor function and invoked with new 

on regualr objects the prototype is nothing speical but a simple property 


*/

{
    let user = {
        name : "pratik",
        prototype : "bal-bla",
    }

    // by defualt all function have F.protoype = {constructor : F}
    // so we can get the constructor of an object by accessing its constructor property
}

// tasks 1 
// changing prototypee 
{
    function Lion() {}
    Lion.prototype = {
        eats : true,
        
    };

    let lion = new Lion();
    

    console.log(lion.eats);

}

{
    function Lion() {}
    Lion.prototype = {
        eats : true,
        
    };

    let lion = new Lion();
    
    Lion.prototype = {};
    // the assignemnet to Lion.prototype sets up [[prototype]] for new objects but it does not affect exstin one 

    console.log(lion.eats);

}

{
    function Lion() {}
    Lion.prototype = {
        eats : true,
        
    };

    let lion = new Lion();
    
    Lion.prototype.eats = false; 
    console.log(lion.eats); // false
    // objects are assigned by reference the object Lion.prototype is not duplicated it still a single object reference 
    // both by  Lion.prototype and by the [[prototype]] of lion

}

{
    function Lion() {}
    Lion.prototype = {
        eats : true,
        
    };

    let lion = new Lion();
    
    delete lion.eats;
    console.log(lion.eats); 

    // true 
    // all delete ops are applied directly to the object 
    // delete lion.eats tried to remove easts proeprty from rabbit 
    // but it does not have it so the op wont have any affect


}


{
    function Lion() {}
    Lion.prototype = {
        eats : true,
        // constructor : Lion,
        
    };

    let lion = new Lion();
    
    // delete lion.prototype.eats;
    console.log(lion.eats); 
    // undefine 
    // the proeprty eass is deleted from the prototype it does not exits anymore 

}


// tasks 2 
// create an object with the same constructor 
{
    function Obj(name){
        this.name = name;
    }
    
    let obj = new Obj("Prat");
    let obj2 = new obj.constructor("Pete");

    console.log(obj2.name);

    // it worked 
    // as Obj.prototype.cosnstructor = Obj

}

{
    function User(name){
        this.name = name;
    }

    User.prototype = {};
    let user = new User("John");
    let user2 = new user.constructor("pete");
    console.log(user2.name); // undefined
    console.log(user2); 

    

    // it lookes for constructor in user  nothing 
    // then it fllow prototype chain 
    // prototype of user is User.prototype and it has no constructor 

    // going further up the User.prototype is a plain object its prototype is the builtin Object.prototype

    // finally for hte built in Object.prototype there built in Object.prototype.constructor == object 
    // so it is used 

    // in the end we have let user2 = new Object("pete");

    // we created new Object not new User 
    // thats the outcome of the missing constructor 

    // new Object(...) call converts its argumetns to an object 
    // thats theoretical things 
    // no one calls new Object with a value and generally we dont use new object to make object at all 
}