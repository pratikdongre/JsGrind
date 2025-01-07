// errro handling with promises 
/*
Promise chain are great at error handling 
when a promise rejects the contorl jumps to the closest rejection handler 

Url to fetch is wrong (no such site ) and .catch handles the error 
*/

{
    fetch('https://no-suc-server.blabla') // rejects 
    .then(response => response.json())
    .catch(err => console.log(err)) // TypeError : failed to fetch 
}

// as you can see the .catch() does not have to immediate 
/*
it may appear after one or maybe several .then 
or maybe everythign is all right with the site 
but the response is not valid JSOn. 
the easiest way to catch all error is to append .catch to the end of the chain 
*/

{
    fetch('scripts/user.json')
    .then(response => response.json())
    .then(user => fetch(`https://api.github.com/users/${user.name}`))
    .then(response => response.json())
    .then(githubUser => new Promise((resolve,reject) => {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "prom-avatar_examp";
        document.body.append(img);

        setTimeout(()=> {
            img.remove();
            resolve(githubUser);
        },3000);
    }))

    .catch(error => console.log(error.message));
}

// normally such .catch does not trigger at all 
/*
but if any of the promises above rejects (a netowrk problem or invalid json or whatever ) then would  catch it 

*/

// Implicit try..catch

/*
the code of a promise executor and promise handlers has an invisble try catch around it 
if an exception happens it gets caught and treated as a rejection
*/
{
    new Promise((resolve,reject)=>{
        throw new Error("whoops");
    }).catch(alert);
    // Error Whoops
}

{
    new Promise((resolve,reject) =>{
        reject(new Error("whoops"));
    }).catch(alert);
}

/*
the "invisible try..catch" around the executor automatically catches the error and turns it into rejected promise

this happens not only in the executor function but in the handler functionas well 
if we throw inside a .then handler 
that means a rejected promise so the control jumps to the nearest error handler 
*/

{
    new Promise((resolve,reject)=>{
        resolve("ok")
    }).then((result)=> {
        throw new Error("whoop");
    }).catch(alert);
}


// this happens for all error not just cause by the throw statement 
{
    new Promise((resolve,reject)=>{
        resolve("ok")
    }).then((result)=>{
        blabla(); // no such function 
    }).catch(alert); // reference error blabla is not defined 
}

// the final .catch not only catches explict rejection but also accidental errors in the handlers 


// Rethrowing 
/*
.catch at the end of the chain is similar to try...catch 
we may have as many .then handlers as we want and then use a single .catch at the end to handle errors in all of them 

in a regualr try..catch we can analyze the error and maybe rethrow if it cant be handled 
the samem thign is possible for promises 

if we throw inside .catch then the control goes to the next closest error handler 
if we handle the error and finish normally then it continues to the next closes successful .then handler 
*/

{
    new Promise((resolve,reject) => {
        throw new Error("oops");
    }).catch(function(error){
        alert("The error is handler,continues normally ");
    }).then(()=> alert("next successful handler runs "));
}

/*
.catch block finishes normally 
so the next successful .then handler is called  

the handler(*) catches the error and just cant handle it 
ie it only knows how to handle URI error 
so it throws it again 
*/

{
    new Promise((resolve,reject)=>{
        throw new Error("whooes");
    }).catch(function(error){ // *
        if(error instanceof URIError){
            // handle it 
        } else {
            alert("Cant handle such error");
            throw error;
            // throwing this or another error jumps to the next catch
        }
    }).then(function(){
        // does not run 
    }).catch(error => { // ** 
        alert("The unknown error has occured ", error);
        // does not return anything => execution goes the normal way 
    });

    // the execution jumps from the first .catch(*) to the next one ** 
}

// unhandled rejections 
/*
What happens when a error is not handled? 
let say we forgot to append .catch to the end of the chain 

*/
{
    new Promise(function (){
        noSuchFunction();
        // error here no such function
    }).then(()=>{
        // successful promise handler , one or more 
    }); // without catch at the end


}

/*
in case of an error 
the promise become rejected and the exeuction should jump to closest rejection handler
but there is none so the error gets stuck

in practice just like with regular unhandled errors in code 
it means that something has gone terribly wrong 

what happens when a regualr error occurs and is not caught by try..catch 
the script dies with a message in console 
a similar thing happens with unhandled promise rejections 

the js engine tracks such rejection and generates a global error in that case 
you can see it in the console if you run the ex above 
*/

// in the browse we can catch such errors using the event unhandledrejection

{
    window.addEventListener('unhandledrejection',function(event){
        // the event objet has two speical properties
        this.alert(event.promise); // [Object Promise] the promise that generated the error 
        this.alert(event.reason); // Error: whoops - the unhandled error object
    });

    new Promise(function(){
        throw new Error("whoops");
    }); // no catch to handle the error 
}

/*
the event is part of Html standard 
if an occurs and theres no .catch the unhandledrejection handle triggers 
and gets the event object with information about the error 

usually such errors are unrecoverable 
so our best way out is to inform the user about hte problem and probably report the incident

in non broswer env node .js there are other features to track unhandled errors 


*/

/*
Summary 
.catch handles errors in promises of all kinds be it reject() call 
.then also catches errors in the same manner if given the second argument which is the error handler 

we should place .catch exactly in places where we want to handle errors and know how to handle them 
the handler should analyze errors (custom errors classes help ) and rethrown unkknown ones 
(may be there are programming mistakes )

its okay not to use .catch at all if theres no way to recover from the error 

in any case we should have the unhandledrejection event handler 
(for browser and analogs for other env ) to track unhandled errors and inform the user 
(probably our server ) about them so that our app never dies 
*/


// task 
// Error in setTimeout
{
    new Promise(function (resolve,reject){
        setTimeout(()=> {
            throw new Error('HohogotanError');
        },1000);
    }).catch(alert);
}

// no error 
/*
theres an implict try...catch around the function code 
so all syncrhonous errors are handled 
but here the errors is generated not while the exeuctor is running but later 
so the promise cant handle it 
*/