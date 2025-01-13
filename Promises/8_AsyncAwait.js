/*
Async/Await
there a speical syntax to work with promises in a more comfortable fashino called async/await
it suprisinlyeasy to understand and use 

Async function 
start with the async keyword it can be placed before a function 

async function f(){
    return 1;
}

async before a function means one simple thing 
a function always return a promise 
other value are wrapped in a resolved promise automatically


*/

// the function returns a resolved promise with the reuslt of 1 

async function f(){
    return 1;
}
f().then(console.log);

// we could explictly return a promise which would be the same 
async function f(){
    return Promise.resolve(1);
}
f().then(console.log);

// so asnyc ensures that the function return a promise and wrapps non promise into it 
/*
we have await that works only inside async function 
*/


// Await
// works only inside async function 
// let value = await promise;
// the keyword await makes js wait until that promise settles and returns a result 

// here an ex with a promise that resolves in 1 sec 

{
    async function f(){
        let promise =  new Promise((resolve,reject) => {
            setTimeout(()=> resolve("done"),1000)
        });

        let result = await promise; // wait until "promise" resolves  // * 

        console.log(result); // Done
        
    }
    f();
}

/*

the function pauses at the line * and resumes when the promise settles with result becoming it result 
so the code show done in one sec 

emphasize this that 
await litterally suspends the function exeuction until the promise settles 
and tehn resume it whit the promise result 
that does not cost any cpu resources because the js engine can do other jobs in the mean time 
execute other scrips , handle events .etc 

its just a more elegant syntax of getting the promise result than promise.then 
its easier to read and write 

*/

// cant use await in regular function 
// if we try to use await in a non sync function there would be a syntax error 

{
    function f(){
        let promise = Promise.resolve();
        // let result = await promise; // syntax error 
    }

    // we may get this error if we forget to put async before a function as 
    // stated await only works inside an async function


}

/*
showAvatar() example from promise chaining 

1. we need to replae .then with await 
2. as we shoudl make the function with async 
*/

{
    async function showAvatar(){

        // read our JSON
        let response  = await fetch('scripts/user.json');
        let user = await response.json();


        // read github user 
        let githubResponse =  await fetch(`https://api.github.com/users/${user.name}`);
        let gitHubUser = await githubResponse.json();

        // show the avatar 
        let img = document.createElement('img');
        img.src = gitHubUser.avatar_url;
        img.className = "promise-av-ex";
        document.body.append(img);

        // wiat 3 sec 
        await new Promise((resolve,reject) => setTimeout(resolve,3000) );

        img.remove();


        return gitHubUser;



    }

    showAvatar();
}

/*
modern browser allow top levle await in modules 
ind modern browser await on top levle owrk just fine 
when we are inside a module 

for instnace 

// we assume that this code runs at top lvl , inside a module 
let response = await fetch ('scripts/user.json');
let user = await response.json();

console.log(user);

if we are not using modules or olderbrowser must be supported 
theres a    universal recipse 
wrapping it into an anonymous asyn function 

like 
(async () => {
    let response = await fetch ('scripts/user.json');
let user = await response.json();
    })
*/


// await accepts 'thenables'
/*
like promise.then await allows us to use thenable objects 
(thos with a callable then method )
the idea is that third party obejct may not be a promise but promise compatible 
if it supports .then 
thats enough to use it with await 

theenable class ; 
the await below accepts its instances 

*/

{
    class Thenable{
        constructor(num){
            this.num = num;
        }
        then (resolve,reject){
            alert(resolve);
            // resolve with this.num *2 after 1000ms
            setTimeout(() => resolve(this.num *2 ),1000); // * 
        }
    }

    async function f(){
        // waits for 1 sec then result becomes 2 
        let result = await new Thenable(1);
        alert("this is it ",result);
    }
    f();


}

/*
if await get a non promsie objet with .then 
it calls that method providing the bulti in function resolve, reject 
as rguments 
just as it doe for a regular Promise executor 
then await wait until one of them is called 
and then proeed with the result 

*/


// Async class methods 
// to declare an async class method , jsut prepend it with async 

{
    class Waiter{
        async wait(){
            return await Promise.resolve(1);
        }
    }

    new Waiter()
    .wait()
    .then(alert); // 1 
    // this is the same as result => alert(result)

    // the meaing is the same 
    // it ensures that the reutrned value is promised and enables await 
}


// Error handling 
// if a promise resolves normally 
/*
then await promise returns the result 
but in the case of a rejection it throws the error 
jsut if there were a throw statement 

*/

{
    async function f() {
        await Promise.reject(new Error("whoop"));
    }

    // is the smae as 

    async function f(){
        throw new Error("whoops");
    }
}

/*
in real situtation 
the promise may tak some time before it rejects 
in that case ther will be delay befoer awaits thorws an error 

we can catch the error using try...catch 
// the same way as a regular throw 

*/

{
    async function f(){
        try{
            let response = await fetch('/no-user-here');
            let user =  await response.json();
        } catch (err) {
            alert(err);
            // catches error both in fetch and response.json
        }
    }
    f();
}


// if we dont have try...catch then the promising generated by the call of the async function f() becomes 
// rejected we can append .catch  to handle it 

{
    async function f(){
        let reponse = await fetch ('http://no-usch-url');

    }

    f().catch(alert);
    // f becomes rejcted promsie 
    // Typeerror failed to fetch  *** 
}


/*
if we forgot to add .catch there 
then we get an unhandled promise error (viewable in console)

we can catch such error using a global unhandleRejection event handler 



*/


/*

async/await and promise .then/catch

when we use async/await we rarely need .then becaus await handles waiting for us 
and we can use regualr try...catch instead of .catch
that usually (not always ) more convienet 

// but at the top levle of the code 
// when we'r outside any async function 
we are syntatnically unable to use await 

so it normal practice to use .then/catch to handle the final result or failing -through error like in ***
*/

/*

async works well with promise.all 

when we need to wait for multiple promsies we can wrap them in promise.all and then wait 


*/

{
    // wiat ofr the array of result 

    let result = await Promise.all([
        fetch(url1),
        fetch(url2),
        // ... 
    ]);

    // in the case of ane error it propgates as usual , from failed promises to Promise.all
    // and then becomes an exception that we catch using try ...catch around the call 
}


/*

summayr 
the async keyword before a function has two effects 
1. Makes it always return a promise
2. Allows await to be used on it 

the awiat keyword before a promise makes js wait until that promise settles and then 
1. if its an eerror an execpetion is generated same as if throw error were called at that very place 
2. otherwise it return resutl 


together they provie a great way to write asynchrnous code that is easy to read and write 

with async/await we rerealy need to write promise.then/catch 
but we still should not forget that they are basedd on promises 
because someties in the outermost scope we have to use these methods 

also promise.all is nice when we arr waiting for many tasks simulatneously 
*/

// tasks 
// rewrite using async/await 

{
    function loadJson(url){
        return fetch(url)
        .then(response => {
            if(response.status == 200){
                return response.json(); 
            } else {
                throw new Error (response.status);
            }
        });
    }

    loadJson('https://javascript.info/no_such-user.json')
    .catch(alert);
}

// rewrite 
{
   async function loadJson(url) {
    
    let response = await fetch(url);

    if(response.status == 200){
        let json = await response.json();
        return json;
    }

    throw new Error(response.status);
   }
   loadJson('https://javascirpt.info.no-such-user.json')
   .catch(alert); // 404 
}

/*

teh function loadJson becomes async 
all .then inside are replaced with await 
we can return reponse.json() isntead of awaiting for it 
like 
if(response.status == 200 ){
return response.json()
 }
then outer code would have to await it for that promise to resolve 

the error thrown error loadjson is handled by .catch 
we cant use await loadJSOn(...) 
there because we are not in an async function 
*/

// reWErite rethrow with async/await 
// and get rid of the recursion in favor of loop in demoGithubUSer 
// with async/await  

{
    class HTTPError extends Error{
        constructor(response)
        {
            super(`${response.status} for ${response.url}`);
            this.name = "HTTpError";
            this.response= response;
        }
    }

    function loadJson(url) {
        return fetch(url)
        .then(response =>{
            if(response.status == 200){
                return response.json();
            } else {
                throw new HTTPError(response);
            }
        });
    }

    // ask for use name until github return a valid user 

    function demoGithubUSer(){
        let name = prompt("Enter a name ?","pratikdongre");

        return loadJson(`https://api.github.com/users/${name}`)
        .then(user => {
            console.log(`Full name ${user.name}`);
            return user ;
        })
        .catch(err => {
            if (err instanceof HTTPError && err.response.status == 404)
            {
                alert("no such user,please reneter");
                return demoGithubUSer();
            } else {
                throw err;
            }
        });
    }

    demoGithubUSer();
}

// in async/await 

{
    class HTTPError extends Error {
        constructor(response){
            super(`${response.status} for ${response.url}`);
            this.name = "HTTPError";
            this.response = response;
        }
    }

    async function loadJSon(url){
        let response = await fetch(url);
        if(response.statu == 200)
        {
            return response.json();
        } else {
            throw new HTTPError(response);
        }
    }


    // ask for a user name until github returns a valid user 
    async function demoGithubUSer (){
        let user ;
        while(true) {
            let name = prompt("enter a name ?","pratikdongre");

            try {
                user = await loadJSon(`https://api.github.com/users/${name}`);
                break; // no error ,exit loop
            } catch (err) {
                if(err instanceof HTTPError && err.response.status == 400)
                {
                    // loop continues after the alert 
                    alert("no such user,please reneter");
                } else {
                    throw err;
                    // unkown error , rethrow 
                }
            }
        }

        alert(`Full name : ${user.name}`);
        return user;
    }

    demoGithubUSer();
}


// call async from non-async

// we have regular function called f 
// how cann you call the async function wait() and use its result inside of f ? 

{
    async function wait(){
        await new Promise(resoleve => setTimeout(resolve,1000));
        return 10 ;
    }

    function f(){
        // what should we write her 
        // we need to call async wait() and to get 10 
        // remever , we cant use await outside the async 

        wait().then(result => alert(result));
    }

    f();
}