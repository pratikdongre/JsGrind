// Custom Errors extendin error 
// when we develop somethign we often need our own errro classes to refelct specific thigns that may go wrong in our tasks 

/*
for error in netwrork ops we may need HTTPerror
for db ops DBerror for searching ops NOtFoundError and so on 
our error should support basice error properites like message , name and stack 
but they also may have other props of their own 
eg HTTPerrro objects may have a statusCode Prop with a value like 404 401,403
js allows to use throw with any argument 
so technically our cusomt errro classes doent need to inherit from Error
but if we inherit then it becomesp ossible to use obj instanceof Errro to identify errro objets 
so tis better to inehrit from it 
as the applicatin grows our own erros naturallly from a hierrachy 
for instnace HTTPtiemoutErrro may inherit from HTTPerrro and so on 
*/

// 2 Extendin Error 
// function readUser(json) that should read JSON with user data 
// how a valid json may look

{
    let json = '{"name" : "John", "age" : 30}';
}

/*
internall we use json.parse if it revied malformed json 
then it thrws syntaxErrro 
but if json is syntatically correct and that doesnot mean that its a valid user right 
it may miss the necesary data 
it may not have name and age prop that are eessential for our users 
our function readUser(json) will not only read JSON but check("validate") the data 
if there are no required fields or the format is wrong 
then that s error 
and that not a SyntaxError 
because the data is syntatically correct but another kind of erro 
we call it ValidationError 
and create a class for it 
an error of that kind should also carry the ifnormation about the offending field 
Our validationError calss should inherit from the Errro class 
the error class is builtin but there its approximate code so we can understand what we extending 
*/

{
    // pseduocode for the builtIn errro class defined by js iteself 
    class Error {
        constructor(message){
            this.message = message; 
            this.name = "Error"; // differenct names for differnte builtin errro classes
            // this.stack = <call stack>; // non standar but most env supports it 
        }
    }
}

{
    //     // nows lets inherti ValidationErrro from it and try it in action 
    class ValidationError extends Error {
        constructor(message) {
            super(message);
            this.name = "ValidationError";
        }
    }

    function test(){
        throw new ValidationError("whoops");
    }

    try {
        test();
    } catch (err){
        console.log(err.message);
        console.log(err.name);
        // console.log(err.stack);
    }

}

// we call the parent constructor 
// js required us to call super in the chidl constructor 
// the parent constructor sets the message property 

// the parent cosntructor also set the name property to "Error" 
// we reset it to ValidationError

// readUser(json)
{
    class ValidationError extends Error{
        constructor(message){
            super(message);
            this.name = "ValidationError";
        }
    }

    function readUser(json){
        let user = JSON.parse(json);

        if(!user.age){
            throw new ValidationError("No field :age");
        }
        if(!user.name) {
            throw new ValidationError("No field :name");
        }

        return user;
    }

    try {
        let user = readUser('{"age" : 25}');
    } catch(err){
        if(err instanceof  ValidationError){
            console.log("Invalid data : " + err.message);
        } else if (err instanceof SyntaxError){
            console.log("JSOn Syntanx Errro: "+ err.message);
        } else {
            throw err;
            // unknow errro ,rethrow it 
        }
    }
}

/*
try...catch block in the code abovee handles both our ValidationErrro and the builtin syntaxError 
from json.parse
instnaceof to check for the sepcific error type 
we could also look at err.name 
else if (err.name == "SyntanError")
the instnaceof version is much better 
because in the futuer we are goind to extend Validationerrro make subtypes of it 
propertyrequiredErrror 
instanceof check will continue to work for new inheriting classes 
also ifts impo that if ctach meets an uknown errro then it rethrows it 
the catch blcok only konw how to handle valdiation and sytnax error ,o therk inds 
cause by a type in the code or other unkonwn reason should fall through 
*/

// 3 further inhertiance 
/*
the validationErrro calss is very generic 
many things may go wrong 
the property may be abseent or it may be in a wrong format liek a string value for age instead of a number 
lets make a more concrete class 
propertyRequiredError exactly for absent properties 
it will carry addiotnal information about hte property thats missing 
*/

{
    class validationError extends Error {
        constructor(message){
            super(message);
            this.name = "ValidationError";
        }
    }

    class PropertyRequiredError extends validationError{
        constructor(property){
            super("No Property " + property);
            this.name = "PropertyRequiredError";
            this.property = property;
        }
    } 

    function readUser(json){
        let user = JSON.parse(json);
        if(!user.age){
            throw new PropertyRequiredError("age");
        }
        if(!user.name){
            throw new PropertyRequiredError("name");
        }
        return user;
    }

    try {
        let user = readUser('{"age" : 25}');
    } catch (err){
        if(err instanceof validationError){
            console.log("INvalid data : " + err.message);
            console.log(err.name);
            console.log(err.property);
        } else if (err instanceof SyntaxError){
            console.log("JSON Syntax Error : " + err.message);
        } else {
            throw err; // unknow error rethrow it 
        }
    }

}

/*
the new class propertyRequiredErrro is easy to use we only need to pass the property name : 
new PropertyRequiredError(property)
the human readable message is generated by the constructor 
this.name in propertyrequiredErrro consturcot is again assigned manually 
//we can avoid it by making our own basic error class that assigne this.name = this.constructor.name 
and tehn inherit call our customer errror from it 
le call it myErrro
*/

{
    class MyError extends Error{
        constructor(message){
            super(message);
            this.name = this.constructor.name;
        }
    }
    class ValidationError extends MyError{}
    class PropertyRequiredError extends ValidationError {
        constructor(property) {
            super("No property : " + property);
            this.property = property;
        }
    }

    console.log(new PropertyRequiredError("field").name);
}


// 4  wrapping exception 
/*
the purpose of the function readUser is to read the user data 
there may occur idfrence kins od error in process 
right now we have sytnaxErrro and ValidationErrro but in futuer readUser function may grow and probably generate other kinds of errrors 
the code which call readUser should handle theres errro 
right now if uses multipels ifs in the catch block that check the class and handle known errors and rethrow the unknown ones 
{
    try {
        readUser() // the potentnail error source
    }
    catch(err){
        if(err instanceof validationError){
            
        } else if (err instanceof SyntaxError){
        } else {
            throw err;
        }
    }
}
if the readUser FUnction generates several kinds of erros then we should ask ourselved 
do we wreally want to check for all error rtpes one by onevery time 
no we jsut want to know fi tehre was a data reading error 
why exactly it happened is often irreleavnt (the error messages descries it )
or we like to have a way to get the error detials but only if we need to  ? 
the techqniue that we descrive is called wrapping exception 
1. we make a new class ReadErrro to represent a generic data reading error 
2. the Function readuser will catch data readin errros taht occus inside it such as ValidationErrro and Sytannx error 
and generate a ReadErrro instenad 
the ReadError object will keep the reference to the orignial error in its cause property 
then the code that calls readUser will on have to checck for Readerrro not for eveyr kind of data reading 
errors 
and if its need more deitals it can check its cause property 
*/

{
    class ReadError extends Error {
        constructor(message,cause){
            super(message);
            this.cause = cause;
            this.name = 'ReadError';
        }
    }

    class validationError extends Error {}
    class PropertyRequiredError extends validationError {}

    function validateUser(user){
        if(!user.age){
            throw new PropertyRequiredError("age");
        }
        if(!user.name) {
            throw new PropertyRequiredError("name");
        }
    }

    function readUser(json){
        let user ; 
        try {
            user = JSON.parse(json);
        } catch (err) {
            if(err instanceof SyntaxError){
                throw new ReadError("SyntaxError", err)
            } else {
                throw err ;
            }
        }

        try {
            validateUser(user);
        } catch (err){
            if(err instanceof validationError){
                throw new ReadError("Validation Error",err);
            } else {
                throw err;
            }
        }

        try {
            readUser('{bad JSOn}');
        } catch (e) {
            if(e instanceof ReadError){
                console.log(e);
                console.log("Original error :" + e.cause);
            } else {
                throw e ;
            }
        }

        // readUser works exaclty as descrived cataches syntax and valdiation errro and thorws 
        // readErrro errros inteand (unkonw errros are rethrown as usual)
        // so outercode checks instanceOF ReadErrro and thas it 
        // no need to list all posssible errro types 

        // the approcah is called wrapping excpetion 
        // because we take low level execpetion and wrap them into ReadErrro 
        // that is more abstract 
        // it is widley used in object oriented programming 
    }
}




// 5  summary 
/*
we can inherti from Errro and toher built in error classes normally 
we jsut need to take care of the name properyt and dont forget to call super 
we can use instanceOf to check paritucalr errros 
it also works iwth inherticance 
butsometimes we have an errro object coming from a 3rd party 
and thers no easy to get its class 
then name propety can be used for such checks 
wrapping exepction is a widespread technique 
a function handles low level exceptions and creates higher level errros instead of various low level ones 
low level execpetion sometimes become proeprties of that object like err.cause
*/

// 6 tasks 
// inherti from SytnaxError 

// create a class FormatErrro that inhertis from the buildit SyntaxError class
{
    class FormatError extends SyntaxError{
        constructor(message){
            super(message);
            this.name = this.constructor.name;
        }

    }

    let err = new FormatError("formatting errro");

    console.log(err.message);
    console.log(err.name);
    console.log(err.stack);

    console.log(err instanceof FormatError);
    console.log(err instanceof SyntaxError);




    
}