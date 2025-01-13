/*

Promise handlers .then / .catch / .finally are always asynchronous 

even when a promise is immediately resolved 
the code on the lines below 
.then / .catch / .finally will still execute before these handlers 

*/
{
    let promise = Promise.resolve();

    promise.then(()=> alert('Promise done'));
    
    alert("code finished");
}

/*
code finsihed happens eariler thant promise done 

but promise is definetly done in the begining 
then why did then. trigger later 
*/

/*
microtask queue 

Asyncrhonous tasks need proper management 
for that ECMA standard specifies an internal queue PromiseJobs, more often reffered to as the 'microtasks queue'

as stated in the specification 
the queue is first in first out enquered first are run first 
execution of a task is initated only when nothing else is running 


or to put it more simplly
when a promise is ready its .then/catch/finally handlers are put into the queue 
they are not executed yet 
when js engine becomes free from the current code it takes tasks from the queue and executes it


promise.then(handler)    ----- handler enqueued

alert('code finshed')
script eexeuction finshed 
queue handler runs 


Promise handler always goes throguh this internal queue

*/


/*
soaking information 2 

if there chain with multiple handlers like 
.then/catch/finally then veryone one of them is executed asyncrhonously
that is , first gets queued then executed when the current code is complete and previsuly queed handler are ifnished 

what if the order matter for us 
how can we make code finished appear after promise done ? 
easy just put it into queue with .then
*/
{
    Promise.resolve()
    .then(() => alert('Promise done '))
    .then(()=> alert('code finsihed '));
    // now the order is as intended 
}

// unhandled rejection
/*
unhandledrejection event 
now we can see exactly how js fins out that htere was an unhandled rejection

an unhandled rejection occurs when a promise errro is not handeled at the end of microtask queeu
normally if we expect an error we add .catch to promise chain to handle it 
*/

{
    let promise = Promise.reject(new Error("promise Failed!"));
    promise.catch(err => alert('caught'));

    // does not run error handled 
    window.addEventListener('unhandledrejection',event => alert(event.reason));

}

// but if we forget to add .catch then after the microtask queue is empty 
// the engien trigger the event 

{
    let promise = Promise.reject(new Error("Promise failed"));

    // promse faield 
    window.addEventListener('unhandledrejection',event => alert(event.reason));
}

// what if we handle the error later 
{
    let promise = Promise.reject(new Error("Promise Failed"));
    setTimeout(() => promise.catch(err => alert('caught')),1000);

    // Error : Promise handled
    window.addEventListener('unhandledrejection' ,event => alert(event.reason));
}

// now if we run we will see Promise failed first  and then caught 
/*
if we did not know about hte microtask queue  we would wonder why did 
undhandlerejection handler run 
we did catach and handle the error 

but now we understand that unhandledrejection is generated when the microtask queue is complete 
the engine examines promises and if any   of them is in rejected state   then event trigger 


in the ex above .catch added by setTimeout also triggers but it does so later 
after unhandled rejection has already occured so it does not chane anything 

*/


/*
summary 
promise handling is always asynchronous as all promise actions pass through the internal 
"promise jobs" queue also called as microtask queue 
so .then /catch/finally hanlders are always called after the current code is finsihed 

if we need to guarnatee that a piece of code is exeuected after .then/catch/finally 
we can add it to promise chain .then call

in most js engines including browsers and node.js 
then concept of microstask is closesly tied with the event loop and macrotasks 


*/


