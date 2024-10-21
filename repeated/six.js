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


