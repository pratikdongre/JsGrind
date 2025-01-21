// try ..catch works for run time errro and not the parse time when the js reads 
// try..catch works synchrnously 
// so to catch a error inside a scheudled function try..catch should be inisde that function

// error handling try catch 
// no matter how good we are at programming sometimes our scripts have errors 
// they may occuer becuase of our mistake or un expected user input 
// erroneous server response 

// usually a ascript dies (immediately stop) in case of an error 
// printing it in the console 

// but theres a syntax :- try and catch  that allows us to catch the error
// so the script do something reasonalbe instead of dying 

// try and catch syntax has two main blocks try and then catch 
{
    try{
        // ....code 
    }
    catch (err) {
        // .... error handling 
    }
}

/*
1. the code in try {...} is executed 
2. if there no errro then catch(err) is ignored 
then exexctuion reaches end of try and goes on skipping catch 

3. if an error occurs then the try execution is stopped 
and control flows goes to the begining of catch(err)   
the err variable (any name can be uses insteand of err)
whill contain an error object with details about what happened 

begin 

try{
}catch(err){
}

no errors ignore catch block 

an error occured : ignore rest of the try and execute the catch block 

*/


// so an error inside the try{...} block does not kill the script 
// we have a chance to handle it in catch 

// an erroless example 
{
    try {
        console.log("start of try is being running ");
        // no errors here 
        console.log("End of try is being happening");
    } catch(err){
        console.log("Catch is ignored as no error found ");
    }
}

//  an example with an error 
{
    try {
        console.log("started");
        lala;
        console.log("Done ?");
    } catch (err){
        console.log("Error has occured");
    }
}


// try and catch only works for runtime errors 
// for try and catch to work it must be syntatically correct 

// {
//     try {{{{{}catch (err){
//         console.log("INvalide code the js engien cant understand");
//     }
// }

/*
the js enigne first reads the code and then runs it 
the erros that occurs on the reading phase are called parse time error and 
are unrecoverable from inside that code 
thats because the js engine cant understand the code

so try...catch can only handle erros that occuers in valid code 
such errros are called run time errrors or /exception 
*/

/*
try...catch works synchronously 
// if an runtime erros happens in "scheduled code "like in setTImeout 
then try ..catch wont catch it 

*/

{
    try {
        setTimeout(function (){
            // noSuchVariable; // got erro from terminal the code did not reach to catch 
          },1000);
        } catch (err){
            console.log("wont work ");    
        }
    
}

// becaus the function itself is executed later when the engine has already left the try...catch construct 
// to catch an exception/run time errro inside a scheduled function try...catch must be inside that function 

{
    setTimeout(function (){
        try{
            noSuchVariable;
        } catch (err){
            console.log("Got an error");
        }
    },1000);
}

// error object 
// when an error occurs , js generated an object containg the details about it 
// the object is then passed as an argument to catch 

{
    try {
        
    } catch(ErrorOBj){ // the err object could use another word instead of err
        
    }
}

// for all built in props the erro object has two main properites 
// name 
// Error.name for isntance for an undefined variable thats "ReferencedError"
// message 
// Textual message about error details 

// other prop also are there 
// a famouse one is stack 
// CurrentCall stack : a string with information about the sequence of nested calls that has led to an errro 
// Used for debuggin purposes 

{
    try {
        lalala; // error 
    } catch (err){
        console.log(err.name);
        console.log(err.message);
        // console.log(err.stack); // referneceError : lalala is not defined at (...call stack)

        // can also show  an errro as whoel 
        // the erro is converted to string as name : message (with stack)
        // console.log(err); // ReferencedError : lalala is not define ...
    }
}

// Optional "catch" binding 
// if  we dont need error details catch may omit it 
{
    try {

    }catch {
        // withtout err 
    }
}

// Using try catch
// Js supports JSON.parse(str) method to read JSON encoded value 
// usually its used to decode data received over the network from the server or another source 
// we recieved it and call JSON.parse like this 

{
    let json = `{"name" : "John", "age" : 30 }`; // data from the server 
    
    let user = JSON.parse(json);
    // CONVrt the text representation to JS object 
    
    console.log(user.name);
    console.log(user.age);
}


// if json is malformed , JSON.parse generates an error so the script dies 

// if something wrong with the data the visitor will never know that 
// and people really dont like when something just dies without any error message 

{
    let json = "{ bad json}";

    try {
        let user = JSON.parse(json);
        console.log(user.name);
    } catch (err){
        console.log("Our apologies, the data has errro, we try to request it one more time");
        console.log(err.name);
        console.log(err.message);

    }
}

// here we use the catch block only to show the message but we can do much more 
// send a network a request 
// an alternative to the vistor ,send informatino about the errro to a loggin facitlity 
// all much better thatn just dying 


// throwing our own errors 

// what if json is syntatically correct but does have required proeprty 

{
    let json = '{"age : 30}'; // incomplete data 

    try {
        let user = JSON.parse(json);
        console.log(user.name); // no name 
    } catch (err){
        console.log("deoes not execute");
    }
}

// here JSON.parse runs normally but the absence of name is actually an error for us 
// to unify error handling we use thorw operator 

// throw operator 
// the throw operator generates an error 
// throw <error object>

// we can use anything as an error object 
// thet may be even a primitive like a number or a string but its better to use object 
// preferably with name and message properties 
// to stay somewhat compatible with builtin errror 

// js has many built in constructors for standard errors 
// errro , syntaxError,ReferenceError and typeError and others 
// we can use them to create error object as well

// their syntax is 

{
    // let error = new Error(message);
    // // or 
    // error = new SyntaxError(message);
    // error = new ReferenceError(message);
    // ...

    // for built in errors (not for any objects just for errors)
    // the name property is exactly the name of the constructor 
    // and message it taken from the argument 
    
    
}

{
    let error = new Error("Things happen 0_0");

    console.log(error.name);
    console.log(error.message); 
}

{
    // let see error of JSON.parse generates 
    try {
        JSON.parse("{bad json 0_0}");
    } catch (err) {
        console.log(err.name); // SYntaxError
        console.log(err.message);
    }
    
}




// the absence of name is an error 
// as users must have a name 
// so lets throw it 
{
    let json = '{"age" : 30}';

    try {
        let user = JSON.parse(json);
        // no errors 

        if(!user.name){
            throw new SyntaxError("Incomplete data : no name");
        }
        console.log(user.name);
    } catch(err){
        console.log("JSON Errro : " + err.message);
    }
}



// the throw operator generates a SyntaxError with the given message , the same way as js would generate it itself 
// the execution of try immmediately stops and control flow jumps to catch
// now catch became single place for all error handling 
// both for JSON.parse and other cases 


// ReThrowing
// we use try...catch to handle incorrect data 
// but is it possible another unexepected error occurs with in try {...} block ?
// like a programming error (variable is not defined) or something else 
// not just the incorrect data thing 

{
    let json = '{"age" : 30}';
    // incomplete data 
    
    try {
        user = JSON.parse(json);
        // forgot to put let before user 
    } catch (err){
        console.log("woha error : " + err);
        // JSON error : Reference error user is not defined 
        // no json error eactually
        // in a strict mode it wil thor Reference errro
    }
}

/*
try ...catch is placed to catch incorrect data errors 
by its nature catche get all erros from try 

here it gets an unexpectd erro but still shows the same JSON erro message 
// thats wrong and also makes the code more diffiuclt to debug 

to avoid such problem we can employ the rethrwoing technqiue 
catch should only process erros that it knows and rethrow all others 

there rethrowing technique can be expalin in mroe details as 
1. catch gets all errors 
2. in the catch (err) {...} block we analyze the errore object err 
3. if we dont know how to handle it we do throw err 


*/

// cehck the errro type using instanceof op

{
    try {
        user = {};z
    } catch (err){
        if(err instanceof ReferenceError){
            console.log('ReferenceErrro'); // for accesing an undefined varaible 
        }
    }
}

// we can  get the errro class name from err.name property 
// all native erros have it 
// another option is to read err.constructor.name


{
    // rethrowing so that catach only handles SyntaxError
    let json = '{"age" : 30}';
    try {
        let user = JSON.parse(json);
        if(!user.name){
            throw new SyntaxError("Incomplete Data : no name");
        }

        blabla(); // unexpectedd erro
        console.log(user.name);
    } catch(err){
        if(err instanceof SyntaxError){
            console.log("JSON Errro " + err.message);
        } else {
            throw err;
        }
    }
/*
the error throwing on  throw err from inside catch block falls out of try...catch and can be either caught 
by an outer try...catch construct (if it exists) or it kills the script 
so the catch block actually handles only erro that it knows how to deal with and skips all others 

*/
}


{
    function readData(){
        let json = '{"age" : 30}';

        try  {
            blabla();
        } catch (err){
            if(!(err instanceof SyntaxError)){
                throw err; // rethrow (dont know how to deal with it)
            }
        }
    }

    try{
        readData();
    } catch (err){
        console.log("External catch got : ",err.name , err.message);
    }
}

// readData only knows how to handle SyntaxErrro while the outer try...catach knows how to handle everything 

// try ...catch...finally
// the try..catch construc may have one more code clause finally 
// if it exists it runs in all cases 
// after try if there were no errros 
// after catch if there were errors

{
    try {
        // try to execute the code 
    }catch (err){
        // handle errrors
    } finally {
        // execute always 
    }
}


{
    try {
        console.log("Try");
        if(true) BAD_CODE();
    }  catch(err){
        console.log("catch");
    } finally {
        console.log("Finally");
    }

}

/*
the code has two ways of execution 
1. if is ttrue then try catach finally 
2. if is false then try finally

the finally clauses is often used when we start doing something and want to finalize it in any case of outcome 

for like we want to measue the time that a fibon function fib(n) takes 
nataully we can start measuring before it runs and finish afterwards

// if there erro dugin the function call 
like in implementation of fib(n) returns an error for negative or non integers number 

teh finally clause is a great place to finish the measurement no matter what 
*/

// here finally guarantees that the time will be measured correctly in both situation 
// in case of a successful execution of fib and in case of error in it 

{
    let num = 3;
    let diff,result;
    
    function fib(n){
        if(n < 0 || Math.trunc(n) !=n) 
            // 5.7 != 5 checks for integer 
        {
            throw new Error("Must not be negative and also an integer");
        }
        return n <=1 ? n : fib(n-1) + fib(n-2);
    }

    let start = Date.now();

    try {
        result = fib(num);
    } catch (err){
        result = 0;
    } finally {
        diff = Date.now() - start;
    }

    console.log(result || "error occured");
    console.log('execution took ', diff, "ms");
}


// the function may finsihe with return or throw that doesn t matter 
// the finall yclause executes in  both cases 

// variables are local inside try..catch...finally 
// result and dfiff variables in the code are declared before try...catch
// otherwise if we declared let in try block it would only inside of it 


/*

finally and return 
the finally clause works for any exit form try..catach 
// that inlcudes an explicit return 

theres return in try finally is executed just before the constrolreturns to the outer code 
*/

{
 function func(){
    try {
        return 1;
    }
    catch (err){

    } finally {
        console.log("finally");
    }
 }

 console.log(func());
}


// try..finally 
// the try...finally construct without catch clause is also useful 
/*
we apply it when we dont want to handle errro here (let them fall through)
but want to be sure that processes that we starterd are finalized 
*/

{
    function func(){
        try{
            // start doing somethign that need commpletion like measuremtn 
        }finally {
            // commpelte that thing even if all dies 
        }
    }
}

// in erro inside try falls out 
// because there sno catach but finally works before the exefution flow leaves the function 


// GLobal Catch 
/*
we got fatal error outside of try...catach and the script diedd
is there way to react on such occurences 
we may wnat to log the error 
show somehing to the user (normally they dont see error message) etc 

node js has process.on("uncaughException") for taht 
and in browser we can assin a functin to the speciall window.onerror
property that will run in case of uncaught errro

{
    window.onerror = function (message,url,line,col,error){

    };
}

 message :- error message 
url : URl of the script when error happened 

line,col 
line and column numbers whee error happend 

error 
error object 

*/


//  <script>
//     window.onerror = function (message, url, line, col, error) {
//         console.log(`${message}\nAt ${line}:${col} of ${url}`)
//     };

//     // Intentional error
//     someUndefinedFunction();

//    function readData(){
//     badFunc();
//    }

// readData();
// </script>


/*
the role of global handler window.onerror is usually not to recover the script execution 
that probably impossible in case of proramming errro 
but to send the error message to developer 


there are also web services that provide errro loggin for such cases like 
errorception.come 
muscul.com 

they work like 
1. we register at the service and get a peice of js or a script URl from them to insert on pages 
2. that js script sets a custom window.onerror function 
3. when an error occurs it send a network requst about it to the service 
4. we can log in to the service web interface and see errros 
*/


/*
Summary 
the try..catch construct allows to handle runtime errros 
it literally allows to try running the code and catach erros that may occcurs in it 

{
    try {
    // run this code 
        }catch (err){
        // if an erro happend then jjump here 
        // err is the error object 
            } finally {
             // do in any case after try/catch
                        }
}

there may be no catach section or no finally 
so hosrter ocnstructor try...catach and try..finally are also valid 

error objet have follwing props 
message the human readable error message
name - the strin with error name error constructor name 
stack the stack at the momemo of erro creation 

if an erro objet is not needed we can omit it using 
catch { } instead of catch (err) {}

// we can also generate our own errors using the throw ops 
techincally the arugment of throw can be anything 
but usually its an error object inheriting from the built in error class 


Rethrowing is avery important pattern of error handling 
a catch block usually expect and know hw to handler the particalu error type so 
it should rethrow errors it doesnt know 

even if we dont have try...catch
most env allwos us to setup global error handler to catach that fallout 
in browser that window.oneerrro
or in node.js 
process.on("uncaughException")

*/

// tasks 
// finally or jsut the code 
{
    try {
        // work wrok 

    } catch (err){
        // handle errrors 
    } finally {
        // clean the working space 
    }
}

{
    try {
        //
    } catch(err){

    }
    // clean the working space 
}

// the advantage of using finally is it would always executed 
// even by try -catch - finally 
// or try -finally 

// but if we dont use finally and then clean up is not gurannted 
// if there is error 
// as in case of error it would go to catch and wont reach the bewlo celan the working space 


{
    function f(){
        try {
            console.log('Start');
            return 'result';
        } catch (err){
            // ...
        } finally {
            console.log("cleanup");
        }
    }

    f();
}

// or when theres throw 
{
    function f(){
        try {
            console.log("Start");
            throw new Error("AN error");
        } catch (err){
            // ....
            if("cant handle the errro "){
                throw err;
            }
        } finally {
            console.log("When"); // happens
        }
    }
   

    f();
    console.log("when"); // did not happend 
}


