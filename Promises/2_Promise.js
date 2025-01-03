/*
imagine you are top singer and fans ask day and night for upcoming song 
to get some relief you promise to send it to them whens its published 
you give yours fans a list 
they can fill in their addreses 
so that when the sonsg  becomes avaialbe all subscribed parties instantly recieve it 
and if something goes wrong say a fire in studio 
so that you cant publish the song they wil lstill be notified 

everyone is happy you because people dont crowd you anmore 
and fans they wont miss the song 

1. a producing code that does something and takes time 
for instance some code that loads the data over a network :- thats a singer 

2. a consuming code that wnats the reuslt of the producing code once its ready
many functions may need that result 
these are the fans 

3. A promise is a speical js object that links the producing code and the consuming code together 
in terms of analogy from above it subscription list 

the producing code takes whaterver time it needs to produce the promise result 
and the promise makes the result available to all of the subscribed code when its ready

the analogy isnt terribly accurate because js promises are more complex than a simple subscription
list 
they have additonal featuers and limitation 


*/
{
    let promise = new Promise (function(resolve,reject){
        // exeuctor (the producing code, singer )
    });

    /*
    the function passed to the new Promise is called the executor 
    when new Promise is created the executor 
    when new Promise is created the executor runs automatically 
    it contains the producing code which should eventually produce the result 
    in term of analogy the executor is the singer 

    its arguments resolve and reject are callbacks provided by js itself 
    our code is only inside the executor 

    when the executor obtain the result be it soon or late does not matter 
    it should call one of these callbacks 
    resolve(value) if the job is finished successfully with result value 
    reject(errro) if error has occured error is the error object 

    so to summarize the executor runs automatically and attempts to perform a job 
    when it is finshed with the attempt it calls resolve if it was successful or rejetct it there was an errro 

    the promise object reutnred by the new Promise constructor has these internal properties 
    state -- initially "pending" then changes to either fullfileld when resolve is called 
    or rejectected if reject is called 

    result intially undefined then changes to value when resolve(value) is called or errro 
    when reject(errro) is called 

    so the executor eventually moves promise to one of these states 

    new Promise(executor) 
    state : "pending"
    result : undefined 

    resolve value state : 'fulfilled',
                  result : value

    reject error state : 'rejected'
                result : error

    */

    

}

/*
        Promise constructor and a simple executor function with producing code that takes time 
*/

{
    let promise = new Promise(function (resolve,object){
        // the function is exeuctor automatically when the promise is constructed 

        // after 1 sec signal that the obj is done with the result "done"
        setTimeout(()=> resolve("done"),1000);
    });

    /*
    we can see two things running 
    1. the executor is called automatically and immediately (by new Promise)
    2. the exector recieves two argument resolve and reject 
    these function are predefined by the js engine so we dont need to create them 
    we should only call one of them when ready 

    after one second of processing the executor calls resolve("done") to produce the reuslt 
    this chnages the state of the promise object 

    new Promise(executor)  
        state : 'pending'
        result : undefined

    resolve("done")
        state : "fulfilled"
        result : "done"
    example of sucessful job completion     
    */

    promise = new Promise(function (resolve,reject){
        // after 1 second signal that the job is finished with an error 
        setTimeout(() => reject(new Error("whoops")),1000);
    });

    promise.then (
        result=> console.log(result),
        error => console.log("caught errror ",error.message)
        
        
    );

    /*
    the call to reject() moves the promise object to rejected state 

    new Promise(executor)
        state : "pending"
        result : undefined
    
    reject(error)
        state : "rejected"
        result : error 

    */
}

/*
to summarize the executor should perform a job (usually something that takes time )
and then call reoslve or reject to change the state of the corresponding promise object 

a promise that is either resolved or rejected is called settled 
as opposed to intially pending promise 

*/

{
    // there can be onlya single result or an error 
    // the executor should call only one resoolve or one reject 
    // any state change is final 
    /// all further calls of resolve and reject are ignored 

    let promise = new Promise(function (resolve,reject){
        resolve("done");
        reject(new Error(".."));// ignored 
        setTimeout(()=>resolve("--")); ignored 
    });

    // the idea is that a job done by teh exeuctor may have only one result or an error 
    // also resolve/reject expect only one arugment (or none ) will ignroe additioanl arguemtns 

}

/*
Reject with errro objects 
in case somthign goes wrong the executor should call reject 
that can be done with any type of arugmetn (just like resolve)
but it recommend use Error Objects (or objects that inherit from Error objet )

Immedaitely calling resolve/reject 
an executor usually does something asynchronously and calls resolve/reject  after some time 
but it does not have to 
we can also call resolve/objet immediately 

*/

{
    let promise = new Promise(function(resolve,reject){
       // not taking our time to do the job 
        resolve("123"); // immediately give the result : 123
    });

    // for instnace this might happen when we start to do a job but then see that everything has already been completed and cached
    // thats ok to to immediately have a resolved promise 
}

/*
the state and result are internal 
the propertie state and result of the promise object are internal 
we cant direcly access them 
we can use the methods .then 
.catch
.finally  for that 
*/

// Consumer : then ,catch 
/*
a promise object serves as a link between the executor (the produign code or singer)
and the consuming function ("fans") which will recive the reuslt or errro 
cosnuming function can be regsiterd (subscribed) using the methods .then and .catch

then 
the most impo fundamental one is .then 

*/
{
    // promise.then(
    //     function(result) {/* handle a successful result */},
    //     function(error) {/* handle an errro*/ }
    // );
    // the first argument of .then is a function that runs when the promise is resolved and receives the result 
    // the second argument of .then is a function that runs when the promise is rejectd nd recived the errro 

}

// eg to successfully resolved promise 

{    let work;
     work = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("done"), 1000);
    });
    
    // Use the promise
    work.then(
        result => console.log(result), // shows "done" after 1 second
        error => console.log(error)   // does not run
    );
}

// the first function was executed 
// in the case of a rejection , the  second one 

{
    let promise = new Promise(function(resolve,reject){
        setTimeout(()=> reject(new Error("whoopie")),1000);
    });
    // rejects runs the sceond funcntion in .then

    promise.then (
        result => console.log(result), // does not run 
        error => console.log(error.name , " is ", error.message)
        // show Errro is whoopie after second 
        
    );
}

// if we are instearest only in successful completions then we can provide only one function argumeent to .then

{
    let promise = new Promise(resolve => {
        setTimeout(()=> resolve("done duna done"),1000);
    });

    promise.then(console.log);
}

// catch 
/*
if we are only interested in errros  then we can use null as the first argument .then(null,errorHnadlingFUnction)
or use can use .catch(errorHandlingfunction) which is exaclty the same 

*/
{
    let promise = new Promise((resolve,reject) =>{
        setTimeout(()=> reject(new Error("whoops")),1000);
    });

    // .catch(f) is the same as callign .then(null,f)
    promise.catch(console.log);
}

// Cleanup Finally
/*
just liek theres finally  caluse in regualr try {...} catch {..} thers finally in promises
the call .finally(f) is similar to .then(f,f) in the sense that f runs always when the promsie is settled 
be it resolve or reject 

the idea of finally is to set up a handler for performing cleanup / finalizing afterh the previous ops 
are complete 

eg stopping laoding function , closing no longer needed connections etc 

think of it as a prty finisher 
no matter was aparty good or bad how many friends were in it we still need (or at least should)
do a cleanup after it 

*/
{
    let promise = new Promise((resolve,reject)=>{
        // do someting 
        // this is not print ing anything be cause in exeuctor this very plae that we are wrtting 
        // have not called resolve or reject 
    }). finally (()=> console.log("stop laoding indiactor"))
    .then (result => console.log( "result "),
            error => console.log("error")
            
    );
}

{
    let promise = new Promise((resolve, reject) => {
        // Simulate an asynchronous operation
        setTimeout(() => resolve("Success!"), 1000); // Resolves after 1 second
    }).finally(() => console.log("stop loading indicator"))
      .then(
          result => console.log("result:", result),  // Handles success
          error => console.log("error:", error)     // Handles rejection
      );
    
}

/*
finally(f) is not exactly an alias of .then(f,f) though 

important difference 
1. a finally handler has no arguments 
in finally we dont know wehter the promise is succesful or not 
in this our task is to perform general finalizing procedures 
as we see above 
the finally handler has not argumetns 
and the promise outcome is handled by next handler 

2. a finally handler passes through the result or errror to the sutiable handler 
for instnace  the result is passes through finally to then 
*/
{
    new Promise((resolve,object)=>{
        setTimeout(()=> resolve("value"),1000);
    }) 
        .finally(()=> console.log("promise ready"))
        .then((result)=> console.log(result));
}


/*
the value returned by the first promise is passed through finally to the next then 

as finally is not meant to process a promise result 
as said its a place to do generic cleanup no matter what the outcome was 


*/

// example of an error and how its passed through finally to catch 

{
    new Promise((resolve,reject)=>{
        throw new Error("ohoh");
    })
    .finally(()=> console.log("promise ready"))
    .catch((err)=> console.log(err.name));
}

/*
3. a finally hnadler also should retunr anything if it does the returned value is silently ignored 
the only exeception to this rule is when a finally handler throws an error then this error goes to next handler 
instead of any previous outcome 

to summarize 
a finally handler does not get the outcome of previous handler (it has no arguments )
the outcome is passed through instead to the next suitalbe handler 

if a finally handler returns something its ignored 

wehn a finally throws an error then the executtion goes to the nearrest error handler 

these feature are helpful and make things work just the right way 
if we use finally how its supposed to be used 
for generic cleanup procedures 


*/

/*
we can attach handler to settled promises 
if a promise is pending .then/catch/promises  handler waits for its outcome 
sometimes it might be that a promise is already settled when we add handler to it 
in that case these handler run immediately 

*/

{
    let promise = new Promise(resolve =>  resolve("done"));
    // the promise becomes resolved immediately upon creation

    promise.then(console.log);
}

/*
note that this makes proimse more powerful thant real life subscription list 
if the singer has already releaed theri song and then a person signs up  on the subscription list 
tehey probably wont recived that song 
subscription must be done prior to the event 

Promises are more flexible we can add handlers any time 
if the result is already there they just executed 
*/

// example Loadscript
/*
how promiess van help us write asyncrhonous code 
we got LoadScript function for loading a script from the previosu chapter 


*/

// callback based variant just to remind 
{
    function loadScript(src,callback){
        let  script = document.createElement("script");
        script.src = src;

        script.onload = () => callback(null,script);
        script.onerror = ()=> callback(new Error (`Script load errro for ${src}`));

        document.head.append(script);
    }
}

// rewrite in Promises 
/*
the new function loadScript will not require callback instead it will create and return a promise object 
that resolves when loading is complete 
the outercode can add handlers (subscription handler) to using using .then
*/

{
    function loadScript(src){
        return new Promise(function(resolve,reject){
            let script = document.createElement('script');
            script.src = src; 
            script.onload = () => resolve(script);
            script.onerror = ()=> reject(new Error(`Script load error for ${src}`));

            document.head.append(script);
        });
    }

    
        let promise  = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
        promise.then(
            script => console.log(`${script.src} is loaded`),
            error => console.log(`Error : -${error.message}`)      
        );
    
        promise.then(script => console.log("another handler"));
    
}

/*
we can immedeitaly see few benefits over tha callback based pattern 

promises allows us to do things in the natural order 
first we run loadScript(script) and .then we write what to do with the result 

we can call .then on a promise as many times as we want 
each time we are adding a new fan a new subscribing function to the sbuscription list 


callbacks 
we must have a callback function at our disposal when calling loadscript(script,callback)
in other words we must know what to do with the result before loadScript is called

there can be only one callback

so promises give us better code and flexibility 


*/


// tasks 
// re resovle a problem 
{
    let promise = new Promise(function (resolve,reject){
        resolve(1);

        setTimeout(()=> resolve(2),1000);
    });

    promise.then(console.log);
}

// teh second call to resolve is ignored because only the first call of reject/resovle is taken into account 
// further call is ignored 



// task 2 
// Delya with proimse 
// the built in function setTimeout uses callback 
// create a proimse based alternative 

// the function delay(ms) should return a promise 
// that proimse should resolve after ms so that we can add .then to it 

{
    function delay(ms){
        return new Promise((resolve) => {
            setTimeout(resolve,ms);
        });
    }

     delay(3000).then(()=> console.log(`runs after 3 seconds `));
}

// reslve is called without arguments 
// we done return any value from delays, jsut ensure the delay 

// task 3 
// Animated circle with promise
// Rewrite the showCircle function in the solution of the task Animated circle with callback 
// so that it returns a promise instead of accepting a callback.

{
    // showCircle(150,150,100).then(div => {
    //     div.classList.add('message-ball');
    //     div.append("hello world");
    // });
}