

let admin;
let name;
name = "John";
admin = name;

// console.log(admin);

let planet = "Earth";
let currentVisitor;


// variables valid and invalids 

// let 1a,as* = 45; // in valid cause cant start with a number

// only valids are $ _ and anything that start with a alphabet can include number but cant start wtih a number 
// reserved words cant be used 

// is a case sensitive there a huge difference between apple and APPLE



// so there are constants which basically means the variables value cant  be changes / that we know of alright 
// we can bifurcate the constant into two parts
// one constant are konwn before the execution like hexadecimal value of red 

// const red = "#F00";

// and the other one is that gets calculated during the execution time
// const pagelaodTime = "somevalue"; // this is also cconstant like oncce it gets caluclate during the execution and stays same during that program



//DATATYPES

// fucking eight type of datatype ares there 
// primitves ones string,number,bigint,null,undefined

// and symbols which is unique identifer for objects 


// and then non primtive ones :- objects,

// sometimes we get specials values such as infinity and nan
// nan that is not a number represent computational error
// when we try to do incorrect/undefined mathematical operations 
// like nan+1 or "string" + 2 or 

// you can assigned variable with string data type at a instance 
// later change the data type to something else like number 
let like = "text to be changed as number";
like = 45;

let num = 5544;


// just put n at the end 
let bigFatNumber = 64654646546546456456456464n;



let age =  24 ; // number 
let money = 464561321654521616423165465165n; // bigint
let petName = "pratik" ; // string
let single = true ; // boolean 
let lonely = false ; // boolean
let bank_balance = null; // null
let happy; // undefined


console.log(`age:- ${age}`);


let sentence = 'laugh and be happy cause you can use single quotes too ';

let sayHiTo = `using backquotes im saying hi to ${petName}`;
// three types of quotes
// single,double and backticks '' "" ``

// we dont have char like some other languages has 
// for single character 
// thers only one type strings and it may consist of zero,one or more than one characters in it 

let isAngry = false;
let isOld = 24>30;
console.log(isOld); // false comparision results in boolean value



// null and undefined 
bank_balance = null; 
// null :- the variable has been assigned a value that is null which represent empty/or nothing value its like intentional absence
// null is assigned value right
// null is intentially assigned to indicate null value 


let sad ;
// undefined :- the variables has not even any value at all 
// undefined :- indicates a varialbe that has not been initlized 


// can explicitly assigned undefined like 
sad = undefined;

//so one uses null to assign empty value to a variable 
// and undefined is reserved as default initial value for unassigned things 
  




// typeof 
// to see the datatype
// typeof is a operator not function 
// we can use typeof x 
// or typeof(x)

console.log(typeof "god");
console.log(typeof(2+2));


// typeof returns string type 
// the value that typeof provides can be string,undefined,number


let storeType = typeof 1 ;
// console.log(typeof storeType);
// console.log(storeType);


/*

console.log("now types");

// console.log(typeof undefined);
console.log(typeof sad); // undefined
console.log(typeof 4); // number
console.log(typeof null); // object this is bullshit
console.log(typeof "string"); // string
console.log(typeof 0n);// bigint
console.log(typeof true); // boolean
console.log(typeof Symbol("id")); // symbol
console.log(typeof Math); // object
console.log(typeof alert); // function


console.log(typeof alert); // object function  // you might not recive the same output in node js environment or sometimes even at chrome so try different browser 


*/


// let someone = "ilya";

// console.log(`hello ${1}`);
// console.log(`hello ${'name'}`);
// console.log(`hello ${someone}`);









