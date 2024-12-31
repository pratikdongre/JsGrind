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
