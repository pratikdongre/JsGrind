// we have learned about objects and arrays 
// objects are used for storing keyed collection
// arrays are used for storing ordered collection

// map is a collection of keyed data items just like an object 
// but map allows of key of any type that's the difference 
// in object everywthing / any type gets converted to string / symbols can be there apart 

// methods and properties are 
/*

new Map() - create a map 
map.set(key,value) - stores the value by the key 
map.get(key) - return the valye by the key , undefined if key does not exists 
map.has(key) - return true if the key has value, otherwise false
map.delete(key) - removes the element (key/value) by the key
map.clear() - removes everything from the map
map.size - returns the current element count.

*/

let map = new Map();

map.set('1','str1'); // a string key 
map.set(1,'num1'); // a num key
map.set(true,'bool1'); // a boolean key

// remember the regular object ?it would convert keys to strings 
// map keep the type , so 1 and '1' is different
console.log(map.get(1));
console.log(map.get('1'));

let key = 2;

map[key] = "num2"; 
// js treats map as plain object and convert the key 2 into a string 
// the vlaue is stored as a property of the Map object itself , not within the internal map storage 




map.set('2','str2');
console.log(map.get('2'));
console.log(map[key]);

console.log(map);

// map can also use object as keys 

let john = {name : "pratik"};

let visitCountMap = new Map();

visitCountMap.set(123,john); // value is john ie obj
visitCountMap.set(john,123); // key is john ie obj


console.log(visitCountMap.get(123));
console.log(visitCountMap.get(john));


// using object as key in map is one of the notable and important Map feautures 

 john = {name : "john"};
let ben = {name : "ben"};

let visitCountObj ={};

visitCountObj[john] = 123;
visitCountObj[ben] = 321;

console.log(visitCountObj); 
// { '[object Object]': 321 }

// as visitCOuntobj is objet when we try to add obj as key 
// it convert all keys such as john and ben above to same string 
// '[object Object]'

// console.log(1 !=1);


// to test for equality / equvivalence , Map uses the algo SameValueZero
// it is as strict as === but the only difference is that Nan is equal to Nan here
// so NaN can be used as key also 

console.log(NaN === NaN); // false 


map = new Map();

map.set(+0,"zero");
map.set(NaN,"not a number");

console.log(map.get(Number("foo")));
console.log(map.get(NaN));
console.log(map.get(-0));


// every map.set call return the map itself , so we can chain the calls 

map.set('1',"str1")
    .set(1,'num1')
    .set(true,'bool');


/// for looping over map
//theere are three methods 
// map.keys() - returns an iterable for keys 
// map.values() - returns an iterable for values 
// map.entries() - returns an iterable for enteries [key,values]
// its used by defualt in for..of


let recipeMap = new Map([
    ['cucumber',500],
    ['carrot',250],
    ['kakdi',400], 
]);


// iterable for keys
for(let veggetable of recipeMap.keys()){
    console.log(veggetable);
}


// iterable for values
for(let grams of recipeMap.values()){
    console.log(grams);
}

// iterable over enteries [key,value]
for(let entery of recipeMap){
    console.log(entery);
}

console.log(recipeMap);


// how to add values in maps
// either use map.set(key,value)
// or array of arrays [ [key,value] , [key,value]]

//The iteration goes in the same order as the values were inserted.
// Map preserves this order, unlike a regular Object.

// besides that , map has builtin forEach method ,similar to array

recipeMap.forEach((value,key,map) => {
    console.log(`${value} at key ${key}`);
});

// object.entries: Map from object 

// when a map is created , we can pass an arary (or another iterable ) with key/value pairs for initialization

map = new Map([
    ["1" ,"str1"],
    [1 , "num1"],
    [true ,'bool1'],
]);

console.log(map.get(1));

// if you have a plain object and we like to create map from it 
// then we can use built in method Object.entries(obj)
// that returns an array of key/value pairs for an object exactly in that format
let obj = {
    name : "john",
    age : 21,
};

map = new Map(Object.entries(obj));

console.log(map.get('name'));


//Here, Object.entries returns the array of key/value pairs: [ ["name","John"], ["age", 30] ].
//  That’s what Map needs.


// Object.fromEntries : object from map

// we have see how to creat map from a plain object 

// there a method that does reverse  : given an array of [key,value] pairs , it create object from them 

let prices = Object.fromEntries([
    ['banana' ,1],
    ['orange', 2],
    ['meat',4],

]);

console.log(prices);

// we can use Object.fromEnteries to get a plain object from map 

// eg  we store the data in map , but we need to pass it to a 3rd party code that expects a plain object 

map = new Map();

map.set('banana',1);
map.set('apple',2);
map.set('guava',3);

let arr = Object.fromEntries(map.entries());

console.log(arr);

// a call to map.entries() return a n iterable key value paris exatcly in the format for Objct.fromEntries

// we can do 
arr = Object.fromEntries(map);
// its smae because Object.fromEntries expect an iterable object as argument 
// and the standard iteration for map returns same key/value pairs as map.enteries()
// so we get a plain object with same  pair of key/value as the map


// Set 
// a set is a special type of collection 
// set of values without keys where each value may occur only once.

// its main methods are 
// new Set([iterable]) - creates a set and if an iterable is provied usually an array 
// then copies all the values from it into the set 

// set.add(value) - add a values returns the set itself
// set.delete(value) - removes the value , returns true if value existed at the moment of call else false
// set.has(value) - returns true if the value exists in the set , otherwise false 

// set.clear() - removes everything from the set 
// set.size() - is the element count 

// the main feature is that repeated calls of set.add(value) with the same value dont do anything 
// that the reason why each value appear in a set only once 

// for example we have vistors coming,and we like to remeber everyone 
// but repeated visist should not lead to duplicates 

// a vistor mult be counted only once 


let set = new Set();
 john = {name  : "John"};
let pete = {name : "Pete"};
let mary = {name : "Mary"};

set.add(john);
set.add(pete);
set.add(mary);
set.add(pete);
set.add(mary);

console.log(set.size);

for(let vistor of set){
console.log(vistor);
}


// the alternative to Set could be an array of users, and the code to check for duplicataes on every inseration using arr.find
// but the performace would be much worse because this methods walk through the whole array 
// checking everye elemnt 
// set is much betweer optmized interanlly for uniqueness checks 



// iteration over set 
// we can loop over set wiether with for ..of r using forEach 

set = new Set(["oranges","apples","bananas"]);

for(let fruit of set){
    console.log(fruit);
}

set.forEach((value,valueAgain,set) => {
    console.log(`value is ${value} at index ${valueAgain}`);
});


// so value and valueAgain are same 
//  so the same value appears in the argument twice 

// thats for compatiblity with amp wehre the callback passed forEach has three arguments 
// but this may help to replace Map with Set in ceratain case with ease and vice versa


// the same methods map has for iterators are also supported 

// set.keys() - return an iterable object for values,
// set.value() - same as set.keys() for compatitliby with map  

// set.entries() returns an iterable object for entreies [ value,value] 


// map is a collection of keyed values 
// method and and properties 
// new Map([iterable]) creates the map,with optional iterable (eg array) of [key,value] pairs for intialization

// map.set(key,value) - stores the value by the key , return the map itself
// map.get(key) -return the value by the key , undefiend if key does not exists in map 
/*
map.has(key) return true if the key exists ,false otherwise 

map.delete(key) removes the elemtn by the key reutnre true if key existsed at the moment of call, otherwise false

map.clear() removes eveyrthing from the map 
map.size return the current elements count

the diffeerence from regular object 
map can store any type of keys even object can be keys 
additional method the size property

*/


// set is a colletion of unique values 
/*
method and proerties 
new Set([iterables]) - create the set, with optioanl iterable (eg. array) of values for intialization
set.add(value) add a values (does nothing if value exists already) return the set iteself 
set.delete(value) - removes the value return true if value existed at the moment of the call , otherwise false

set.has(value) -returns true if the value exists in the set, toehrwsie false 
set.clear() removes everywthing from the set 
set.size is the elemnt count

iteration over map and set is always in the inseration order 
// so we cant say that these collection are unordered 
but we cant reordered element or direcly get an element by its number 


*/

// tasks 
// filter unique array emember 

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];


function unique(arr){

    let answer = new Set();

    for(let item of arr){
        answer.add(item);

    }

    return answer;

       
}  


function uniqe(arr){
    return Array.from(new Set(arr));
}

console.log(uniqe(values));


// tasks 
// filter anagrams

// anaagrams are words that have the same number of same letter , but in different order.

arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr)
{

    let map = new Map();
    for(let word of arr){

        let sorted = word // PAN
                        .toLowerCase() // pan 
                        .split('') // ['p','a','n']
                        .sort() // ['a','n','p']
                        .join('');  
        map.set(sorted,word);
        console.log(map);
    }

    return Array.from(map.values());

}

console.log(aclean(arr));

// here we can also use plain object instead of the Map, because keys are strings
function acleanUsingString(arr)
{
    let obj = {};

    for(let i = 0;i<arr.length;i++)
    {
        let sorted = arr[i].toLowerCase().split('').sort().join();
        obj[sorted] = arr[i];
    }

    return Object.values(obj);
}


// tasks 
// iterable keys 

// We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.



 map = new Map();
map.set("name","john");
// let keys = map.keys();

// keys.push("more");
// we can just do that because keys or values or entries are iteration 

console.log(map.keys()); //[Map Iterator] { 'name' }
// we ened to conver tit to array 

let keys = Array.from(map.keys());

keys.push("more");

// so we got keys from map 
// and then add another one into it 

console.log(keys);