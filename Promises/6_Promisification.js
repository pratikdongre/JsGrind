/*
Promisification is a long word for a simple transformation 
its the conversion ofa function that accepts a callback into a function that retuns a promise 

such transformation are often required in real life as man function and lib are callback -based 
but promises are more convienient so it makes sense to promisify them 

fo instance we have loadScript(src,callback) 
*/

{
    function loadScript(src,callback) {
        let script =  document.createElement('script');
        script.src = src;

        script.onload = () => callback (null,script);
        script.onerror = () => callback(new Error (`Script load error for ${src}`));

        document.head.append(script);
    }
    // usage 
    // loadscript ('path/script/.js' , (err,script) => {...})
}

/*
the function loads a script with the given src, and then calls callback(err) in case of en error 
or callback(null,script) in case of successfl loading 

lets pormifisy it 

we'll make a new function loadScriptPromise(src) that does the same (loads the script ) but returns  a promise instead of a callback 
in toher words 
we pass it only src(no callback) and gets a promise in return that resolves with a script when load is successful and rejects with the error otherwise 


*/

{
    let loadScriptPromise  = function(src)
    {
        return new Promise((resolve,reject) => {
            loadScript(src,(err,script) => {
                if(err) reject(err);
                    else resolve (script);
            });
        });
    };

    // / usage 
    // loadscriptPRomise('path/script.js').then(...)

    /*
        loadScriptPromise('path/to/script.js')
    .then(script => {
        console.log('Script loaded successfully:', script);
    })
    .catch(err => {
        console.error('Failed to load script:', err);
    });
    */


}

/*
 as we can see the new function is a wrapper around the original loadScript function 
 it calls it providing its own callback that translates to promise resolve/reject

 now loadScriptPromise fits well in promise-based 
 if we like promises more than callbacks  we shall use that 

 in practice we may need to promisfy more than one function so it makes sense to use a helper 

 we call it Promisify(f) it accepts a to-promisify function f and returns a wrapper function 
*/

{
    function promisify(f){
        return function(...args) {
            // returns a wrapper function **
            return new Promise((resolve,reject) => {
                function callback(err,result){ // our custom callback for f ** 
                    if(err) {
                        reject(err);
                    }
                    else {
                        resolve(result);
                    }
                }
                args.push(callback);// append our callback to the end of f arugments 

                f.call(this, ...args); // call the og functions 
            });
        };
    }

    // usage 
    let loadSciptPromise = promisify(loadScript);
    loadSciptPromise('path/to/script').then(script => {
        console.log("script loading succesfully", script);
        
    }).catch(err => {
        console.log("got an error" );
        
    })
}

/*
a code may look a bit complex , but its essentially the same as that we wrote above while pormisifying the function 


a call to promisify(f) returns a wrapper around f() 
that wrapper returns a promise and forwards the call to the original f tracking the result in the custom callback 

here promsify assumes that the original function expects a callback with exactly two arguments (err,result)

then our custom callback is in exactly the right format and promisfy works great 

but what if the original f expects a callback with more arguments callback (err,res1 ,res2 , ... ) ? 
we can improve our helper 

when called as Promisify(f) it should work with similar to version above 
when called as promisify(f,true) it should return the promise that resolves with the array of callback result 
thatx exactly for callback with many arguments 
*/

{
    // promisify(f,true) to get array of result 
    function promisify(f,manyArgs = false){
        return function(...args) {
            return new Promise((resolve,reject) => {
                function callback(err,...results) {
                    // our custom callback for f 
                    if(err){
                        reject(err);
                    } else {
                        resolve(manyArgs ? results : results[0]);
                    }
                }
                args.push(callback);

                f.call(this,...args);
            });
        };
    }

    // usage 
    f = promisify(f,true);
    // f(...).then(arrayOfresult => ...,err => ... )
}

/*
as you can see it same as above but resolve is called with only one or all arguemtns  depending 
on whether manyaArgs is truthy 

for more exotic callbacks fromats lke those without err at all 
callback(result) we can promisfy such function manually wihtout using the helper 

there are also moduels with a bit more flexible promisifcation functions 
es6promisiy 
in node.js there bult in util.promisify function for that 

promisifcation is a great approach especially when use with asynt/await 
but not a total replaement for callbacks 

remever a promise may have only one result but a callback may techincall be called multiples time 

so promisification s only meant for function that the call callback once 
futher call be ignored 
*/
