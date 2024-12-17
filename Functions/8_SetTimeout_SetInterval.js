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

clearTimeout(timerId);
console.log(timerId);
