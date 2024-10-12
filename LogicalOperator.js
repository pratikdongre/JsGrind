//5
// logical operators 4 ||  &&  !  ??
// these operates on boolean values 

// let officeHour = 12;
// let isWeekend = true;  

// if (officeHour < 9.30 || officeHour > 18.30 || isWeekend)
// {
//     console.log("office is closed");
// }


let result = 0 || "" || "hello world";
console.log("result " +result);

console.log(1 || 0);
console.log(null || 1);
console.log(null || 0 || 1);
console.log(null || undefined || 0);
//  or writes the first truthy value it founds or if not truthy 
// then (last falsy value or you could also say last value)  


// getting the first truthy value
let firstname = "";
let lastname = "";
let Nickname = "SuperCoder";

console.log(firstname || lastname || Nickname || "anonymous");


// short-circuit as soon as you got the truthy value you stop rigth there without going further
true || console.log("not printed"); 
false || console.log("printed"); 


// and && operator 
// both side should be true to get final value true


let hour = 12;
let minute = 30;


if (hour == 12 && minute == 30)
{
    console.log('The time is 12:30');
}


if (1 && 0)
{
    console.log("wont go inside as one is false ");
}



console.log(1 && 0 );// 1 is true and 0 is false 
console.log(1 && 5 );// both are true so the last value 



// and writes the first falsy value it founds or if not then last value 

console.log(null && 0);
console.log(0 && "no matter what");



console.log(1 && 2 && null && 3); // null the first falsy value

console.log(1 && 2 && 3);// the last value as no falsy values found 



// precedence of and(&&) is higher than or (||)


////////////////////////
// !not right to left 

console.log(!true);//false
console.log(!0);//true




//boolean version

console.log(Boolean("this is text")); // true
console.log(!!"this is text"); // true

console.log(!!null); // false
console.log(Boolean(null));














// jargon 
// in && the moment you find false value it the whole final result would definetly be false 
// where as in || or the moment you find truthy value the final result would definetely be true 

// in OR'ed values 
// || lookes for first truthy value if none / (all are falsey)then last value print 

// in AND'ed values 
// && looks for first falsy value if not then last value prints 
//like if you found && overall result would be false for sure / you wont go inside if its --->if ()