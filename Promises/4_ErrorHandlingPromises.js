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
