// Extending Built in classes 

// Built in classes like Array,Map and other are extendable also 
/*
for intance PowerArray inheertis from the native array
*/
{
    class PowerArray extends Array{
        isEmpty(){
            return this.length === 0;
        }
        
    }

    let arr = new PowerArray(1,2,5,10,50);

    console.log(arr.isEmpty());

    let filteredArr = arr.filter(item => item >=10);

    console.log(filteredArr);
    console.log(filteredArr.isEmpty());
    if(arr.constructor === PowerArray){
        console.log("yes");
    };

}

// buitl in method like filter  map and other return a new object of exactly inherited type PowerArray 
// their intenral implementation uses the objets constructor proeprty for that 

/*
when arr.filter() is called it interally creates the new array using exaclty arr.constructor not basic array 

that very cool becansue we can keep using PowerArray methods further on the result 

// even more we can customize that behaviour 
we can add a speical static getter symbol.species to the calss 
if it exists it should return the constructor that js will use internally to create new entities in map filter so on 

if we like to build in method like map filter to return regualr arraray we can return array in symbol.species 
 
*/

{
    class PowerArray extends Array{
        isEmpty(){
            return this.length === 0;
        }
    
     // buitl in mehtods will use this as the constructor 

     static get[Symbol.species](){
        return Array;  
     }
     // if we did not use this then filterArr would have use PowerArray

    }

    let arr = new PowerArray(1,2,5,10,50);
console.log(arr.isEmpty()); // false 

let filteredArr = arr.filter(item => item >=10); 
// filter creates new Array using arr.constructor[Symbol.species] as constructor

// console.log(filteredArr.isEmpty());
// filteredArr is not PowerArray but Array
// filteredArr.isEmpty is not a function 

   
}

// .filter returns Array so the extend functinality is not apssed any further 
// other collection such as map and set work alike 
// they also use Symbol.species 


/*
no static inheritance in bulit ins 

Built in object have their own stataic methods for instance Object.keys Array.isArray etc 

nataive classes extend each other 
for instance Array extends Object 

when one calss extends antoher 
both stataic and non stataic methods are inherited 


but built in clases are an execpetion 
tehy dont inherit statics from each other 

for example both array and date inherit from object so theri instance have methods from 
Object.prototype

But Array.[[prototype]] does not reference Object so theres no static method 
for instance Array.keys() or Date.keys() 





new Date() let say 1 jan 2025
has [[prototype]]
Date.prototype

Date has now ,parse and etc 
which has prototype Date.prototype

Date.prototype has 
constructor Date 
toString : function
getDate :Functino

Date.prototype has [[prototype]]
Object.prototype

OBject has defineProperty keys 
object has prototype 
Object.prototype which has constructor Object 
tostring : function
hasOwnproperyt : Function 


there is no link between Date and Object 
they are independ only date.prototype inherts from Object.prototype

thatn imp differnc of  inheritance between builti on objects comapers to what we get with extends  


*/