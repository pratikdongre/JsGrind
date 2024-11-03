// the fundamental difference between object and other primitve data type is 
// object is copied by reference 
// where as other primitve data type are copied by value 

let message = "hello";
let phrase = message;
// here we got copy of message 
// so if we change message value to something other 
// that wont change a shit about phrase now 

// so we got two box 
/*
first box message stores "hello"
second box phrase stores "hello"
*/


// where as in object 
/*
the object is stored somewhere in the memory 
the variable only has the address/reference to it 
so when a object is copied 
it copies  the reference to the object 


*/


let user = {
    name : "John",
    age : 30,
}

let admin = user ;

admin.name = "Rock";

for(key in user)
{
    console.log(user[key]);
}


// so now we have two variable refernecing toward the same object 

// we may use admin or user to access/delete/add properties to the object 
// its like if we had one cavinte with two keys


// comparison by reference 

// two objects are equal only if they are referencing to same object 
// even if objects might contain same value and got different references 


let a = {};
let b = a ;

console.log(a==b);
console.log(a === b);

let x = {};
let y = {};

console.log(x==y);
console.log(x===y);

/*
for comparison like obj1 > obj2 
for comaparison against a primitive obj == 5
objects are converted to primitives
// study later  

*/

/*
const object can be modified
*/


// cause when we case object is assigned 
// that means it has been assigned to variable that is const 
// at any further stage the var cant be assigned to anything else ;
// but properties could be changed


const Agent1 = {
    name : "john",

}

Agent1.name = "John Wick";
// modified

console.log(Agent1.name);



// cloning and merging 


// copying an object variable would create one reference to the object 

// what if we need duplicate of an object 
// we can create a new object and replicate the strucutre of the existing one,
// by iterating over its properties and copying them on its primtive level


let clonedUser = {};
// empty object 

for(let key in user)
{
    clonedUser[key] = user[key];
}

user.name = "John wick";

for(let key in clonedUser)
{
    console.log(clonedUser[key])
}

// here clonedUser is independent of user object 
// both have different references 


// we could use another method 
// object.assign 
// object.assign(dest,....sources)

// the first argument dest is the target object 
// the rest further arguments is a list of source objects 

// it copies the properties of all objects we mention to the destination object 
// and return it as the result 

let user1 = {
    name : "pratik",

};

let songs = {
    song1 : "babuji zara dhere chlo",
}

let permission1 = {
    canView : true,
}


for (let key in user1 ){
    console.log(user1[key]);
}

Object.assign(user1,songs,permission1);

for (let key in user1 ){
    console.log(user1[key]);
}


// apart from using for loop to clone 
// we can use object.assign to perfom simple cloning 


let clonedUsingOBjectAssign = Object.assign({},user1)

for(let key in clonedUsingOBjectAssign)
{
    console.log(`cloned again :- ${clonedUsingOBjectAssign[key]}`)
}


// cloning methods 
// either we use for loop to run over all properties and create copy of those 
// or could use object.assign()


///// nesting cloning 
// object inside object 
// till now we have that all peroperties of object are primtivie 
// but properties can be reference to other objects

 user = {};
let clone = {};

user = {
    name : "pratik",
    inches$kg : {
        height : 5.11,
        weight : 51,
        d8ck : 6,
    }
};

console.log(user["inches$kg"].height);
console.log(user.inches$kg.d8ck)


// how do we clone the user 

clone = Object.assign({},user);

// object.assign would duplicate only the primitve ones 
// it does not work in nested cloning , if there are nested objects 

console.log(user.inches$kg.height === clone.inches$kg.height);

// here clone is referring to same inches$kg 

user.inches$kg.height = 8;

console.log(clone.inches$kg.height); // 8 
// because refering is same not duplicate 


// so to fix this and make user and clone truly separate object 
// we should use deep cloning 

// we have strucutredClone(object) that clones al lthe nesterd properties 


clone = {};

clone = structuredClone(user);


// point === return true for objects it has exact same instance in memory


console.log(`if clone and user object are having same reference :- ${user===clone}`);

console.log(`if clone.inches$kg and user.inches$kg are having same referene :- ${user.inches$kg === clone.inches$kg}`);

console.log(`if clone.inches$kg.height and user.inches$kg.height are having same referene :- ${user.inches$kg.height === clone.inches$kg.height}`);
// this is primtive value 
// in primitive type === only checks for type and value and not necessarily reference 


// after using strucutureClone which is for deep cloning 
// all objects be it nested ones are now duplicate 
// and independently have different reference 


// circular reference 

user = {};
user.me = user;
// we have created me variable inside user object 
// me reference the user itself 


clone = structuredClone(user);

console.log(clone.me === clone );
// clone.me === clone // true 

// but there are cases when strucutreCLone fails 
// for isntance when an object has a function property 


structuredClone({
    f : function(){

    }
});


// summary 

/*
object are assigned and copied by reference 
a variable stores not object but reference to it 

so copying such a variable or passing it as a function copies the reference not the object 

all operation like add/delete properties are performed on the same single object if 
copied via copied reference 

to make a realcopy(clone) we can use loop over the properties and copy each one at primitive level 
or use object.assign() for the so called shallow copying 
(nested objects are copeid by reference)

or deep cloning where the nested boejct are also get duplicated not having same reference 
using strucutedClone(object)



*/