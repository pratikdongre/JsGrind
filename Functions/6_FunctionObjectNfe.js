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
        let isYes = confirm(question);

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

    ask("Question?",() => alert("You said yes"), result => alert(result));


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
        alert("hi");

        sayHi.counter++;
        // lets run how many times we run
    }
    sayHi.counter = 0;

    sayHi();
    sayHi();

    alert(`Called ${sayHi.counter} times`);
}

/*
a proerty is not a variable 
a proeprty assigned to function like sayHi.counter = 0 
does not define a local varible counter inside it 

a property counter an a variable let counter are two unrelated things 

we can treat a function as an object strore proeprties in it 
but has not effection on its execution

variables are not function properties and vice verasa
therese are just parallel world 
*/

