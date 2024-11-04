// this 
// objects are usually created to represnet entities of the real world like user,orders and so on.
"use strict";
let user = {
    name : "john",
    age : 30,
    AddtoCart : function (){
        console.log("added to cart");
    }
};

// an in real world user can act : 
// select something from the shopping Cart , login, logout

// actions are respresented in js by functions 

user.sayhi = function (){
    console.log("hi");
};

user.sayhi();
user.AddtoCart();


// note :- a function that is property of object is called as methods 

// ofcourse we can use predeclared function as a method like 

function RemoveFromCart(){
    console.log("Removed From cart");
}

user.RemoveFromCart = RemoveFromCart;
// the function is copied here 

// user.RemoveFromCart = RemoveFromCart();
// return value from function is assigned here in this case it be undefined


user.RemoveFromCart();

// so we write our code using object to represent entities that called oop

// shorthand method 

user = {};

user = {
    sayHi : function(){
        console.log("arey hi");
    },

    sayBye (){
        console.log("chalo bye")
    }
    // method shorthand 
}

// "this" method
// it obvious that object methods need to access the other primtives stored in the object to do its job 

// to access the object a method can use "this" keyword

let login = {
    name : "pratikD",
    password : "mei-badiya-tu-bhi-badiya",

    credential(){
        console.log(this.name);
        console.log(login.password);
        // this is referring to the current object 
    }
}


login.credential();

// of Course we could just write (user)object name instead of this but ladki beautiful kar gyi chull 
// nhi like we copy the user to let say admin then in that code it would refer to user instead of current object that is admin
// so we can say using object name instead of this is more like hard coded 

let admin = login ;

login = null;

// console.log(admin.credential.toString());
// console.log(admin.credential);


// admin.credential(); // get error 
// that is why instead of hard coded we can use this object isntead of direclty using objects name 

// "this is not bound"

// "use strict";

// this keyword jsut like other programming langu
// can be used in any function even if its not method of an object 



// this is evaluated during runtime 

 user = { name : "pratik"};
 admin = { name : "monu"};


 user.f = sayhi;
 admin.f = sayhi;

 user.f();
 admin.f();
 admin['f']();

 
function sayhi(){
    console.log(this["name"]);
}

//  sayhi(); // undefined on consoling this or not defined erro at this.name name is not defined 
 // calling without an object using this would give undefined in modern js 
 // without modernjs that is use strict would give object window(global object)

 function sayBye(){
    console.log(this);
    
 }

 sayBye(); 

 