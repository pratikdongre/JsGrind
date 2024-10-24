//17
// default values 
// if not provided all the arguments then the value is undefined

function showMessage(from,text = "no text given"){

    alert(from + " " + text);
}


showMessage("ann");

// the default values also jumps if the value is passed undefined 
showMessage("pratik", undefined);

// you can also pass something complex like 

showMessage("Bhau",text = anotherFunction());

function anotherFunction(){
 // only called when the text is not given
 // if text given then it wont come here 
}



// old code 
/*

function showmessage (from ,text)
{
if (text == undefined)
    {
        text = "no text given"
    }
    alert(from + " " + text);       
}

function showmessage(from ,text)
{
text = text || "no text given ";
}


*/


// sometimes it might make sense to create defualt values while not at definition but at later stage


// so you can use
//  if (text === undefined )
//  text =text || "empty" but issues as we know 0 and other are also falsy values 
// so nullish coalescing ?? come to rescue 
// text ?? "no text given"


function showCount(count){
alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(""); // 
showCount(undefined); // unknown
showCount(NaN); // nan


//as we know ?? checks only for null and undefined 


// function can return a value 
//return is put at the place of calling the function 
//the function execution stops when it reaches the return 
// there may be many occurences of return inside one single function 
function sum (a,b){
 return a+b;
 console.log("this wont ever execute why");
}

let result = sum(1,4);
console.log(result);





// multiple occcurences of return 

function CheckAge(age)
{
if (age >= 18)
{
    return true;
}
else {
    return confirm("Do you have permission from your parents?")
}
}

let age = prompt("how old are you dude ", 18);

if (CheckAge(age))
{
    alert("Access Granted");
}

else {
    alert("Acess Denied");
}




function showMovie(age){

    if (!CheckAge(age))
    {
        return;
    }

    alert("showing you the movie");
}


showMovie();