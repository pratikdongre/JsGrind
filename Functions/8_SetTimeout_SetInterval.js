// Scheduling setTimeout and setInterval 

/*
we may decide to execute a function not right now but at a certain time later 
that's called scheduling a call 

there are two methods for it 
setTimeout allows us to run a function once after the interval of time 

setInterval allows us to run a function repeatedly , starting after the interval of time ,then repeating continously at that interval 


*/

// setTimeout 
// let timerId = setTimeout(func| code, [delay],[arg1],[arg2], ...)

// params 
/*
func | code 
function or a string of code to execute usually thats a function 
a string of code can be passed / not recommened tho 

delay 
the delay before run , in milliseconds (1000ms = 1s) by default 0

args 
argument for the function 

*/

{
    function sayHi(){
        console.log("Helo");
    }
    setTimeout(sayHi,1000);
}

// with arguments 

{
    function sayHi(name,age){
        console.log("Hi " + name + age);
    }
    setTimeout(sayHi,1000,"pratik",78);
}

// note if the first argument is a string then js creates a function from it 

// setTimeout("console.log('hey')", 1000); cant do in new node js version

setTimeout(()=>{
console.log("dil");
},1000);


// pass a function dont run it 
// setTimeout(sayHi(),1000); wrong setTimeout expects a reference to a function 


// canceling with clearTimeout 
// a call to setTimeout returns a timer identifier timerID that we can use to cancel the execution 

// let timerId = setTimeout(...);
// clearTimeout(timerId);

let timerId = setTimeout(()=> console.log("Never happens"),1000);
console.log(timerId);
// alert(timerId); // 4 

clearTimeout(timerId);
console.log(timerId);
// alert(timerId); // 4

// in a browser it gives 4 because before we had three setTimeout 

// so in a browser timer identifier is a number 
// in a node js it returns a timer object with addtional methods 


// setInterval 
// the setInterval method has the same syntax 
// let timerId = setInterval(func|code , [delay],[arg1],[arg2])

// but unlike setTimeout it keeps running the function after the given interval of time 
// clearInterval to stop the timer 

// timerId = setInterval(()=> console.log("tick tick "),1000);

// setTimeout(()=> {
//     clearInterval(timerId); 
//     console.log("stop");
// },5000);

// time goes on while alert is shown 
// even if you dont do aything at alert the time is still ticking 
// and the next inerval would take less time that it has to take 


// Nested TImeout

// there are two ways of running something regualarly

// setInterval or 
// Nested Timeout

// timerId = setTimeout(()=> {console.log("shhh")},1000);

// timerId = setTimeout(function tick(){
//     console.log("Shhh");
//     timerId = setTimeout(tick,1000);
// },1000);

// the nested setTimeout is more flexible method than setInterval 
// this way the next call may be scheduled differently , depending on the result of the current one 


// for instance we need to write a service that sends a request to the server every 5 seconds asking for data 
// but in case the server is overloaded it should increase the intervale to 10 20 30 

{
    let delay = 1000;
    
    let timerId = setTimeout(function request(){
        // .. send request
        // if(sending request failed )
    {
        delay *=2;
    }
    timerId = setTimeout(request,delay);
    },delay);

}