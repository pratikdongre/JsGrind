//18
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

let age = +prompt("how old are you dude ", 18);

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


// showMovie();


