// Rest parameters and Spread Syntax 

// Many js built int function supports an aribrary number of arguments

// for instance 
// Math.max(arg1, arg2, ..., argN) returns the greatest of arguments
// object.assign(dest, src1, scr2,...scrN) - copies properties from sources to destination

// lets learn how do the same and also pass arrays to such function as parametes 

// Rest parameters...
// a function can be called with any number of arguments, no matter how it is defined 
{
    function sum(a,b)
    {
        return a +b ;
    
    }

    console.log(sum(1,2,3,4,5));

    // got no erroes because of excessive arguments 
    // but of course in the result first two will be  counted 
    // the rest parameters can be included in the function defintion by using three dots ... 
    // folled by the name of array that will contain them

    // the dots literally means gather the remaining params into the array

    function sumAll(...args)
    {
        let sum = 0;
        for(let key of args)
        {
            sum += key;
        }
        return sum;
    }

    let answ = sumAll(1,1,1,2,3);
    console.log(answ);

    /*
    we can choose to get the first argument into param as variable and gather only the rest 
    the first two arguments go into variables and rest go into titles array    
    */
//    function showName( a,_,b,c,...hearts)
//    {
//     console.log(hearts);
    
//    }


function showName(firstName, lastName, ...titles){
    console.log(firstName +" " +lastName);
    
    console.log(titles[0]);
    
}
    showName("Pratik","Dongre", "theOne", "masia", "notStupid");
    
}

// the rest must be at end 
/*
function (arg1,...rest, arg2) // wont work
*/


// The argument variable
// there is also a special array like object names arguments that contains all arguments by theri index 

{   
    function showName(){
        console.log(arguments.length);
        console.log(arguments[0]);
        // argument var is also iterable 
        for(let key of arguments)
        {
            console.log(key);
            
        }
        
    }

    showName("Pratik", "Ceaser");
}

// in old times rest params did not exists in the lang and using arguments was the only way t oget all arguments of the function 
// but the downsiw is that arguments is both array liek and iterable , its not an array 
// it does not support array methods so we cant call arguments.map(...) 
// also it always contrain all arguments // we cant caputre them partially like we can do with rest parameters

// so when we need to have the flexibilty to capture partial arguments or need full fledged array then we used rest 


// arrows funcstion do not have arguments 
// if we acess the arguments object from an arrow function, it takes them from the outer ormal function 

{   
    function f(){
        let showArg = ()=> console.log(arguments[0]);
        showArg();
        
    }

    f("1what");
}

// as we remeber the arrow function dont have their own this and neither special arguemtns object either 



// Spread Syntax 
// so rest is for to get an array from the list of paramaters as we saw 

// but sometimes we need to do exaclty reverse 
// for instance Math.max that returs the greatest number from the list 

console.log(Math.max(3,2,1,5));

// now let say we have an array [3,5,1] how do we call Math.max with it 
// passing it as is wont work befause Math.max expect list of numeric argumetns ,not a single array

{
    let arr = [3,5,1];
    console.log(Math.max(arr)); // NaN

    // and we cant manually list items in the code 
    // Math.max(arr[0],arr[1],arr[2]) 
    // thats ugly as we are unsure and dont have certainty

    // spread syntax to the resuce it looks similaar to rest parameters,
    // also using ...,but does quiet the opposte 

    // when ...arr is used in the function call , it expands a iterable object arr into the list of arguemtns 

    // Math.max
    console.log(Math.max(...arr)); // it spreads the arry ito the list of arguments 


    // we can also pass multiples iterables this way : 
    let arr1 = [1,2,3,48];
    let arr2 = [5,6,78,8];

    console.log(Math.max(...arr1,...arr2));

    // we can even combine the spread syntax with normal values 

    console.log(Math.max(...arr1,444,...arr2));
    
    // also spread can be used ti merge arrays 

    arr = [3,1,5];
    arr2 = [8,9,15];

    let merged = [0,...arr,2,...arr2];

    console.log(merged);
    

    // in the above we used array to demonstarte the spread syntax but any iterable will do 

    // for instance here we use the spread syntax to turn the string into array of char

    let str = "hello";
    console.log(...str); // we spread the char as a individual arguments 
    console.log([...str]); // an array of char got from spread on string 

    // the spread syntax internally uses iterators to gather elements the same way as for..of does 

    // for a string , for ..of retunrs char and ...str becomes 'h' 'e' 'l' 'l' 'o'
    // the list of char is passed to array initalizer [...str]

    // for ex for strings the spread syntax breaks it into char
    // for arrays the spread syntax breaks it into element 
    
    // but the result depeneed on the context where you use the spread syntax 
    // in an array initlizer [...something] , it collection items into a new array
    // in a function call fn(...something), it passes items as separate arguments 

    // we can aslo Array.from as it converts an iterable like a string into an array 

    console.log(Array.from(str));
    
    // both Array.from(str) and [...obj] is same 
    // but subtle difference is 
    // array.from operats on both array like and iterables 

    // the spread only works only with iterables 

    // so forthe task of turning somethign into an array Array.from tends to be more universal

    
}


// Copy an array/object 

// remember when we talked about Object.assign()

// possible to do the same thing with spread syntax 

{
    let arr = [1,2,3];

    let arrCopy = [...arr];
    // spread the arry into a list of parameters // then put the result into a new array

    console.log(JSON.stringify(arr) === JSON.stringify(arrCopy));
    // arrays have same content 

    // are the arrays equal
    console.log(arr === arrCopy); // false 

    arr.push(4);
    console.log(arr);
    console.log(arrCopy);
    
}

// we can do same thing to make a copy of an object 

{
    let obj = {a:1,b:2,c:3};
    let copyObj = {...obj};

    console.log(JSON.stringify(obj) === JSON.stringify(copyObj));

    console.log(obj === copyObj);

    obj.d = 4;
    console.log(obj);
    console.log(copyObj);
    
}

// this way of cpying an object is much srhoter than let objCop = Object.assign({},obj)
// or for an array let arrCopy = Object.assing([],arr)

// summary 
/*

// when we see ... in the code it is either rest parameter or the spread syntax 

an easy way to distinguish between them 
wehn ... is at the end of function param its rest parametes and gather the rest of the lsit of arguemnts into an array
when ... occurs in a function call or alike it called a a spread syntax and expands an array into a list 

use patterns 
rest param are used to creat function that accept any number of arguemtns 
the spread syntax is sused to apss an array to functio nthat normally requirest a list of many arguemnts 

together they help to trael between a list and array of apram with ease 
all argument of a function call are also avaiablaes in old -style arguments array like iterable object 


*/


/*

wat wont work 
let obj = {a:1,b:2};
const arr = [...obj]
the palin object is not iterable or numbers or null as array 


let arr = [1,2,3]
const obj = {...arr}
wont works as arry is not iterable an object 

cant use spread on left side of assignemtn 
it is only for unpacking or spreading values 

[...a] = [1,2,,3] no 
 
the iterables are strings,array,sets and maps 
const str = [...str]
this works an array of strings 

spread syntax works if we do 
because obj is iteralbe as an object 
cosnt copyobj = {...obj}

*/


/*
Spread syntax (...) works with iterables like strings, arrays, sets, and maps.
Plain objects, numbers, and null are not iterable, so spreading them into an array ([...obj]) will throw an error.
however 
we can do copyObj = {...obj} 
// in this we just used spread ystanx to copy or merge plain objects 

*/




