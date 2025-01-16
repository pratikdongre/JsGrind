/*

export and import 
directives have sevaral syntax variants 

*/

// export before declaration 
/*
we can lable delcaration as exported by placing export before it 
be it variable ,function or class 

*/

{
    // export let months = ["Jan","Feb","Mar","Apr","May","Aug","Dec"];
    // // export an array

    // // export a constant 
    // export const Module_became_stand_year =2015;

    // // export a class
    // export class User{
    //     constructor(name) {
    //         this.name = name;
    //     }
    // }
}

// no semicolon after export/class function

/*
export before a class or a function does not make a it a function expression 
it still a function declaration albiet exported 

most js styles guides docnt recommeneded semicolons after function or class declaration

that why thers no need for a semicolon at the end  of export class and export function

export function sayHi(user){
console.log("hello,",user);
} // no ; at the end 
*/

// export apart from declaration 
// also we can put export separately 
// here we first declare and then export 


// say.js 
/*
function sayHi(user){
console.log(user);
}

function sayBye(user){
console.log(user);
}

export {sayHi, sayBye};
// a list of exported variables 

or we could put export in front of function as well 
*/

// import * 
/*
usually we put a list of what to import in curcly braces {...}

import {sayHi, sayBye} from "./sayJs";

sayHi("john"); // hello john
sayBye("John"); // bye John

but if there a lot to import 
we can import everything as an object using import * as <ob>

import * as say from './say.js'

say.sayHi("john");
say.sayBye("john");

at first import everywthing seems good 
shorter and why we need to explicitly list of what we need to import 

well 
1. explcitly listing what to import gives shorter names 
sayHI() instead of say.sayHi()

2. explicit list of imports gives better overview of teh code structure 
what is used and where 
it makes code support and refactoring easier 


*/

// dont be afraid to import too much 
/*

modern build tools such as webpack and others bunlder modules together and otpimze them to speedup loading 
they also remove unused imports 

for instance if you import * as lib from a huge code lib and then use only few methods 
then unsused one will not be incldues into the optimized bundle 
*/

// import "as"
// we can also use as to import under different means 
// like lets import sayHi into the local variable hi for breivty and import sayBye as bye 
/*

import {sayHi as hi , sayBye as bye} from './say.js';

hi("john");
bye("john");

*/

// export 'as'
// the similar syntax exist for export 
// lets expoert function as hi and bye 

// say.js
/*
export {sayHI as hi, sayBye as bye}
*/

// now hi and bye are offical names for outsiders to be used in imports 

// main.js
// import * as say from './say.js';
// say.hi("john"); // hi john
// say.bye("john") // bye john


// export default 
/*
in practice there are mainly two kinds of modules 
1. modules that contain a lib, pack of function like say.js above 
2. modules that declare a single entity eg a module user.js exports only class User
*/

// mostly the second approach is preferred so that every thing resides in its own module 
/*
naturally that requires a lot of files as everythign wnat it own module 
but that not a problem at all actually code navigation becomes easier if files 
are well named and strucutre into folder 

modules provide a special export default ("the default expoert") syntax to make the
"one thing(couldb be a function or anything) per module" way look better 

put export default before entity to export 

*/
// user.js
/*
expert default class User {
    // just add default 
    constructor(name){
    this.name = name;
    }
}

there may be only one export default per file 
and then import it witout curcly braces 

import User from './user.js' ; // not curly brace {User} only User

new User("john");
*/