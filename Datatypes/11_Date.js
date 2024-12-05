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
    // let say bwe need to increase the daate "28 feb 2016" by 2 days 
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
    function print(name){
        let dear = name;
        return dear;

    }



    function GuestName(name){
        let dear = print(name);
        console.log(`hello ${dear}`);
        
    }

    GuestName("Alice");
 }


 {  
    function functionTwo(){
        console.log("hey ya");
    }

    function functionOne(fn){
     fn();   
    }


    functionOne(functionTwo);
 }



 {
    {
        // benchmarking 
    
        /*
        if we wnat a reliable benchmakr of cpu hungry function 
        let mesure two function that calculate the difference between two dates 
        which one is fater 
        such performace mesurements are often called benchmarks 

        // we have date1 and date2, which function faster returns their difference in ms?
        function diffSubtract(date1, date2) {
        return date2 - date1;
            }

            // or
            function diffGetTime(date1, date2) {
            return date2.getTime() - date1.getTime();
            }
        
        */

        

        
     }

     function diffSubtract(date1,date2) {
        return date2 - date1;
     }

     function diffGetTime(date1,date2){
        return date2.getTime() - date1.getTime();
     }



     function bench(f){
        let date1 = new Date(0);
        let date2 = new Date();

        let start = Date.now();

        for(let i =0;i<=100000;i++) {
            f(date1,date2);
        }
        let end =  Date.now();
        return end - start;
     }

     console.log(`the time taken by diffSbutract is ${bench(diffSubtract)} ms `);
     console.log(`the time taken by diffGetTime is ${bench(diffGetTime)} ms`);

  /*
     getTime is so much faster because there no type converstion its much easier for engines to optimize 
     we got diffGetime is 3ms and diffS
     this is still not accurate benchmarks
     
     because it could be like imagine 
     if at the time of running first ie bench(diffSubtract) the cpu was doing something in parallel
     and it was taking resources 
     and by the time running secon ie bench(diffGettime) thre cpu got free 

     so in result we can say at first we had less resources thant the second 
     which can lead to wrong results 

     so for more reliable benchmark
     the whole pack of benchmarks should be rerun mutliple times 

     
  */

 }


 {
    // more reliable benchmark

    function diffSubtract(date1,date2){
        return date2 - date1;
    }

    function diffGetTime(date1,date2){
        return date2 - date1;
    }

    function bench(f){
        let date1 = new Date(0);
        let date2 = new Date();

        let start = Date.now();
        for(let i =0 ;i <= 100000;i++)
        {
            f(date1,date2);
        }
        return Date.now() - start;

    }

    let time1 = 0;
    let time2 = 0;

    // after heating up // added for "heating up" prior to the main loop
    bench(diffSubtract); 
    bench(diffGetTime);
    // heated 

    for(let i =0 ;i<=10 ; i++){
        time1 +=bench(diffSubtract);
        time2 +=bench(diffGetTime);

    }

    console.log(`the time taken by diffSubtract is ${time1} ms `);
    console.log(`the time taken by diffGettime is ${time2} ms `);

    // before heating up 111ms and 108ms 


 }

 


 {
    // Date.parse from a string 
    // the method Date.parse(str) can read a date from a string 
    // the string methods should be YYYY-MM-DDTHH:mm:ss.sssZ
    /*
    where YYYY-MM-DD is date : year-monht-day
    the char T is used as delimter 
    HH:mm:ss.sss is hour-minute-seconds-milliseconds
    Z denotes timezone in the fromat +-hh:mm 
    a single letter z means UTC+0
    */

    /*
    shorter variants are also possible 
    like YYYY-MM-DD or YYYY-MM or YYYY
    
    the call to Date.parse(str) parse the string in the given format and returns the timestamp 
    if the format is invalid return NaN
    */
    let ms = Date.parse("2024-12-05T15:25:20.417+05:30");
    console.log(ms);
    
    // we can create a new Date object from timestamp
    let date = new Date(Date.parse("2024-12-26T00:00:00.0+05:30"));
     let date1 = new Date("2024-12-26T00:00:00.0+05:30");

    console.log(date);
    console.log(date1);

    
  }



  /*
    Date and Time in js are represented with Date object 
     we can't create only date or only time 
     date object always carry both 

     month arre coutned from zero jan is zeroth month and dec is 11th 
     daysof week in getDay() are also counted from zero zero is sunday

     Date autocorrect itself when out of range componnetes are set 
     good for adding/subtracting  days/monht/hours 

     dates can be subtracted , giving their differnce in milliseconds 
     that becuas a date becomes timstamp when converted to number 

     use Date.now() to get the current timestamp 

     js timestamps are in milliseconds 

     what if need more precision there are more environments 
     for instance browser has performance.now()
     that gives a number of milliseconds from the start of page loading with micrsosecond precision (3 digits after the point)

        alert(`Loading started ${performance.now()}ms ago`);
// Something like: "Loading started 34731.26000000001ms ago"
// .26 is microseconds (260 microseconds)
// more than 3 digits after the decimal point are precision errors, only the first 3 


apart from this 
nodejs has microtime module 
  */


{
    // tasks 1 
    let date = new Date(2012,1,20,3,12);
    let date1 = new Date("2012-02-20T03:12");
    console.log(date.toLocaleString());
    console.log(date1); // got utc 
    console.log(date1.toString()); // got utc 

    
}

{
    // tasks 2 
    let date = new Date(2012,0,1);
    function getWeekDay(date){
        let short = 0;
        
                switch (date.getDay())
                {
                    case 0 : short = "SU";
                    break;
                    case 1 : short = "MO";
                    break;
                    case 2 : short = "Tu";

                }
            
        
            return short;
    }

    
    function getWeekDay1(date){
        let arrofDays = ["SU", "Mo", "TU", "WE", "Th" , "Fr" ,"Sa"];
        return arrofDays[date.getDay()];
    }
     let europeanDate = new Date(2024, 11, 3); // December 3, 2024 (Tuesday)


    function getLocalDate(europeanDate){
        let objofDate = {
            1 : "Mo",
            2 : "Tu",
            3 : "Wd",
            4 : "Th",
            5 : "fr",
            6 : "sa",
            7 : "su",
        }
        return objofDate[europeanDate.getDay()];
    }
    console.log(getLocalDate(europeanDate));
    
}



{
    // tasks // which day of month was many days ago 
    let date = new Date(2015,0,2);
    // console.log(date);
    
    let isodate = date.toISOString();
    // console.log(isodate);
    

    date = new Date(isodate);
    // console.log(date);
    
    

    function getDateAge(date,days){
        let tempDate = date;
        tempDate.setDate(tempDate.getDate()-days);
         let day = tempDate.getDate();
         
        return tempDate;
    }

    // console.log(getDateAge(date,1));
    // console.log(getDateAge(date,2));
    // console.log(getDateAge(date,2));


    
}


{
    // tasks 
    let date = new Date(2015,0,2);

    // console.log(date); // 2015-01-01T18:30:00.000Z

    date = new Date(Date.UTC(2015,0,2));
    // console.log(date); //2015-01-02T00:00:00.000Z
    
    

    function getDateAge(date,days){
        let Ldate = new Date(date);
        Ldate.setDate(Ldate.getDate()-days);
        return Ldate.getDate();
    }
    
    console.log(getDateAge(date,1));
    console.log(getDateAge(date,2));

    console.log(getDateAge(date,365));


}

{
    // tasks  last day of month 

    function getLastDayOfMonth(year,month){
        let date = new Date(year,month+1,0);
        console.log(date.getDate());
        // dates start with 1 but we have given zero and it will readjust 
        
    }

    getLastDayOfMonth(2012,0);
    getLastDayOfMonth(2012,1);
    getLastDayOfMonth(2013,1);

}


{
    // tasks 
    // how many seconds have passed today
    function getSecondsToday(){
        let date = new Date();
        console.log(date);
        
        // console.log(date.getHours()); 
        
        console.log(date.getHours() * 3600 +date.getSeconds() + date.getMinutes()*60);

        
        
        


        
    }
    getSecondsToday();

    function getSecondsToday1(){
        let now = new Date(); // this is exact time 

        // we will get to the starting 
        let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        let diff = now - today; // ms difference 
        console.log(Math.round(diff/1000));
        
    }   

    getSecondsToday1();
}


{
    // tasks How many seconds till tomorrow

    function getSecondsToTomorrow(){
        let date = new Date();

        let nextDay = new Date(date.getFullYear(), date.getMonth(), date.getDate()+1,);
        console.log(date.toLocaleString());
        console.log(nextDay.toLocaleString());

        let diff = nextDay - date;

        console.log(Math.round(diff/(1000*60*60)));
        

        
    }

    getSecondsToTomorrow();

    function getSecondsToTomorrow1(){
        let now = new Date();
        let hour = now.getHours();
        let minute = now.getMinutes();
        let seconds = now.getSeconds();

        let totalSecondsHappened = (hour * 60 + minute) * 60 + seconds;
        // console.log(totalSecondsHappened / (60*60));
        
        let totalSecondInDay =  24*  60 * 60 ;
        console.log(Math.round((totalSecondInDay- totalSecondsHappened)/(3600)));
    }
    getSecondsToTomorrow1();
}


{

    // tasks formate the relative date 

    
    function formatDate(date){
        
    let diff = new Date() - date;
    // console.log(diff);

    if(diff < 1000){
        return "rigth now";
    }

    let sec = Math.round(diff / 1000) ; 

    if(sec < 60){
        return `${sec} sec ago`;
    }

    let min = Math.floor(diff / (1000*60));
    if(min < 60){
        return `${min} min ago`;

    }


    

    let d = date;
    d= [
        '0' + d.getDate(),
      
        '0' + (d.getMonth()+1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(comp => comp.slice(-2));

    return d.slice(0,3).join('.') + ' ' + d.slice(3).join(':');

    }
    console.log(formatDate(new Date(new Date - 1 )));
    console.log(    formatDate(new Date(new Date - 30*1000 )));
    console.log(formatDate(new Date(new Date -  5*60*1000 )));
    console.log(    formatDate(new Date(new Date - 86400 * 1000)));
    

}


{
    function formatDate(date){

        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let seconds = date.getSeconds();

        let diffMs = new Date() - date;
        let diffSec = Math.floor(diffMs / 1000);
        let diffMin = Math.floor(diffSec / 60);
        let diffHour = Math.floor(diffMin / 60 );

        year = year.toString().slice(-2);
        month = month < 10 ? "0" + month : month;
        day = day < 10 ? "0" + day : day;
        hour = hour < 10 ? "0" + hour : hour ;
        minute = minute < 10 ? "0" + minute : minute;

        if(diffSec < 1){
            return "right now";
        }
        else if (diffMin < 1)
        {
            return `${diffSec} sec ago`;
        }
        else if (diffHour < 1 )
        {
            return `${diffMin} min ago`;
        }
        else {
            return `${day}.${month}.${year} ${hour}:${minute}`;
        }
    }

    console.log(formatDate(new Date(new Date - 1 )));
    console.log(    formatDate(new Date(new Date - 30*1000 )));
    console.log(formatDate(new Date(new Date -  5*60*1000 )));
    console.log(    formatDate(new Date(new Date - 86400 * 1000))); 
}