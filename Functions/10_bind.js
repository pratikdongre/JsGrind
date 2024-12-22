// function binding

// when passing object method as callbacks 
// for instance setTimeout theres known problem as losing this 

// losing this 
// we have seen this once a method somewhere separately from the object this is lost 

{
    let user = {
        firstName : "Pratik",
        sayHi(){
            console.log(`hello ${this.firstName}`);
        }
    };

    setTimeout(user.sayHi,1000); // hello undefined

    // because the setTimeout got the function user.sayHi seperately from the object 
    // let f = user.sayHi;
    // setTimeout(f,1000);
    // it could be writtent like this 
    
    
}

/*
the method setTimeout in browser is a little special it set this = window for the function call 
for nodejs this becomes the timer object 
so for this.firstName  it tries to get window.firstName which does not exist 
in some other cases this just becomes undefined

the task is quite typical 
we want to pass an object method somehwer else (in this case to the scheduler) where it be called 
how to make sure that it will be called called in the right context 

*/


// sol 1 wrapper 

{
    let user = {
        firstName : "John",
        sayHi(){
            console.log(`Hello, ${this.firstName}`);
        }
    };

    setTimeout(function(){
        user.sayHi();
    },1000);

    // it works becaue it recives user from the outer lexical env and then calls the method normally 
}

// sol 2 we can use arrow function as it does not have its own this and inherit it from the surrounding context 

{
    let user = {
        firstName : "monu",
        sayHi(){
            console.log(`HEllo ${this.firstName}`);
        }
    }
    setTimeout(()=> user.sayHi(),1000);
}

{
    // what if before setTimeout triggers user changes value 
    // then suddenly it will call wrong object 

    let user = {
        firstName : "prat",
        sayHi(){
            console.log(`hey ${this.firstName}`);
        }
    };

    setTimeout(()=> user.sayHi(),1000);

    // ... the value of user changes withing 1 sec 

    user = {
        sayHi(){
            console.log(`Hey cat is screaming`);
        }

    }

    // see user canges and we got hey cat is screaming 

}


// solution 3 : Bind
// function provide a builtint method bind that allow to fix this 

{
    // let boundFunc = func.bind(context);
}

// the result of func.bind(context) is a special function like exotic object that is callbable as function and 
// transparently passes the call to func setting this = context 

// in other words calling boundFunc is like func with fixed this 

// funcUser passees a call to func this= user 
{
    let user = {
        firstName : "bilz"
    };

    function func(){
        console.log(this.firstName);
    }
    let funcUser = func.bind(user);
    funcUser();
}

// all arguments are passed to og funcs 

{
    let user = {
        firstName  : "chinamma",
    };

    function func(phrase){
        console.log(phrase + ',' + this.firstName);
    }

    let funcUser = func.bind(user);

    funcUser("Hello");
}

{
    let user = {
        firstName : "don",
        sayHi(){
            console.log(`HEllo , ${this.firstName}`);
        }
    };

    let sayHi = user.sayHi.bind(user); // ***

    // can run it whitout an object 
    sayHi();

    setTimeout(sayHi,1000);

    

     // even if the value of sue cahnges within  1 sec
     // sayHi ues the prebound value which is refference to the old user object 
     user = {
        sayHi(){console.log("Wont reach here ");}
     };

     // *** we take the method user.sayHi and bind it to user .
     // the sayHi is a bound function that can be called alone or passed to setTimeout 
     // the context will be right every single time because we have bind it 

}


// we can see that arguments are passes as is only this is fixed by bind 

{
    let user = {
        firstName : "sunjiya",
        say(phrase){
            console.log(phrase + " " +  this.firstName);
        }
    };

    let say = user.say.bind(user);

    say("hello");
    say("bye");
}

// bindAll
// if an object has many method and plan to actively pass it around then we could bind them all in a loop

{
    let user = {
        firstName : "sunjiya",
        say(phrase){
            console.log(phrase + " " +  this.firstName);
        }
    };

    for(let key in user){
        if(typeof user[key] == 'function'){
            user[key] = user[key].bind(user);
        }

    }
    // js libraries also provide function for convienet mass bind 
    // eg _.bindAll(object,methodNames) in lodash
}

// partial function
// we can bind not only this but also argument 
// that rarely done sometimes handy

// let bound = func.bind(context , [arg1], [arg2], ...);

// it allows to bind context as this and starting argument of the function 

// for instance we have a multiplication function mul(a,b)

{
    function mul(a,b){
        return a * b ;
    }

    // let use bind to create a function double on its base 
    
    let double = mul.bind(null,2);

    /*
    double = function double(b){
                return mul(2,b);
                }
    */

    // console.log(double(3));
    console.log(double(3));

    console.log(double(4));
    console.log(double(5));

    // the call to mul.bind(null,2) creates a new function double that passes calls to mul , fixing null as the context 
    // and 2 as the first argument 

    // thats called partial function application

    // we create a new function by fixing some parametes of exisitng ones
     
    let triple = mul.bind(null,3);

    console.log(triple(3));
    console.log(triple(4));
    console.log(triple(5));


}


/*

why do we usually make partially function 
the benefit is that we can create an independent function with a readable name (double,triple)
we can use it and not provide the first argument as it already fixed with bind

in other cases partial application is useful when we have a generic function 
and want a less universal variant of it for the convenience 

for instace we have a function 
send(from,to,text)
then inside a user object we may want to use a partial variant of it 
send(to,text) that send from the current user 


*/


// Going Partial without context 

/*
what if we like to fix some arguments but not the context this ?
for example for an object method 
the native bind does not allow that 
we cant just omit the context and jump to arguments

fortunately a function partial for binding only arguments can be easily implemented 

*/
{
    function partial(func,...argsBound){
        return function(...args){
            return func.call(this, ...argsBound, ...args);
        }
    }

    let user = {
        firstName : "Pratik",
        say(time,phrase){
            console.log(`[${time}] ${this.firstName} : ${phrase}`);
        }
    };

    user.sayNow = partial(user.say, new Date().getHours() + ":" + new Date().getMinutes());

    user.sayNow("Hello");
    user.sayNow("Whatsapp");

    /*
    the result of partial(func[,arg1, arg2...])
    call is a wrapper that calls func with 

    same this as it gets (for user.sayNow its user)
    then gives it ...argsBound - arguments from the partial call (12:00)
    then gives it ...args - arguments given to the wrapper ("Hello")
    
    so easy to do it with spread syntax right 

    also there's ready _.partial implemntation from lodash lib 
        
    )

    */
}

/*
summary 
Method func.bind(context,...args) returns a bound variant of function func that gives the context this and first argument is given 

usually we apply bind to fix this for an object method so that we pass it somewhere 
for example to setTimeout

when we fix some arguments of an existing function the resulting less universal function is called 
partially applied 

partials are convinient when we dont want to repeat the same argument over and over again 
like  if we have send(from,to) function 
and from should always be same for our tasks 
we can get a partial and go on with it 


*/

// task1 
// bound function as method 
{
 function f(){
    console.log(this);
 }
//  f();
 let user = {
    g : f.bind(null)
 };
//  user.g();

 // the context of a bound function is hard-fixed 
 // there is not way to further change it 
 // so even while we run user.g(),
 // the orginal function is called with this = null;


 
}


{
    function f(){
        console.log(this);
    }

    // f();

}


// tasks 2 
// second bind 
// can we change this by addtional setting 

{
    function f(){
        console.log(this.name);
    }
    f = f.bind({name : "John"}).bind({name : "ann"});

    f();

    // john 

    // the exotic bound function object return by f.bind(...) remebers the context 
    // and argument if provided only at creation time   
    // a function cannot be rebound
}

// task 3 
// function prorpety after bind 
{
    function sayHi(){
        console.log(this.name);
    }

    sayHi.test = 5;

    let bound = sayHi.bind({
        name : "john"
    });

    console.log(bound.text); // undefined 

    // the result is undefined
    // the result of bind is another object 
    // it does not have the test property 
}

// task 4
// fix a function that loses "this"

{
    function askPassword(ok,fail){
        // let password = prompt("Password ?","");
        let password = 'rockstar';
        if(password == "rockstar") ok();
        else fail();
    }

    let user = {
        name : "John",

        loginOk(){
            console.log(this.name + " Logged in ");
        },

        loginFail(){
            console.log(this.name + " Logged out");
        },
    };

    // askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
    askPassword(() => {user.loginOk()}, ()=> {user.loginFail()});

    // arrow function 
    // its a bit less reliable in more complex situation where user variable might change after 
    // askPassword is called but before the visitor answers and calls ()=> user.loginOk()
}

// task 5 
// partial appliaction for login
{
    function askPass(ok,fail){
        let password = "itwaseasy";
        if(password == "rockstar") ok();
        else fail();
    }

    let user = {
        name : "pratik",
        login(result){
            console.log(this.name + (result ? ' logged in' : ' failed to login in '));
        }
    };

    askPass(user.login.bind(user,true), user.login.bind(user,false));
}
