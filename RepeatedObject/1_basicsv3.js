// for loop to walk over all the keys of an object
// for in loop 

/*
for(key in object){

}

*/

let user = {
    name : "pratik",
    age : 30,
    isAdmin : true,
}

for(let key in user){

    console.log(key + " :- " + user[key]);
}
// key is just a variable name
// we can have a variable with other name also

// are objects orderes ? if we loop over an object,
// do we get all properties in the same order they were added 

/*
integer properties are sorted other appers in created order 

integer properties are those that string can convert to and from an integer without a change 


*/

let  codes = {
    "91" : "india",
    "14" : "germany",
    "18" : "usa",
    "45" : "pak",
    "78" : "jp",
    "inr" : "paisa",
}



// we get values in sorted order 


for(prop in codes)
{
    console.log(prop + " "+ codes[prop]);
}


// integer properties
// now when i say integer properties 
// the only thing it means 
// that a string that can be converted to and from a integer without a damn small change 
// that's exactly what we call integer properties
// let me give you an example that would stay a little longer in your cute young dumb broke little brain 

/*
from below what are the strings that are integer properties 
"49" // god yes
"1.25" // god no 
"+45"  // holy yea

*/

// now as we know if its integer properties then it be sorted 
// but what would you do when you dont want them to be in sorted order 
// what if your brain does not like them in hot naked sorted order 

// here's trick that i did not tell anyone yet 
// this trick that im about to spit has the potential to change not only the whole world but god damn universes with zero downtime and 100% uptime 

// here's the most advanced thing that i have simply put watch out 
// use this "+49" instead of "49" with each property in the object 


// now before we move on to summarize the whole basic of objects 
// let me ask you one little question that would be the set the foundation 
// what is array
// array is continous collection of values stored inside one god damn variable 

// great damn answer right there 
// now we are ready to swtich back to stop using this many words 

/*


objects are associative arrays with several special features 
associatve array :- collection of key value pair 
where each key is associated with a value 

they store what 
properties that is key-value pairs 

to access a property :- 
. notation :- for simple object definition and when we know the property name (aka)literal strings 
[] square notation :-apart from literal strings 
  can use variables 
 can be use while creating objects using function 
 can be use with complex expression 
 if its property name you put inside ""
 if its variable you just put the name inside [] these
 // can use short hand value property 

 additional operator :-
 To delete :- delete obj.prop
 to check if key exist in object :- "key" in object returns boolean value 
 to iteratve over an object :- for (let key in obj)

 there are other kind of objects in js
 array, to store ordered data collection
 Date, to store information about date and time 
 Error, to store information abbout an error


 
*/

// lets do some tasks 

let user1 = {};
user1.name = "John";
user1["surname"] = "Cena"; 
user1["name"] = "Pete";

delete user1.name;

for(key in user1){
    console.log(key + " " + user1[key]);
}


// 2 

function isEmpty(obj){
    let count = 0;
    for(key in obj){
        count++;
    }
    if(count == 0)
    {
        return true;
    }
    else return false;
}

let schedule = {
 
};
console.log(isEmpty(schedule));

schedule["7:00"] = "clock out";

console.log(isEmpty(schedule));


// 3 

let salaries = {
    John : 20,
    Undertaker : 30,
    rock : 50,

}

function sumOfSalaries(salaries){
    let sum = 0;
    for(salary in salaries)
    {
        sum +=salaries[salary];
    }
    return sum;
}


console.log(sumOfSalaries(salaries));

// 4 

// multiply numeric property values by 2


let menu = {
    width : 200,
    height : 300,
    title : "home452"
};

multiplyBy2 = (menu) =>{
    for(key in menu)
    {
        (typeof menu[key] == "number" ) ? 
        menu[key] = menu[key]*2 :
        menu[key];
                  
    }
        
}

multiplyBy2(menu);

for(key in menu)
{
    console.log(`${key} :- ${menu[key]}`);
}

