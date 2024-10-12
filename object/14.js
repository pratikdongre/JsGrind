function User(name){
    if(!new.target){
        return new User(name);
    }
    this.name = name;
}


let john = User("John");

// console.log(typeof john);

console.log(john.name);


// tasks 
/*

*/

function A(){

}
function B(){

}
let a = new A();
let b = new B();
console.log(a==b);
console.log(new A()== new B());

/*
function Creation() {


}

let x = new A();
let y = new B();

console.log(x==y);
console.log(new A() == new B());
// this is what i did
*/
let obj = { };

function A(){
    return obj;
}

function B(){
    return obj;
}

let x = new A();
let y = new B();

console.log(x==y);
console.log(new A() == new B());
