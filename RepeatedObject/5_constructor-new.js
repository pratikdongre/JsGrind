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