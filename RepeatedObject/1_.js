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


//square notation :- to directly access key/property name like literal string
                      // user["name"] or user["likes Brids"]
                      // 2} variable 
                      // let key  = "name";
                      // user[key];

/*
more broadly 
square brackets also provides use way to obatin the result of any expression 
- as opped to literal string 
like from a variable or any expression such as "prop" + "erty"

user["prop" + "erty"] == user["property"]

in summary besides literl string 
square notation allows to use property name as result of any expression like variable 
which has many use cases
all poiting to dynamism/flexiblity
because the varialbe can be calculate at run time 
*/

let key = "name";

console.log(`accesing the object property name using variable ${key} :- ${user[key]};  `);


key = prompt(`what do you want to know about user `,"name");

alert(user[key]);
alert("this works " + user.name);
alert("we cant access propertie using variable and . combination " + user.key);


// computed properties 

let fruit = prompt(`which fruit do you want eat`);

let bag = {
    [fruit] : 5, // whatever fruit variable value we get would come here 
    // see we are using [] to use variable as property name
}

bag.liked = "verymuch"; 


alert(bag.fruit); // wont work right cause we are using . + variable combiatnio 
alert(bag[fruit]);
alert(bag.apple);
alert(bag["apple"]);


/*
let food = prompt("which food is your favorite","piz");
let bag ;
bag[food] = 5;
*/