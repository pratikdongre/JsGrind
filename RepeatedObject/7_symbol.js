// symbol type 

/*
by specification only two primitive types may server as object propertie keys 

string type or 
symbol

otherwise if uses anothertype its autoconverted to string 
so the obj[1] is same as obj["1"]
or obj[true] be obj["true"]

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
};


let uniqueID = Symbol("uniqueID");

user[uniqueID] = 123; // value added to user object without really interferring with the og user object 

console.log(user[uniqueID]);
console.log(Object.keys(user));



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

user.id = "theri id value";

// boom ? overwritter by another script 

// if we want to use a symbol in a literal object {...}
// we need squeare brackets arount it 



id = null;
id = Symbol("id");

let node = {
    name : "npm",
    [id] : 123, 
    
};

// thats because we need the value from the variable id  as the key , not the string "id"

// symbol are enumberalbe so cant work with for...in loop

for (let key in node )
{
    console.log(`${key} :- ${node[key]}`);
    // only name (no Symbol)
}


// dircecat access works 

console.log("direct Acess " + node[id]);


// object.key(node) also ignores id just 

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



