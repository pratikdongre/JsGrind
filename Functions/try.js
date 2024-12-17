// // 


// {
//     let delay = 1000;
//     let retries = 0;
//     let maxRetries = 5;
    

//     let timerId = setTimeout(function request(){
        
//         console.log(`retry number ${retries + 1 }`);

//         let requestFailed = true;

//         if(requestFailed)
//         {
//             retries++;
//             if(retries <= maxRetries){
//                 delay *= 2;
//                 console.log("As the server was overloaded the delay is reached to ", delay);
//                 setTimeout(request,1000);
//             }
//             else {
//                 console.log("Max Retries Reached");
                
//             }

//         } else {
//             console.log("Successfully completed");
//         }

    
        
//     },delay);
// }


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

    printNumber(1,10);