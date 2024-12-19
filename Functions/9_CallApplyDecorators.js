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