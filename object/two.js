// property value short-hand 

function makeUser(name,age){
    return {
        name : name,
        age : age,
    };
}

let user = makeUser("John",30);
let user1 = makeUser("pratik",20);
alert(user.name);


// so in above properties has same name as variables 
// and this is so common , that there's a special property value short hand to make it shorter 

//this is same as above 
// function makeUser(name,age){
//     return {
//         name,
//         age,
//     }
// }

//we could also use normal properties as well as shorthands in the same object
/*
let user = {
    name, // short hand
    age : 30
}

*/


// property name limitation:- 
/*
like variables cant not use reserved words like for ,let etc
object property key/name there is no such restriction

*/

let object = {
    for : 1,
    let : 2,
    each : 4,
    null : 5,
    0 : 5,
    "some" : 2,
};

alert(object.for + object["let"] + object["each"] + object.null+ object["0"] - object[null] - object[0] + object["some"]);


/*
There’s a minor gotcha with a special property named __proto__. 
We can’t set it to a non-object value:

let obj = {};
obj.__proto__ = 5; // assign a number
alert(obj.__proto__);// object Object

*/

let objo = {};
objo.__proto__ = object; // assign a number
alert("is this working " +objo.__proto__.for);// is this working 1
alert(objo.__proto__);// object Object




// property existence test , "in" operator 

/*
reading non existing property would result in undefined 
    
*/

user = {};
alert(user.nosuchProperty === undefined); // true if "nosuchProperty" key is not in user 

// there is also special operator "in"
// syntax is "key" in object 

user = {
    name : "pratik",
    age : 30,
};

console.log( "age exist :-" + ("age" in user));
console.log( "blabla exist :-" + ("blabla" in user));

let key = "age"; // so as age exist in user 
let key2 = "aga" // this does not exist in user 
// if we omit "" then it must be variable that point/value to property name/key
console.log(`key-${key} exist :- ${key in user}`);
console.log(`key2-${key2} exist :- ${key2 in user}`);



// so in every case we can just do comparsion with undefined to check where the property exist or not 
// except one case that is when property value is undefined 


let obj = {
    test : undefined,
};

console.log(obj.test); // undefined
console.log("test" in obj); // true
