//2
// alert,prompt,confirm all these are modal 
// they pause the script and dont allow visitor to proceed or interact with rest of the page until windows is dismissed by either cancel or ok 
// limitation we can't modify the location or look of the modal / windows its defined by browser 

// alert when we just want to print something on the screen
// prompt when we want to take something as input from the user 
// confirm like yes or no 


// alert("hello");

// let result = prompt("hey enter the name ", ["user"])
let result = prompt("hey enter the name ", "user");//in this case "user" is bydefault value 

console.log(result); // whatever user has entered 


// let age = prompt("how old are you ?",100);
// alert(`you are ${age} years old `);


// let isCookieAllowed =confirm("do you want to allows cookies");

// alert(isCookieAllowed);


// tasks
// create a webpage that asks for a name and output it 

// let name = prompt("enter your name please ","user");
// alert(`hi ${name} welcome to our site`);

