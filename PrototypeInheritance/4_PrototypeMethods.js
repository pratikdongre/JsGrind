// Prototype Methods, object iwhtout __proto__

// there are modern methods to setup a prototype
// / setting or reading the prototype with obj.__proto__ is cosnidered outdate and somewhat deprecated 
// meants for browser only 

// the modern methods to get/set a prototype are 
// object.getPrototypeOf(obj) returns [[prototype]] of obj 
// object.setPrototypeOf(obj,proto) - sets [[prototype]] of obj to proto

/*
the only usage of __proto__ thats not frowned upond is a property when creating a new object 
{__proto__ : ...}

althogh speical method for this too 
Object.creat(proto[,descriptors]) creates an empty object with given proto as [[prototype]] and 
optinal property descriptors
*/

{
    let animal = {
        eats : true,
    };

    let lion = Object.create(animal);
    // create an ew object with animal as prototype
    // same as {__proto__ : animal}

    console.log(lion.eats);

    console.log(Object.getPrototypeOf(lion) === animal);

    Object.setPrototypeOf(lion,{});

}

// the object.create method is a bit more powerful as it has an optional second arugment property descriptor 
// we can add addtional properties to the new object htere 

{
    let animal = {
        eats : true,
    };

    let lion = Object.create(animal,{
        jumps : {
            value : true,
        }
    });

    console.log(lion.jumps);
}


// we can use Object.create to peform an object cloning more powerfule than copying properties in for ..in 

{
    let obj = {};
    let clone = Object.create(
        Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptor(obj)
    );

    // this will make the truly exact copy of obj including all properties enumeralbe and non enumerable 
    // data properties and 
    // settter/getter everything with the right [[prototype]]
}

// Brief history 
// there so many ways to manage [[prototype]]
/*
the prototypal inheritance was in the lang since its dawn 
but the ways to maange it evolved over time 

the protype proeprty of a constructor function has worked since very starting 
the oldest way to create object with a given prototype

in 2012, Object.create appeared 
it gave the abitlity to create objects with a given protoype 
but did not provide the abitlity to get/set it 

some broswer implemented the not standart __proto__ accessor 
that allowed the user to get/set prototype at any time to give more flexiblity to devs

in 2015, Object.setPrototypeof and Object.getPrototypeOf were added 
to perform the same as __proto__ 
and __proto__ becomem the optional for non browser envs 

in 2022 it was offically allowed to use __proto__ in object literals {...}
but not as getter/setter obj.__proto__ 

why was __proto__ replaced by getPrototypeOf/setPrototypeOf
but still used partially with {...} 

dont hcange [[prototype]] on existing objects if speed matters 
we can get/set [[prototype]] at any time but usually we only set it once at the object 
creation time and dont modify it anymore 
lion inhertis from animal that is not going to change 
and js engines are highly optimized for this 
changing a prototype on the fly with Object.setPrototypeOf 
or obj.__proto__ = is very slow oepration as it breaks intenral optimization 
for object property access ops 
so avoid it unless you know know what your doing 
or js speed totally does not matter for you 
*/

// very plain objects 
// objects can be used as associative arrays to store key/value pairs 
// but it we try to store user-provider keys in it 
// user entered dictionary 
// all keys work fine except __proto__ 

{
    let obj = {};

    let key = "__proto__";
    obj[key] = "some value";

    console.log(obj[key]);//[Object: null prototype] {}
}

// the some value assignemnt got ignored if the key is __proto__ 
// because it must be either an object orn ull 
/*
a string can not become a prototype 
thats why an assignment a string to __proto__ is ignored

we didnot intend to impleemtn such behavior we 
want to store key/value paris and the key name "__proto__"
was not prperty saved 

// consequence are not terrible but in toher cases
we may be storing object instead of strings in obj,
and then the protype wil lindeed be change 
as a result the exeuction will go wrong in toally unexpected wyas 


how can we avoid this 
*/

{
    let map = new Map();
    let key = "__proto__";
    map.set(key,"somevalue");

    console.log(map.get(key));

    // but Object syntax is often more appealing 
}

// we can use objects 
// as we knwo __proto__ is not a property of an object but an accessor property of Object.protoype

// so if obj.__proto__ is read or set the getter/setter is called from its prototype  and 
// it gets/sets [[prototype]]

// as it as said __proto___ is a way to access [[prototype]] it is not [[prototype]] itself 

// now if we intend to use an object as an associative array and be free of such problen 
{
    let obj = Object.create(null);
    // obj = {__proto__ : null}
    let key = "__proto__";
    obj[key] = "somevalue";
    console.log(obj[key]);
}

/*
object.create(null) creates an empty object without a prototype [[prototype]] is null
so theere is not inherited getter/setter for __proto__ 
// now it is processed as a regualr data property so the above works right 

/ we can call such object very palin or pure dictionary objects becasue they are even simpelr that the regualr plain object {...}

a donwnside is that such object lack any built in object methods ie toString

*/

{
    let obj = Object.create(null);
    console.log(obj); // [Object: null prototype] {} instead of {}
     
}
// usually fine for assicative arrays 
/*
msot object-releated methods are Object.something(...) like Object.keys(obj)
 they are not in the prototype so they will keep working on such objects 
*/

{
    let chineseDictionary = Object.create(null);
    chineseDictionary.hello = "whatthehell";
    chineseDictionary.bye = "whattheduck";

    console.log(Object.keys(chineseDictionary));
}

// Summary 
/*
To create an object with the given prototype 
literal syntax {__proto__ : ...} allows to speicify multiple properties 
or Object.create(proto[,descriptors]) , allows to specify property descriptors

the Object.create provide an easy way to shallow copy an object with all descriptor 
*/
{
    let obj = {};
    let clone = Object.create(Object.getPrototypeOf(obj),Object.getOwnPropertyDescriptor(obj));

}

// methods to set/get the prototype are 
// Object.getProtoypeOf(obj) returns the [[prototype]] of obj (same as __proto__ getter )
// Object.setPrototypeOf(obj,proto) sets the [[prototype]] of obj to (proto) (same as __proto__)

// getting /setting the protoype using __proto__   is not recommeneded

// can create prototype less objects 
// Object.create(null) or {__proto__ : null}
// these objects are used as dictonaries to store any (possible user-generated) key even proto
// normally object inherit builtin method and __proto__ getter/setter from Object.prototype
// making corresponding keys occupied and potentially causing side effects 
// with null prototype objets are truly  empty



// tasks 1 
// Add toString to the dictionary

{
    let dictionary = Object.create(null,{
        toString : {
            value() {
                return Object.keys(this).join();
            }
        }
    });

    dictionary.apple = "Apple";
    dictionary.__proto__ = "Test";
    // __proto__ is a regular property key her e

    for(let key in dictionary){
        console.log(key);
    }
    // only apple and __proto__ is what we got 

    console.log(dictionary.toString());

    // when we create a property using a descriptor its flags are false so 
    // toString is non enumerable 

}

// task 2 
{
    function Rabbit(name){
        this.name = name;
    }
    Rabbit.prototype.SayHi = function (){
        console.log(this.name);
    }

    let rabbit = new Rabbit("rabbit");

    rabbit.SayHi(); // rabbit
    Rabbit.prototype.SayHi(); // for Rabbit.prototype this is undefined
    rabbit.__proto__.SayHi();
    Object.getPrototypeOf(rabbit).SayHi();
}