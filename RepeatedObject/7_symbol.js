// symbol type 

/*
by specification only two primitive types may server as object propertie keys 

string type or 
symbol

otherwise if uses anothertype its autoconverted to string 
so the obj[1] is same as obj["1"]
or obj[true] be obj["true"]

/*
let obj = {
    one : "ones",
    5 : "five",
    "two words" : "big goal",
    true : "isMarried"


}


let key = "two";

obj[key] = "twos";
console.log(obj["one"]);

console.log(obj[key]);
// console.log(obj[twos]);
console.log(obj[5]);

console.log(obj["two words"]);
console.log(obj[true]);


*/
///////////
/*


let see symbols 

symbol represent unique identifier 
a vlaue of this type can be created using Symbol();


*/


/*
let id = Symbol();
upon creation we can give a description like symbol name 
// mostly useful for debugging purposes

*/

let id = Symbol("id");
// id is a symbol with a desccription "id"


// symbol are guaranteed to be unique 
// even if we create mayny symbol with exactly same description
// they are different values 


let id1 = Symbol("id");
let id2 = Symbol("id");


console.log(id1 == id2); // false
console.log(id1 === id2); // false



/*

to summarize a symbol is primtive unique value with an optional description


*/


// symbol dont auto convert into string

/*
most values in js support implicit conversion to a string 
like alert(); does autoconvert everyting to a fucking string 
symbol are special they dont autoconvert 

*/


id = null;

id = Symbol("id");

// alert(id); //error

/*

that a language guard against messing up because string and symbol are fundamentally different 
and should not be able to accidentally convert from one to another 

if we really want to convert symbol to string 
we can use .toString() on it 
*/

id = null;
id = Symbol("id");
// alert(id.toString());
// alert(id.description); // to show description only

// hidden properties 

/*
symbdol allow us to create hidden properties of an object that no other part can 
accidentally access or overwrite 

*/

/*
user object that belongs to a third party code 
lets add symbol to it 
*/

let user = {
    // belongs to another code // third party code 
    name : "john",
    song: "sagar ki"
};


let uniqueID = Symbol("uniqueID");

user[uniqueID] = 123; // value added to user object without really interferring with the og user object 

console.log(user[uniqueID]);
console.log("-> " + Object.keys(user));



/*
in this way symbols let you safely add and manager extra information witout affectin 
the objects og ness properties or behavior

so what we did using our symbol its only visisble to use 
suppose that naother script want to have it sown identifier inside user for its own purpose
then that script can create its own Symbol("id") like this 

let id = Symbol('id')
user[id] = "their id value"

there will be no conflict 
but if we use string "id" instead of symbol then 
it would chaos


*/


let person = {

    name : "pratik",
}

// our script uses "id" property
person.id = "our id value";

// another script also wants "id" for tis purpose

person.id = "theri id value";

// boom ? overwritter by another script 

// if we want to use a symbol in a literal object {...}
// we need squeare brackets arount it 
// thats because we need the value from the variable id  as the key , not the string "id"



id = null;
id = Symbol("id");

let node = {
    name : "npm",
    [id] : 123, 
    
};


// symbol are enumberalbe so cant work with for...in loop

for (let key in node )
{
    console.log(`${key} :- ${node[key]}`);
    // only name (no Symbol)
}


// dircecat access works 

console.log("direct Acess " + node[id]);


// object.keys(node) also ignores id just 

// where as in contrast 
// Object.assign() copies both string and symbol property

id = null;

id = Symbol("id");

user = {
    [id] : 2612,
};

let clone = Object.assign({},user);

console.log(clone[id]);


// Global Symbols 
/*
usually all symbols are different even if they have the same name 
but sometimes we want same-name symbols to be same entities

for instance different part of application wnat to acess id 
meaing exactly same property 

to achieve this there exist global symbol registry 
we can create symbol in it and access them later 
and it guarantess that repeated accesses by the same name return exactly same symbol

so to read or create [if absent] a symbol from the registry use Symbol.for(key)

that call checks the global registry and if theres symbol described as key then returns it , otherwise creates a new symbol
Symbol(key)  and stores it in the registry by the given key

*/

// let id = Symbol("id"); // simple zindagi // apna apna dekhlo bhai 
 id  = Symbol.for("id"); // mentos zindagi  
// if id Symbol is not there then it is created 

let idAgain = Symbol.for("id"); // read it again from another part of code 

// both are same 
console.log(id ==idAgain); // true 

/*
symbols inside registry are called global symbol 
if we want appliaction wide symbol acessible everywhere in the code 
that what they are for 


In some programming languages, like Ruby, there’s a single symbol per name.

In JavaScript, as we can see, that’s true for global symbols.


*/



/*

We have seen that for global symbols Symbol.for(key) returns a symbol by name 
To do the opposite
return a name by global symbol 
we can use Symbol.keyFor() 



*/
// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
console.log(Symbol.keyFor(sym));
console.log(Symbol.keyFor(sym2));

/*
The Symbol.keyFor intenerally uses global symbol registry to look up the key for the symbol 
so it does not work for non global symbol 
if the symbols is not global 
it wont be able to find it and returns undefined 

that said all symbols have the description property 


*/

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

console.log(Symbol.keyFor(globalSymbol));
console.log(Symbol.keyFor(localSymbol)); // undefined

console.log(localSymbol.description); 



/*
there are many System Symbols that javascript uses internally and we can use them to fine -tune various aspects of our object 

they are listed in the specification in the well-known symbols table 

Symbol.hasInstance
Symbol.isConcatSpreadable
Symbol.iterator
Symbol.toPrimitive
and so on


for instance Symbol.toPrimitive allow us to describe object to primitive conversion


*/

/*
Symbol is a primitive unique identifier 
Symbols are created with Symbol() call with an optional description

Symbols are always different values even if they have same name 
if we want same name symbols to be equal then we should use the global registry

Symbol.for(key) returns creates if needed a global symbol with a key as the name 

multiple call of Symbol.for(key) with the same key return exactly the same symbol

symbols have two main use cases :
1. hidden properties 
if we want to add a property into an object that belongs to another script we can create a symbol and use it as property key 
symbolic property does not appear in for ...in also it wont be accessed directly 

2. there are many symbols used by javascript which are accessible as symbol.* 
we can use them to alter some built-in behaviour

technically symbols are not 100% hidden 
like we get symbols while cloning using Object.assign
or object.getOwnPropertySymbols(obj) that allow us to get all symbols 
or Reflect.ownKeys(obj) that returns all keys of an object including symbolic ones 

*/




