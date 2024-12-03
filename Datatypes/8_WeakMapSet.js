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
      return result ;
   }

   return cache.get(obj);
}

 obj = {name : "pr"};

let result1 = process(obj);

let result2 = process(obj);

obj = null;

console.log(cache.size); // see we still have 1 the object is still in cache

// for multiple calls of process(obj) with same object it only calucates the reuslt the first time and then just takes it from cache.
// the donwside is that we need to clean cache when the object is not needed anymore 

// if we replace Map with WeakMap then this problem disappers the caches result will be removed from memory automatcailly afterh the object gets garbe collected 

cache = new WeakMap();

function process1(obj){


   if(!cache.has(obj)){
      let result = 1;

      cache.set(obj,result);
      return result;
   }

   return cache.get(obj);


};


obj = {name : "pratik"};
obj2 = {name : "dongre"};

process1(obj);
process1(obj2);

obj = null;

// console.log(cache.size);
// console.log(cache); // cant do because WEakmap has no such method 

console.log(cache.has(obj2)); // it has obj2 but not obj as obj is deleted so from WeakMap too got deleted 

// cant get cache.size as its a weakmap,
// but we know its 0 or soon be 0 
// when obj gets garbage collection , cached data will be removed as well

// WeakSet 
// WeakSet behaves similarly 

// it is analgoues to set , but we may only add object to weakset (not primities)
// an object exists in the set while it is reachable from somewhere else 
// like set it support add,has and dleete but not size,key() and no iterations 


/*
Being weak it also servers as additional storage but not for aribtray date rather for yes'not facts 
a memebership in weakset may mean something about the object 

for instance we can add users to weakset to keep track of those who visited our site 
*/

let visitedSet = new WeakSet();

john = {name : "john wick"};
let pete = {name : "pete peta"};
let mary = {name : "mary Mara"};

visitedSet.add(john); // john visited us 
visitedSet.add(pete); // then pete 
visitedSet.add(john); // john again

// visistedset has 2 users now 

console.log(visitedSet.has(john)); // ture 

console.log(visitedSet.has(mary)); // false

john = null ;
// visitedSet will be cleaned automatically 

// the most notable limitation of WeakMap and WeakSet is the absence of iteration the inability to get all current content
// the may appera inconvienete but does not preven weakmap / weakset from doing there main job 
// be an additonal storage of data for oject which are stored/managed at another place 


/*
summary 
weakMap is map like colelction that allow only object as keys and remoes them together with associated value once they become 
inacessbile by other means 

weak set is set like collection that stores only objects and rmeoves them once they become inacessible by other means 

their main advantages are thate they have weak reference to object so they can easily be removed by garbage collection

that comes at the cost of not having support for clear ,size ,keys ,values... 
weakmap and weakset are used as secondary data strucutres in datiion to the primary object storage 

once the object is removed from the primary storage if it is only found as the key of weakmap or in a weakset 
it will be leaning automatically

 */


// tasks 
// store unread flags 

// theres an array of messages 
let message = [
   {text : "hey", from : "john"},
   {text : "how you doin", from : "john"},
   {text : "can wait to eat with you", from : "Alice"},
];


// now which ds to use to store the information about whether the msg has been read 
// we should not modified the message object as it can be from some else code 

let read = new WeakSet();

function proc(message){

   for(let key of message){
      read.add(key);
      
   }

   for(let key of message){
      if(read.has(key))
      {
         console.log(`Message Read ${key.text} by ${key.from}`);
      }
      
   }



}

proc(message);


for(let key of message){
   console.log(key);
}





read = new WeakSet();

read.add(message[0]);
read.add(message[1]);
// two messages have been added to read weak set 
// it has two elements 


read.add(message[0]);
// we add the first message again 
// it still has two element s 

console.log(`Read Message 0: ${read.has(message[0])}`);

message.shift(); // extract the first element in message object 

// now read weak set has one element 

// the weakset allows to store a set of message and easily check for the existence of a message in it 

// it clean up itelseful automatically . the tradeoff is that we cant iterator over it 
// can get all read message from it directly 
// but we can do iby iteration over all messages and filtering those that are in the set 

// anotther different soln could to abe add a property like message.isRead =true to a message after its read 
// as messages object are managed by another code , that generally discourages , 
// but we can use a symbolic properyt to avoid conflicts 

let isRead = Symbol("isRead");
message[0][isRead] = true;
// now third party code wont see our extra proeprty 
//although symbol allow to lower the probabitly of problem,using weakset is better from the architectural pov

// tasks
// store read dats 

 message = [
   {text : "hey", from : "john"},
   {text : "how you doin", from : "john"},
   {text : "can wait to eat with you", from : "Alice"},
];

let ReadDates = new WeakMap();

let time = new Date();


ReadDates.set(message[0],time.getTime());
ReadDates.set(message[1],time.getTime());
ReadDates.set(message[0], new Date(2017,1,1));


console.log(`Message Read 0 ${ReadDates.get(message[0])}`);
console.log(`Message Read 0 ${ReadDates.get(message[1])}`);



