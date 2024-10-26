// returning a value 
// return value is put at the palce of calling the function
// the function execution stops when it reaches the return 
// there can be may occurences of return inside one single function 

function sum(a,b)
{
    
    return a+b;
}


let result = sum(4,5);
console.log(result);


// multiple occurence of return 

function AgeChecking(age)
{
    // age > 18 ? return true : return confirm("you cant visit this site ")
    // wrong 

    return age >= 18 ? true : confirm("please ask your parents");

}

let age = prompt("enter your age","18");

if(AgeChecking(age))
{
    alert("Access Granted");
}
else {
    alert("Access Denied");
}


function showMovie(age)
{
    if(!AgeChecking(age)){
        return ;
    }

    alert("enjoy the movie as your abovve 18");
}


showMovie(age);





