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