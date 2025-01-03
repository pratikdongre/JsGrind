// Promise chaining 
/*
we have a sequence of asynchronous tasks to be performed one after another 
for instnace loadin,script how can we do it 

promise provide a couple of recipes to do that 

*/

{
    new Promise(function(resolve,reject){
        setTimeout(()=> resolve(1),1000);

    }).then (function(result){
        console.log(result);
        return result * 2;
    }).then(function(result){
        console.log(result);
        return result*2;
        
    }).then(function(result){
        console.log(result);
        return result * 2;
        
    })
}


/*
the idea is that the result  is passed through the chain of .then handlers 
here is the flow 
1. the intial proimse resolves in 1 sec 
2. then the .then handler is called which in turn creates a new promise (resolved with 2 values )
3. the next then gets the result of the previous ones process it (double) and passes it to the next 
handler 
4. so on 

as the result is passed along the chain of the handlers we 
can see the sequene of console.log() calls 1 - 2 - 4

new Promise

resolve(1)

.then 

return 2 

.then 

return 4

.then 
*/


/*
the whole things works beecaue every call to a .then returns a new promise 
so taht we call the next .then on it 

when hnadler return a value it vecomes the result of that promise so that next .then is called iwth it 

a classic newbie error : techincally we call add also many .then to a single proimse 
this is not chaining 

*/

{
    let promise = new Promise(function(resolve,reject){
        setTimeout(()=> resolve(1),1000);
    });

    promise.then(function(result){
        console.log(result);
        return result * 2;
    });

    promise.then(function(result){
        console.log(result);
        return result *2 ;
        
    });

    promise.then(function(result){
        console.log(result);
        return result * 2;
    });

}

/*
what we did in here is just adding several handlers ton one promise 
they dont pass the result ot each other instead 
htye process it independly 

new Promise

resolve(1)

.then .then .then 

all .then on the same promise get the same result 
the result of that proimse 
so all gets same result 1 


in practice wee rarely need multiple handlers for one promise (multipel handlers wont pass the result to next handler )
chaining is used much more often 
*/

// returning promises 
// a handler used in .then(handler) may create and return a promise 
// in that case further handlers wait until it settles and then get it result 

{
    new Promise(function(resolve, reject) {

        setTimeout(() => resolve(1), 1000);
      
      }).then(function(result) {
      
        // alert(result); // 1
        console.log(result);
        
      
        return new Promise((resolve, reject) => { // (*)
          setTimeout(() => resolve(result * 2), 1000);
        });
      
      }).then(function(result) { // (**)
      
        // alert(result); // 2
        console.log(result);
        
      
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve(result * 2), 1000);
        });
      
      }).then(function(result) {
      
        // alert(result); // 4
        console.log(result);
        
      
      });
}

// here the first .then shows 1 and retrun new Promise() inthe line * 
/*
after one second it resolves and the argument of resolve  here its result * 2 
is passed on to the handler of the second .then 
that handler is the line ** it shows 2 and does the same thing 

so the outpt is the same as previous example 
*/

/*


{
    new Promise(function (resolve, reject) {
        setTimeout(() => resolve(1), 1000);
    })
        .then((result) => console.log(result)) // Should log 1
        .then(() => console.log(2))           // Should log 2
        .then(() => console.log(4));          // Should log 4
    
}

*/

// returning promises allows us to build chains of asyncrhonus actions 

