//9

// 14/8/2024

// nullish Coalescing ?? 
// return the first value if its not null or undefined ,otherwise second one 
// its aint nothing new its just gives the first defined value of two 

// let result = a ?? b ;
// //or 
// result = (a != null && a!= undefined) ? a : b ;

// ? is a ternary operator or you could say conditional operator.

////use case 

let user;

alert(user ?? "Anonymouse");

user = "john";
alert(user ?? "Anonymous");

let FirstName = null;
let LastName = null;
let nickName = "don";

alert(FirstName ?? LastName ?? nickName ?? "Anonymous");


// so || was there to do above things 
// but the issue with || or is it finds the first truthy value but thats not the main issue 
// and "" 0, false, false are also falsy besides null and defined 
// so this is where nullish coalescing kicks in and get us out of trouble  


// if height is null/undefined then we want to give default value 
let height = 0;

alert(height || 100); // as 0 is falsy so || goes further to find the first truthy value 
alert(height ?? 100);




