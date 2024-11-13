// primitives are not object 
// but js allows us to work with primitives just like object 
// like they provide methods to call as such.

/*
a primitie is a value of primtive type 
7 primtives :- string,boolean,number,null,undefined,bigint,symbol

an ojbject is capable of storing multiple values as properties 
can be created with {}, for instance
{
    name : "john",
    age : 20
}

there are other kind of objects 
like javascript functions 

one of the best things of objects is that we camn store a function  as one of its properties 

let pratik = {
    name : "pratik",
    sayHi : function(){
        alert("hi buddy");
    }
};

pratik.sayHi();

many built in objects alreadys exist, such as those that work with dates ,error, Html Element,,etc
they have different properties and methods 

objects are heavier than primitives, they require additional resources to support the internal machinery



*/


/*

a primitive as an object

-- the paradox faced by the creator of js
there are many things one want to do with primitives like a string and number
it would be great to acess them using methods 

solution for this 
primitive is a still primitives , a single value as desired 
the lanagues allow access 

the language allow acess to methods and properties of string,booleans and number , symbol, bigint
in order for that to work 
a special object wrapper that provies the extra functionality is created
and then is destroyed

the object wrapper are different for each primitive type and are called 
String, Number, BigInt, Symbol, Boolean
for instance , there exists a string method str.toUpperCase() that returns a capitalised str 



*/

let str = "hello";
console.log(str.toUpperCase());

/*
simple right 
here what happened
 1. the string str is primitive , so in the moment of accessing its property , special object is created that 
 knows the value of the string and has the useful methods like uppercase 
 2. that method runs and returns a new string 
 3. the special object is destroyed, leaving the primitive str alone

so primitive can provide methods and still remain lightweight

the javscript engine highgly optimizes this process.
it may even skipp the creation of the exra objet at all 
but it still adhers to the speicifcation and behaves as if it creats one


*/

/*

a number has methods of its own
for instance tofixed(n) rounds the number to the given precision

*/

let n = 1.54654;
console.log(n.toFixed(3));



/*
to note that constructos string/number and boolean are for intenral use only

some lang liek java allows us to expliciity create wrapper objects for primitves using a syntax like 
new Number(1)
new Boolean(false)

it can be done with js also but unrecommend as things go bizzare 



*/

console.log(typeof 0); // number

console.log(typeof new Number(0));// object

/*
objects are always truthy in if 

*/

let zero = new Number(0);
if(zero)
{
    console.log("zero is truthy");
}

/*
on the other hand using the same function string/number/boolean without new is totally fine 
the convert the convert the value to the corresponding type : to a string,number, or a boolean

for instance
*/
let num = Number("223");// convert string to number


/*
null and undefined primitves are spceail they dont have wrapper objects
and provides no methods 
in a sense they are most primtive 


an attempt to acces property of such prmivits would case erro 
console.log(null.test);// method hi nahi hai to phir kya hi

*/



/*
summary 
primivtes except null and undfined provid many helpful methods 
formally these methods works via tempoary objects 
but js engines are well tuned to optimze that internally,
so they are nore expensive at all
*/

//tasks

// can add a stirng property ? 
str = "hello";
str.test = 5;
console.log(str.test);
// undefined in no strict mode 
// erro in strict mode 

/*
When a property of str is accessed, a “wrapper object” is created.
In strict mode, writing into it is an error.
Otherwise, the operation with the property is carried on, the object gets the test property, but after that the “wrapper object” disappears, 
so in the last line str has no trace of the property.

which means can add additiona propeteis to wrapper object 
but only builtin methods and properties ones are accesislbe 
*/




