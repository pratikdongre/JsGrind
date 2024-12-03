// Object.keys,values,entries 

// map.keys() , map.values(), map.entries()

// these methods are generic there is common agreement to use them for ds 
// if we create ds of our own we should implemente tehm too 

// they are supported for 
// map
// set 
// array

// plain objects also support similar methods but the syntax is a bit different

// object.keys, values ,entries
/*
for palin object the follwing methods 
Object.keys(obj) return an array of keys
Object.values(obj) return an array of values 
Object.entries(obj) return an array of [key,values] pairs


difference
let say             Map              object 
call syntax         map.keys()   Object.keys(obj) but not obj.keys()
returns             iterable       "real" array

the first difference the way we call Object.keys(obj) and obj.keys()
why cause flexiblity 
remeber object are base of all complex strucutres in js 
so we may have an object of our own like data that implement its own data.values() method 
and we still can call Object.values(data) on it 

the second difference is that Object.* meothd return real array object not just an iterable 



*/


let user = {
    name : "john",
    age : 30,
};

// Object.keys(user) = ["name", "age"]
// Object.values(user) = ["john",30]
// Object.entries(user) = [["name" , "John"], ["age","30"]]

// using Object.values to loop over property values:
for(let value of Object.values(user)){
    console.log(value);
}


// Object.keys/values/entries ignore symbolic properties
// for.. in loop these methods ignore popretyes that use Symbol(...) as keys

// Usally that convenient but if we want symbolic keys too , then theres a separate method 
// Object.getOwnPropertySymbols that returns an array of only symbol keys 
// also there exists a method Reflect.ownKeys(obj) that reutns all keys 



// transforming objects 
/*
Objects lack many methods that exsit for array. eg map,filter and others 
if we like to apply them then we can use Object.entries followed by Object.fromEntries
1. use Object.entries(obj) to get an array of key/value pairs from obj
2. use arrya methods on that array eg map to transfrom these key/value pairs 
3. Use Object.fromEntries(array) on the resulting array to turn it back into an object

*/

let prices = {
    banana : 60,
    orange : 70,
    meat : 400,
};

let doublePrices = Object.fromEntries(Object.entries(prices).map(value => [value[0] ,value[1]*2]));

console.log(doublePrices.meat);


// tasks 
// sum the properties 

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  

  let sumSalaries = function(salaries){
    let sum = 0;
    let salary = Object.values(salaries);

    for(let sal of salary){
        sum += sal;
    }
    return sum;

  };

  console.log(sumSalaries(salaries));


// tasks Count Properties

let Main = {
    name : "Pratik",
    age : 23,
};

let count = (Main) => {
    
    return Object.keys(Main).length;


};


console.log(count(Main));
