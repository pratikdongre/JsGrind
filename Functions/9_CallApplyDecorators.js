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

/*

we borrow a join method from a regular array [].join and use [].join.call to run it in the context of arguments .
why does it work 
because the internal algorithm of the native method arr.join(glue) is very simple 

let glue be the first argument or if no arugments then a comma 
let result be an empty string 
append this[0] to result
Let result be an empty string.
Append this[0] to result.
Append glue and this[1].
Append glue and this[2].
…Do so until this.length items are glued.
Return result.

so techincally it takes this and joins this[0], this[1] etc together 
its intentionally written in a way that allows any array-like this 
that why its works with this = arguments 

*/

// decorators and function properties 
/*
it is generally safe to replace a function with a decorated one except for one little thing 
if the og function had properties on it like func.calledCount or whatever 
then the decorated one will not provide them 
because that is a wrapper 
so one needs to be careful if one uses them 

if the example above slow funciton had any properties on it 
then cachingDecorator(slow) is a wrapper without them 

some deorators may provide their own properties 
eg decorator may count how many times a function was invoked and how much time it took
expose this information via wrapper properites 

there exists a way to create a decorators that keeps access to function properties 
but this requires a speical provxy object to wrap a function


*/


/*

summary 
decorator is a wrapper around a function that alter its behavior 
the main job is still carried out by a function

decorators can be seen as features or aspectrs that can be added to a function
we can add one or many
and all this wihtout changing its code 

to implement a cachingDecorator 
func.call(context,arg1,arg2) - call  func with context and arguments
func.apply(context,args) - calls func passing context as this and array - like args into list of arguments

the generic call fowarding is usually done with apply
let wrapper = {
return original.apply(this,arguments)
};

we saw example of method borrowing when we take a method from an object and call it in the context of another object 
it is common to take array methods and apply them to arguments 

the alternative is to use rest parameters  object that gives real array

*/

// tasks 1
// spy decorator 
// Create a decorator spy(func) that should return a wrapper that saves all calls to function in its calls property.

// Every call is saved as an array of arguments.
{
    function work(a,b){
        console.log(a + b);
    }

    function spy(func){

        function wrapper(...args){
            wrapper.calls.push(args);
            return func.apply(this,args);
        }

        wrapper.calls = [];
        return wrapper; 
    }

    work = spy(work);
    
    work(1,2);
    work(4,5);

    for(let args of work.calls){
        console.log("calls " + args.join());
    }
}


// tasks 2 
// delaying Decorator 
// create a decorator delay(f,ms) that delays each call of f by ms 

{
    function f(x){
        console.log(x);
    }

    function delay(f,ms){

        // let value =  setTimeout(f,ms);
        // return f ;

        return function(){
            setTimeout(()=> f.apply(this,arguments),ms);
        }
    }


    let f1000 = delay(f,1000);
    let f1500 = delay(f,1500);

    // f1000("test");
    // f1500("test");
}

// task 3 
// debounce decorator 
/*
the result of debounce(f,ms) decorator is a wrapper that suspends calls to f until theres ms seconds 
of inactivity(no calls, cooldown period) then invokes f once with the latest arguments

in other words debounce is like a secretary  that accepts phone calls and wait until theres ms seconds of quiet 
and only then it transfers the latest call infomration to the boss (call the actual f)

for instance we had a function f and replaced it with f = debounce(f,1000);

then if the wrapped function is called at 0 ms, 200ms , 500ms, and then there are no calls 
then the actual f is called once at 1500ms 
that is after the cooldown period of 1000ms from the last call
which wil lget the arguemtn of the last call other calls are ignored



*/
{
    // let f = _.debounce(alert,1000);

    // f("a");
    // setTimeout(()=> f("b"),200);
    // setTimeout(()=> f("c"),500);
    // debounc function waits 1000ms afther last call and then run f("c")
}

/*
Now a practical example. Let’s say, the user types something,
 and we’d like to send a request to the server when the input is finished.

There’s no point in sending the request for every character typed. 
Instead we’d like to wait, and then process the whole result.

In a web-browser, we can setup an event handler – 
a function that’s called on every change of an input field.
 Normally, an event handler is called very often, for every typed key. 
 But if we debounce it by 1000ms, 
then it will be only called once, after 1000ms after the last input.

So, debounce is a great way to process a sequence of events: 
be it a sequence of key presses, mouse movements or something else.

It waits the given time after the last call, and then runs its function,
 that can process the result.


*/

{
    function f(val){
        console.log(val);
    }
   
    function debounce(f,ms){
        let timeout; 
        return function (){
            clearTimeout(timeout);
            timeout = setTimeout(()=> f.call(this,arguments),ms);

        }
    }


    f = debounce(f,1000);

    
      f("a");
    setTimeout(()=> f("b"),200);
    setTimeout(()=> f("c"),500);

    // a call to debounce returns a wrapper 
    // when called it schedules the og function call after given ms 
    // cancels the previous such timeout
}

// task 4 
// throttle decorator 

/*
Create a “throttling” decorator throttle(f, ms) – that returns a wrapper.

When it’s called multiple times, it passes the call to f at maximum once per ms milliseconds.

Compared to the debounce decorator, the behavior is completely different:

debounce runs the function once after the “cooldown” period.
 Good for processing the final result.
throttle runs it not more often than given ms time.
 Good for regular updates that shouldn’t be very often.

In other words, throttle is like a secretary that accepts phone calls, 
but bothers the boss (calls the actual f) not more often than once per ms milliseconds.

Let’s check the real-life application to better understand that requirement and to see where it comes from.

For instance, we want to track mouse movements.

In a browser we can setup a function to run at every mouse movement 
and get the pointer location as it moves.
 During an active mouse usage, this function usually runs very frequently,
  can be something like 100 times per second (every 10 ms).
  We’d like to update some information on the web-page when the pointer moves.

…But updating function update() is too heavy to do it on every micro-movement. 
There is also no sense in updating more often than once per 100ms.

So we’ll wrap it into the decorator: use throttle(update, 100) 
as the function to run on each mouse move instead of the original update().
The decorator will be called often, but forward the call to update() at maximum once per 100ms.

Visually, it will look like this:

For the first mouse movement the decorated variant immediately passes the call to update.
That’s important, the user sees our reaction to their move immediately.
Then as the mouse moves on, until 100ms nothing happens. The decorated variant ignores calls.
At the end of 100ms – one more update happens with the last coordinates.
Then, finally, the mouse stops somewhere.
The decorated variant waits until 100ms expire and then runs update with last coordinates. 
So, quite important, the final mouse coordinates are processed.
*/

{
    function f(a){
        console.log(a);
    }

    function throttle(f,ms){
       let isThrottled = false,
       savedArgs,
       savedThis;

       function wrapper(){
        if(isThrottled){
            savedArgs = arguments;
            savedThis = this;
            return ;
        }
        isThrottled = true;
        f.apply(this,arguments);

        setTimeout(function(){
            isThrottled = false;
            if(savedArgs){
                wrapper.apply(savedThis,savedArgs);
                savedArgs = savedThis = null;
            }

        },ms);
       }

       return wrapper;

    }

    // f1000 passes calls to f at maximum once per 1000 ms 
    let f1000 = throttle(f,1000);

    f1000(1); // shows 1 
    f1000(2); // thorttling 1000ms not out yet 
    f1000(3); // throttling 1000ms not out yet 

    // when 1000ms time out 
    // output 3 , intermediate value 2 was ignored  

}