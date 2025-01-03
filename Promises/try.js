let promise;
     promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("done"), 1000);
    });
    
    // Use the promise
    promise.then(
        result => console.log(result), // shows "done" after 1 second
        error => console.log(error)   // does not run
    );