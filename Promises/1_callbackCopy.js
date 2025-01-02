// callbacks 
// many functions are provided by js host environment that allows you to schedule asynchronous actions 
// for instance one such function is SetTimeout function

// there are other asynchrnous actions 
// loading script and modules 

// loadScript(src) that loads a script with the given src 
{
    function loadScript(src){
        // creates a script tag and append it to stage 
        // this causes the script with given src to start loading and run when complete
        let script = document.createElement("script");
        script.src = src;
        document.head.append(script);
    }
}

// it inserts into the doc a new dynamically created tag 
// <script src = "" > 
// the browser automatically starts loading and exeuction time and waiting 

// we can use this function like this 
// load and execute the script at the given mathc 
// loadScript('/my/script.js');
// the script is executed asyncrhonously as it starts loading now but runs later 
// where the function has already finsihed 

// if theres any code below loadScript  it does not wait  until the script loading finishes 

// loadScript('my/script.js');
/// the code below js 
// does not wait for the script loading to finish

// let say we need to use script as soon as it loads 
// it declares new function and we want to return them 
// but if we do that immediatley aftehr loadSript call that would not work

// loadscript('/my/script.js'); // the script has function newFunction() {...}
//newFunction(); // no such function 'yet'

/*
naturally the browser probably did not have time to load the script 
as of now the loadscript function doesnot provide a way to track the load completion 
the script loads and eventually runs thats all 
the script loads and eventually runs thats all 
but we like to know when it happens to use new functions and variables from that script 

callback function as a second argument to loadscript that should execute when the script loads 
*/

function loadscript(src,callback){
    let script = document.createElement('script');
    script.src= src;

    script.onload =()=> {
        callback(script);
    };

    document.head.append(script);
}

/*
the onload event basically executes a function after the function is loaded and executed 
now if we want to call new function from the script we should write in the callback 
*/

// {
//     loadScript('/my/script.js',function(){
//         newFunction(); // now it works 
//         // the callback runs after the scsript is loaded 
//     })
// }

// the idea
// the second arugment is a function usually anonymous that runs when the action is completed 

{
    {
        function loadScript(src,callback){
            let script = document.createElement('script');
            script.src= src;
    
            script.onload = ()=> callback(script);
            document.head.append(script);
        }
    }
    
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js',script => {
        alert(`cool the script  ${script.src} is loaded`);
        console.log("is this owkring");
    
    });
}


/*
callback based style of asynchronous programming 
a function that does something asyncrhonously should provide a callback arguument where we put the function
to run after complete 
*/

//callback in callback 
// how can wee load scripts sequentially the first one and then second one after it 
// the natural soln would be to put the second loadScript call inside the callback like this 


{
    function loadScript(src,callback){
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => callback(script);
        document.head.append(script);
    }

    loadScript('scripts/script1.js',function (script){
        console.log(`cool the script is loaded ${script.src} let loead one more `);

        loadScript('scripts/script2.js', function(script){
            console.log(`coll the script is loaded ${script.src}`);
        });
    });
}

// afther the outer loadScript is complete the callback initiates the inner one 
// what if we want to one more script 

{
    // loadScript('script/script1.js',function (script){
    //     console.log(`the ${script.src} is loaded`);

    //     loadScript('script/script2.js',function(script){
    //         console.log(`the ${script.src} is loaded`);

    //         loadScript('script/script3.js',function(script){
    //             console.log(`the ${script.src} is loaded`);
    //         });
            
    //     });
    // });
}

// so every new action is inside a callback thats fine for few actions 
// but not good for mnay 

// handling errors 
// we did not conside above 
/*
what if the script loading fails 
our callback should be able to react on that 

improvisd version of loadScript that tracks the loading errros 

*/

{
    function loadScript(src,callback){
        let script = document.createElement('script');
        script.src =script;

        script.onload = ()=> callback(script);
        script.onerror = () => callback(new Error(`Script load error for ${src}`));

        document.head.append(script);
    }
}

// it calls callback (null,script) for successful load and callback(error) otherwise 

{
    loadScript('scripts/script1.js',function(error,script){
        if(error){
            // handl error 
        } else {
            //script laod successfuly 
        }
    })
}

/*
once again the recipe we used for js is actually quite common 
its called error first callback style 

the convention is 
1. the first arugment of the callback is reserved for an error 
then callback(err) is called 

2. the second argument (and the next ones if needed) are for the successfsul result 
then callback(null,result1,result1) is called 

so the single callback function is used both for reporting errros and passing back result ;
*/

// Pyramid of Doom
// it looks like a viable approeach to asynchrnous coding 
// and it is for one or two nested calls it looks fine 

// but for multiple asynchronous action that follow one after another 

/*
loadScript('1.js', function(error, script) {

  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', function(error, script) {
      if (error) {
        handleError(error);
      } else {
        // ...
        loadScript('3.js', function(error, script) {
          if (error) {
            handleError(error);
          } else {
            // ...continue after all scripts are loaded (*)
          }
        });

      }
    });
  }
});
*/

// in the code below 
/*
1. we load 1.js then if there no errro 
2. we load 2.js then if theres no erro
3. we load 3.js then if theres no errro do something else 

as calls become more nested the code becomes deeper and increasingly more difficult ot manage 
especaillay if we hae real code instead of ...
that may include loops ,conditional and so on 
that sometimes called callback hell or pyramid of doom

The pyramid of nested calls grows to the right with every asyncrhonous actions 
soon it spirals out of control 

we can try to alleviate the problem by making every action a standaloen function 
*/

{
    loadScript('1.js',step1)
    function step1 (error,script){
        if(error){
                console.log("handleError(error)");
        } else {
            loadScript('2.js',step2);
        }
    }

    function step2(error,script){
        if(error){
            console.log("handleError");
           } else {
            loadScript('3.js',step3);
        }
    }

    function step3 (error,script){
        if(error){
            console.log("handleError");
            
        } else {
            // do something after all scripts are loaded 
        }
    }
}

/*
it does the same thing and theres no deep nesting now because we made every action a separate top level function 
it works but the code looks like a torn apart spreadsheet 
also function name step* are are all of single use they are created only to avoid the pyramid of doom
no is going ot reuse them outside of the action chain 
so to avoid pyramids 
we have promises which is a best way to do this 
*/