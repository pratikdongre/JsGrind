// logical operators 
// 4 ?? || ! && 

// althorugh they are logical
// they can be applied on any value type not only boolean 
//type conversion comes to pictrure any type gets converted to boolean and then logical things happens 


// in classical_programming it works on only boolean value 
// if any of the value is true the result would be true

console.log(true || true); // t
console.log(true || false); // t 
console.log(false || true); // t 
console.log(false || false); // f


if(1 || 0){
    console.log("truthy");
}


//mostly || are used with if to check any condition matches

let workhour = 9;
let Weekend = true;

if(workhour < 7 || workhour > 4){
    console.log("time to work harder");
}

//with more conditions 
if(workhour < 7 || workhour > 4 || weekend){
    console.log("time to grind");
}

// given multiple or'ed values 
// evaluates operation from left to right 
// each operand gets converted into their boolean form 
// if all operand haves been evaluated as false then return last operand 
// the values is returned in its og form 
let result = 0 || "" || "hello world";
console.log("result " + result);

console.log(1 || 0); // 1 
console.log(null || 1); // 1 
console.log(null || 0 || 1); // 1 
console.log(undefined || null || 0 || 1); // 1 
// writes the first truthy values it founds or 
// if not then last falsy value or you could just say last value

// getting the first truthy value

let firstname = ""
let lastname = ""
let nickname  = "supercoder"

console.log(firstname || lastname || nickname || "anonymous");

// short circuite evaluation 

// the moment you got the first truthy value it wont waste time and go further to check 

true || console.log("wont print");

false || console.log("will print");



// and && operator 
// both side should be true to get final value true 


console.log("&& operators ones ");
console.log(true && true); // t 
console.log(true && false); // f
console.log(false && false); // f 
console.log(false && true); // f 



let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30){
    console.log(`time is ${hour}:${minute}`);
}

// just like or the values gets to their boolean form 
// true && false
if(1 && 0 ){ 
    console.log("wont execute");
}


console.log(1 && 0 ); // false
console.log(1 && 5 ); // true


// && finds the first falsy value 
// because then we are sure that vlaue would be false definelty 

// writes the first falsy values it found else the last value 

console.log(null && 0);
console.log(null && "no matter what");



// difference in && and || is 
// || looks for first truthy values then we are sure that answere would truthy only 
// && look for first falsy value  then we are sure that answer would falsy only



console.log(1 && 2 && null && 3); // null the first falsy value
 
console.log(1 && 2 && 3); // no falsy so last value


// precendence of && is higher than || 

// a && b || c && d 
// (a && b ) || (c && d)

////////////////////
// !not left to right

// it accepts single argument and then convert
// that to theri boolean form 
// then does the inverse 

console.log(!true);

console.log(!0);


// we can use !! to get the values to theri boolean form 

console.log(!!"non-empty string");

console.log(!!null);

// theres another way to do the same right 

console.log(Boolean("non empty strings"));
console.log(Boolean(null));


// ! NOT has higher precedence than the other ones && and || 




// jargons 
// || finds for the first truthy value because then we are sure that the final resutl would be true only
// where as && looks for the falsy value because then the final resutl would definetly be false 
// and if they dont fint then alst value would be assigned 

// in OR'ed values 
// || look for first truthy value if none then last value 

// in ANd'ed values 
// && looks for first falsy value if not then last value prints 




console.log(null || 2 || undefined); // true

console.log(console.log(1) || 2 ||  console.log(3));
// in this console.log(3)



console.log(1 && null && 2);




console.log(console.log(1) && console.log(2));
// console.log(1) happens and then it return nothing so 
// outer log undefined


console.log(null || 2 && 3 || 4);
// as we know && has higher precendec than || so 
// that would happens first 

// null || 3 || 4 
// first truthy value that is 3


let age = 3;

if (age >= 14 && age <= 90){
    console.log("age is between 14 and 90 inclusively",age);
}


if(!(age >= 14 && age <=90)){
    console.log(age);
}


if(age < 14 || age > 90){
    console.log(age);
    
} 



// a question about if 

if (-1 || 0 ) console.log('first');
// -1 that is truthy


if(-1 && 0) console.log("second");
// gives 0 so it wont run

if(null || -1 && 1 ) console.log('third');
// null || 1 
// 1 so runs 



// last task 

console.log("last one");

let visitor = prompt("who is there");

if(visitor =="Admin"){
    let password = prompt("enter password",'');
    if(password == "TheMaster"){
        console.log("welcome");
    }
    else if (password === "" || password === null)
    {
        console.log("canceled");
    }
    else {
        console.log("Wrong password");
        
    }
}
else if (visitor === null || visitor === "")
{
    console.log("canceled");
    
}
else {
    console.log("others");
}






