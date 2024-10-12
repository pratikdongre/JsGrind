/*
objects are usually created to represent entities of the real world, like user,orders and so on 
*/
let user = {
    name : "john",
    age : 30,
    sayBye : function(){
        console.log("bye");
    },
    
};
 
// an in the real world a user can act : select something from the shopping cart,login,logout,etc
// actions are represented in js by function in properties 

user.sayHi = function () {
    console.log("hi");
};


user.sayHi();
user.sayBye();

// note :- A FUNCTION THAT IS PROPERTY OF AN OBJECT IS CALLED ITS METHOD 

//ofcourse we can use pre-declared function as a method like

function saySup(){
    console.log("SuP ?");
}

user.saySup = saySup; // the function is copied inside user.saySup
// user.saySup = saySup(); // what would this give return in our case undefined 


// so we write our code using object to represent entities that called oop 

//method shorthand 

user = {};


user = {
    sayHi: function(){
        console.log("whatis up");
    },

    sayBye(){
        console.log("chalo Bye");
    }
    //method shorthand 
};


// so its common that object methods needs to acess the information stored in the object to do its job


// to acess the object a method can use the "this"  keyword 

user = null;

user = {
    name : "pon",
    age : 30,

    sayHi(){
        console.log(user.name);
        console.log(this.age);
        // this is referring to the current object 
    }
}


user.sayHi();


// of Course we could just write (user)object name instead of this but ladki beautiful kar gyi chull 
// nhi like we copy the user to let say admin then in that code it would refer to user instead of current object that is admin
// so we can say using object name instead of this is more like hard coded 

let admin = user;

user = null;

admin.sayHi();