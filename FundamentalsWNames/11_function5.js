//21
function sayHi (){
    alert("hello");
}
//this is functional declaration

let func = sayHi; // in this we store the function itself not the value 
let result = sayHi();// if we use () then it will give the return value into it 
func();
sayHi();


let anotherone = function(){
    alert("mello");
};
// we have semicolon in functional Expression 
// just like let anotherone = 5 ; we put in this too 
//semicolon would there be for simpler assignment so here too 

let anotheroneCopy = anotherone;

anotherone();
anotheroneCopy();