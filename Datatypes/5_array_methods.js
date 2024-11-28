// start 

// arrays provide a lot of methods. to things make easier 
// lets split those in those two 

// 1 Add/remove items

// we already know methods that add and remove items, from beginning or the end 

// arr.push(...items) ---> add items to the end 
// arr.pop()  ---->  remove/extract item from end 
// arr.shift() ---> remove/extract item from beginning
// arr.unshift(...items) ---> add item to the beginning 

// splice 
// how to delete an element from an array
// the arrays are object so we can try to use delete

let arr = ["I","go","home"];

delete arr[1];

console.log(arr[1]); // undefiend

console.log(arr.length); // 3


// the element was removed but lenght still the same 

// that natutral beacus delete object.key remove a value by the key . that all it does 
// fine for objects 

// but for arrays we want to delete and occupy the freeed place and update the lenght also 

// so there is speical methods called as slice 

// arr.splice method is a swiss army knife for arrays
// it can do everything : insert,remove and replace elements

// syntax
// arr.splice(start[,deleteCount,elem1,..,elemN])
// it modifies array starting from the index start : removes deleteCount element and then insert elemn1...,elemN at their place 
// return the array of removed element

arr = ["I","go","home"];

//remove one element at 1th position
arr.splice(1,1);

console.log(arr);

// remove three element at start and add two 
arr.splice(0,3,"no","baba");

console.log(arr);

arr = ["i" , "study", "javascript", "right", "now"];
let removed = arr.splice(0,2);

// remove first two eleement;
console.log(removed);


// insert without deletion
arr = ["i" , "study", "javascript", "right", "now"];

arr.splice(5,0,"and","im","loving","it");

console.log(arr);

arr.splice(3,2);

console.log(arr);

arr.splice(3,4);

console.log(arr); 

arr.splice(2,0,"complex","lang");

console.log(arr);


// negatives indexs allowed
// here and in other array methods, negative indexes are allowed. 
// they specify the position from the end of array, like here

arr = [1,2,5];

// from end delete 1 element 
// and add two elements 

arr.splice(-1,1,3,4);

console.log(arr);


// slice is simpler than similar looking splice

// arr.slice([start],[end])
// it returns a new array copying to it all items from index start to end (not including end)
// both start and end can be negative , in that case from end array is assumed

// it is similar to string method str.slice but instead of substring it makes subarray

arr = ["t", "e", "s", "t"];

console.log(arr.slice(1,3)); // e s 

console.log(arr.slice(-2,)); // s t 

// we  can call it wihtout arguments arr.slice() creates a copy of arr 
// that often used to obtain a copy for further transfomrration that should not affect the og one 

// arr.concat creates a new array that includes values from other arrays and additional items 

// arr.concat(arg1,arg2,...)
// it acccepts any number of values either arrays or values 
// the result is new array containing items from arr , then arg1 and arg2 and so on 
// if arg1 is array all its element are copied if not then the argument itself is copieed 

arr = [1,2];
console.log(arr.concat([3,4]));

console.log(arr.concat([3,4],[5,6],7));

// normally it only copies element from array. other objects  even if they look like arrays are added as whole

arr = [1,2];

let arrayLike = {
    "name" : "pratik",
    length : 1,
};

console.log(arr.concat(arrayLike));

// but if an arrayLike object has a speical property Symbol.isConcatSpreadable then its treated as an array by concat 

arr = [1,2];

arrayLike = {
    0 : "pratik",
    1 : 5,
    [Symbol.isConcatSpreadable] : true,
    length : 2,
};

console.log(arr.concat(arrayLike));


// 2 Iterate : forEach

// arr.forEach method allows you to run a function for every element of an array

arr.forEach(function(item,index,array){
    // do something of an item
 
});

["looked","liked","loved"].forEach(console.log);
// console.log is a function right 

["looked","liked","loved"].forEach((item,index,array) =>{
    console.log(`${item} is at ${index} in ${array}`);
});
// looked is at 0 in looked,liked,loved
// liked is at 1 in looked,liked,loved
// loved is at 2 in looked,liked,loved

// note the return of this function would thrown away and ignored 
// why because who is calling here huuhhhhh


// 3 Searching for an array

// indexOf/lastIndexOf and includes

// the method arr.indexOf and arr.includes works the same as theri strings counterpart but operate on items instead of characters 
// arr.indexOf(item, from) - looks for item starting from and returns the index where it was found , otherwise -1
// arr.includes(item,from) - looks for item starting from index from, return true if found

// usually these methods are used with only argument : the item to serach 
// because by default the search is from the beginning 

arr = [1,0,false];

console.log(arr.indexOf(false));

console.log(arr.indexOf(null));

console.log(arr.includes(1));
console.log(arr.includes(2));

// indexOf use === strict equality for comparison. so if we look for false , it fins exactly false and not zero 

// if we want to check if item exist in the array and dont need the index then includes is preffered method 


// arr.lastIndexOf is the same as indexOf , but looks for from right to left 

let fruits = ["kela","guava","kela"];

console.log(fruits.indexOf("kela"));
console.log(fruits.lastIndexOf("kela")); // last time the kela appeared checks from right so index 2 

 fruits = ['Apple', 'Orange', 'Apple']

console.log( fruits.indexOf('Apple') ); // 0 (first Apple)
console.log( fruits.lastIndexOf('Apple') ); 


// method includes handles the nan perfectly 

arr = [NaN];
console.log(arr.indexOf(NaN)); // -1 
console.log(arr.includes(NaN)); // true

// indexOf uses === strict equality 
// includes came much later and it uses more up to date algorithm


// 4 find and findIndex/findLastIndex

// imagine we have an array of objects , how do we find an object with a specific condition
// here arr.find(fn) method comes in handy

let result = arr.find(function(item,index,array){
    // if true is returned , item is returned and iteration is stopped 
    // for falsy scenario returns undefined

});

// the function is called for element of the array one after another :
// item is the element 
// index is its index
// array is array itself

// index and array is optional tho if you want to use then mention them else not required 

// if it return true , the search is stopped, item is returned 
// if nothing is found undefine is returned .

// we have an arrays of user , each with the fields id and name .
// let find the one with id == 1


let users = [
{id : 1 , name : "pratik"},
{id : 2 , name : "Pete"},
{id : 3 , name : "Mary"},
];

let user = users.find(item => item.id == 1);

let unduser = users.find(function(item){
    return item.id == 4;
})

console.log(user);
// console.log(unduser); 

// regular function
// user = users.find(function(item){
//     return item.id == 1;
// });

// expaned arrow function
// user = users.find((item) => {
//     return item.id == 1;
// });

// compact arrow function
// user = users.find(item => item.id ==1);

// full version of find using all of it 
let userCheck = users.find(function(item,index,array){
    // console.log(`checking ${item} at ${index} in array ${array}`); // wont work for item and array 
    console.log(`Checking item: ${JSON.stringify(item)} at index: ${index} in array: ${JSON.stringify(array)}`);

    // console.log(`Checking item:`, item, `at index:`, index, `in array:`, array);

    return item.name == "Mary";
});

console.log(userCheck);

// using , or ${}
// console.log() when use variable using , it treats them as separate entities
// it print each argument in its actual data type and  FOR OBJECT IT OUTPUTS THEM IN READABLE DETAILED FORMAT
// as {id : 1, name : "pratik"}

// while when using ${}
// in this case item and array triggers the default string conversion for objects 
// for js objects this results in [object object] as objects dont have a meaningful string represntation unless explicitly convert using JSON.stringify


// in real life array of objects are so common thing 
// so find method is very useful

//Note that in the example we provide to find the function item => item.id == 1 with one argument.
//  That’s typical, other arguments of this function are rarely used.

// arr.findIndex method has same syntax but returns the index where the element was found instead of the element itself.
//  the value of -1 is returned if nothing found 

// The arr.findLastIndex method is like findIndex, but searches from right to left, similar to lastIndexOf.


users = [
{id : 1 , name : "pratik"},
{id : 2 , name : "John"},
{id : 3 , name : "pratik"},
{id : 4 , name : "ethan"},
];

console.log(users.findIndex(user => user.name == "ethan"));
console.log(users.findLastIndex(user => user.name == "pratik"));


// filter 

// the find method looks for the first single element that makes the function return true;
// if there may be many we can use arr.filter(fun)

// syntax is similar to find but filter returns an array of all matching elements

// let results = arr.filter(function(item,index,array){

// });

let someUser = users.filter(item => item.name == "pratik");
console.log(someUser);

someUser = users.filter(function(item,index,array){
    // console.log(`checking for `,item,` at `, index, `inside array` , array);
    return item.name == "pratik";
});

console.log(someUser.length); // 2


// 4 Transform an array

// transform and reorder the array

// map 
// the arr.map method is one of the most useful and often used 
// it calls the function for each element of the array and return the array of results 

 result = arr.map(function(item,index,array){

 });

 arr = ["pratik","ranbir","katrina"];

 let length = arr.map(item => item.length);
 console.log(length);


 // sort 
 // the call to sort(fn) sorts the array in place ,changing its element order 
 // it also returns the sorted array, but the returned value is usually ignored as arr itself is modified

 arr = [1,2,15];

 arr.sort(); // 1 15 2 
 console.log(arr);

 // the order became incorrect 
 // as the items are sorted as strings by default

 // literally all elements are converted to string for comparision.
 // for strings lexicographic ordersing is applied and inded "2" > "15"

 // to use our own sorted order , we need to apply a function as the argument of arr.sort()

 function compare(a,b){
    if (a>b) return 1 ;
    if (a==b) return 0 ;
    if (a< b) return -1;
 }

 function compareNumeric(a,b){
    if(a>b) return 1 ;
    if (a==b) return 0 ;
    if (a<b) return -1;
 }

 arr = [1,2,15];
 arr.sort(compareNumeric);

 // as we know the methods that transform an arary 
 // those function are used for each element and rreturn an array of results 
 // likewise compareNumeric function that we created is used by each element and in the end we got array of results 


//  Let’s step aside and think about what’s happening. 
// The arr can be an array of anything, right? It may contain numbers or strings or objects or whatever. 
// We have a set of some items. To sort it, we need an ordering function that knows how to compare its elements.
//  The default is a string order.

// The arr.sort(fn) method implements a generic sorting algorithm. 
// We don’t need to care how it internally works (an optimized quicksort or Timsort most of the time). 
// It will walk the array, compare its elements using the provided function and reorder them, all we need is to provide the fn which does the comparison.


// by the way if we want to know whichc elements are compared - nothing prevent us from alerting them 
[1,-2,1].sort(function(a,b){
    console.log(a + " <> " + b );
    return a - b;
});

// the algo may compare an element with multiple others in the process 
// but it tries to make as few comparison as possible

// comparison function may return any number
// actually a comparison function is only required to return a positive number to say 'greater' and 
// a negative naumber to say 'less'

// that allows to write a shorter function 

arr = [1,20,15];
arr.sort(function(a,b){ return a-b;});
console.log(arr);

// if postive then return 1 which menas do nothing in this case no swap needed
// if 0 in this case then do nothing no swap needed
// if -1 then swap the elements 

// arrow function 
arr.sort((a,b)=> a-b);


// use localeCompare for strings 
// remeer string comparison algo 
// it compares letter by theri codes by default
// for many laphabest its better to use str.localCompare methods to correctly sort letter 

let countries = ['Österreich', 'Andorra', 'Vietnam'];

console.log(countries.sort((a,b) => a > b ? 1 : -1));
console.log(countries.sort((a,b) => a.localeCompare(b)));


// reverse 
// the method arr.reverse reversers the order of element in arr

arr = [1,2,3,4,5];
console.log(arr.reverse());

console.log(arr);

// also return teh array after the reversal 
// i thing if something is being modfied  then the method also return either the changes or new version of after modifying of "someting"

// split and join

// here the situation we are writing a messagin app 
// and the person enters the comma-delimited list of recivers : john,pete,mary
// but for us an array of name would be much more comfortable than single string 
// how to get it 

// str.split(delim) method splits the string into an array by the given delimter delim inthis case 

let names = "pratik, monu, sonu, raj,";

arr = names.split(', ');

for(let name of arr)
{
console.log(`A message to ${name}`);
}

// the split method has an optional second numeric argument - a limit on the array length 
// if its provided then extra element are ignored 
// in practice it is rarely used 

let firstTwo = "pratik, monu, sonu, raj,".split(", ",2);
firstTwo = names.split(', ',2);

console.log(firstTwo);

// remeber we apply split on strings and get array as result 

// the call ot split(s) with an empty s would split th string into an array of lettesr 
let str = "street";

console.log(str.split(''));

// arr.join(glue) does the reverse to split. 
// it creates a string of arr items joined by glue between them.

arr = ['p','r','a','t','i','k'];


str = arr.join('');

console.log(str);

arr =["pratik", "monu", "sonu", "raj",] ;

str = arr.join(';');

console.log(str);