// synchronous code - when code process line by line 
// asynchronous code - when async code process simulatenously and whoever is answer is ready it gets shown 

// many time our code depends on third party server so thats when we use asynchrnous behaviour 
// because we dont know when will the third party server would return with answer to us 


// setTimeout,
// setIntervla,
// promises,
// async,await
// fetch
// axios
// xmlHTTprequest
// first();
function first(){
    console.log("Hye");
    // setTimeout(callback, timeinms)
    setTimeout(function(){
        console.log("hey Pratik");
         
    },1000);
    
    console.log("hi ");

}





// js is single threaded one process at a time 
// synchronouse code goes to main stack 
// async code goes to side stack
// if main stack is empty the event loop check that if main stack is emtpy and side stack asyn code is ready or not 

// second();
function second(){
    console.log("hy");
 setTimeout(function(){
        console.log("rati");
        
    },0);

    console.log("he");
    
    // se ratik which is async code even with 0 we have set to run the acode after 
    // 
    
}


// callbacks 

// promises,fetch,axios ,setTimeout,setInterval, is what you use to send the code
// then catch,callbacks , async await is what you use to get the answer 

// callbacks are function which are used in async code to run the code inside callback after the completion



// promises 

// promiseLearn();
function promiseLearn(){

    let ans = new Promise((res,rej)=>{
        if(true) return res();
        else return rej();
    });
    
    ans
    .then(function(){
        console.log("resolved");
        
    })
    .catch(function(){
        console.log("not resolved");
        
    })
    

}

// PromiseLearn2();

function PromiseLearn2(){
    let ans = new Promise((res,rej)=>{
       let n = Math.floor(Math.random()*10);

       if(n<5){
        return res(n);
       } else rej(n);
       
     })

     ans.then(function(n){
        console.log("below" + n );
        
     })
     .catch((n)=>{
        console.log("Above"+ n);
        
     })
}


// promiseLearn3();

function promiseLearn3(){
    var ans = new Promise((res,rej)=>{
        return res("sabse pehle ghar par aoo");
    })

    var p2 = ans.then(function(data){
        console.log(data);
        return new Promise(function(res,rej){
            return res("gate kholo,gate lagoa");
        })
        
    })

    p2.then(function(data){
        console.log(data);
        
    })
}



// promiseLearn4();

function promiseLearn4(){
    var ans = new Promise((res,rej)=>{
        return res("sabse pehle ghar par aoo");
    })

    ans.then(function(data){
        console.log(data);
        return new Promise(function(res,rej){
            return res("gate kholo,gate lagoa");
        })
        
    })

    .then(function(data){
        console.log(data);
        
    })
}



// FetchThen();

function FetchThen(){
    fetch('https://randomuser.me/api/')
    .then(function(raw){
        console.log(raw);
        
        return raw.json();
    })
    .then ((data)=>{
        console.log(data);
        
    })
}


AsynAwait();

async function AsynAwait(){
    let raw = await fetch('https://randomuser.me/api/')
    let data = await raw.json();

    
    console.log(data);
    
}



// to sum up 
// callbacks:-  problem:- callback hell/difficult debugging solution:- Promises
// Promises :- problem:- .then()chaining  can get along  solution :- asyncwait
// asynawait :- best readability and error handling  

// We started with callbacks, but they led to callback hell.
// Promises solved this with .then() chaining, but could still get lengthy.
// AsyncAwait made async code as easy to read as synchronous code!