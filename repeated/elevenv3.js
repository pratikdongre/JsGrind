function doNothing(){

}

function doNothingv2(){
    return ;
}


console.log(doNothing());
console.log( doNothingv2());
let valueRecieved = doNothing();

// when function has no return or return is empty 
// the value we get is undefined

console.log(valueRecieved === undefined);


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


 */

/*
// naming a function should be like verb 
like get :- return a value
calc :- calc something
create :- create something 
check :- check something and retrun a boolean etc

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


function showPrime(n){
 nextprime : for(let i = 2 ; i <= n ;i++)
 {
    for(let j = 2; j< i;j++ )
    {
        if(i%j == 0 ){
            continue nextprime;
        }
    }
    alert("this is prime in congest function :- " + i);
 }
}

showPrime(10)


function checksForPrime(i)
{
for(let j = 2;j< i;j++)
{
    if(i%j ==0)
    {
        return false;
    }
    
}
return true;

}

function printsPrime(n)
{
    for(let i = 2;i <= n ;i++)
    {
        if(!checksForPrime(i)) continue;

        alert(`primes with help of two function` + i);
    }


}

printsPrime(10);