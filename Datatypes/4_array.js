// object allows to store key value pairs /allows to store keyed collection of values 

// but often we neeed an ordered collection where we have a 1st 2nd 3rd element and so on.
// for example we need to store list of users, goods , htmlElements

// its not convenient to use an object here because it provides no methods to manager the order elements 
// we cant insert new property between the existing ones 
// objects are not meant for such use 

// there exist a special data strucutre called array, to store ordered collection


// 1 DECLARATION

// there are two syntax for creating an empty array:
let arr = new Array();
let arr2 = [];

// almost all the time second method is used as we can insert inital element into it.

let her = ['her','her hair','her eyes','her nose','her lips','her breast','her stomach','her hand','her downpart','whatnot'];

// array element are numbered ,starting with zero

// we can get an element by its number in square brackets 
console.log(her[0]);
console.log(her[5]);

her[5] = "mySukoonPlace";
her[11] = "ecetra";

// her[10] becamse undefiend as before og array has 9 elment and we add at 11th place so if we access 10 we get undefined
console.log(her[9]);
console.log(her[5]);
console.log(her[11]);

// total element how many
console.log(her.length); // 12 starting from 0 to 11

//An array can store elements of any type.

 let mix = ['chocolate',26,{name : "pratik"},true,function () {console.log("hey")}];
 console.log(mix.length);
 mix[4]();
 console.log(mix[2].name);

 // trailing comma 
//  an array can end with trailing comma

let fruits = [
    "apple",
    'jam',
    'anar', // trailing comma // latakta hua comma
];
//The “trailing comma” style makes it easier to insert/remove items, because all lines become alike.



// 2 GET LAST ELEMENTS WITH 'AT'

console.log(fruits[fruits.length -1]); 
// or 
console.log(fruits.at(-1));

// some programmign language allow the use of negative index for the same purose fruits[-1]
// in javascript it wont work rthe reuslt will be undefined because the index in square brackets is treated literally
// so we can explicitly calcualte using lenght and then doing -1 
// or use shorter syntaxt at(-1)  

// in other words arr.at(i)
// is exactly same as arr[i] for + values 
// -ve values of i it steps back from end of the array ; last one is -1 



// 3 METHODS POP/PUSH, SHIFT/UNSHIFT

// a queue is one of the most common use of an array.
// in computer science , this means an ordered collection of elements which supports two operations 
// push :- appends an element at the end 
// shift :- get an element from the beginning ,advancing the queue , so the 2nd element becomes the 1st 

// arrays support both the operations which are of queue

// in practice we need it more often 
// for example a queue of messages that need to be show on screen 


// thers another use case of array that is stack 
// it supports two operations 
// push adds an element to the end 
// pop takes an element from the end

// so new element are taken or added from the end only
// a stack can be illustrated as a pack of cards : new cards are added to the top or taken from the top

// for stack the latest pushed items is recieved first called as lifo principle 
// for queues , we have first in first out 

// arrays in js can work both as queues or as a stack 
// they allow you to add/remove elements , both to/from beginning or end 
// in cs the ds that allow this is called dequeue

// methods that work with end of the array
// pop - extract the last element from the arraya and returns it 

 fruits = [
    "apple",
    'jam',
    'anar', 
    'kela',
];
console.log(fruits.pop());
console.log(fruits);

// both fruits.pop() and fruits.at(-1) returns the last element of the array fruits
// but fruits.pop() also modifies the array by removing it 

// push :- append element to the end of array

console.log(fruits.push("banana"));
console.log(fruits);

// the call fruits.push('...') is equal to fruits[fruits.length] = '...'


// methods that work with beginning of the array
// shift  extract the first element of the array and return it 

console.log(fruits.shift()); // removes the first eleemenet and print it 
console.log(fruits);

// unshift add the element to the beginnig of the array

console.log(fruits.unshift('sef'));
console.log(fruits);

// push and unshift returns the new lenght of the array

// methods push and unshift can add multiples at once 

fruits = ['apple'];
fruits.push("anar","kela"); // in the end right and if were to console it would get new lenght of the array
fruits.unshift("angur",'aam');
console.log(fruits);


// Internals 
// an array is a speical kind of object 
// the square brackets used to access a property arr[0] actually come from the object syntax
// thats essentially the same as obj[key] , where arr is the object , while number are used as keys.

// they extend objects providing special methods to work with ordered collection of data and also the length property.
// but at the core its still an object 

// remember, there are only eight basic data types in js 
// array is an object and thus behaves like an object 

// for instance it is copied by reference 

fruits =["banana"];

arr = fruits; // two variables refers the same array

console.log(fruits === arr);

arr.push("pineapple");

console.log(fruits);

// but what make arrays really special is their internal representation.
// the engine tries to store its element in the contigious memory are, one after the other.
// there are other optimization as well to make arrays work really fast.

// but they all break if we quit working with an array as with 
// an "ordered collection" and start working with it as if it were a regular object 

// for instance we can do this 

fruits = [];
fruits[9999] = 6; // assign a property with the index far greater than its length 
fruits.age = 20; // create a property with arbitrary name 

// that possible ,because arrays are object at their base. we can add any properties to them.
// but engine will see that we are working with array as an regular object 
// array specific optmization are not suited for such cases and will be turned off , their beneifts disapper.

// the ways to misuse array
// add non numeric property like arr.text = 5;
// make holes liek add[0] and then add[10000](and nothing in between)
// fill the array in the reverse order, like arr[1000],arr[999] and so on

/*
Please think of arrays as special structures to work with the ordered data.
 They provide special methods for that. Arrays are carefully tuned inside JavaScript engines to work with contiguous ordered data, please use them this way. And if you need arbitrary keys,
 chances are high that you actually require a regular object {}.
*/


// performance methods push/pop runs fast while shift/unshift are slow
// why is it faster to work with end of an array than with its beginning 