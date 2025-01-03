/*
let promise;
     promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("done"), 1000);
    });
    
    // Use the promise
    promise.then(
        result => console.log(result), // shows "done" after 1 second
        error => console.log(error)   // does not run
    );


    */

  
  /*
    {
        new Promise(function (resolve, reject) {
            setTimeout(() => resolve(1), 1000);
        })
            .then((result) => console.log(result)) // Should log 1
            .then(() => console.log(2))           // Should log 2
            .then(() => console.log(4));          // Should log 4
        
    }

    */


    {
        new Promise(function(resolve, reject) {
    
            setTimeout(() => resolve(1), 1000);
          
          }).then(function(result) {
          
            // alert(result); // 1
            console.log(result);
            
          
            return new Promise((resolve, reject) => { // (*)
              setTimeout(() => resolve(result * 2), 1000);
            });
          
          }).then(function(result) { // (**)
          
            // alert(result); // 2
            console.log(result);
            
          
            return new Promise((resolve, reject) => {
              setTimeout(() => resolve(result * 2), 1000);
            });
          
          }).then(function(result) {
          
            // alert(result); // 4
            console.log(result);
            
          
          });
    }