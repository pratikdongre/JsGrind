// Promise APi 
/*
There are 6 static methods in the promise class 
*/

// Promise.all 
/*
let say we want many promises to execute in parallel and wait  until all of them ready 
for instance  
donwload serveal urls in parallel and process the content once they are all done 

syntax 
let promise = Promise.all(iterable);

Promise.all takes an iterable (usually an array of promises ) and returns a new promise

the new Promise resolves when all listed promises are resolved and the array of their resutls become its result 

for instnace the promise.all below settles after 3 sec and then its result is an array [1 2 3 ]: 
*/

{
    Promise.all([
        new Promise(resolve => setTimeout(()=> resolve(1), 3000)),
        new Promise(resolve => setTimeout(()=> resolve(2), 2000)),
        new Promise(resolve => setTimeout(()=> resolve(3), 1000)),
    ]).then(alert);
    // 1 2 3 when promise are ready each promise contributes an array member    
}

/*
please note that the order of the resulting array members is the same as in its source promises 
even though the first promise takes the longest time to resolve its still the first array of results 

 a common trick is to map an array of job data into an array of promises and then wrap that into Promise.all 

 for instnace if we have an array of urls we can fetch them all like this 
*/

{
    let urls = [
        'https://api.github.com/users/illaken',
        'https://api.github.com/users/pratikdongre',
        'https://api.github.com/users/jeresig'
    ];

    // map every url to the promises of the fetch 
    let requests = urls.map(url => fetch(url));

    // promise.all waits until all jobs are resolved 
    Promise.all(requests).then(responses => responses.forEach(
        response => alert(`${response.url} : ${response.status}`)
    ));
}

/*
a bigger example with fetching user information for an array of github users by their names 
we could fetch an array of good by their ids 
*/

{
    let names = ['iliakan', 'remy','jeresig'];
    let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

    Promise.all(requests)
    .then(responses => {
        // all response are resolved immedeiatley
        for(let response of responses){
            alert(`${response.url} : ${response.status}`);
            // shows 200 for every ur l
        }

        return responses;
    })

    // map array of responses into an array of respone.json to read their content 
    .then(responses => Promise.all(responses.map(r => r.json())))

    //all json user are parsed : "user" is the array of them
    .then(users => users.forEach(user => alert(user.name)));
}

/*
if any of the promise is rejected the promise returned by Promise.all immediately rejects with that error 
*/
{
    Promise.all([
        new Promise((resolve,reject) => setTimeout(()=> resolve(1),1000)),
        new Promise((resolve,reject) => setTimeout(()=> resolve(new Error("ohoh")),2000)),
        new Promise((resolve,reject) => setTimeout(()=> resolve(3),3000))
    ]).catch(alert);// error ohoh
}

/*
here the second promise rejects in two seconds 
that leads to an immediate rejection of Promise.all so .catch executes the rejection error becomes the outcome of the entire promise.all 

in case of an error other promise are ignored 
if one promise reejcts promise.all immidealtey rejects , completing forgetting about the other ones in the list 
their results are ignored 

for eg if there are multiple fetch calls , like in the example above and one fails 
the other will still continue to execute but promise.all wont fetch them anymore 
they will probably settle but their result will be ignored 

promise.all does nothing to cancel them as there's no concept of cancellation in promises 

*/


/*
Promise.all(iterable) allows non promise regular values in iterable 
Normally promise.all(....) accepts an iterable (an array of promises) but if any of those objects is not a promise 
it passesd to the resultign array as is 
for ex 
*/
{
    Promise.all([
        new Promise((resolve, reject) => {
            setTimeout(() => resolve(1),1000)
        }),
        2,
        3
    ]).then(alert); // 1 2 3 
    // so we are able to pass ready values to PRomise.all where convinient 
}

// Promise.allSettled
// this is a new additon
// so old browser would need polyfills

// Promsie.all rejects as a whole if any promise  rejects 
// thats good all or nothing casese  when we need all results succeeded to proceed 

{
    Promise.all([
        fetch('scripts/index.html'),
        fetch('scripts/style.css'),
        fetch('scripts/user.json')
    ]).then(render); 
    // render method needs results of all fetches 
}

// Promise.allSettled jsuts waits for all promises to settle regardless of the reuslt 
// the result array has 
/*
{status : "fulfilled", value : result} for successful responses
{status : "rejected", value : error } for errors 
*/

/*
for example we liek to fetch the information abot multiple users 
even if one request fails we still intersted in others 
*/

{
    let urls = [
        'https://api.github.com/users/iliakan',
        'https://api.github.com/users/remy',
        'https://no-such-api',
    ];

    Promise.allSettled(urls.map(url=> fetch(url)))
    .then(results => { // *
        results.forEach((result,num) => {
            if(result.status == "fulfilled"){
                alert(`${urls[num]} : ${result.value.status}`);
            }
            if(result.status == "rejected")
            {
                alert(`${urls[num]} : ${result.reason}`);
            }
        });
    });
}

/*
the result in of above will be 
[
    {status : 'fulfilled', value : ...response},
    {status : 'fulfilled', value : ...response},
    {status : 'rejected' , reason : }
]

so for each promise we get stauts and value/error 

*/

// Polyfill 
// if the browser does not support Promise.allSettled its easy to polyfill 

{
    if(!Promise.allSettled){
        const rejectHandler = reason => ({ status : 'rejected', reason});
        const resolveHandler=  value => ({ status : 'fulfilled', value}); 

        Promise.allSettled = function (promise){
            const convertedPromises  = promise.map( p => Promise.resolve(p).then(resolveHandler, rejectHandler));
            return Promise.all(convertedPromises);
        };
    }
}

/*
in this code promise.map takes input values turn them into promises
(just in case a non promise was passed )
with  p=> Promise.resolve(p) and then add .then handler to everyone 

the handler turns a successful result value into {status : 'fulfilled', value}
and error reasons into 
{status : 'rejected', reason}
that execatly the format of Promise.allSettled


now we can use Promise.allSettled to get the result of all given promises even if some of them reject 
*/

/*
Promise.race 
similar to Promise.all but waits only for the first settled promise and gets it resutl or error 

let promise = Promise.race(iterable)
*/

{
    Promise.race([
        new Promise((resovle,reject) => setTimeout(()=> resolve(1),1000)),
        new Promise((resolve,reject) => setTimeout(()=> resolve(new Error("whoho")),2000)),
        new Promise((resolve,reject) => setTimeout(() => resolve(3),3000))
    ]).then(alert) // 1 
}

// the first promise here was fasted so it became the result 
// afther the first setlled promise "win the race " all further results/errors are ignored