// functional expression 

function sayHi(){
    console.log(" hi");
}
// this is functional declaration 


let functionGotStored = sayHi;
let result = sayHi();// logs and assigned return value to the result


functionGotStored(); // logs hi
sayHi();// logs hi



let anotherKindOfFunction = function(){
    console.log("hello");
};
// we have semicolon functional expressoin 
// just like normal varible liek 
// let anotherone = 5; 

let anothercopy = anotherKindOfFunction;

anotherKindOfFunction();
anothercopy();


// lets iteration 
// no matter how funtion is created 
// function is a value

// let print the value 

console.log(anotherKindOfFunction);

// surely function is a special value 
// that we can call it using ()

