// Modules 
/*
as our application grows biggers we want to split it into multipesl files so called modules 
a moduels may contain a class or a lib of a function for a specific purose 

for a long time js exsitsed without a lang lvl module syntax that wasnt problem because intially
scripts were small and simple so trhere was no need 

but eventually scripts became mroe and more complext so the community invented a variety of ways to organize 
code into modules special lib to load moduels on demand 

to name some 
amd one of the most ancient module system intially imple by the lib require.js
commonjs the module system created for node.js sever 
umd one more module system 

now these all slowly become a prt of history but we still can find them in old scripts 
*/

// what is module 
/*
a module is a just a file one script is one module 
module can load each other and use special dierectives export and import to interchange functionality call function
of one module from another one 

export keyword labels variables and function that should be accesible from outside the current module 
import allows the import of functionality from other modules 


*/

// for eg we have sayHi.js file  exporting a function 

// then this file 1_module.js may import sayHi and use it 

import {sayHi} from "./sayHi.js";
console.log(sayHi);
sayHi("pratik");

/*
the import directive loads the module by path ./sayHi.js relative to the current file 
and assings exported function sayHi to the correspoindig variable 
*/


// code module features 
// whats differenct in modules compared to regualr scripts 
// they are core features valid both for browser and server side js 

// always use strict
// modules always work in strict mode 
// assigning to an undeclared variable will give an error 

/*

<script type = "module">
    a = 5; 
</script>

*/

// module level scope 
// each module has its own top lvl scope 
/*
top lvl variables and function from a module are not seen in other scripts 

two scripts are imported and hello.js tries to use user variable declared in user.js
it fails because its a separeate module 

<script type = "module" src="user.js"> </script>
<script type = "module" src="sayHi.js"> </script>

modules shoudl export what they want to be accsible from outside and import what they need 
user.js should expoert user variable 
sayHi.js should import it form user.js module

in other words wtih modules we use import/export instead of relying on global variables 

*/

import {user} from './user.js';
// document.body.innerHTML = user;
// alert(user);
console.log("this is ",user);


// in the browser if we talk about HTML pages 
// independ top levle scrope also exists for each <script type ="module">
// 

// hwere are two script on the same page boht type= "module" 
// they dont see each other top levle variables 


/*
<script type = "module" >

// the variable is only visible in this module script 
let user = "John";
</script>

<script type = "module" >
alert(user); // user is not defined 
</script>

in the broswer we can make a variable window level global by explicitly assiging it to a window 
property 
eg window.user = "John";

then all scripts will see it both with type = "module" and without it 

that said making such gobal variables is frowned upon 
aovid em 

*/

/*
a module code is evaluated only the frist time when imported 
if the same module is imported into multiple other modules 
its code is executed only once upon the first import 

the on time evaluation has important consequences that we should be aware of 

first if execution a module code brind side effect like showing a message then importing it mulitples times 
will trigger it only once the first time 

*/
// alert.js
// console.log("MOdule is eveluated");

// import the same module from different files 

// // 1.js 
// import './sayHi.js';

// // 2.js 
// import './sayHi.js';


import './1.js'; // shows module is evaluated 
import './2.js'; // shows nothing 

/*
the second imort shows nothing because the module has already been evaluated 
there a rule top level module code should be used for initliaaedion creation of module speicif internal data structured 
if we need to make something callable multiple times 
we should expoert it as a function like we did with sayHi above 
*/


// created a module exported an object admin.js
// if this moduel is importee from ultiples files the module is only evaluated the first time 
// admin object is created and then passed to all fruther imported 

// all improted get exactly the one and only admin object 

import './1.js';
import './2.js';

// we are seeing new name 
// that exactly because the moduel is executed only one 
// export are genrated and then they are shared between imported 
/*
so if somehting changes the admin object toher importeer will see that 

such bechavior is actually very convienent because it allows us to configure modules 

like a moduel can provie a generic functionality that need a setup 
eg authentication needs credentials 
then it can export a configuration object expection the outer code to assign to it 

here the classical pattern 
1. a module export some means of configuration eg configuration object 
2. on the first import we intiliaze it write to its properties 
the top levle application script may do that 
3. furhter imports use the module

*/


/*
admine.js module may proivde certain functinaolity 
eg authenctiaont but expect the credentails to come into the config object from outside 

admin.js export the config object intially empty but may have default propertiers too 
then in init.js the first script of our app 
we import config form it and set config.user

now the module admin.js is configured 

further importers can call it and it correcty show the current user 



*/

import './Modules/init.js';

import { check } from "./Modules/admin.js";

check();


// import.meta 

/*
the object import.meta contains the informatoin about the current module 
its content depends on the env 
in the broswer it contains the url of the scirpt or a urrent webpage url if inside html 


<script type ="module">
alert(import.meta.url);
// script url // for an inline script the url of the current html page
</script> 
*/


/*
in a moduel this is undefined 
ths kinf of minor featuer 
ina mdoule top elvle this is undfiend 
compare to non moduel scripts 
wehre this is a global object 

<script>
alert(this); // window
</script>

<script type = "module">
alert(this); // undefine
</script>

*/

// browser specific featuers 
/*
ther are also several browser specific difference of script with type = "module"
compared to regulare ones 

modules scripts are deferred 
module scripts are always deferred same effect as defer attribute for both external and inline scripts 

in other words donwloading external module scripts 
<script type ="module" src ="..."> does not block html processing 
they load in parallel with other resources 

module scripts wait until the html documenet is full ready even if they are tiny and load faster than html
and then run 

relative order of scripts is mainted scripts that go first in the documeent exeucte first 

as a side effect modules scripts alway see the fully loaded html page incuding html element below them 
*/

/*
<script type = "module">
alert(typeof button); // object the script can see the button below 
// as moduels are deferred the script run after the whole page is loaded 
</script>

// compare to regualr script below 

<script>
alert(typeof button); // button is undefined the script cant see element below 
// regulare scripts run immedieatley before the rest of the pag is processed 
</script>
<button id = "button"> Button </button>
*/

/*
the second script actually runs before the first 
so we see undefined first and then object 
that because moduels are deferred so we wait for the document to be processed 
the regualr script runs immediealtey so we see its output first 

when using modules we should be aware that the html page shows up as it loaded and js module run after that 
so the use may see the apge before the js application is ready 
some funcationaliyt may not work yet 
we shoould put loading indicator or otheweise eneer that the visitor wont be confused by that 

*/

// async works on inline scripts 
/*
for non module scripts the async attribute onlys works on external scripts 
async scirpts run immediately when ready independly of othe scripts or thml docment 
for module scirpts it works on inline scripts as well 

for exg the inline scirpt below has async so it  dosnot wait for anyting 

it performs the import fetches ./analytics.js and runs when ready even if the html document is not finished yet or if other 
scripts are still pending 

that good for functinality that does not depend on anything like 
counter,ads,documentelevel event listensert 

*/


// all dependcines are fetched (analytics.js) and the script runs 
// doesnt wait for the document or other script tags 

/*
<script async type ="module">
import {counter} from './analytics.js';
counter.count();
</script>


*/


// external scripts 
// external script that have type="module" are different in two aspects 
/*
1. external scripts with the same src run only once
<the script my.js is fetched and executed only one >

<script type = "module" src= "my.js"> <script>
<script type = "module" src ="my.js"> <script>

2. external scripts that are fetched from another origin eg another site require 
cors headers 
in other words if a module script is fetched from another origin the remote server must supply a header 
access-control-allow-origin allowing the fetch 

another-site.com must supply acess control allow-origin 
toherwise the scirpt wont execute 
<script type ="module" src ="https://another-site.com">
that ensure btter security by default 
*/


// no bare moudles allowed 
/*
in the browser import must get eirther relative or absoulte url 
moduels wihtout any path are called bare modules 
such moudles are not allowed to import 

for instance 
the import is invalid 

import{sayHi} from 'sayHi'; // error bare module 
// the module must have path './sayHi.js'; or wherever the js is 


certian env like node js or bundle tools allow bare modules without any path 
as they have their own ways to finding moduels and hooks to fine tune them 
but browser do not support bare moduel yet 

*/


// compatiblity nomodule
/*
old broswers do not understand type='module' scripts of an unknow type are just ignored 
for them it is possible proive a fallback using nomodule 
attribute 

<script type ="module">
alert("runs in modern browsers ");
</script>

<script nomodule>
alert("modern browser both know type = module and nomodule");
alert("old broswer ignore script with unknow type ="module" but exeucte this );
</script>
*/

// build tools 
/*

in real life broser moudles are rarely in their raw form 
usually we bundle them togehter with a special tool as webpack
and deploy to the production server 

one of the benefits of using bundlers 
they give more control over how moduels are resolved  allowing bare modules and much like css/html modules 

build tools do the follwing 
1. take a main module the one intended to be put in <script type ="module" > in html
2. analyze its dependies import and then import of imports etc 
3. build a single file with all moduels replacing native import calls with bundler function so that it works 
special module types like html/cass moduels are also supproted 
4. in the process other transformation and optimzaitaion may be applied 
unreachel code removed 
unsuded export removed ("tree shaking")
dev specifc statemtn like consolde and debugger remved 
modern bleeding edgs js syntax mya be transformed to olde on with similar funtionality using Babel
the resulting file is minified (spaces removed ,variables replaced with shorter names etc )

if we use bundle tools then as scripts are bundled together into a single file 
import/export statement inside those scripts are replaced by spcial bundler funtion
it does required type ="module" and we can put it inot a regular scripts 

// asuming we got bundle.js from tool like webpack 
<script src= "bundle.js"></script>

that said native moduels are also usuable so we wont be using webpack here 

*/

/*
summary 
1. a module is a file 
to make import/export work 
browser need <script type="module">
modules have several differences 
deferred by default
async works on inline scripts 
to load external scripts from another origin (domain/protocol/port) cors headers are needed 
duplicate external scripts are ignored 

2. moudles have their own local top level scope and itnerchange functionality via import/export

3. modules always use strict

4. moduels code is exeucted only once 
exports are created once and shared between importers 

when we use moduels each modules implement the functionality and export it 
then we use import to directly import it where its needed 
the browser loads and evaulates the scirpt automatically

in the production people often use bundlers such as webpack to bundle modules togeher for perfromance 


*/





