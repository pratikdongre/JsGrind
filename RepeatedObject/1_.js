// 8 types of dataypes 
// 7 of them are primitive 
// object is the 8th one that is not primitve 

/*

objects are used to stored key collection of variou data and complext entities 
object are collection of key value pairs 

objects can be created with figures Brackets with an optional list of properties
a property is key-value pair
where key is string aka "property-name" and value can be of any type and can be anything 

imageing object as a cabinte with signed files 
every piece of data is stored in its file by the key
its easy to find/add/remove file by its name 


*/


// empty objects 
let user = new Object(); // object constructor syntax
let users = {}; // object literal syntax


let customer = { // an object customer 
    name : "John", // by key "name" store value "John"
    age : 22 // by key "age" value store 22
};


// add/remove/read using dot notation

//read
console.log(customer.name);
console.log(customer.age);


// add 
customer.sex = "Male";

// delete 
delete customer.sex;


// can use mulit word property names but they must be quoted

user = {
    name : "pratik",
    age : 30,
    "likes Cats" : true,  // --trailing , hanging comma does not give error 
    // we can just next property quickly 
    // so we can leave , in the end
};


// to access multi words properties
// dot notation doesnot work 
// we use square bracket

// user.likes Cats ---- dont work

// to rescue :- square notation came to picture

// set/add
user["likes Cars"] = true;

// get // read
console.log(user["likes Cars"]);
console.log(user["likes Cats"]);

// delete 
delete user["likes Cars"]


//square notation :- to directly acess

