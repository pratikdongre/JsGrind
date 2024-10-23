// nullish coalescing ?? 
// returns the first argument if its not null or undefined otherwise the second one 
// nullish coalescing aint nothing new just new sytnatx to get the frist defined value 

// let result = a ?? b ;
// or 
// result = (a!= null && a !=undefined) ? a : b;


// ? is a ternary oeprator / conditional operator 

// use case 

let user;

console.log(user ?? "anonymous");

user = "pratik";
console.log(user ?? "anonymous");


// first defiend value in a list of values 

let firstName = null;
let LastName = null;
let nickName = "monu";

console.log(firstName ?? LastName ?? nickName ?? "anonymouse");
console.log(firstName || LastName || nickName || "anonymouse");


// see || or does the above thing but the problem 
// || find the  first truthy value
// and "", 0, false are also falsy values besides null and undefined
// so this is where the nullish coalescing kicks in 


// ?? returns the first defined value
// || returns the first truthy value


// if height is null/undefind then we want to give the default value
let height = 0;

console.log(height || 100); // 100 cause 0 is falsy || or goes further to find the first truty value
console.log(height ?? 100); // 0


// as math operatraion have higher precednce than logicals ops 


height = null;
let weight = null;
let area = (height ?? 100) * (weight ?? 50);
console.log(area);

 area = height ?? 100 * weight ?? 50;
 console.log(area); // 0 
 // hint :- as number of (null) is 0


 // you cant just use ?? with || or && 
 // you can with parenthesis 

//  let x = 2 && 3 ?? 4;
//  let x = (2 && 3) ?? 4; 3


// basically nullish coalescing is used to get the first define values 
// its is used to assign default valeut to variable 


height = null;

height = height  ?? 100;

// good practice to use parenthesis 
