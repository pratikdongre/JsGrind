//16
// functions are buliding block of a program
// it allows to use same loc without repittion we can just call it 
// built-in function alert(message) prompt(message,default) confirm(question)


// function declaration
// function definition
// function call 


/*
function name (parameter 1 .. parameter 2)
{
function body;
}

*/

let userName = "Pratik"; // this is outer variable guess what its accessible inside the showmessage function
let nickName = "jawan";
function showMessage(){
    userName = "monu";
    let nickName = "Puran";
    let message = "Hello," + userName + " "+  nickName // local access only inside the curly baces
    alert(message);
}

// alert(message); cant access message 



alert("before "+userName + nickName);

showMessage();

alert("after going inside  "+userName + nickName);



// parameters 


function messageParameter(from,text){

    alert(from + ":- " + text );
}

messageParameter("Pratik","Hello");
messageParameter("Pratik","What is up");




// what is called parameters and what are arguments 
// from ,text is parameters 
// "pratik" , "hello" these are arguments you pass arguments always 




function messageParameterv1(from,text)
{
// lets modify the from a little 
from = `*${from}*`;
alert(from+ " " + text);
}

let from = "ann";

messageParameterv1(from,"Hello"); // passing the copy of the variable from 
alert(from);







// jargon 
// variables global variables are accessible inside function but can be overshadowed if declared inside 
// you pass the copy of the variable as arguments 


