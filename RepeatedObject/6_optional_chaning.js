// optional chaning ?. 

/*
the optional chaning ?. is a safe way to access nested properties 
even if intermediate properties does not exsit 

the non existing proprety proble 

let say we have user object that hold the information about users 
like user.address.street
but some of then did not provide adress 
we would get error we would prefer undefined 

// document.querySelector('.elem') is null if there's no element
let html = document.querySelector('.elem').innerHTML; // error if its null 
null.innerHTML gives error right 


error error error i avoid 
error likes me i cant avoid 
*/
let user = {
    
};
// console.log(user.address.street); // error


/*
we prefere getting undefined instead of erro
how to do that 

// using ? or if might work
*/

user = {
address : "nagpur"
};

if(user.address)
{
    console.log(user.address.street);
}

else console.log(undefined);
// problem big code 

console.log(user.address ? user.address.street : undefined );
// shorter code than before but still repeatability

console.log(user.address);
console.log(user.address.street);


// same we can do in wepage element also 
// let html = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : undefined;

// but this is not elegant and we have repetition 
// and it beomes more uglier if we add more deeply properties 


 user = {};

console.log(user.address ? user.address.street ? user.address.street.name : null : null);
/*
to avoid error in nested properties
 we have seen if else 
 ? ternary operator 
 let see && anding

*/

console.log(user.address && user.address.street && user.address.street.name);
// undefined 
// and ing the whoel path ensures that all proeprty exist 
// but also isnt ideal
// because property names are still duplicated 

// the best way ?. optional chaining 

/*
the optional chaining stop the evaluation if the value before ?. is undefined or null
and return undefines 

in other words 
value ?.prop

works as value.prop if value exist
otherwise when value is undefiend/null return undefined
// here the safest way to access user.address.street using ?.

*/
user = null;
console.log(user?.address?.street);
// likewise 
// let html = document.querySelector('.elem')?.innerHTML;

user = {
    street : "this",
}
console.log(user?.address?.street);


//note ?. makes optional the values before it but not any further 
/*
optional in the sense 
if you think the property is optional in your oject strucuture 
suppose some user did not provide with address and its fine then you can use ?. optinal chaiing to avoide error 


*/


// good right 

// but dont fucking overuse ?. 
// like according to our code logic user must exisit the address can be null
/*
in such case 
user?.address?.street wrong 
user must exist if it does not then its programming erro we will fixt 
user.address?.street rigt h
// address is optional 

the var before ?. must be declared 
user?.address
if use does not exist like isnot decalre using let,const,var then its erro

*/

// short circuiting 
/*
as we said before ?. immediately stops (shot-circuit)
if the left side does not exisit
so if there are any further function calls or operation on the right side they wont be made 

*/

let short = null;
let x = 0;

short?.increased(x++);
console.log(x);

// other variant ?.() / ?.[]
/*
the optional chaining ?. is not an operator but a special syntaxt construct 
that also works with functions and square brackets 



*/


let userAdmin ={
    admin(){
        console.log("hai kahan");
    }
}
let userGuest  = {};
userAdmin.admin?.();
userGuest.admin?.();  // nothing happens and the userGuest does not have admin

// ?.[] also works if we want use [] instead of .

let key = "firstname";

let user1 = {
    firstname : "john",
};

let user2 = null;

console.log(user1?.[key]);
console.log(user2?.[key]);


// also we can use it with delete 

delete user?.name;
// if it exist then delete 
// delete user.name // this would give error if it does not exist 

// we can use ?. for safe reading and deleting but not for writing 
user = null;
// user?.name = "john";
// why to do this 
// this would become undefined.name = "john"
// if user does not exsit which cause error



/*
the object chaing has three forms 

obj?.prop return obj.prop if obj exist otherwise undefined
obj.method?.() return obj.method() if obj.method() exist else undefined
obj?.[prop] return obj[prop] if obj[prop] exist else undefiend


all are easy and simple 
?. checks the left part if its null/undefine then it retrun undefined and 
allow the execution if not so 

so we should ?. only where its acceptable that the left part does not exist 
according to our logic code 
and not where we think something should /must exist so that it wont hide the programming error

*/


