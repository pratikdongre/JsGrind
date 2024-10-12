"use strict;"

let obj = { 
    name : "jon",
};

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


function Calculator(){

    this.read = function (){
        this.a = prompt("enter value of a ","2");
        this.b = prompt("enter value of b ","2");
    };

    this.sum = function(){
        return +this.a+Number(this.b);
    };

    this.mul = function(){
        return this.a*this.b;
    };
}

let calculator = new Calculator();
calculator.read();

alert(`Sum = ${calculator.sum()}`);
alert(`Mul = ${calculator.mul()}`);


function Accumulator(startingValue){
    // this : {}; creeated this object and store it all 

    this.value = startingValue;

    this.read = function(){
        let newValue = +prompt("enter new number","2");
        this.value += newValue; 
    }

    // return this ; object

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();

alert(accumulator.value);