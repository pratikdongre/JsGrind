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


// 4 Internals 
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

// 5 PERFORMANCE 
// performance methods push/pop runs fast while shift/unshift are slow
// why is it faster to work with end of an array than with its beginning 

/*
unshift->   0 1 2 3   <-pop
shift->     0 1 2 3   <-push

*/

fruits = ["banana", "anar", "apple"];

console.log(fruits.shift()); // takes one elemen from the start
console.log(fruits);

// it is not enough to take and remove the element from index 0 . 
// othere elements also have to be renumbered as well.

// the shift operation must do three things 
// 1. remove the element with index 0 
// 2. move all elements to the left , renumber them from the index 1 to 0, from 2 to 1 and so on 
// 3. update the lenght property 

// the more elements in the array , the more time to move them,more in-memory operations
// simimlar things happens wiht unshift we first need to move the exisint element to the right ,increasing their indexes

// and whats with the push and pop
// the do not need to move anything . to extract an element from the end , the pop method cleans the index and shortend the length 

console.log(fruits);
console.log(fruits.pop()); // take one element from the end 
console.log(fruits);

// the  pop methods does not need to move anything ,because other elements keep theri indexes 
// that why its blazingly fast 
// the similar things wiht push method

// 6 LOOPS
// one of the oldest ways to cycle array items is the for loop over indexes 

arr = ["Apple","Orange","Pear"];

for(let i=0; i< arr.length;i++)
{
    console.log(arr[i]);
}

// for.. of does not give direct access to the number of current element , just only the value and in most cases that eneough
// and its shorter 

for (let ar of arr)
{
    console.log("using for ..of" , ar);
}


// technically because array are objects it is stil possible to use for ..in

for(let key in arr)
{
    console.log(`using for..in ${arr[key]}`);
}

// the for..in works but there are problems with it 
/*
1. the loop for..in iterates over all properties , not only numeric ones 
there are so called 'array- like ' objects in brwoser and in other env  that look lik arrays 
that is they have lenght and index properties , but they may also have other non-numeric properties and methods, 
which we usually dont need. 
the for .. in loop will list them though 
so if we want to work with array like objects 
then these properties can become a problem 

2. the for..in loop is optimizied for generic objects ,not arrays and thus is 10-100 times slower.
of course its still very fast 
the speedup may only matter in bottlenecks but still we should be aware of the difference 

so generally we should not use for ..in for arrays 
*/

// 7 A word about "length"
// the lenght propert automatically updates when we modify the array. 
// to be precise , it is actually not the count of values in the array , but the greatest numeric index plus one 

// for instance a single element with large index value would reuslt in big length 

fruits = [];
fruits[100] = "aam";
console.log(fruits.length); // 101 

// note that we dont use arrays like this 

// another things about the lenght property is that its writable 
// if we incrase it manually nothing happens 
// but if we decrease it the array is truncated and the process is irreversible 

let nums = [1,2,3,4,5 ];
console.log(nums.length);
nums.length +=1;
console.log(nums.length); // increased 

nums.length = 2;
console.log(nums.length); // 2 
console.log(nums);
nums.length = 5;
console.log(nums); // 1 ,2 , <3 empty items> 
// as said truncated and irreversible 

// so the simplest way to clear array is array.lenght =0;


// 8 new Array()
// this is one more syntax to create an array

arr = new Array("apple","anar","kela");
// althoug this is rarely used beacuse [] is shorter 


//also there's tricky featuure with it 

// if new Array is called with a single argument which is a number , then it creates an array wihtout items but with given lenght 

arr = new Array(2) // will it create array[2] ? 
console.log(arr.at(0)); // undefined no elements 
console.log(arr.length);

//To avoid such surprises, we usually use square brackets, unless we really know what we’re doing.

// 9 MultiDimensional arrays

// arrays can have items that are also arrays 
// we can use it to store multi dimesional array. for example to store matrices:

let matrix = [
[1,2,3],
[4,5,6],
[7,8,9],
];

console.log(matrix[0][2]);


// 10 toString 
// arrays have their own implentation of toString method that reutns a comma separated list of elements.

// for instance 

arr = [1,2,3];
console.log(arr);
console.log(String(arr) === '1,2,3');

// also lets try this 

console.log([] + 1 );
console.log([1] + 1 );
console.log([1,2] + 1 );


// arrays do not have symbol.toPrimitive , neither a viable valueOf , they implement only toString conversion 
// so here [] becomes an empty string , [1] becomes "1"
// [1,2] becomes "1,2"

// when an binary plus operator add something to a string , it convert to string as well 
// look at this 

console.log( "" + 1);
console.log("1" + 1);
console.log("1,2" + 1)

// 11 Dont compare arrays with == 
// array unlike other languagae should not be compared wiht ==
// this operator has no special treatment for arrays, it works with as with any object 
/*
lets recall 
two objects are equal ==  only if they are reference to same object 
if one of the argument of == is an object . and the other one is primtiive 
then the object gets converted to primtive 
with an exception and null == undefined that equal each other and nothing else 

this strict comparision === is even simpler as it doesnot convert types 

so if we compare two arrays with == there are not same
unless there are two variable that referes to the same array

for example 
console.log( []=[] )
console.log([0] = [0])
would resutl in false 

techincally ther arrays are different objects 
so they are not equal 
the == operator does not do item by item comaprison 

comparision with primitives may give some seeminlgy strange value as well 

*/

console.log(0 == []);
console.log('0' == [])

// here in both cases we comapre primtive with array 
// array gets converted to pritmive form and becoms empty string '' in this case 
// and then further type conversion happens 
// in first case '' empty string gets converted to number 0
// in second case the empty string stays and then it became '0'=='' 

// so how to compare arrays 
// dont compare them using == 
// simply compare them by elemen by element / item by item in a loop or using iteration method 

// summary 
// array is special kind of object , suited for storing and managing ordered data items 


// the declaration 
arr = ["item1" ,"item2"];
console.log(arr);

arr = new Array("item1","item2");
console.log(arr);

// the call to new Array(number) // with single argument 
// creates with an array with the given length , but wihtout elements 

// the length proprety is the array length or be preicse 
// its last numeric index plus one .
// it is auto adjusted by array methods 
// if we shorten length manually the array gets truncated 

// getting the elements 
// we can get elements using arr[0]
// also we can do arr.at(i) which allwos negative value too 
// if negative then work from backward unless for i >=0 works smae as [] index

// we can use an array as a deque with follwing operation 
// push (..items) - add items to end  // faster 
// pop () removes element from end and return it // faster 
// unshift(..items) add items to the beginning // slow 
// shift() removes the element from the  and return it // slow


// to loop over the element of the array 
// for (let i =0;i<=arr.length;i++) - everygreen method 
// for (let item of items)- modern syntax for items only
// for (let key in items) - never use cause array at the base is object and this would iteratoere over all prroperties 


// to comapre array dont use == operator or < > 
// as they dont have speical treatment for array 
// they handle them as any object and its not what we are looking for 

// instead of you can use for ... of loop to compare array item by item 

// tasks 