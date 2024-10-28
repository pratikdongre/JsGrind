// 21 repeat

//functional declaration

function sayHi(){
    alert("hey");
}

copy = sayHi;
result = sayHi(); //  alert returns or this function return is undefined
// this trigger to code () as we used this and code get executed and the function 
// does not return anything so it results value is undefined

copy();
sayHi();

// alert("this is "+ result()); // this is wrong as result store the return value of this function
// alert("this is "+ result); // this is undefined

// console.log("this");




// functional expression

let anotherone = function (){
    alert("mello");
}


anotheroneCopy = anotherone ;

anotherone();
anotheroneCopy();






