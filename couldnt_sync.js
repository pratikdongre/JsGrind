// if else 

// https://javascript.info/ifelse

let accessallowed;

let age = prompt("how old are you",'');

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