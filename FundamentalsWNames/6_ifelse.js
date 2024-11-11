//11
// 13/8/2024

// let year = prompt("in which year ecmascript-2015 specification published");

// if (year == "2015")
// {
//     alert("you are right");
// }
// else {
//     alert("damn wrong");
// }

// or 

// let cond = (year=="2015")// this would give true or false 
// if (cond)
// {
//     alert("you are right");
// }
// else {
//     alert("damn");
// }


/////////////////////


// if (year < 2015)
// {
//     alert("Too early ...");
// }

// else if (year > 2015)
// {
//     alert("Too Late");
// }

// else{
//     alert("Exactly");
// }


// use of conditional operator "?"

// let isAccessAllowed ;
// let age = prompt("How old are you ", ' ');
// if (age > 18)
// {
//     isAccessAllowed = true;
// }
// else {
//     isAccessAllowed = false;
// }
// alert(isAccessAllowed);


// there is shorter version to fill the value of variable based on the condition 


// let age = prompt("How old are you ", ' ');
// let accessAllowed = (age > 18) ?  "yeah" : "nah";
// let isAccessAllowed = age > 18 ; // this work also as the comparsion itself would give {true or false} 
// alert(accessAllowed);


//////
// let age = prompt("age ? ", 18);

// let message = (age < 3 ) ? 'Hi baby' : 
//               (age < 18) ? "Hello!" : 
//               (age < 100) ? "Greetings" :
//               ("what an unsual age ");

// alert(message);
// the same thing can be done using if else if ....


//////
// let company = prompt ("Which company created javascript");

// company == "Netscape" ? alert("Right") : alert("Wrong");
// although a shortcut but still not really readable so if else is good to use 



// task 

if (" ") // (" ") ("0") true  but when ("") this is empty string so false 
{
    alert("Hello");
}

//////////////////

// answer = prompt("what's the offical name of Javascript");

// if(answer == "ECMAScript")
// {
//     alert("Right");
// }
// else {
//     alert("you dont know ECMAScript");
// }

// (answer == "ECMAScript") ? alert("Right") : alert("you dont know ECMA"); 



//////////////
// let number = prompt("Enter your favorite no");

// if(number > 0)
// {
//     alert(1);
// }
// else if (number < 0)
// {
//     alert(-1);
// }
// else if (number == 0)
// {
//     alert(0);
// }

////////////////

// let result = ((a+b) < 4 ) ? "Below" : "Over" 

//////////////////////

let login = prompt ("Who is it ");

let message = (login =="Employee") ? "Hello" :
              (login == "Director") ? "Greetings": 
              (login == "Login") ? "No login" :
              " ";

alert(message);






