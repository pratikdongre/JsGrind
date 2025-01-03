function loadScript(src){
    return new Promise(function(resolve,reject){
        let script = document.createElement('script');
        script.src = src; 
        script.onload = () => resolve(script);
        script.onerror = ()=> reject(new Error(`Script load error for ${src}`));

        document.head.append(script);
    });
}

// example loadscript 

loadScript('scripts/1.js')
.then(function(script){
    return loadScript('scripts/2.js');
})
.then(function(script){
    return loadScript('scripts/3.js')
})
.then(function(script){

    // use function declared in the scripts 
    // to show that they indeed loaded 

    one();
    two();
    three();
});

// the code can be shorter with arrow functions 

loadScript('scripts/script1.js')
.then(script => loadScript("scripts/2.js"))
.then(script => loadScript("scripts/3.js"))
.then(script => {
    //scripts are loaded we can use function declared here 
    one();
    two();
    three();
});

// here each loadScript call returns a promise and then next .then runs when it resolves 
/*
then it intiates the loading of the next script 
so the script are loaded one after another 

*/


/*
we can add more synchronous actions to the chain 
pleae note code is still falt it grows down , not the right 
there are no signs of the pyramid of doom
*/


// techinally wee could add .then direclty to each like this 
{
    loadScript('scripts/1.js').then(script1 => {
        loadScript('scripts/2.js').then(script2 => {
            loadScript('scripts/3.js').then(script3 => {
                // this function has access to variable  script1 script 2 script 3 
                one();
                two();
                three();
            });
        });
    });
}

// the code does 
/*
load 3 scripts in sequence 
but it grows to the right so we have same problem as with callbacks 


people who started use promises sometime dont know about chaing 
so they write it this wya 
generally chaining is preferred 

it is said that to grows to the right 
when we have nested 

it is said that to grows to the down 
when we chainged promises 

somemitmes it ok to write .then direclty because the nested function has access to the outer scope 
in the above example the most nested callback has access to all the variables script1 ,script2 ,script3
but thans an excpetion rather than a rule 

*/

{
    /*
        thenables 
        to be precise a handler may return not exactly a prommise 
        but so called thenable object 
        an arbitrary object that has a method .then 
        it will be treated the same way as promise 

        the idea is 3rd party lib may implement promise compatible objects of their own 
        they can have an extended set of methods but also compatible with native promises 
        because they implement .then 
    */

    class Thenable {
        constructor(num){
            this.num = num;
        }
        then (resolve,reject){
            console.log(resolve);
            // function (){ native code }
            // resolve with this.num * 2 after 1 sec 
            setTimeout(()=> resolve(this.num*2),1000); // **
        }
    }

    new Promise(resolve => resolve(1))
        .then(result =>{
            return new Thenable(result); // *
        })
        .then(console.log); // after 1 sec 



    /*

    js checks the object returned by the .then handler in line *
    if it has callable method named then then it calls 
    the method providing native function resolve,reject as argumenetes
    (similar to an executor) and waits until one of them is called 
    in the exmaple 
    resolve(2) is called after 1 sec 

    then the result is passed further down the chain 

    this feature allows us to integrate custom objects with promise chains without having 
    to inherit from Promise 
    */
}

// Bigger example : fetch 
/*
in frontend programming promises are often  used for a network request 
we will use fetch method to load the information about hte user from the remote server 
it has a lot of optional parameters 

*/

{
    // let promise = fetch(url);
    /*
    this makes a network request to the url and returns a promise 
    the promise resolves with a response object when the remote server responsds with headers but before 
    */
}
