/*
function in js is a value 

every value is js hasa type 
what type is function 

in js function are object 

a good way to imagine function is callable "action object" 
we can not only call them 
but also treat them as object 
add / remove properties , pass by reference etc 


*/



/*
THe Name property 

Function objects contain some useable properties 

*/

{
    function sayHi(){
        console.log("hey");
    }
    console.log(sayHi.name);
}

/*
the name asisginign logic is smart 
it also assigns the correct name to a function even if tis createed without one and then immediately assigned 
*/

{
    let sayHi = function(){
        console.log("labon ko ");
    };
    console.log(sayHi.name)
}


{
    function foo(){}
    console.log(foo.name);

    const bar = function (){};
    console.log(bar.name);

    function test(param = function(){}){
        console.log(param.name);
    }

    test();
    
    
}


/*
this features is called contextual name 
if the function does not provide one 
then in an assiginment it  is figured out from the context 
what the fuck is this ? i dont get it at all 
*/

// objects methods have names too 

{
    let user = {
        sayHi(){
            
        },
        saybye : function (){

        }
    };

    console.log(user.sayHi.name);
    console.log(user.saybye.name);  

}

{
    // there are cases when there no way to figure out the right name 
    // inth acase the name proeprty is empty 

    let arr = [function(){}];
    console.log(arr[0].name);
    // empty string 
    // the js engine has no way to set up right name so there is none 

    // in practice most function do have a name 
    
}


{
    // the lenght property which returns the num of function parameters  

    function f1(a) {}
    function f2(a,b) {}
    function many(a,b,...more) {}

    console.log(f1.length);
    console.log(f2.length);
    console.log(many.length);

    // the rest param are not counted 

    // the lenght property is sometimes uesd for introspection in function that operates on other function 

    

}

{
    function ask(question,...handlers)
    {
        // let isYes = confirm(question);
        let isYes = true;

        for(let handler of handlers)
        {
            if(handler.length == 0)
            {

                if(isYes) handler();
            }else {
                handler(isYes);
            }
        }
    }

    // ask("Question?",() => alert("You said yes"), result => alert(result));


    /*
        ask function accept a question to ask and arbitrary number of handler function to call 

        once a user provides their answer 
        the function calls the handler 
        we can pass two kinds of hnadler

        when user gives positive answer then a zero argument function is called 
        a function iwht arguments which is called in either case postive/negative 

        to call handler theright way we examine handler.lenght property 
        the idea is that we have simple no argument handler syntax for postive cases 
        but are able to support universal handlers  as well 

        this is case of soo called polymorphism -treating arguemnt differently depending on 
        their type or in our case length 
        the idead does have a use in js libraries 

    */
}


// Customer proerties 
//we can also add proeprties of own own 

{
    function sayHi(){
        // alert("hi");

        sayHi.counter++;
        // lets run how many times we run
    }
    sayHi.counter = 0;

    sayHi();
    sayHi();

    // alert(`Called ${sayHi.counter} times`);
}

/*
a property is not a variable 
a proeprty assigned to function like sayHi.counter = 0 
does not define a local varible counter inside it 

a property counter an a variable let counter are two unrelated things 

we can treat a function as an object and store proeprties in it 
which dont not have any effection on its execution

variables are not function properties and vice verasa
therese are just parallel world 
*/


{
    function makeCounter(){

        function counter(){
            return counter.count++;
        }
        counter.count = 0 ;
        return counter;
    }

    let counter = makeCounter();

    console.log(counter());
    console.log(counter());

    // count is stored in the function direclyt not in its outer lex env 
    
}

/*
is it btter or worse than using a closure 
the main diffrecne is that ifthe value of count lives in an outer varialbe 
then external code is unable toa cess it 
only nested function may modify it 
and if its bound to a function then such a thing is possible 

*/

{
    function makeCounter(){
        function counter(){
            return counter.count++;
        };
        counter.count =0;
        return counter;
    }
    let counter = makeCounter();
    counter.count = 10;
    console.log(counter());
    
}

/*
when you make it property of a function 
then there is a opne door 
for external acess to counter.count which introduces a risk of unintended modification 
no encapulsation count is public 

when you use closure 
then it makes count as encapuslated 
reducing the risk of unintended changes
count is private

*/


// Named FUnction expression is a term for Function expression that have a name 

{
    let sayHi = function(who){
        console.log("hello" + who);
        
    }
}

{
    let sayHi = function func(who){
        console.log("hello " + who);
        
    }

    sayHi("hoh");
    
}

// what did we achieved from adding additional name to the function 
// we sitll have a function expression 
// adding the name did not make it function declaration 
// why because it is still creatred as a part of an assignemt expression 
// it did not break anything we can stil acessed it as we could wihtout adding addtional name 

// there are two specail things about the name func
// it allows function to reference itself internally 
// it is not visible outside of the function 

{
    // let say a functio sayHi call itself again with "Guest" if no who is provided 

    let sayHi = function func(who){
        if(who){
            console.log("hello " + who);
        }
        else {
            func("Guest");        }

    }
    sayHi();

    // func(); wont work 
}


// can we use sayHi instead of func 
{
    let sayHi = function func(who = "Default"){
        if(who){
            console.log("hey " + who);
        }
        else {
            sayHi("Guest");
        }

}
sayHi();
    
    
}
// yes but then what if the outer var that is sayHi gets changed 
// the code with start to give errors

{
    let sayHi = function(who){
        if(who){
            console.log("helo" + who);
        } else {
            sayHi("Guest");
        }
    };
    let welcome = sayHi;
    sayHi = null;
    // welcome(); // errro sayHi in th nested call does not wrk any more 
}

// sayHi is taken from its outer lex env as there is not local sayHi 
// in in outer lex env sayHi is null

// the optional name which we can put into the function expression is meant to solve eaclty these kinds of problems 

{
    let sayHI = function func(who){
        if(who){
            console.log("hello" + who);
        }
        else {
            func("Guest");
        }

    };
    let welcome = sayHI;
    sayHI = null;
    welcome();
    // now it works because func is function local 
    // it is not taken from outside and not visible ther e
    // the specification guraentees that it will always reference the current function 
    // the outer code still has welcome or sayHi
    // and func is internal function name this way the function can itself reliably
}


/*
the internal name featuer is only function expression and not for function declaration 
function declaration there is no sytans for adding interanl name 

sometimes when we need a reliabl internal name its there reason to rewrite a functiona delaration to 
named function expression 


Summary 

FUnction are object 
properties of function
name the function name usually taken from the function definition 
but there if thers non js tries to guess it from the context ie an assignment 

lenght the number of arguemnts in the function defieicnot 
rest paramters are not counted 

if the function is declared as a function expression 
and it carreies the name then it is called named function expression 
the name can be used to refrerence iteself for recursie calls 

function may carry addtional properties 


they create a main function and attach many other helper function to it 
for instance jQUery lib creates a function named $ 
lodash lib creates a function _ and then adds _.clone or _.KeyBy

actually they do it to lesses theri polltuion of the global space 
so that a single libary gives only one global variables 
that reduces the possibligyt of naming conflict 


so a function can do a useful job by itself and also carry a bunch of other functionality in properties 

*/


// tasks 
{
    function makeCounter(){

        function counter(){
            return counter.count++;
        }
        
        counter.count = 0;
        counter.set = value => counter.count = value;
        counter.decrease = () => counter.count--;

        return counter;
    }
    let counter = makeCounter();
        counter.set(4);
        counter.decrease();
        console.log(counter());
        
}

//tasks 2 
{   
    function sum(a){
        return function sum(b)
        {
            return a + b ;
        }
    }

    let ans =sum(1)(2);
    console.log(ans == 3);
    
}



{
    function sum(a){
        let currentSum = a;
        
        function f(b)
        {
            currentSum += b;
            return f ;
        }
        f.toString = function(){
            return currentSum;
        }
        return f ;
    }


sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
console.log(sum(0)(1)(2)(3)(4)(5) == 15);


}
