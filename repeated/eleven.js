// 
// functions are building block of a program 
// it allows to use same loc without repition we can just call it 
// built -in function alert (message), prompt(message,default), confirm (question)


// function declaration
// function definition
// function call


/*
function name (parameter 1 , parameter 2)
{
function body;
}

*/

let userName = "Pratik";
let song = "woh dekhne mei";

function ShowThisMessage()
{
    userName = "monu"; //outer variable 
    let song = "Dhoom Dhoom"; 
    let message = `${userName} listening ${song}`;
    alert(message);

}
// alert(message); // not accesible 

alert(` before call ${userName} and ${song}`);
ShowThisMessage();
ShowThisMessage();
alert(` after call  ${userName} and ${song}`);

// variables inside function not accesislbe outside 
// outside variables are accesisble inside the function



// outer variable is only use when there is not local one
// variables declared outside function are called global variables 

// global variables are visible any function unless there shadowed/exists local variable 
// its a good practice to minimize the use of global variables 




// parameters 

function messageWParameter(to,text){

    alert(`${to},msg for you :- ${text}`);
}

messageWParameter("Pratik","Hello");
messageWParameter("Ranbir","What is up");


// what is parameter and  what is called arguments
// to,text are parameters
// "pratik","hello" are arguments 

function msgParameterv1(from,text="no text given")
{
    //lets modify from 
    // changes that we made here in the function
    // are not visible outside 
    from = `*${from}*`
    alert(from + " Says " + text);
    
}


let from = "Mons"
msgParameterv1(from,"Hi")
alert(from); // Mons



msgParameterv1(from);
// function is called but argument is not provided
// hence the value is assigned undefined

// we can give default value in case if argument is not passed


msgParameterv1(from,undefined);
// defualt values triggere on this too

//in older version 

function showMessage(from,text){
    if(text === undefined){
        text = "no text given";
    }

    console.log(from+ " " + text);
    
}

showMessage("pratik","Hey");


function showMessagev2(from,text)
{
    text = text || "no text given";
    console.log(from+ " " + text);
}



// but then its has issue with falsy values 

function showmessagev3(from,text){
    text = text ?? "unknown";
    console.log(from + " " + text);
    
}

// ?? checks only for null or undefined

showmessagev3("pratik");
showmessagev3("empty ' ' ","");
showmessagev3("zero - ",0);
showmessagev3("null - ",null);


// cand also pass something like this 
showMessage("complex",text = anotherFunction());

function anotherFunction(){
    // only gets called when the text is not given
    // if text is given it wont come here 
}


