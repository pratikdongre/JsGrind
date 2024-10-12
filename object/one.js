// 8 types of datatypes 
// 7 of them are primitive
// object is the 8th one that is not primitive 

/*
objects are used to store keyed collection of various data and more complex entities 
object are collection of key value pairs 

object can be created with figure Brackets {} with an optional list of properties
a property is a key-value pair 
where key is string aka "property-name " and value can be anything

imagine object as a cabinet with signed files 
every piece of data is stored in its file by the key
its easy to find/add/remove file by its name


*/

//empty object 

let user = new Object(); //object constructor syntax
let users = {}; // "object literal" syntax




let customer = { // an object customer 
    name : "John", // by key "name" store value "John" 
    age : 30 // by key "age" store value 30
}


// add/remove/read using dot notation


//read
console.log( customer.name ); 
console.log( customer.age );

//add
customer.isMarried = true;

//delete
delete customer.isMarried;

//can use multiword property names but they must be quoted 
user = {
    name : "pratik",
    age : 30,
    "likes Birds" : true, //-- , trailing/hanging comma
};

//for multi line words dot access does not work 
// user.like Birds ---dont work 

//to Rescue :- Square notation came to picture

//set //add
user["likes Birds"] = false;

//get // read
console.log(user["likes Birds"]);

//delete 
delete  user["likes Birds"]; 


// square notation :- to directly 1] access object key/ property name like literal string
            //                     user["name"] or user["likes Birds"]
                                //2] variable 
                                // let key = "name";
                                // user[key] ;

/* 
more broadly we can say 
square brackets also provides us way to obtain the property name as the result of any expression 
-as opposed to literal string - like from a variable or like any expression such as "prop" + "erty"

user["prop" + "erty"] == user["property"]

in summary besides literal string 
square notation allows to use property name as result of any expression like variable 
which has many use case all pointing to dynamism/flexiblity

when using [] if its like user["string literal"] "" then that is literal string
if its wihtout "" then it must be variable like user[variable]
*/

let key = "name";

console.log(`Acessing object property name using variable ${key} :- ${user[key]}`);


key = prompt("What do you want to know about the user?" , "name");

alert(user[key]);
alert(user.key); // this does not work  // would give undefined 


//computed properties 
let fruit = prompt("which fruit to buy","apple");

let bag = {
    [fruit] : 5,
};

alert(bag.apple);
alert(bag[fruit]);
alert(bag["apple"]);

/*
we can also do 
let food = prompt("which food to buy","apple");
let bag = {};

bag[food] = 5;

*/

//complex 
let laptop = "apple";

let buy = {
    [laptop + "phone" ] :1,
}

alert(buy[laptop + "phone"]);


// so when property name are simple and known . dot notation is used 
// if need something more complex then [] square notation is used 

