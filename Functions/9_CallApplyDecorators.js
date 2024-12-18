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
    // console.log(worker.slow(1));

}