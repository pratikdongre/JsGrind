// optional chaining ?.
/*
the optional chaining ?. is a safe way to access nested object properties,
even if an intermediate property does not exist

you get the problem 
the non existing property problem 

let say we have user object 
now most user have addresses property with the stree
like user.addresses.street
but some of them did not provide them 
or in webpage we often do this 
// document.querySelector('.elem') is null if there's no element
let html = document.querySelector('.elem').innerHTML; // error if it's nul 

in suchcases we get an error
*/

let user = {};
// console.log(user.address.street); // error


// we prefer undefined instead of error
// how to do that 

// using ? or if obvious solution

user = {};

// console.log(user.address ? user.address.street : undefined);

// same we can do in webpage element also 
// let html = document.querySelector('.elem') ? document.querySelector('.elem').innerHtml : undefined;

// but this is not elegant and we have repetition
// and it becomes more uglier if we add more deeply nested properties 


// lets get user.address.street.name

user = {};

// console.log(user.address ? user.address.street ? user.address.stree.name :null :null);

// still ugly more better using && anding

// console.log(user.address && user.address.street && user.address.street.name);
// it would check if property exist if not then evlaulation stops right there
//still repritions user.address appers three times


// more better way ?. optional chaining 

/*
the optional chaining stop the evalaution if the value before ?.is undefined or null 
and returns undefined 
in other words 
value?.prop
works as value.prop if value exists
otherwise when value is undefined/null returns undefined 
//here the safest way to access user.address.street  using ?.  
*/

console.log("this one " + user.address?.street);
// let html = document.querySelector('.elem')?.innerHTML; // would give undefined

user = null ;
console.log("is this one " +user?.address);
console.log("is this one " +user?.address.street);

// note ?. makes the optional the values before it but not any further 



// good very good right / dont fucking overuse ?. 
//like according to our code logic user must exist the addreess might be null 
/*
user?.address?.street  wrong 
user must exist if it does not then its programming error we wil fix it 
user.address?.street right 


the var before ?. must be decalred 
user?.address 
if user doesnt exist like isnt declare using let,const,var
then its error 

*/


// short circuiting 
/*
as we said before ?. immediately stops(short-circuit) if the left side does not exsit 
so fi tehre are any futher function calls or oepration on the right side they wont be made 

*/

let short = null;
let x = 0;


short?.sayHi(x++) ; // the function wont reach the sayHi at all if short is null/undefined
console.log(x); // 0 


//other variant ?.() --- ?.[]
// so the optional construtor ?. is not operator but special syntax construct 
// works also with function and square brackets 

let userAdmin = {
    admin(){
        console.log("im aladin");
    }
};

let userGuest = {};

(userAdmin.admin?.()); // im alading 
(userGuest.admin?.()); // nothing happens and the userGuest does not have admin 


// ?.[] also works if we want use [] isntead of ..

let key = "firstname";
let user1 ={
    firstname : "john"
};

let user2 = null;

console.log(user1?.[key]); // john
console.log(user2?.[key]); // undefined


// also we can use it with delete 

delete user?.name; // if it exist delete 
// delete user.name; // this would give error if it does not exist 

// we can use ?. for safe reading and deleting but not writing 
user = null;
// user?.name = "john"; why to do this this would be like undefined.name = "john" 
// if user does not exist which caues error



/*
the object chaining has three forms 

obj?.prop return obj.prop if obj exists otherwise undefined  
obj.method?.() return obj.method() if obj.method exist else undefined
obj?.[prop]  return obj[prop] if obj exist else undefined 


all are easy and simple 
?. checks the left part if its null/undeifned then it return undefined and
allows the exeuction if not so


so we should use ?. only where its acceptable acocrding to our logic code that the left part does not exist 
// and not where we think something should /must exist so that it wont hide the programming error from us if they occur 
*/