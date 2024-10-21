let birthYear = prompt("whats my birth year");

if(birthYear == "2001")
{
    alert("how do you know that");
    alert("lets get married");
}
else {
    alert("you dont know me");
}


// so the if statement evaluates the condition inside the parentheses
// and return boolean value either true or false

// 0, "", null,undefined,Nan becomes falsy they are falsy values
// rest are truthy values

if(0){
    alert("wont execute cause condition is false");
}

if(1){
    alert("will always execute cause condition is truthy");
}


// preevaluated condition like this 
let age = (birthYear == "2001")
if(age){
    alert("age must have value 1");
}
else {
    alert("age must have value 0");
}

///// sevaral conditions else if 

if(birthYear > 2001){
    alert("Too late");
} else if (birthYear < 2001){
    alert("Too early");
}
else {
    alert("correct boss");
}

// else is optionals though




// if else 

// https://javascript.info/ifelse

let accessallowed;

 age = prompt("how old are you",'');

if(age>18)
{
    accessallowed = true;

} else {
    accessallowed = false;
}

alert(`accessallowed :- ${accessallowed}`);
//  this is wrong // alert("what ",accessallowed); cant pass two arguments 
alert("accessallowed " + accessallowed);


// we can do the same using ? which is called ternary operator beccause it has three operands 

let access = (age>18) ? true : false;
// we can omit the () ? has low precendence that > so > would happens first 

// in above example you can avoid ? as comparisoin iteself return true/false


// multiple ? 

 age = prompt("whats your age ?",18);

 let message = (age < 3) ? 'hi Baby' :
                (age<18) ? 'hello' :
                (age< 100) ? "greetings" :
                "what an unusual age";

alert(message);

// we could do same usign if else 

if (age < 3 )
{
    message = 'hi baby';
} else if (age < 18) {
    message = 'hello';
}
else if (age < 100){
    message = "greetings";
}
else {
    message = "what an unsual age";
}

// non traditional use of ?

let company = prompt("which company created javascript");

(company == "Netscape") ? 
    alert("right") : alert("wrong");

// we use ? instead of if in here but less readable right and what we did is based on condition we execute the code this time we didnt assign to any variable 



// tasks

if("0"){
    alert("hey how you doing");
}
// would this one run 



// task2 

let answer = prompt('what the offical name of javascript','');

if (answer == "ECMAScript")
{
    alert("Right");
} else {
    alert("you dont know EcmaScript");
}


//task 3

let enteredNumber = Number(prompt("enter a number"));
console.log(typeof enteredNumber);

if(enteredNumber > 0){
    alert("1");
} else if (enteredNumber == 0){
    alert("0");
} else if(enteredNumber < 1) {
    alert("-1");
}


 enteredNumber = Number(prompt("enter a number"));
console.log(typeof enteredNumber);

if(enteredNumber > 0){
    console.log("1");
    
} else if (enteredNumber == 0){
    console.log("0");

} else if(enteredNumber < 1) {
    console.log("-1");

}


// let result ;
// let a = 4, b= 4;
// (a+b < 4) ? result = "Below" : result = "Over";
// console.log(result);
// at first iteration
let a,b= 4;
let result = (a+b+4) ? "Below" : "After";




let login = "employee";

 message =  login == "employee" ? "hello" : 
            login == "Director" ? "Greetings" : 
            login == '' ? "no login" : 
             '';

console.log(message);
             