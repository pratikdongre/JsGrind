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
    
    console.log(slow(1));
    console.log("Again :" + slow(1));
    
    console.log(slow(2));
    console.log("Again :" + slow(2));


}

