// symbol type 

/*
by specification only two primitive types may serve as object properties keys 

string type or 
symbol
otherwise if uses anothertype its autoconverted to string like 
obj[1] be obj["1"] also
obj[false] be obj[0]


let see symbols 

symbol represent unique identifier 
a value of this type can be created using Symbol();

*/

// let id = Symbol();
// upon creation, we can give symbols a description like symbol name 
// mostly useful for debuggin purposes 
// like 

let id = Symbol("id"); 
// id is symbol with a description "id"


//symbol are guaranteed to be unique 
//even if we create many symbols with exactly the samme description,
// they are differnet values 

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2); // false 


/*
to summarize a symbol is primtive unique value with an optional description


*/


// symbol dont auto convert into string 
/*
most values in js support implicit conversion to a string 
liek alert(); does 
symbol are special they dont autoconvert 


*/

id = null;

id = Symbol("id");

// alert(id); // error 


//that's a language guard against messing up becuase string and symbol are fundamentally different 
// and should not be able to accidently convert to one another 

// if we really want to show symbol we can using .toString() on it 

id = null;

id = Symbol("id");
alert(id.toString());
alert(id.description); // to show description only


//hidden properties
/*

symbol allow us to create hidden properties of an object that no other part of can 
accidendlty access or overwrite 

*/


let user = { // belong to anothe code / third party code 
    name : "john",
};


let uniqueid = Symbol("uniqueid");

user[uniqueid] = 123; // value added to user object without really interferring with the og user object 

console.log(user[uniqueid]);

console.log(Object.keys(user));



/*
In this way, symbols let you safely add and manage extra information without affecting
the object's original properties or behavior.

so what we did using our symbol its only visible to use 
suppose that another script want to have its own identifier inside user for its own purpose 
then that script can create its own Symbol("id") like this 
let id = Symbol("id");
user[id]= "their id value"
there will be no conflict 

but if we use string "id" instead of symbol then 
*/

let person = {
    name : "pratik",
}

// our scripts uses "id" property 
person.id = "our id value";

//another script also wants "id" for its purpose 

user.id ="theri id value"
//boom? overwritten by another script 

// if we want to use a symbol in an literal object {...},
//  we need square brackets around it 

id = null;

id = Symbol("id"); 

let node = {
    name : "npm",
    [id] : 123, // like this 
}
//That’s because we need the value from the variable id as the key, not the string “id”.

// symbold are enumerable so cant work with for..in loop

for (let key in node)
{
    console.log(`${key} is ${node[key]}`);
    //only name (no symbol)
}

//direct acces works 

console.log("direct access " +node[id]);

//object.keys(node) also ignores id
//in contrast 