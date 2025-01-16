// import _ from "lodash";
const _ = require("lodash");
// currying 

/*
Currying is an advanced tehnc of working with function 
it used not only in js but in other langague as well 

currying is a tranformation of a function that translates a function from callback as f(a,b,c)
into callable as f(a)(b)(c)

curryind does call a function it just transfrom it 

*/

// we will create a helper function curry(f) that perforns currying for a two argument f 
/*
curry(f) for two argument f(a,b) translates it into a function that runs as f(a)(b)

*/

{
    function curry(f)
    {
        return function(a){
            return function(b)
            {
                return f(a,b);
            };
        };
    }

    // usage 
    function sum(a,b){
        return a + b;
    }

    let curreidSum = curry(sum);

    console.log(curreidSum(1)(2));
    
}

/*
as you can see the implementation is straightforward it jsut two wrapper 
the result of curry(func) is wrapper function(a)
when it is called like curreidSum(1) the argu is saved in the lex env in a and a new wrapper is returend function(b)
then this wrapper is called with 2 as an arg and it passes the call to the sum(a,b) as f is sum
*/


/*
more advanced implemention of curring such as ._curry from lodash lib returns a wrapper that allows a function to be called both noramlly and partially

*/
{
    function sum(a,b)
    {
        return a + b ;
    }

    let curreidSum  = _.curry(sum);
    // using _.curry from lodash lib 

    console.log(curreidSum(1,2)); // 3 still callable normally 
    console.log(curreidSum(1)(2)); // 3 called partially
    
}

// currying ? what for ? 
/*
for instnace we have loggin function log(date,importance, message) that formats and output the information 
in real projects such function have many useful featuers like sending logs over the netwrok 

*/
{
    function log(date,importance,message){
        console.log(`[${date.getHours()} : ${date.getMinutes()}] [${importance}] ${message}`);
        
    }


// lets curry it 

log = _.curry(log);

/*
or we could do 
function curry(log)
{
return function(a){
return function (b){
return function log(a,b,c);
};
};
};



log(new Date(),"DEBUG","some debug");

*/
// after that logs work noramlly 

log(new Date(), "DEBUG","some debug");// log(a,b,c)

// but also works in the curreid form 
log(new Date()) ("DEBUG") ("some debug");


// now we can easily make a convienet funciton for current logs 

let logNow = log(new Date());
// logNow will be partial of log with fixed first argument 

logNow("INFO", "messsage");
{
    let debugNow = logNow("DEBUG");
    debugNow("message na umri sima ho ");
}

}


/*
now logNow is log with fixed first argument 
partially applied function or partial 

we can go further and make a convenince function for current debugs logs 

*/

/*

1. so we did lose anythign after currying log is still callable normally 
2. we can easily generate partial fuction such as for todays logs 

*/

// advanced curry implemnetation 
// for multi argument function that 
{
    function curry(func){
        return function Curried(...args){
            if (args.length >= func.length){
                return func.apply(this.args);
            } else {
                return function (...args2){
                    return Curried.apply(this,args.concat(args2));
                }
            }
        };
        
    }

    // usage examples 
    function sum(a,b,c){
        return a + b + c ;
    }
    let curriedSUm = carry(sum);

    console.log(curriedSUm(1,2,3)); // still callable normally 
    console.log(curriedSUm(1)(2,3)); // 6, currying of 1 arg 
    console.log(curriedSUm(1)(2)(3)); // full curring 


    /*
    THE RESULT OF CURRY(func) call is the wrapper curreid that looks like this 

    */

    function curried(...args){
        if(args.length >= func.length){
            return func.apply(this,args);
        } else{
            return function (...args){
                return curried.apply(this,args.concat(args2));
            }
        }
    }

    /*
    when we run it there are two if exeuction branches

    1. if passes args count is the smae or more than the og function 
    then jsut pass the call to it using func.apply

    2. otherwise get a parital we dont call func just yet instead another wrapper is return that will re apply 
    curreid providgn previous argumetns togehters with the new ones 
    */
    
    
    
}


/*
then if we call it again we get tiehra new aprital or finally the result 

fixed lenght functions only 
the currying requires the function to hae a fixed nubmer of arguments 

a function that uses rest paraments sucha s f(...args)
cant be curreind this way 

currying should convert sum(a,b,c) into sum(a)(b)(c)

// but most implementaiotn of currying in js are advanced 
they also keep the fucntion callable in the multi argument variant 
*/


/*
currying is a transfrom that makes f(a,b,c) callablees as f(a)(b)(c)
js implmenetation usually both keep the fucntion callabk normally and 
return the partial if the arguments count is not enough


cyrring allows us to easily get partials 
as seeing hte loggin example 
after curring the three argument universal function
log(date,importance,message) give us parital wehn call with one arugment 
like log(date)
or two arugment 
log(date,importance)

*/