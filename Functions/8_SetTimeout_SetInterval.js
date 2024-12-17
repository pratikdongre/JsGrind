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
    /* 
    let delay = 1000;
    
    let timerId = setTimeout(function request(){
        // .. send request
        // if(sending request failed )
    {
        delay *=2;
    }
    timerId = setTimeout(request,delay);
    },delay);

    */

}

{
    let delay = 1000;
    let retries = 0;
    let maxRetries = 5;
    

    let timerId = setTimeout(function request(){
        
        console.log(`retry number ${retries + 1 }`);

        let requestFailed = true;

        if(requestFailed)
        {
            retries++;
            if(retries <= maxRetries){
                delay *= 2;
                console.log("As the server was overloaded the delay is reached to ", delay);
                setTimeout(request,1000);
            }
            else {
                console.log("Max Retries Reached");
                
            }

        } else {
            console.log("Successfully completed");
        }

    
        
    },delay);
}

// and if the function that we are scheduling are cpu hungry then we can measure the time taken by the execution 
// and paln the next call sooner or later 

// Nested setTimeout allows to set the delay between the execution more precisely than setInterval 

// lets comapre two code fragments 
/*
{
    let i = 1;
    setInterval(function(){
        func(i++);
    },100);
}

{
    let i = 1;
    setTimeout(function run(){
        func(i++);
        setTimeout(run,100);
    },100);
}
*/

// the nested timeout gurantees the fixed delay because 
// the new call is planned at the end of th previous call 

// garbage collection and setInterval/setTimeout callback
// when a function is passed in set Interval/ setTimeout 
/*
an internal reference is created to it and saved in the scheduler 
it prevents the function from being garbage colelction even if there are no other reference to it 

setTimeout(function(){...},100);
the function stays in memoery until the scheduler call its // means until it gets executed 

for setInterval the function stays in memory until clearInterval is called 

theres a side effect 
a function reference the outer lex envrionemt so while it lives 
outer variables lives too 
they may take much more memory than the function itself 
so when we dont need the scheduled function anymore 
it better to cancel it even if its very small 

*/


/*
Zero delay setTimeout 

There a speical use case 
setTimeout(func,0) or just SetTimeout(func)

this schedules the execution of func as soon as possible 
but the scheudler will invoke it only after the currently executing script is complete 

so the function is scheduler to run right after the current script 


*/
setTimeout(()=> console.log("world"));
console.log("HEllo");
// the "world" timeout called into the calender after 0ms 
// but the scheudler will only check the calendar after the current scipt is complete 
// so hello is first and world after it 
// but if there are othe scheduler // they will come later as the "world" is scheudler into the (calendar (let say) at 0ms 


//there are also advanced browser related use cases of zero delay timeout 
// even loop microtasks and macrotasks

// zero delay is in face not zero (in a browser)

// in the browser there a limitation of how often nessted timers can run 
// the html living standard says after five nested timers the interval is forced to be at least 4 ms 

{
    // setTimeout call in it reschedules itself with zero delay 
    // each call remebeer the real time from the preiosu one in the times array 
    // what do the real dealys look like 

    let start = Date.now();
    let times = [];

    setTimeout(function run(){
        times.push(Date.now() - start ); // remever delay from the previous call 
        if(start + 100 < Date.now()) console.log(times);
        else setTimeout(run);
    });


}


/*
first timers run immedieaterly then start 4+ ms obligatory delay between invocations comes into play

the similar thing happens if we use setInterval instead of setTimeout 
setInterval(f) runs f few times with zero delay and afterwards with 4+ ms delays

for server side js the limitation does not exists 
and there exists other ways to scheudler an immeidate asynchronous job like
setImmediate for node.js  

*/


/*
summary 
methods setTimeout(func,delay,...args) and setInterval(fun,delay,...args)
allows us to run the func once / regularly after delay ms 

to cancel execution we should call clearTimeout/ clearInterval with the value return by setTimeout/setInterval

Nested setTimeout calls are a more flexible alternative to setInterval 
allowing us to set the time between exeuction more precisely 

zero delay scheudling with setTimeout(func,0) or setTimeout(func) is used to scheduler the call asap
but after the curent script is complete 

the browser limits the minimal delay for five or most nested calls of setTimeout or for setInterval to 4ms 

note 
that all scheduling methods do not guarantedd the exact delay 
the in browser timer may slow down for lot of reasons 
the cpu is overloaded 
the browser tab is in the background mode 
the laptop is on battery saving mode 

all this may increase the minimal timer resolutation to 300ms or even 1000ms depeding on the browser 



*/


// tasks 

{
    function printNumber(from,to)
    {
        setTimeout(function run(){
            if(from <= to)
            {
                console.log(from);
                from++;
                setTimeout(run,1000);
            }
        },1000);
    }

    // printNumber(1,10);
}


{
    function printNumber(from,to)
    {
        let timerId = setInterval(() =>{
            if(from <= to )
            {
                console.log(from);
                from++;
            }
            else {
                clearInterval(timerId);
            }
        },1000);
    }

    // printNumber(1,10);
    
}

{
    
function printNumber(from,to)
    {
        let timerId = setInterval(() =>{
            if(from <= to )
            {
                console.log(from);
                from++;
            }
            else {
                clearInterval(timerId);
            }
        },1000);
    }

    // printNumber(1,10);
    /* 
    there is intiall delay befor the first output 
    the function is called after 1000ms the first time 

    if we wnat the function to run immedialtely then we can add an additonal call to the function 
    */
}

{
    function printNumber(from,to)
    {
        let current = from;
        function go(){
            console.log(current);
            if(current == to )
            {
                clearInterval(timerId);
            }
            current++;
            
        }
        go(); // we call the function before the scheudler to skipp the first time delay 
        // doing when we reache the scheduelr our current has become 2 as we did ++ when we call go()
        let timerId = setInterval(go,1000);
    }

    // printNumber(1,10);
}

// tasks 2 

{
    // therest a setTimeout call scheudled 
    // then a heevy caluclation is run that takes more than 100 ms to finish 
    // when will the scheduelr function run 
    let i = 0;

    setTimeout(()=> console.log(i),100);

    for(let j = 0 ; j < 1000000; j++)
    {
        i++;
    }

    // the setTimeout will run affther current code is finshed 
    
}




