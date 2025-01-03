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
    full response is donwloaded 

    to read the full response we should call the method response.text() 
    it returns a promise that resolves when a full text is downloaded from the remote user with that text as a result 


    */
   fetch('scripts/1.js')
   // .then runs when the remote server responds
   .then(function(response){
    // response.text() returns a new promise that resolves with full response text 
    // when it loads 
    return response.text();
   })
   .then(function(text){
    // ... and heres the content of the remote file 
    console.log("where",text);
    // {"name":'pratik', 'isAdmin' : true}
    
   })
}


/*
the response object returned from fetch also includes the method response.json() that reads 
the remote data and parses it to JSON

we will use arrow functions for breivty 
*/

{
    // same as above but the response.json() parses the remote content as JSON
    fetch('scripts/user.json')
    .then(response => response.json())
    .then(user => console.log(user.name));
}

// lets do somehting with the loaded user
// make one more requrst to github load the user profile and show the avatar 
{
    // make a request for user.json
    fetch('scripts/user.json')
    // load it as json
    .then(response=> response.json())
    // make a request to github 
    .then(user => fetch(`https://api.github.com/users/${user.name}`))
    // load the response as json 
    .then(response => response.json())
    // show the avatar image 
    // (github.avatar_url) for 3 sec 
    .then(githubUser => {
        let img = document.createElement("img");
        img.src = githubUser.avatar_url;
        img.className = 'promise-avatar-example';
        document.body.append(img);

        setTimeout(()=> img.remove(),3000); // *
    });
}

/*
the code works 
however the potential problem in it 
a typical errro 
at * line 
how can we do something after the avatar has finishe showing and gets removed 
for instnace we like to show a form for editing that user or something else 
as of now theres no way 

to make the chain extendable we need to return a promise that resolves when avatar finsihes showing 
*/
{
    fetch('scripts/user.json')
    .then(response => response.json())
    .then(user => fetch(`https://api.github.com/users/${user.name}`))
    .then(response => response.json())
    .then(githubUser => new Promise(function (resolve,reject){ // *
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = 'promise-av-ex';
        document.body.append(img);

        setTimeout(()=> {
            img.remove();
            resolve(githubUser); // **
        },3000);
    }))

    // trigger after 3 sec 
    .then(githubUser => console.log(`Finished showing ${githubUser.name}`));

}


/*
.then handler in line * now returns new Promise 
that becomes setteld only after the call of resolve(githubUser) in setTimeout ** 
the next .then in the chain will wait for that 

as a good practice asynchronous actiosn shouw always return a proimse 
that make it possibel to plan actions after it 
even if we dont plan to extend the chain nwo we may need it later 
*/

// finally we can spit the code into resuable functions 

{
    function loadJson(url){
        return fetch(url)
        .then(response => response.json());
    }

    function loadGithubUser(name){
        return loadJson(`https://api.github.com/users/${name}`);
    }

    function showAvatar(githubUser){
        return new Promise(function(resolve,reject){
            let img =document.createElement('img');
            img.src= githubUser.avatar_url;
            img.className = 'promi-av-ex';
            document.body.append(img);

            setTimeout(()=>{
                img.remove();
                resolve(githubUser);
            },3000);
        });
    }

    // use them 
    loadJson('scripts/user.json')
    .then(user => loadGithubUser(user.name))
    .then(showAvatar)
    .then(githubUser => alert(`finished showing ${githubUser.name}`));
}

// summary 
/*

if a .then or catch/finally does not matter handlers returns a proimse 
the rest of the chain waits until it settles 
when it does its result (or errro) is passed further 

the call of .then(handler) always return a promise 
state : "pending"
result : undefined

if handler ends with 

return value 
state : 'fulfilled'
result : value 

or throw error 
that promsie settes with 
state : 'rejected'
result : error 

return promise 
with the result of new Promise 
*/

// tasks  1
//promise then versus catch 

{
    // promise.then(f1).catch(f2);
}

{
    // promise.then(f1,f2);
}

// not equal 
/*
if an error happens in f1 
then it is handled by .catch 

but not in promise.then(f1,f2);
that because an error is passed donw the chain and in the second code thers no chain below f1 

in other words .then passes results/error to the next .then/catch
so in the first example we have catch 
but in the second ex there is not 
so error is not handled
*/

