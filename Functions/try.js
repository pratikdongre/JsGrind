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

/*

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

    printNumber(1,10);
}

*/



{
    // we can use call in the wrapper to pass the context to the original function 
    let worker = {
        someMethod(){
            return 1 ;
        },

        slow(x){
            console.log("Called with ", x);
            return x * this.someMethod();
        }
    }

    function cachingDecorator(func){
        let cache = new Map();

        return function(x){
            if(cache.has(x)){
                return cache.get(x);
            }

            let result = func.call(worker,x);
            cache.set(x,result);
            return result;

        };

    }

    worker.slow = cachingDecorator(worker.slow);

    console.log(worker.slow(1));
    console.log(worker.slow(2));

}