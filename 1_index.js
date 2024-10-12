//1
// stuff learned in here 
// alert,let,var,const,datatypes 


// theres a "use strict"; it encourages to write modern javascript code 


// alert("im so no javascript")


// alert("Im javascript");


let admin;
let name ;

name = "John";
admin = name;


// alert(admin);



// there is let var const 
// to define the type of variable 

/* 
var is old, let and const are new 
there is difference between var and let 
of global and local maybe


const is used when we want that variable's value should not be change 



*/


const birth_date = "26-12-2001"; // this is constant for your whole life 
// see birth_date is hard coded so we could use all caps for this 

let age = (birth_date) // what made you think your age wont increase 



// 8 basic data types 

/*
primitive :- 
string ,number,bigInt,boolean,null,undefined , 

non primitve :- object :- object are used to store collection of data in key value pair 
define --------> const obj = { name : "pratik",
              age : 22 };

access--------> obj.name 
                    obj['age']

,
this is primtive one symbols :- used for creating unique identifier for objects 
*/

let num  =10;
let biggervalue = 546464654654564654654646546n; // just put n after the value and the dataype would be bigint 


let first_name = "Pratik";
let str2 = 'singles quotes are ok too';
let phrase = `back ticks can embed another ${str2}`;

let isMarried = true; 
let isHappy = false;

let isgreater = 4<1 // as comparision results in boolean value 0 1 


console.log(phrase);// "back ticks can embed another singles quotes are ok too" output


// alert(`hello , ${first_name}`);
//or 
// alert("hello " + first_name);


let bank_balance = null // null is special type on its own.
// It's not referring to null pointer,pointing to nothing ...stuff 
// its is just that the value is nothing/empty
// use case like right now my bank_balance is not known even keeping 0 would be wrong or incorrect 
// box is there but does not have anything in it, hence is empty 
// intentional absence


// undefined  special type on its own that refer to value that is not defined 
// box is not even there 
// declared but not assigned 

let soa;
// console.log(soa); // undefined

let boa = 45;
boa = undefined;

console.log(boa);





// typeof operator to see the datatype 
/*
TYPEOF IS OPERATOR NOT FUNCTION 
it can work as typeof(x)
or typeof x 

typeof return string type the value that typeof provided is string undefined,number,bigint,or whatever

*/

// let storeType = typeof 1 ;

// console.log("now types ")

// console.log(typeof undefined);//undefined


// console.log(typeof "undefined");//string

// console.log(typeof 0);//number

// console.log(typeof 0n);//bigint

// console.log(typeof true);//boolean

// console.log(typeof Symbol("id"));//symbol


// console.log(typeof Math);// object
// console.log(typeof null);//object this is bullshit 

// console.log(typeof alert); // object function 

// console.log(typeof storeType);


let somename = "Ilya";
alert(`hello ${1}`); // hello 1 
alert(`hello ${'name'}`); // hello name

alert(`hello ${somename}`); // hello Ilya





//JARGON FOUND 
// typeof is operator not function :- typeof x  or typeof (x)  both works 
// null gives object when looked for typeof this is one the of quirks of js it should give null but gives object 
// could also see repeated/one.js
