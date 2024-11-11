//19
function doNothing(){
/* same as return undefined
return undefined;
return ;

*/

}

alert(doNothing() === undefined);



/*

never add newline between return and value 
return 
 (some + long + expression + f(a))
 this not works 
 because js convert above as 

 return ;
 (some + long + expression + f(a)) 
 // it adds semicolon and act as empty return 


 what you can do is 
 return (
 like + 
 this + 
 and + 
 what + not you + 
 can + add 
 )



 // naming a function should be like verb 
 like get :- return a value 
 calc :- calculate something 
 create :- create something 
 check :- check something and return a boolean etc


 two independent action usually deserves two functions 
 even if they are usually called together 
 we can add third function that calls both the functions 


 and 

 get_age :- alert something 
 bad bad practice 
 createFrom :- modifies the form 
 bad bad 


 function == comments 
 function should be short and do exatly one thing 
 if that thing is big 
 then its good to split the function into smaller function 

 separate function is not only easier to test and debug but also great comments 


*/


function showPrime(n)
{
   nextprime : for(let i = 2 ; i<=n;i++)
    {
        for(let j = 2 ; j <i;j++)
        {
            if(i%j==0)
            {
                continue nextprime;
            }
        }
        alert("this is prime in congested function :-" + i);
    }
}

// showPrime(10);


//ain't congested 

function printPrime(n){
    for(let i = 2; i< n ;i++)
    {
        if(!isPrime(i))
        {
            continue;
        }
        console.log(i);

    }

}

function isPrime(n){

    for(let i = 2;i<n;i++)
    {
        if(n%i == 0)
        {
            return false;
        }

    }
    return true ;


    

}


// so functin can be created even if we dont intend to use them again
//cz they structure the code and make it readable 


/*

function name(parameters, delimited, by, comma) {

}
Values passed to a function as parameters are copied to its local variables.
A function may access outer variables. But it works only from inside out. The code outside of the function doesn’t see its local variables.
A function can return a value. If it doesn’t, then its result is undefined.
*/



printPrime(10);

