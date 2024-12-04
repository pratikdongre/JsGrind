// Date and time 
// new built in object Date
// it stores date , time and provide methods for date/time management

// for instance we can use it to store creation/modification times , to measure time, or just to print out the current date 

// creation 
// to create a new Date object call new Date() 

// new Date()
let now = new Date();
console.log(now);

let Jan01_1970 = new Date(0);
console.log(Jan01_1970);

let Jan02_1970 = new Date(24*3600*1000);
console.log(Jan02_1970);


// an integer number repsenting  the number of millisecond that has passed since the beginning of 1970 called timestamp

// timestamp is lightweight repsentation of date 
// we can create it using Date(timestamp) 
// convert the existing Date object to a timestamp using date.getTime() method 

let Dec31_1969 = new Date(-24*3600*1000);
console.log(Dec31_1969);

// new Date(datestring)
// if there is single argument and its a string then it is parsed automatically 
// the algo is the same as Date.parse uses 

let date = new Date("2024-12-26");
console.log(date);

// new Date(year,month, date,hours, minutes,seconds , ms)

// year should have 4 digits but can have two digits like 98 which would be 1998 
// month 0 for jan 11 for dec
// date day of month if absent then 1 is assumed

// if housr/minute/second/ms is absent they are assumed to be equal to 0

new Date(2024,12,4,0,0,0,);
new Date(2024,0,1); // same hours ,etc are by 0 defualt 

// the maximal precision is 1 ms (1/1000sec)

date = new Date(2024,12,4,23,59,59,567); // as month metioned 12 that is jan and next year is added
console.log("date is ",date);



// Access date components 

// there are methods to access the year, month and so on from the Date Object

// getFullyear()  get year 4 digits  and not getYear()
// getMonth() // 0 to 11 
// getDate() // 1 to 31 day 
// getHour() 
// getMinutes()
// getSeconds()
// getMilliseconds()

// getDay() // get day of week 0 for sunday and 6 saturday which can be changed 

// all the methods above returns the componentes relative to the local time zone

// there are also their UTC counteparts that return day,month, year and so on fro the timezone UTC+0
// getUTCFullYear(),getUTCMonth(), getUTCDate(), getUTCDay() 


{
    let date = new Date();
    console.log(date.getHours());
    console.log(date.getUTCHours());

    
}

// besides this 
// there are two special ones that does not have a UTC variant 
// getTime() :- rturn the timestamp for the date - a integer number of millisecond passed from the jan 1st 1970 UTC+0

// getTimezoneOFFset()
// return the difrerenc between UTC and local time zone in minutes

console.log(date.getTime());
console.log(new Date().getTimezoneOffset());

// setting date components

// the follwing methods allow to set date/time components 

/*
The follwing mmethod allow to set date/time components

setFullYear(year,[month],[date])
setMonth(month,[date])
setDate(date)
setHours(hour, [min] , [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec,[ms])
SetMilliseconds(ms)
setTime(milliseconds) (sets the whole date by milliseconds since jan 01 1970)

evyerone one of them except setTime() has a UTC variant 
setUTCHours()

some methods can set multiple componenets at once 
for example setHours() can set min,sec,ms also 


*/

let today = new Date();
today.setHours(0);

today.setHours(0,0,0,0);

console.log("today is ", today);



// autocorrection 
// the autocorrection is a very hand feautre of date objects 
// we can set out of range values and it will auto-adjust itself 

{
    let date = new Date(2013,0,32);
    console.log(date.toLocaleString());
    
}

{
    // let say bwe need to increase the daate "20 feb 2016" by 2 days 
    // now it mya be 2 march or 1 march depeing on leap year
    let date = new Date(2016,1,28);
    date.setDate(date.getDate() +2);
    console.log(date);
    
}


{
    // get hte date for "70 seconds after now "
    let date = new Date();
    console.log(date);

    date.setSeconds(date.getSeconds() + 70);
    console.log(date);
    
}

{
    // we can also get zero or even negative values 
    let date = new Date(2016,0,2); 

    console.log(date);
    
    date.setDate(1); 
    console.log(date); 
    date.setDate(0);
    console.log(date);
    
//2016-01-01T18:30:00.000Z
// 2015-12-31T18:30:00.000Z
// 2015-12-30T18:30:00.000Z
    
}


// Date to number,date diff

// when a date object is converted to number it becomes the timestamp same as date.getTime()
{
    let date = new Date();
    console.log(date); //2024-12-04T20:05:29.177Z
    console.log(+date); //1733342746497
    
}

 {
    // the important side effecet date can subtracted,
    // the resutl is theri difference in ms 
    // this can be use for time measurements

    let start = new Date(); // start measuring time 

    // do the job 
    for(let i = 0;i < 10000000 ; i++)
    {
        let doSomething = i*i*i;

    }
    let end = new Date();
    // end measuring time 
    // so the time takens to do the job is 

    console.log(`${end -start} ms`);
    
    
    
 }



 // date.now()

 // if we only want to measure time , we dont need Date object 
 // there is a special method Date.now() that returns the current timestamps

 // it is semantically equivalent to new Date.getTime() , but it does not created an intermeidate Ddate object
 // so its faster and does put pressure on garbage collection

 {
    /*
    used where peformance matter liek games or stuff
    */

    let start = Date.now();

    for(let i = 0 ;i< 1000000 ; i++)
    {
        let doSome = i*i*i;
    }
    let end = Date.now();

    console.log(end - start , "ms");
 }




 {
    // benchmarking 

    /*
    if we wnat a reliable benchmakr of cpu hungry function 
    let mesure two function that calculate the difference between two dates 
    which one is fater 
    such performace mesurements are often called benchmarks 
    
    */
 }

