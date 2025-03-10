// task 1 
// counter from 30 to 0
// count();
function count(){

    let i = 5;
function counter(i){
    if(!i){
        i--;
    }
}



let a =setInterval(function(){
    if(i !== 0 ){
        console.log(i--);
    } else {
        // return ;
        clearInterval(a);
    }
    
    
},1000);
}


// calculate time between setimeout call and inner funtion actually running 
// time();
function time(){
    
    let IntialTime = new Date();
    // let minutes = IntialTime.getSeconds();
    function greet(){
        let endTime = new Date();
        console.log("the");
        console.log(endTime - IntialTime);

        
    }
    setTimeout(greet,1000);
   
    // let endMinutes = endTime.getSeconds();

    // console.log(endMinutes - minutes);
    
 
}



// usingPerformance();
function usingPerformance(){
    let start = performance.now();

    setTimeout(function(){
        console.log("hey");
        let end = performance.now();
        console.log(end - start + 'ms') ;
        
        
    },1000);
}



// create a terminal clcok 
// hh : mm :: ss   

terminal();

function terminal(){
    let now = new Date();

    function clock(now){

        console.log(now.toLocaleTimeString());
        
    }

    setInterval(clock,1000);
}