// the fundamental difference between object and other primtive data types is 
// object is copied by reference 
// where as other primitive data types are copied by value 


let message = "hello";
let phrase = message; // got the copy of message 
// so we go two box 
/*
first box message stores "hello"
second box phrase stores "hello"
*/


// where as in object 
/*
the object itself is stored somewhere in the memory the variable has the address/ reference to it 
so when a object is copied its copies the reference to the object not the object itself 

*/

let user = {
    name : "John"
}
let admin = user;

// so now we have two variables referencing towards one single object;

// we may use admin or user to access/delete/add properties of object
// its like if we had one cabinet with two keys


// comparison by reference 
let a = {};
let b = a;

console.log(a==b); // true
console.log(a === b); // true

let x = {};
let y = {};
// both x and y are referencing to different objects although the inside of objects are same 

console.log(x==y); // false 


// for comparison like obj1 > obj2 or 
// for comparison against a primtive obj == 5
// objects are converted to primitives 
// study later 

/* 
const objects can be modified 
*/

const users = {
    name : "hugh",
};

users.name = "devid";

console.log(users["name"]);

// changing name to devid does not cause error 
// the users is constant , we cant still modify the content of object
// the users that is currently referncing to the object we cant assign the users = ... to any other


// cloning the object 
user = {};

user = {
    name : "John",
    age : 30,
};

let clone = {};
// we have created empty object where we are going to 

for(let key in user) {
    clone[key] = user[key];
}

for(let prop in clone) {
    console.log("copied from user " + clone[prop]);
}

