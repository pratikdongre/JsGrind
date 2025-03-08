

function sayHello(){
    for(var i =0; i<5; i++){
        console.log(i);        
    }
    console.log(i); // i can be accessed here 
           
}

// sayHello();



function sayHo(){
    for(let i =0; i<5; i++){
        console.log(i);        
    }
    // console.log(i); // i cant be accesesd here 
           
}

// sayHo();

// var is function scope
// let is block scope 
// const is block scope which cant be reassigned


// learnObject();

function learnObject(){

const person = {
    name : "Patik",
    walk : function(){},
    talk(){} ,// another syntax,
    "do-this" : "gym",
}


person.walk();
person["talk"];

// inside a object if we use function we call it as method 
// two ways toaccess a key or method in js 
// dot notation when we know what key we want
// bracket notation when we are unaware about key 
    // two situation using variable and key with - underscore or special chars



}


// learnThis();
function learnThis(){

    const person = {
        name : "pratik",
        walk() {
            console.log(this);
            
        }
    }

    person.walk();
    person['walk'];

    const walk = person['walk'].bind(person);
    walk();
    // console.log(walk);
    // walk();
    
    // this refers to the current object 
    // if we use this in a standaloen function it refers to the window object 
    // and return undefined in strict mode which is nothing but a modern way of executing js in more protecitve way

}



function arrowfunction(){
    const squarev1 = function(number){
        return number*number;
    } 
   console.log(squarev1(5));
    
   const squarev2 = (number) => {
     return number*number;
   }

   const squarev3 = number => number*number;
   
   console.log(squarev3(6));
   
}

// arrowfunction();

function arrowfunction2(){
    const jobs = [
        {id : 1, isActive : true},
        {id : 2, isActive : false},
        {id : 3, isActive : true}
    ];

    const ActiveJobs = jobs.filter(function(job){return job.isActive;})
    console.log(ActiveJobs);

    const activejobs = jobs.filter(job => job.isActive);
    console.log(activejobs);
    
} 


// arrowFunctionAndThis();
function arrowFunctionAndThis() {
    // arrow function dont rebind this 
    const person = {
        talk(){
            var self = this;
            setTimeout(function(){
                // console.log('this',this);  // second this 
                // we got window object 
                console.log('self',self); // now its working  // third this 

            },1000);
            // lets put this inside a setTimeout
            // console.log('this',this); // 1st this 

            setTimeout(()=>{
                console.log("this",this);
                // this is inhertied from the the current object    
            },2000);
            
        }
    }

    person.talk();
}


// Array.map

// arrayMap();

function arrayMap(){
    const colors = ["green",'red','yellow'];

    let items = colors.map(function(color) {
        return '<li> ' + color + ' </li>' ;
    })

    items = colors.map((color) => `<li> ${color} </li>`);
    console.log(items);
    

}

// object destructuring 

// objDestructure();
function objDestructure(){
    const address = {
        street : '',
        city : "",
        country : ''
    };

    // let street = address.street;
    // // let city = address.city;
    // // let country = address.country;

    // // how to rewrite 
    //   ({street} = address);
    //  console.log(street);
    // on when use variable that is already declareed we use () to avoid appearing it like scope 
    
    // const {street, city ,country} = address;
    // or 
    const {street : st} = address;



}

// spread 

// LearnSpread();
function LearnSpread(){
    // const first = [1,2,3];
    // const second = [4,5,6];

    // let combined = first.concat(second);
    // combined = [...first, 'a', ...second,'b']
    // console.log(combined);

    // spread is used on iterables 
    // and to copy the elements 

    // const clone = [...first];
    // console.log(first);
    // console.log(clone);

    
    let first = {name : "pratik"};
    let second = {job : "dev"};

    let combined = {...first , ...second , location : "Nagpur"};
    console.log(combined);

    // or to clone 
    let clone = {...first};
    

    
}

// CLasses
// when we have an object with method we can create a class ie blueprint for it 
// learClass();
function learClass(){
    // const person = {
    //     name : "pratik",
    // }
    
    class Person {
        constructor(name){
            this.name = name;
        }
        walk(){
            console.log(`walk ${this.name}`);
            
        }
        
    }

    const person = new Person("pratik");
    person.walk();
}



// inheritance 
// learnInheritance();
function learnInheritance(){
    class Person{
        constructor(name){
            this.name = name;
        }

        walk(){
            console.log(`walk by me ${this.name}`);
        }
    }

    const person = new Person("pratik");
    person.walk();

    class Teacher extends Person {
        constructor(name,degree){
            super(name);
            this.degree = degree;
        }

        teach(){
            console.log("teaches as well");
            
        }
    }
    const teacher = new Teacher("Tanvi","BE");
    console.log(teacher);
    
    
}


// modules 
// named and default exports 