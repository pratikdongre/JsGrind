// constructor,operator "new"

/*
the regualr {...} syntaxt allows us to create one object 
oftem times we need to create multitple similar object 
like multipel users or items and so on 

that can be done using constructor function and the "new" operator 

constructor function techincally are regular function 
ther are two conventions tho
1. they are named with capital letter first 
2. they should be executed only with "new" operator 

let see example

*/

function User(name) {
    
    this.name = name;
    this.isAdmin = false;

}

let user = new User("pratik");

console.log(user.name);
console.log(user.isAdmin);

/*
when a function is executed with new operator 
it does following steps 

1. A new empty object is created and asisgned to this 
2. a function body executed usually it modifies this,adds new properties to it 
3. the value of this is returned 


*/

/*
function User(name) {
    // this = {} ;// implicitly when called via "new" operator 
    this.name = name;
    this.isAdmin = false;

    // return this ; // implicit

}

*/


let correctUser = new User("pat");

for(key in correctUser)
{
    console.log(correctUser[key]);
}

// if want to create other users we could just call 
// new User("ann")

// much shorter than using literals 
// thats the main purpose of constructor - to implement reusable object creation code 

/*
any function execpt arrow function as they dont have "this" can be used as constructor
it can be run with "new" and it will execute the algorithm above 
// the capital letter first is common to make it clear that function is to be run with new 


*/

/*
while creating comple object we encapsulate it 
like 
let user = new function (){
    this.name = "pratik",
    this.age = 30,

    // other code for user creation 
    // maybe complex logic and statements 
    // local variable and stuff 

    // complex logic 
    let tempPassword = generateTempPassword();
    if (tempPasswordIsValid(tempPassword)){
        this.password = tempPassword;
    } else {
     this.password = "defaultPassword";
    }

    // private variable, not accessible outside 
    let secretkey = generateSecretKey();

    // method to get the secrete key (optional)
    this.getSecretKey = function (){
    return secretKey;
    };
    
}

the constructor cant be called again because it is not saved anywhere
just created and called
so this trick aims to encapsulate the code that constructs the single object without future reuse 



*/

// we can check whether the object was created using new or 
// inside a function using special new.target property 
// undefined for regular calls and equal the function if called with new : 

function Check(){
    console.log(new.target);
    
}

Check(); // undefined 

new Check(); // [Function : Check]


// new.target 

function Uzer(name){
    // here we check whether the object is created using new or not 
    if(!new.target){
        return new Uzer(name);
    }
    this.name = name;
}

let priye = Uzer("priye"); // here we aint using new operator so regular call 

console.log(typeof priye); // object 

console.log(priye); // we got object 


// return from constructors 
// so usually constructors do not have return statement as 
// we have seen that implicity put everything into this and return this 

// if there is return statement then the rule is simple 

/*

if return is called with an object then the object is returnd instead of this 
but if retrun is called with a primitie then its ignored and "this" is returned as usual

*/

function pyarDo(){
    // this = {}; implicitly 
    this.name = "PyarLo";

    return {
        surname : "PyarDo"
    }

    // return this ; implicit if not already exist 
    // return object but we have here right 
}


let saved = new pyarDo();
console.log(new pyarDo().surname);
console.log(saved.surname);
// object is returned as we have explicitly mentioned 


// let see example of primitive return or empty return 

function Dhano(){

    this.name = "dhano";
    // return ; // this means return this ;
    return 5 ; // primitive return get ignored i dont know anything about getting ignored


}

let appkyahoga = new Dhano();
console.log(appkyahoga.name);


// so we dont need to use return with constsructor / we just discoverd it nature's if we do 

// by the way 
// we can omit() after new 
/*
new Dhano();
same as 
new Dhano; // not good style but yeah we can do 

*/

//so constructor gives us flexiblity like we can have parameters that tells how to construct the object 
// of course we can add to "this" object not only properties but methods as well 


/*
pratik = {
name : "pratik",
songListenting (){
    console.log(this.name +" listening to teri aakhein bhool bhoolaiyan");
    }

}
*/


function Songs(name)
{
    this.name = name;
    this.listeningTo = function() {
        console.log(`${this.name} song is playing `);

    }
}


let hareRam = new Songs("hareRam Hareram");
hareRam.listeningTo();



/*
summary 
constructor function are regular function but theres a common agreemnt to name them with capital letter first 
and constructor functin should only be calld using "new"
such call implied creation of emtpy this object and return "this"

we can use constructor function to make multiples similar object 
*/





