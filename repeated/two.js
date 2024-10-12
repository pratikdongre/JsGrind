// modals 

// alert,prompt,confirm all are modal
// they pause the script and dont allow visitor to proceed or interact wiht rest of the page until windows is dismissed by ok or cancel 
// limitation we cant modify the location or look of the modal/ windows its defined by browser

// alert when we just want to print something on the screen

// prompt when we want to take something from the user
// it returns text or if pressed cancel then "null"
// and if we just pressed ok without putting anything in the text then it returns the defualt if its there else empty

// confirm like ok or cancel
// if in confirm modal we press ok then it returns true otherwise false

alert("hello");

let userEntered = prompt("Please enter your name ");
alert(`hello '${userEntered}'`);

let wantCookies = confirm("do you want cookies");
if(wantCookies)
{
    alert("yeah we are inside");
}
else {
    alert("we are outside ");l
}


// age

alert("i need to know your age before you enter the website");
let result = prompt("enter the age");
alert(`age is "${result}" `);



// tasks 
// create a webpage that asks for a name and outputs it 
let name = prompt("please enter your name","user");
alert(`hi ${name} welcome to our site`);