// what happens when objects are added obj1 + obj2 , subtracted obj1 - obj2 or printed using alert(obj)
// in case of such operations objects are auto converted to primtives and then the operation is carreid out over theses primitives and results in primtive value 
/*
the result of an obj1 + obj2 cant be result into another object 

object to primitve 
there are two purposes 
1. it will allow us to understand whats going on in case of coding mistakes when such operation happens accidentally
2. there are exceptions where such operation are possible and look good eg subtraction or comparing dates
    
*/


// conversion rules 
/*
1. there is no conversion to boolean . all objects are true in boolean context 
there exist only numeric and string conversations

2. the numeric conversion happens when we subtract objects or apply mathematical function
for instance date objects can be subtracted and the result of date1 - date2
is the time difference between two time dates 

3. as the string conversion it usually happens when we output an object using alert(obj)
and in similar contexts 

we can implement string and numeric conversions by ourselves using special object methods 


*/


// Hints 
/*
how does javascript decides which to apply

3types of conversion that happens in various situation 
called hints 

"string" object to string conversion 
when we are doing an operation on an object that expects a string 
like alert

alert(obj)

using object as primary key
anotherObj[obj] = 123

"number"
let num = Number(obj);
// explicit conversion

// maths (except binary plus)
let n = +obj; // unary plus
let delta = delta2 - delta1;

let greater = user1 > user2;

"default"
occurs in rare cases when the operator is not sure what type  to expect 

for instance binar plus can work both with strings and numbers 
so if a binary plus get an object as argument , it uses default hint to convert it 

also if an object is compared using == with a string ,number or symbol
its also unclear which conversion should be done 
so the default hint is used 

let total = obj1 + obj2;
// default hint 

if (user == 1) // default hint 

the greater and less comparison operator such as > < can work with string and numbers as well 
still they use number hint not default 

in most cases when default is used 
it mostly tries to convert the object into a number 
execept with dates beause dates might prefer string over number conversion 


To do the conversion Javascript tries to find and call three objects methods 
1. Call  obj[Symbol.toPrimitive](hint)
the method with a symbolic key Symbol.toPrimitive(System Symbol) if such method exists 

2. otherwise if hint is "string"
try calling obj.toString() or obj.valueOF(),whatever exists 

3. otherwise if hint is "number"
try calling obj.valueOf() or obj.toString(),whatever exists


1. Symbol.toPrimitive
build in symbol which to be use to name the conversion method 

obj[Symbol.toPrimitve] = function (hint){
// here goes the code to convert this object to a primitive 
// it must return a primitive value 
// hint = one of "string" "default" "number"

};

if a method Symbol.toPrimitive exists, its used for all hints and no more method are needed 

*/

let user = {
    name : "john",
    money : 1000,

    [Symbol.toPrimitive](hint){
        alert(`hint : ${hint}`);
        return hint == "string" ? `{ name : "${this.name}"}` : this.money;
    }
};

alert(user); // hint : string -> {name : "john"}
alert(+user); // hint : number -> 1000
alert(user + 1000); // hint : default -> 1500

/*
as we can see from the code 
user becomes a self descriptive string or a money amount depending on the conversion 
the single method user[Symbol.toPrimitive] handles all the conversion cases.
*/


/*
toString/valueOf

if theres no Symbol.toPrimitive then js tries to find methods toString and valueOf : 

For the "string" hint : call toString Method
and if it does not exist or it return an object instead of primitive value 
then call valueOf 
so toString has the priority for string conversations

For other hints : call valueOf and if it does not exist or it return an object instead of primitive value then 
call toString 
so valueOf has the highest priority for number conversation

methods toString and valueOf come from ancient time 
they are not symbols but rather string-name methods 

These methods must return primitive value
if toString or valueOf returns an object then its ignored 
(same as if there were no methods )

by default a plain object has follwing toString and valueOf methods
The toString method return a string 'object [Object]' 
valueOf methods return object itself 


*/

 user = {name : 'pratik'};

 alert(user); // object[Object]
 console.log(user.valueOf() == user) // true

 /*
 SO IF WE TRY TO  see an object as string like alert then we get object[Object] by default
 the default valueOf return the object iteself 

 */

 user = {
    name : 'johncena',
    money : 10000,

    toString(){
        return `name : ${this.name}`;
    },

    valueOf (){
        // return {};
        return this.money;
    
    }
 };

 alert(user);
 alert(+user);
 alert(user + 3000);



 /* often we want same catch-all phrase to handle all primitive conversion
 in this case we can implement toString like this


 
 */ 

 user = {
    name  : "Dong",
    toString(){
        return this.name;
    }
 }

 alert(user);  // Dong
 alert(user + 500); // Dong500
 //In the absence of Symbol.toPrimitive and valueOf, toString will handle all primitive conversions.



 /*

 A conversion can return any primitive type
The important thing to know about all primitive-conversion methods is that they do not necessarily return the “hinted” primitive.

There is no control whether toString returns exactly a string, or whether Symbol.toPrimitive method returns a number for the hint "number".

The only mandatory thing: these methods must return a primitive, not an object.
*/


/*

For historical reasons, if toString or valueOf returns an object, there’s no error, but such value is ignored 
like number to string can happens it would happens 
but string to number might not always hapepn in that case we may get nan
but not error 


but thats not the case with Obj[Symbol.toPrimitive] is striciter 
it must return primtiive else error
*/


/*
Further conversions
As we know already, many operators and functions perform type conversions, e.g. multiplication * converts operands to numbers.

If we pass an object as an argument, then there are two stages of calculations:

The object is converted to a primitive (using the rules described above).
If necessary for further calculations, the resulting primitive is also converted.


*/

let obj = {
    toString(){
        return "2";
    }

};

alert(obj * 2); // 4 first obj is converted to primitive "2" , then multiplicateion made it convert to 2


/*
summary 
The object-to-primitive conversion is called automatically by many built-in functions and operators that expect a primitive as a value.

There are 3 types (hints) of it:

"string" (for alert and other operations that need a string)
"number" (for maths)
"default" (few operators, usually objects implement it the same way as "number")
The specification describes explicitly which operator uses which hint.

The conversion algorithm is:

Call obj[Symbol.toPrimitive](hint) if the method exists,
Otherwise if hint is "string"
try calling obj.toString() or obj.valueOf(), whatever exists.
Otherwise if hint is "number" or "default"
try calling obj.valueOf() or obj.toString(), whatever exists.
All these methods must return a primitive to work (if defined).

In practice, it’s often enough to implement only obj.toString() as a “catch-all” method for string conversions that should return a “human-readable” representation of an object, 
for logging or debugging purposes.
*/