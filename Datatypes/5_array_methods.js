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