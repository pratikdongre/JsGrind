// variable scope, closure 

// js is a very functional oriented langauage. 
// it gives us a lot of freedome 
// a function can be created at any moment , passed as an arguemnt to another function then called from atotally diffrencet place of code later 

/*
we already know that a function can acess variables outside of it (outer variables)

but what happens if outer var chnage since a function is created 
will the function get newer values or the old ones 

what if a function is passed as a narguemnt called from another palce of code , will it get access to outer var at the new place 


in js ther are 3 ways to declare a variable 
let , const (the modern ones)
var the remnant of past 


*/


// Code blocks

/*
if a variable is declaree inside a code block {....} its only visisble inside that block

*/

{
    let message = "Hey";
    console.log(message);
    
}
// console.log(message); // error 

// we can use code lbock to isolate a peice of code that does its own task with variables that only belongs to it 

{
let message = "hello";
console.log(message);

}
{
let message = "goodbye";
console.log(message);

}

// for if ,for while and so on vari declared in {...} are also only visisble inside 

if(true){
    let phrase = "its true";
    console.log(phrase);
}
// console.log(phrase); not visisble here

// similarly for loops such as for and while 

for(let i =0;i<3;i++)
{
    console.log(i);
    
}
// console.log(i); // not here visisble



// Nested Function :_ a function is called nsted when it is created inside anothe function 
// it is easily psosbiel to do this with js 

// we can use it to organize our code like this 

{
    function sayHiBye(firstName,lastName)
    {
        // a function is creataed inside another function so this is called nested function
        function getfullName(){
            return firstName + " " + lastName;
        }

        console.log("hi, " + getfullName());
        
    }

    sayHiBye("pratik","dongre");
}


//a nested function can be returned either as a proerty of new object objecct or as a result by itself 
// it can be then be used somewehre else no matter where it still has acess to same oouter variables 


{
// makecounter creates the counter function that retunrs the next number on each invocation

function makeCounter(){
    let count = 0;

    return function(){
        return count++;
    }    

}

let counter = makeCounter();


console.log(counter());
console.log(counter());
console.log(counter());


}


// lexical environment 
/*
step 1 :- variables
in js every running function ,code block {...}, and the script as a whole have an internal hidden associated 
object know as lexical env

the lexical env object consist of two part
1. the env record - an object that stores all local var as its proeprties and some other information liek value of this 
2. a reference to the outer lexical env the one associated with outer code 

a var is just a proeprty of the special itnernal object 
env record :- to get or change a vari means to get or change a proerty of that object 

let phrase = "hello";

{
env record : {
phrase : "hello"
  },
  
outer : null // the gobal context has not outer env
  
}

this is the so called global lexical env assocation with the whole script 

here a bit longer code
execution start -------- phrase : <uninitialized> ----> outer : null
let phrase ------------- phrase : undefined
phrase = "hello" ------- phrase : "hello"
phrase = "bye" --------- phrase : "bye"

demonstartion of global lexical enc changes during exeuction 

1. when the script start the lex env is pre poulataed with all declared var 
initially they are in the uninitlized state that a speical internal state 
which means the engine knwo about the vari , but it can not be reference until it has been declared with elt 
it is almost same as ifthe var did not exists 

2. then let phrase definintion apperas 
theres no assignemnt yet so its value is undefiend 
we can use the var from this point forward
3. phrase is assigned a value
4. prhase changes the value 

so 

a variable is a property of a special internal object aka lexe env associated with the currently execution block/function/script

working with var is actuall working the the properties of that object 



the lexical environment is a speicifcaiont object it only exist in therotrically to describe how thinkgs work
we can get this object in out code and manipualtae it direcly 
js engines also may optmize it discrad var that are unused to save memory and perform 
other internal tricks as longs as the visible behvairou remains as described 


step 2. 
a function is also  value like a variable 
 the diffrence is that a function declaration is intallyt fully initialized 

 when a lexi env is created a functional declaration immediatealy becomes a ready to use function 
 unlike let that is unusable till the declaration 

 thats why we can use a function decalred as fuction declaration even before the declaration itself

 for example here the initial state of the global lexi env when we add a function 

 exectuion start ---------------- phrase : <uninitialized> outer ---> null
                                  say : function
 let phrase = "hello" -----------   ....
 function say(name)
 {
 alert(`${phrase} ,${name}`);
 }

 naturally this behavior only applies to function declaration , not function expression where we assign a 
 function to a vari such as let say = function (){}

 step 3 / inner and outer lexical env 

 when a function runs at the beginning of call a new lex env is created automatically to store local vars and parameters of the call

 for instance for 
 say("john")
 

 let phrase = "hello";              
 function say(name){                ------  lex env of the call 
 alert(`${phrase} , ${name}` );          -  name : "john"         ---> say : function      ----> outer : null
 }                                  ------                             phrase : "hello"
 say("john");



 during the functin call we have two lex env 
 the inner one for the function call 
 and outer one global 

 the inner lex env corresponds to the current execution of say 
 it has a single property : name,
 the function argument 
 we called say("john") so the value of name is john
 
 the outer lex env is the global lexical env 
 it has the phrase var and the function itself 

 the inner lex env has a refrence to outer one 

 when the code want o acces a var the inner lex enve is searched first then outer one , then the more outer one and so on 

 if a variable is not found anywhere , that's an error in strict mode 
 withou use strict an asisgnemnt to a non exisitn variable creates a new global var for compaitiblity with old code 


 step 4 return a function 

 let make to makeCounter example 

 function makeCounter(){
    let count = 0;

    return function(){
    return count++;
    };
 }
let counter = makeCounter();


at the begining of each makeCounter() call 
a new lexical env object is created to store variable for this makecounter to run 

global lex env 
and inner one 

global lex env has
 counter : undefined 
 makecounter : function

 and outer : null

 inner lex env 
count : 0 
function : // is created and dont run it yet as it would be called when it is called 
 outer : global lex env 



 // all function remever the lexe env in which tehy were made 
 all function have the hidden property name [[environment]] that keeps the reference to the lex env where the fucntion was created 
 

 so function that is return knows in which lex env it was made 
 so counter.environment has the rferecneto count : 0

 the [[environemt]] referecne is set once and forver at function create time 

 later when counter() is called a nex lex is created a new lex env is created for the call 
 and its outer lex env rence is takes from counter.environemnt

 now when the code inside counter() function looks for count 
 it seraches its own lex env but thats empty 
 so it goes ot the outer that is when its find count : 0 
 and changes it 
 
 a variables is updated in the lex env where it lives 

 now if we call counter() multipes times the count variable weil lbe icnrease to 2 ,3 and so on at the same place 





*/



/*
Closure is a function that remeber its outer variables and can access them 
in some lang thats not possible or a function should be written in a speical wway to make it happend 

in js all function are natrually closures 
wiht only one execpetion that is the new function syntax (to cover later )

that is they automatically remeber where they were created using a hidden [[environment]]
property and then their code can acess outer variables 

when asked what is closue 
a valid anwer is definition of clsoure and all function in js are closures 
the [[ennvrionment]] property which keeps the reference in which lex env the function call was made 
and lex envrionement how works 

*/


/*
Garabage Collection
usually a lex env is removed from memory with all the var after the function call finishes 
thats because there are no reference to it 
as any js object only kepts in memory when its reachable 

however if therst nested function that is still reachable after the end of function then it has 
[[envrionmenet]] property that reference the lexical enverionement 

in that case the lex env is still reachcavle even afther completion of the function 
so it styas alive


*/

{
    function f(){
        let value = 123;

        return function(){
            console.log(value);
            
        }
    }

    let g = f(); // g.envronement stores a refrecne to the lex env of the corrresponding f() call 

}

/*
if f() called many times and resultion function are saved then all coressponding lex env object 
will also be retained in meory 

*/


{
    function f(){
        let value = Math.random();
        return function () {
            console.log(value);
        }
    }
    let arr = [f() , f() , f()];
    // 3 func tion in arrays every one of them linkes to lex env from correspoing f() run 
}

/*
a lex env object dies when it becomes unreachable 
it exist only while therest at least one nested function referencing it 

*/


{
    // in this caode after nested function is removed , its enclosing lex env is cleaned from memory

    function f(){
        let value = 123;
        return function(){
            console.log(value);
        }

    }
    let g = f(); // while g function exists the values stays in memory
    g = null; // and now the moery is cleaning 


}


{
    /*
    Real life optmizations 
    while a function is alive all outer var are also retained 
    but in practice js tries to optimize that 
    they analyze variable usage and if its obvious from the code that an outer var is not used 
    then its removed 


    an imporant side effect in v8 (chrome,edge,opera) is such variable will become unavaialble in debugging 
    */

    function f() {
        let value = Math.random();
      
        function g() {
          debugger; // in console: type alert(value); No such variable!
        }
      
        return g;
      }
      
      let g = f();
      g();
}

{
    let value = "Surprise!";

function f() {
  let value = "the closest value";

  function g() {
    debugger; // in console: type alert(value); Surprise!
  }

  return g;
}

let g = f();
g();

}

// this above is feature and not bug 

// tasks 1 
// does a function pickup latest changes   

{

    let name = "john";

    function sayHI(){
        console.log("hi " + name);
    }
    name = "pete";

    sayHI(); 

    // a function gets outer variable as they are now it use most recent value 
    // when a function want varialbe it takes the current value from its own lex env or the outer one 

}


// task 2 
// which variables are available 

{
    function makeWorker(){
        let name = "pete";

        return function(){
            console.log(name);
        };
    }

    let name = "john";

    let work = makeWorker();

    work();
}

/*
the global lex env has 
name : "john",
makeWorker : function
outer : null

the inner lex has 
name : "pete"
function 
outer : global lex

the return function env lex 
empty 
outer : inner lex 

as the return function env lex has found the 
in outer then it would more further 


*/


// tassk 3 
// are counter independent

{
    function makeCounter(){
        let count = 0 ;
        return function(){
            return count++;
        };
    }
    let counter = makeCounter();
    let counter2 = makeCounter();

    console.log(counter());
    console.log(counter());

    console.log(counter2());
    console.log(counter2());

    // 0 1 0 1 
    // because function counter and counter2 are createdy by difference invocations of makeCounter
    // so they have indepependet outer lex env each on has it onw count

    
}


// tasks 4 
// counter object 

{
    function Counter(){
        let count = 0;
        this.up = function(){
            return ++count;
        };

        this.down = function(){
            return --count;
        };
    }
     counter = new Counter();
     // as we used constructor function then the varialbe is private to each instance 

    console.log(counter.up());
    console.log(counter.up());

    console.log(counter.down());
    console.log(counter.up());

    
}


// task 5 
// function in if 
{

    let phrase = "Hello";

    if(true){
        let user = "JOhn";
        function sayHi(){
            console.log(phrase + " " + user);
        }
    }

    sayHi();
    // error in strict mode
    // as sayHi() is a block scoped cant access it outside if block 



}

{
    "use strict";

let phrase = "hello";

if(true)
{
    let user = "john";

    function sayHI()
    {
        console.log(phrase + " " + user);
        
    }
    sayHI();
}
// this works using closure and all where outer vairalbe is accesisble inside 


}

{
    "use strict";

let phrase = "hello";

if(true)
{
    let user = "john";

    function sayHI()
    {
        console.log(phrase + " " + user);
        
    }
  // till here sayHi is reachable and user too 
}
sayHI();

// sayHI is not accessible as we have scope 

}


// tasks 6 
// sum with closures 
{

    function sum(a){
        return function (b){
            return a +b  ; //taskes a from outer lex env 
        }
        
        
        
    }

    console.log(sum(1)(2));
    console.log(sum(4)(3));  

}

// task 7 
// is Varaiable visisble 

{
    let x = 1;
    function func(){
        console.log(x);
        // let x = 2;
        //cant access before intialization
        
    }
    func();
}

// tasks 8 
// filter throuhg fucntion 

{
    let arr = [1,2,3,4,5,6,7];

    function inBetween(a,b)
    {
       return function (x){
        return x >=a && x <=b;
       };
    }
    
    function inArray(values)
    {
        return function(x)
        {
            // for(let key of values)
            // {
            //     if(x == key) return x ;
            // }

            return values.includes(x);
        }
    }

    console.log(arr.filter(inBetween(3,6)));
    console.log(arr.filter(inArray([1,2,10])));
    
    
}

// tasks 9 
// sort by field 

{
    let users = [
        {name : "ratik",age : 23,surname : "dongre"},
        {name : "pete", age : 42, surname : "peterson"},
        {name : "Ann", age : 15, surname : "hatway"},
    ];

    // users.sort((a,b) => a.name > b.name ? 1 : -1);
    // console.log(users);
    
    // users.sort((a,b) => a.age > b.age ? 1 : -1);
    // console.log(users);
    
}

{
    let users = [
        {name : "ratik",age : 23,surname : "dongre"},
        {name : "pete", age : 42, surname : "peterson"},
        {name : "Ann", age : 15, surname : "hatway"},
    ];

    function byField(key){
       
            // return (a,b) =>a[key] > b[key] ? 1 : -1;
            return function(a,b){
                return a[key] > b[key] ? 1 : -1;

            }
        
    }

    users.sort(byField('name'));
    console.log(users);
    
    users.sort(byField('age'));
    console.log(users);

    


}


// tasks 10 army of function 
{
    function makeArmy(){
        let shooters = [];

        let i =0;
        while (i < 10){
            let value = i ;
            let shooter = function (){
                
                console.log(value);
                
            };
            shooters.push(shooter);
            i++;
        }
        return shooters;
    }

    let army = makeArmy();

    console.log(army.length);
    
    army[0]();
}