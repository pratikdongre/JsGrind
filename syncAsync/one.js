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