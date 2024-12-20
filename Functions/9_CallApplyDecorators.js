// decorators and forwarding ,call / apply 

// javascript gives exceptional flexiblity when dealing with function 
// they can be passed around , used as objects 
// let see how to forward calls between them and decorates them.


// transparent caching 
/*
we have a function slow(x) which is cpu heavy but its results are stable 
in other words for the same x it always return the same result

if the function is called often we may want o cache remember the results to avoid spending extra time on recalculations

but instead of adding that functionality into slow()
we create a wrapper function that adds caching 


*/
{
    function slow(x) {
        // ther can be heavy cpu intensive job here 
        console.log("Called with ",x);
        return x ;
    }

    function cachingDecorator(func){
        let cache = new Map();

        return function(x){
            if(cache.has(x)) // if there such key in cache
            {
                return cache.get(x); // read the result from it 
            }

            let result = func(x); // otherwise call func

            cache.set(x,result); // and cache remember the result 
            return result;

        };
    }

    slow = cachingDecorator(slow);
    
    console.log(slow(1)); // slow(1) is cached and result is returned
    console.log("Again :" + slow(1)); // slow(1) result returned from cache
    
    console.log(slow(2)); // slow(2) is cached and result is returned
    console.log("Again :" + slow(2)); // slow(2) result returned from cache 

    // cachingDecorator is a decorator a special function that takes another function
    // and alter its behavior 

    // the idea is that we can call CachingDecorator for any function 
    /*
    and it will return the caching wrapper 
    we can have many funciton that could use such afeature 
    all we need is to apply cachingDecorator to it 

    by separating the caching from main code we also keep the main code simpler 

    the result of cachingDecorator(func) is a wrapper function(x) that wraps the func(x)
    into the logic

    */


}

/*
to summarize there are several benefits of using a separate cachingDecorator insteao of 
altering the slow itself

the cachingDecorator is reusable we can apply it to another function 
the caching logic is separate it did not increase the complexity of slow itself 
we can combine multiple decorators if needed 

*/


// using func.call for the context 
// the function above decorationCaching is not suitable for object methods 


{
    let worker = {
        someMethod(){
            return 1;
        },

        slow(x){
            // scary cpu heavy task here 
            console.log("Called with " , x );
            return x * this.someMethod();
        }

    }
    // function decoratorCaching

    function cachingDecorator(func){
        let cache = new Map();

        return function(x){
            if(cache.has(x)){
                return cache.get(x);
            }
            let result = func(x);

            cache.set(x,result);
            return result;
        };

    }

    console.log(worker.slow(1));

    worker.slow = cachingDecorator(worker.slow);
    // console.log(worker.slow(1)); // error cannot read property someMethod of undefined 


    /*
    let func = worker.slow
    func(1);
    so the wrapper passes the call to the original method , but without the context this. 
    hence the error

    the fix is 
    special builtin function method func.call(context,...args) 
    that allow to call a function explicitly setting this.

    */
    
    


}


{
    /*
        func.call(context, arg1, arg2, ...)
        it runs func providing the first argumnet as this and the next as the arguments 

        to put it simply 
        func(1,2,3);
        func.call(obj,1,2,3);

        they both call func with arguments 1 2 and 3 
        the only difference is that func.call also set this to obj 

    */

        function sayHi(){
            console.log(this.name);
        }

        let user = {name : "john"};
        let admin = {name : "Admin"};

        sayHi.call(user);
        sayHi.call(admin);

        

}


{
    // use call to call say with the given context and phrase 

    function say(phrase)
    {
        console.log(this.name + ": " + phrase);
    }

    let user = {name : "pratik"};

    say.call(user, "Hello");
}

{
    // we can use call in the wrapper to pass the context to the original function 
    let worker = {
        someMethod(){
            return 1 ;
        },

        slow(x){
            console.log("Called with ", x);
            return x * this.someMethod();
        }
    }

    function cachingDecorator(func){
        let cache = new Map();

        return function(x){
            if(cache.has(x)){
                return cache.get(x);
            }

            let result = func.call(worker,x);
            cache.set(x,result);
            return result;

        };

    }

    worker.slow = cachingDecorator(worker.slow);

    console.log(worker.slow(1));
    console.log(worker.slow(2));

    // now everything is fine 
    // to make it clear let see how this is passed along 
    // 1. after the decoration worker.slow is now the wrapper function(x) ....
    // 2. so when worker.slow(2) is executed the wrapper gets 2 as an argument and this = worker 
    // 3. inside the wrapper assuming the result is not yet cached 
    // func.call(this,x) passes the current this (= worker) and the current assignment =2  to the og method 

    

}


// Going multi argument 

// lets make cachingDecorator even more universal 
// till now it was only working only with single argument function 

// now how to cache multi argument

{
    let worker = {
        slow(min,max){
            return min + max ;
            // scary cpu hogger is assumed
        }
    };

    worker.slow = cachingDecorator(worker.slow);
    // should remever same-argument calls 

}

/*
previously a single argument x we could jsut cache.set(x,result) to save the result and 
cache.get(x) to retrieve it 
but now we need to remeber the result of comvination of arguments (min,max) 
the native map takes single value as the key 

there are many solution possible 
1 implemeent a new map like ds that is more veersaitle and allow multi keys 
2.use nested maps cachce.set(min) will be a map that stores the pair (max,result)
so we can results as cache.get(min).get(max)
3. join two values into one 
in our particular case we can just use a string "min,max" as the Map key.
for flexiblity we can allow to provide a hashing function for the decorator 
that know how to make one value from many


also we need to pass not just x but all argument in func.call 
function() can get a psuedo array of its arguemnts as arguments ,
so func.call(this,x) shoudl be replace with func.call(this,...arguments)
*/

{
    let worker = {
        slow(min,max){
            console.log("Called with ", min, max);
            return min + max;
        }
    };

    function cachingDecorator(func,hash){

        let cache = new Map();

        return function(){
            let key = hash(arguments); // * 
            if(cache.has(key)){
                return cache.get(key);
            }

            let result = func.call(this,...arguments); // **

            cache.set(key,result);
            return result;
        };


    }

    function hash(args){
        return args[0] + ',' + args[1];
    }

    worker.slow = cachingDecorator(worker.slow, hash);

    console.log(worker.slow(3,5));
    console.log("Again " + worker.slow(3,5));


}


/*
now it works with any number of arugment 
though the hash function would also need to be adjust to allow any number of arguemtns 

in the line * we call hash to create a single key from arguments 
here we juse simple joining function that turn arguemnt (3 , 5 )
more complex cases may require other hashing functions 

then ** use func.call(this,...arguments) to pass both the context and all arguments 
the wrapper got to the original function 
*/


// func.apply

// instead of func.call(this,...arguments) we could use func.apply(this, arguments)

// syntax func.apply(context.args)
// it runs the func setting this=context and ausing an array lik object args as the list of arguments 

// the only syntax difference call and apply is that call expect a list of argumentds 
// while apply takes an array-like object with them 

// so these two calls are almost equivalent 
// func.call(context,...args)
// func.apply(context,args)

// they perform the same call of func with given context and arguments 

// the spread syntax allows to pass iterable args as the list to call
// the apply accept only array-like args 

/*
and for objet that are both iterable and arraylike such as real array 
we can use any of them 
but apply will probably be fast 
beause most js engines internally optimze it better 

passing all arguments along with context to another function is called call forwarding 

let wrapper = function(){
return func.apply(this,arguments);
}

when an external code calls such wrapper it is indistinguishalbe from the call of the og func
*/


// borrowing method 

{
    function hash(args){
        return args[0] + "" + args[1];
    }
}

{
    // as of now it only works on two arguments 
    // iw would be better if it could glue any number of args 

    function hash(args){
        return args.join(); // args.join is not a function
    }
    // hash(1,2); 
    // we are calling hash(arguments) and arguments are object iterable and array like but not real array

}

{
    function hash(){
        return (arguments);
        // return (typeof arguments); // object 
        // return (Array.isArray(arguments)); / /false 
        // console.log(arguments instanceof Array); // false (arguments is not an instance of Array)

      
    }
    console.log(hash(1,2));
}

// still there is way to use array join 
{
    function hash(){
        return [].join.call(arguments);
        // [].join gets the join from empty array and apply it to further argument
        // .call to run in for the context of arguments object 
    }
    console.log(hash(1,2));

    // the trick is called method borrowing 
}