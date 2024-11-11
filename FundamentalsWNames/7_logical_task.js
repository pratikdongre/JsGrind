//7
// from the check the range betweeen 


let age = 0
if (!(age >= 14 &&  age <= 90))
{

    console.log("either child or booda as f")
}

// without using not operator 

if (age < 14 || age > 90)
{
    console.log();
}



// prompt when click cancel gives null
// if the user clicks ok w/o typing anything then ""
user = prompt("who is there");

if(user == null || user == '')
{
    alert("Canceled");
}

else if (user == 'Admin')
{
   pwd =  prompt("Enter Password");
   if(pwd == "TheMaster")
   {
    alert("Welcome!");
   }
   else if (pwd == null || pwd == '')
   {
    alert("Canceled");
   }
   else {
    alert("Wrong Password");
   }
}

else {
    alert("I don't know you");
}



