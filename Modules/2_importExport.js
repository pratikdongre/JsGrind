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

import wihtout curly braces looks nicer 
acommong mistake when starting to use modules is to forget curcly braces at all 
so remeber import needs curcly braces for named exports and does not need them for the default one 

Named export                                  Defaul export 
export class User {...}                       export default class User {...}
import {User} from                            import User from ... 

techincally we may have both default and named export in a single module 
but in pracrice people usually done mix them 
a module has either named export or the default one 

as there may be at mose on deault export per file the exported entitnity 
the exported entity may have no name 

for instance these are all perfectly valid default export 

export default class {
// no class name 
constructor() {
}
}


export default function(User) {
//no function name 
alert("Hello,${user}");
}

// export a single value without making a variable 
export default['jan','feb','mar','apr','may','dec'];


not giving a name is fine because there is only one export defualt per file 
so import without curly braces know what to import 

without defualt such an export would give an erro
export class { // error! (non-defualt export needs a name )
constructor(){
}
}

*/








// the "default" name 
/*
in some situation the default keyword is used to reference the default export 

for example to export a function separetly from its definition 
function sayHi(user){
    alert("Hello",${user});
}

// same as if we added export default before the function
export {sayHi as default};

or aonther situation a module user.js exports one main default thing and a few named ones 

// user.js
export default class User{
constructor(name){
this.name = name;
}
}

export function sayHi(user){
    alert("hello",${user});
}

// here how to import the defualt export along with a named one 

// main.js
import {default as User,sayHi} from './user.js';

new User('John');

and finally if importing eveyrhint * as na object then the dfuelat property is exactly the default export 

// import * as user from './user.js';

let user = user.default;
// the default export 

new User("John");


*/


/*
a word against default export 
named export are explict 
they exactly anme whay they import 
so we have the information from them 

named exports force us to use exactly the right name to import 

import {User} from './user.js'
// imort {myUser} wont work the name must be {User}

while for a defautl export we always choose the name when importing 

import User from './user.js'
import MyUser from './user.js';
works too 

// could be import anything and it still works

so team mmember may use different names to import the same thing and thats not fgood 

usually to avoid taht and keep the code consistent 
there raule that imported varaibles should correspone to file names 

import User from './user.js';
import LoginForm from './loginForm.js';
import func from '/path/to/func.js';

still some teams ocnsider it a serious draback of default export 
so they prefer to alway use anme exports 
even if only a single is exported 
it still exported under a name wihtout default 

that also makes re export a a easier 
*/

// Re-export 
/*
Re-export sytnax export .... from allows to import things and immediately export them 
(possibly under another name ) like this 

export {sayHi} from './say.js'; // reexport sayHi
export {defautl as User} from './user.js'; // re-export default 

why would that be needed 
imiaign we weriign a package 
a folder with lot of moudles with some of the fucntionaly exported outside 
(tools like npm allows us to publich and distriubte such packeages but we dont have to use them)
and amny modules are just helpers for internal use in the other package modules 


the fiel strucutre could be like this 

auth/
    index.js
    user.js
    helpers.js
    test/
        login.js
    providers/
        github.js
        facebook.js
        ...

 we like to exposet the package functionaliy via a single entry point 
 in other words a person who would like to use our package should import only from the main fiel 
 auth/index.js       

 import {login,logout} from 'auth/index.js';

 the mian fiel auth/index.js exports all the functionality that we liek to provide in our package 
 the idea is that outside ,other programmer who use our package shoould not medle with iter internal struccture 
 seach for fiel inside our pacakgae folder 
 we export only what necessary in auth/index.js and keep the rest hiddern from prying eyes 


 as actual exported functinality is scattered among the package we can import it into auth/index.js and export from it 

 // auth/index.js

 // import login/logout and immedeiately export them 
 import {login,logout} from './helper.js'
export {login,logout}

// import defautl as user and export it 
import User from '../user.js';
export {User};

now user of our package can import {login} from "auth/index.js"

the syntax export ... from is just a shorter notation for such import -export 

// auth/index.js

reexport login/logout
export {login,logout} from './helper.js';

// re export default export as user 
export {default as User} from './user.js';


the notable difference of export ... from compated to import/export 
is that reexportd modules arent avaialbe in the current file so inside the aove ex of auth/index.js 
we cant use reexported login/logout functions 


*/


// Reexporting the deafult export 
/*

the default export need separate handling when re exporting 

we have user.js with the export default class User and would like to re export it 

// user.js
export defualt class User {
}
we can come across two problems with it 
1. export User from './user.js' wont work 
that would lead to a syntax error 
to re export the default export we have to write export {default as User}

2. export * from './user.js' re export only named exports but ignores the default one 
if we like to re export both named and defualt export then to statemnt are needed 
export * from './user.js';
export {default } from './user.js';

such oddiities of re exporting a defualt export are one of the reason why devs sdont lke default exports and prefer named ones 

*/

// Summary 
/*
before declaration of  a calss/function
export [default] class/function/variable

standalone export 
export {x [as y],...}

reexport 
export {x [as y],...} from "module"
export * from "module" (Doesnot re export default)
exoirt {default [as y]} from "module"(re export default)

import 
importing anmed exports 

import {x [as y],...} from "Moudle"

importin the defualting export 
import x from "Module"
import {default as x } from module 

import all 
import * as obj from "module"

import the module but do not assign any of its export to variables 
import "module"


we can pt import/statemtn at the top or at the bottom of a script 
that does not matter 
so techinallc 

sayHI();

import {sayHi} from './say.js'
// import at the end of the file 

in practice imports are usually at hte start of the file 
but thats only for more convienece 

to note that import/export statment dont wokr if inside {..} scope 

a condiatoianl import like this wont work 
if (something) {
import {sayHi} from './say.js';
// error import must be at th top level 
}


but whta if we really need to import something conditionally 
or at the right time 
like load a module open requrest 
what its really needed 
stay tune for knowing that 

*/