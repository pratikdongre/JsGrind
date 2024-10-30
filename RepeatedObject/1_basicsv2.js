// property value short-hand

function makeUser(username,waba_no){
    return {
        username : username,
        waba_no : waba_no,
    };
}

let user_1 = makeUser("pratik",2612); // created object using function
let user_2 = makeUser("Vinay",1202);

console.log(user_1);  // [object object]
console.log(user_1.username);
console.log(user_1.waba_no);



// confusion
// where does the value goes of variables we are passing

function makeReseller(name,waba,billing,age){
   return { 
    username : name,
    waba_no :waba,
    billing : 12,
    ageofClient : age,
    };
}

let reseller_1 = makeReseller("dipr",784,"billing_charges",22);

console.log("reseller_info "+ reseller_1.billing);
console.log("reseller_info "+ reseller_1.billing_charges);
console.log("reseller_info "+ reseller_1.username);
console.log("reseller_info "+ reseller_1.ageofClient);


// whatever you passed as arguments 
// would be paremeters and those parameters that you have inside the function 
// would take the value be it 
// property-value
// property-name


// now what special property value shorthand 
// as we have seen in above we intentionally passed values same as property name 
// this is so common, that there a special property value shorthand



function makeAdmins(username,position,age){
    return {
        username, // short-hand
        position, // short-hand
        age : age ,

    };
}

let admins_1 = makeAdmins("eminem","rapper",40);


console.log(admins_1.username);
console.log(admins_1.age);
console.log(admins_1["position"]);



// you can us normal property, shorthands in the same object


// property name limitation 
/* 

like variable cant not use reserved words like for, let, const, return
object property key/name there is no such restriction 

*/


let object = {
    for : 1,
    let : 2,
    return : 3,
    each : 4,
    null : 5,
    0 : 6, // same as "0" : 6
    "some" : 7
};

// everything becomes string in the end 
// we are talking about left side :- property name


console.log(object.for + 
    object["let"] +
    object["return"]  
);


/*
There's a minor gotcha with a special property named __proto__
we can't set it to a non object value : 

let obj = {};
obj.__proto__ = 5; // assign a number
alert(obj.__proto__); // object object 

*/
// when asisgn an object

let obj = {};
obj.__proto__ = object; // assign a number
console.log(obj.__proto__); // object object 
console.log(obj.__proto__.for); // 1 // why 
// see object variable above 


// property existence test , "in" operator 


/*
reading non existing property would in undefined
*/

let user = {};
console.log(user.thisPropertydoesnotevenexist === undefined);

// to check where the property is part of object 
// we have special operation "in"

// syntax is "key" in object 
// it return boolean value 

user ={
    name : "pratik",
    age : 30, 
};

console.log(`age exist :- ${"age" in user }`);
console.log("waba exist :- " + ("waba" in user ));
console.log("name exist :- " + ("name" in user) );


let key1 = "age";
let key2 = "waba"

// if we omit "" then it must be variable that pointing to the property-name

console.log(`key1 - ${key1} exist :- ${key1 in user}`);
console.log(`key2 ; ${key2} exsit :- ${key2 in user}`);

// so in every case we can just do comparision with undefined to see if the property exist in object 
// except one case where proerty-name have been assigned a value undefined 

 obj = {
    test : undefined,

};

console.log(obj.test); 

console.log("test" in obj); // gives true







