//tasks of "this"

"use strict";

function makeUser(){
    return {
        name : "john",
        ref : this
    };

}

// other version of above 
function makeuser(){
    return this;
}
// console.log(makeuser().name); // would cause error 


// the function is called as function and not as method with "dot" syntax
let user = makeUser();

// console.log(user.ref.name);
// we get undefined on not strict mode because ref beceome global object 
// in strict mode ref is undefined so undefined.name would cause error  


// opposite case 


function userMake(){
return {
    name : "john",
    ref() {
        return this ;
    }
};

}


user = userMake();

/*
user = {
name : "john",
ref(){
return user;
};
}

*/

console.log(user.ref().name); // works john

let calculator = {

    read(){
        //  this.a = prompt("enter value of a ",'2');
        // this.b = prompt("enter value of b ",'2');
        this.a = 4;
        this.b= 5;

    },

    check(){
        console.log("checked start");

        console.log(typeof this.a);
        console.log(typeof +this.b);
        console.log("checked finish");

    },

    sum(){
        let res = +this.a + Number(this.b);
        return res;
    },

    mul()
    {
        return this.a*this.b;
    }


};


calculator.read();
calculator.check();
console.log(calculator.sum());
console.log(calculator.mul());




let ladder = {
    step  : 0 ,
    up(){
        this.step++;
        return this ; // just kept it in mind which is obvious like this would refer to ladder the object 
        // circular reference 
    },

    down(){
        this.step--;
        return this ;
    },
    showStep: function () {
        console.log(this.step);
        return this;
    }
}

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0


ladder.up().up().down().showStep().down().showStep();

ladder
    .up()
    .up()
    .down()
    .showStep()
    .down()
    .showStep();



function consider() {
    console.log("doing");
    return consider;
}

let say = {
    func(){
        console.log("where are we ");
        return this;
    }
}
// console.log(consider()); // return doing andf [functoin : consider]

// console.log(say.func().func());
// console.log(say.func().func());
