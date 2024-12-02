// iterables object are generalization of arrays 
// that is the concept that allow us to make any object useable in a for.. of loop

// arrays are iterable ofcourse but there are other built in objects that are also iterable as well.
// for instance strings are iterables 

// if an object is not techincally an array , but representsa collection of list,set  of something 
// then for .. of is a great syntax to loop over it ,

//Symbol.iterator 
// we have an object that is not array but looks suitable for for ..of 
// like a range object that represent an interval of numebers 

let range = {
    from : 1,
    to : 5,  
};


// for(let num of range)
// {
//     console.log(num);
// }
// not iteratble yet 

// to make the range object iterable  we need to add method to the object named 
// symbold.iterator (a special built-in symbol just for that )


range[Symbol.iterator] = function (){

    return {
        current : this.from,
        last : this.to,
        
        next(){
            if(this.current <= this.last){
                return {done : false,value : this.current++};
            }
            else {return {done : true

                         };
            }
        }

    };
}


 for(let num of range)
{
    console.log(num);
}



// we could put the [symbol.iterator]() and next() inside the range object 
// but then the downside is its impossible to have two  for..of loop simulatenously 
// as they will share the same iteration state because there will be only one iterator the object itself 



// string is iterable 
// array and strings are most widely used built in iterables 

// for a string for ..of loops over its character 
for(let char of "test"){
    console.log(char);
}

let str = '𝒳😂';
// works correclty with surrogate pairs 
for(let c of str){
    console.log(c);
}


//Calling an iterator expliclty

str = "HEllo";

let iterator = str[Symbol.iterator]();

while(true)
{
    let result = iterator.next();
    if(result.done == true)
        break;
    
    console.log(result.value);
}

// this is rare but gives us more contorl over for ..of 
// we can split the iterate process : iterate a bit , stop ,then do something else and then resume later 


// iterators and array likes 

/*
iterators : iterators are object that implement Symbol.iterator method 


array likes : are objects that have indexes and length , so the look like array 

*/

//When we use JavaScript for practical tasks in a browser or any other environment, 
// we may meet objects that are iterables or array-likes, or both.

// for instance strings are both iterable (for..of) and array like (the have index and length)

// but an iterable may not be array-like .and vice versa an array like may not be iterable 

// for example the range object is iterable but not have index or length


// hers the array like object that is not iterable 

let arrayLike = {
    0 : "hello",
    1 : "world",
    length : 2,
};

// for(let item of arrayLike)
// {
//     console.log(item);
// }  
// not iterable 


// both iterables and arrayLike are usually not arrays . they dont have push pop and etc
// That’s rather inconvenient if we have such an object and want to work with it as with an array. 
// E.g. we would like to work with range using array methods. How to achieve that?

// Array.from
// theres a universal method Array.from that takes iterable object or array like object 
// and convert it to the real array


arrayLike = {
    0: "Hello",
    1: "world",
    length : 2,
}

// console.log(arrayLike[0]);

let arr = Array.from(arrayLike);

console.log(arr);
console.log(arr.pop());


// Array.from takes the object, examines it for being an iterable or array-like, 
// then makes a new array and copies all items to it.

arr = Array.from(range);
console.log(arr);

// Full syntax for Array.from also allows us to provide an optional mapping function
//Array.from(obj[,mapfn, thisArg])

// we have obj that would get converted to the array
// mapfn can be a function that will be applied to each element before adding it the array
// thisArg allows to use this for it 

arr = Array.from(range,num => num*num);

console.log(arr);

str = '𝒳😂';

let chars = Array.from(str);
console.log(chars[0]);
console.log(chars[1]);
console.log(chars.length);


//Array.from handles surrogate pairs correctly
//  because it relies on string iteration (like for..of), whereas split does not.

chars = [];
for(let key of str)
{
    chars.push(key);  
      
}
console.log(chars);

// build surrogate aware slice  
// because if we slice normally it wont work 

str = '𝒳😂𩷶';

// console.log(str.slice(1,3));
// aint working 

function slice(str,start,end)
{
    return Array.from(str).slice(start,end).join('');
}

console.log(slice(str,1,3));


// summary
// objects that can be used in for..of are iterables 
// technicaly iterable must impletem symbol.iterator
// the result of obj[Symbol.iterator]() is called iterator 
// it handle further iteration process

// an iterator must have method next() that returns an object {done : Boolean, value :any}
// here done : true denotes end of iteration process , otherwise value is the next value

// The Symbol.iterator method is called automatically by for..of, but we also can do it directly.
// Built-in iterables like strings or arrays, also implement Symbol.iterator.


// String iterator knows about surrogate pairs.

for(let key of str){
    console.log(key);
}


// objects that have index properties and length are called array like 
// such objects may also have other properties and methods ,
// but lacks the builtin array methods 

// If we look inside the specification – we’ll see that most built-in methods assume that they work with iterables or array-likes instead of “real” arrays,
//  because that’s more abstract.

// Array.from(obj[,mapfn,thisArg]) makes an areal array from an iterable or array like obj,
// and we can use methods on it .
// the optional mapfn can be used as a function to makes changes to each element before  adding to the array
// and thisArg to make use of "this"