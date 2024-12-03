// as we know from garbage collection , javascript engine keeps a value in memory while it is reachable 
// and can potentially be used 

let john = {name : "John wick"};
//            |
// the       obj can be accessed , john is the reference to it 

john = null;
// overwrite the referecne 

// the object {name : "john wick"} will be removed from the memory

// usually, properties of an object 
/* or elment of an array 
   or another data structure are considere reacahble and kept in memoery while that data strucutre is in memory 

   for instance if we put an object into an array then while the array is alive the object will be alive as well
   even if there are no other reference to it 

*/

 john = {name : "pratik" };
 let array = [john];

 john = null;
 console.log(array); // we would still be able to see john object inside the array as the array is alive but john the object has died

 /*
similar to that if use an object as the key in a regular map then while the map exists that object as well 
it occupies memory and may not be garbage collected 


 */

john = {name : "John"};

map = new Map();

map.set(john,"...");

john = null;

console.log(map.entries());


// WeakMap is fundamentally differenct in this aspect 
// it doesnt prevent garbage collection of key objects 

// WeakMap 

let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj,"ok"); // wokrs fine (obj key)

// weakMap.set("test","oh no"); //  cant use a string as the key 
// error cause test is not an object 

// now if use an object an ojbect as the key in it and there are not other reference to that object 
// it will be removed from memoery and from the map automatically

john = {name : "john wikc"};
weakMap = new WeakMap();

weakMap.set(john,"...");

john = null;

console.log(weakMap);
// we dont have john in here 


// compare it with the regualr map example above 
// now if john only exist as the key of WeakMap - it will be automatically deleted from the map and memory

// WeakMap does not support iteration and methods keys() values () , entries()
// so thers no way to get all  keys or values from it 

// WeakMap has only follwing methods 
// weakMap.set(key,value)
// weakMap.get(key)
// weakMap.delete(key)
// weakMap.has(key)

// why such a limitation 
/*
if an object has lost all other reference 
and then it is to be garbage collection automatically 
// but techincally its not exactly specified when the cleanup happens 

the js engined decided that 
it may choose to perform the memory cleanup immedaitely or to wait 
and do the cleaing later when more dletion happen

so the current element count of a weakmap is not known

the engine may or may not have clean it 
so that is why 
methods that access all keys/values are not supported 

// now where do we need such a data structure 


use case : addtional data 
the main area of application for WeakMap is an additional data storage 

if we are working with an object that belongs to another code 
and would liek to store some data associated with it 
that should only exist while the object is alive 
then weakMap is exactly what needed

we puthe data to a WeakMap using the object as the keye and when the object is garbae collection tthe data will automcaitcally disapper as well

weakMap.set(john,"secret documents");

// if john dies , secret docuemtn will be destoryed automatically

we have code that keeps a  visist count for users. the inforamtion is stored in a map 
: user object is the key and and the visit count is the value 

when a user leaves (its object gets garbage collected ) we dont want to store therei visiut count anytmore 

*/

// visitCount.js
let visitCountMap = new Map(); // map : user => visits count

function UserCount(user){
   let count = visitCountMap.get(user) || 0;
   visitCountMap.set(user,count+1);
}

// main.js

 john = {name : "john"};

UserCount(john);

john = null;

// now john object should be garbage collected but remains in memory as ites key in Map (VisitCountMap)

// but we need to clean visitCountMap when we remove users , otherwise it will grow in memory indefinetly 
// such cleaning can become a tedious tasks in complex architectures 

// we can avoid it using WeakMap

visitCountMap = new WeakMap();

function countVisitor(vistor){
   let counter = visitCountMap.get(vistor) || 0;
   visitCountMap.set(vistor,counter +1);
}
john = {name : "pratik"};

countVisitor(john);


john = null;

// now we dont have to clean visitcountmap 
// after join becomes unreachable by all means execpet as a key of WEakMap, ite gets removed from memory
// along with the information by that key from WEakMap

// use case  Caching :

/*
another example is Caching. we can store "cache" results in a function ,so that future calls oon the same object can reuse it 
*/
// to acheive that we can use Map(not optimall tho)

let cache = new Map();

function process(obj){
   if(!cache.has(obj)){
      let result = obj;
      cache.set(obj,result);
   }

   return cache.get(obj);
}

 obj = {name : "pr"};

let result1 = process(obj);

let result2 = process(obj);

obj = null;

console.log(cache.size); // see we still have 1 the object is still in cache

// for multiple calls 



