// this 
// objects are usually created to represnet entities of the real world like user,orders and so on.

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

