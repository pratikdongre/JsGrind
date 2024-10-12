// circular reference 

let user = {};
user.me = user;
// we have created me variable inside user object 
// me references the user itself 


let clone = structuredClone(user);

console.log(clone.me === clone); // true 

// see clone.me refer to clone not user 


// but there are cases when strucutredClone fails 
// for instance when an object has a function property

// structuredClone({
//     f:function(){
        
//     }
// })




// summary 

/*
object are copied by reference 
so copying such a variable or passing 

all operation like add/delete properties are performed on the same single object if
copied via copied reference

to make a realcopy(clone) we can use Object.assign() for the so called shallow copying 
(nested objects are copied by reference )

or deep cloning where the nested objects are also copied as clone not by reference 
using strucutredClone(object)

*/