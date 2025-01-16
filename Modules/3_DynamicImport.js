// dynamic imports 
/*
export and import satetemnt in prevous chapter were static
the ystnax is veyrt simple aand strict 

first we cant dynamicallyt generate parament of import 

the module path must be a priimtive string ,cant be function call 
this wont work 
import ... form getMOduleName();
// error only from ''string' is allowed 


second we cant import conditionally or at run time 
if(...){
    import ... ; // error not allowed 
}

{
    import ... ; // error we cant put import in any block
}

that becuase import /export aim to provide a backbone for the code strucute 
taht a good thing as code structure can be analyezed , modules can be gathered and bundled into one file by 
special tools , unused exports 
cabebe removed tree-shaked 
that possbile only because of import/exporst is simple and fixed 

but how can we import a module dyamically on demand?

*/

// the import () expression 
/*
the import(module) expression laod the module adn return a  promise that resolves into a moduel objects 
that contains all tis exports 
it can be called from any place in the code 
we can use it dynamically in any place of the code 

let modulePath = prompt("which module to laod");

import(modulePath)
.then(obj => <module boject>)
.catch(err => loading error if no such module )

or we coudl use let module = await import(modulePath) if inside async function 

*/

/*
export function hi() {
alert("Hello");
}

export functino bye(){
alert("Bye");
}

then dynamic import can be likt this 

let {hi , bye } = await import("./say.js");
hi();
bye();

or if say.js has the default export 

// say.js
export default function() {
alert("module loaded (export default)");
}

then iwe can use defautl property of modue object 
let ojb = await import ('./say.js');
let say = obj.default;

// or in oneline let {default : say} = await import ('./say.js');

say();
 
*/

/*

*/