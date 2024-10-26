function checksAge(age){
    if(age > 18) return true;

    return confirm("did your parents allow you ");
}

function CheckAge(age)
{
    if(age> 18) return true;
    else 
    return confirm("did you parents allow you");


}


function CheckAgev3(age){
    // age > 18 ? return true else : return false;
    // this is wrong 

    return age > 18 ?  true :  confirm("did parents allow you");
}


function checkAgeV4(age)
{
    return (age > 18) || confirm("did parents allow you"); 
}

//Write a function min(a,b) which returns the least of two numbers a and b.

function min(a,b){
    if(a>b)
    {
        return  b ;
    }
    return a ;
}

console.log(min(2,5));
console.log(min(3,-1));
console.log(min(1,1));



// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

function pow(x,n)
{
    let answer =1;
    for(let i =1;i<=n;i++)
    {
        answer *=x;
    }
    return answer;

}

function powv1(x,n)
{
    let answer =x;
    for(let i =1;i<n;i++)
    {
        answer *=x;
    }
    return answer;

}

// 3 *3 
// x *x 
console.log(pow(3,2));
console.log(powv1(3,2));
