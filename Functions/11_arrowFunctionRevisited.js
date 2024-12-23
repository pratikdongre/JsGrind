// arrrow function revisted 

// arrow function are not just shorthand for writting small stuff 
// they have very specific and usefule features

// js is full of situation where we need to write  a small function thats executed somewhere else 

// for instance 
// arr.forEach(func) - func is executed by forEach for every item of an array 
// setTimeout(func) - func is exeucted by built in scheduler 

// its in the very spirit of js to create a function and pass it somewhere 


// and in such situation we usually dont want to leave the current context 
// thats where arrow function come in handy 

// Arrow functions have no "this"

// if this is accessed it is taken from outside 

// for instance we can use it to iterate inside an object method 

{
    let group = {
        title : "Our group",
        students : ["John", "Pete","Alice"],

        showList(){
            this.students.forEach(student => console.log(`${this.title} :- ${student}`));
        }
    };
    group.showList();
}


/*
here in ,forEach the arrow function is used 
so this.title in it is exactly the same as in the outer method showList 
that is group.title
*/

{
    let group = {
        title : "Our group",
        students : ["John","Pete","Alice"],
        showList(){
            this.students.forEach(function(student){
                // console.log(title.bind(group) + ' :- ' +student);
                // this wont work becaue title is proeprty not a function 
                // bind is used function specific method that changes this context of a function
                console.log(this.title + " :-" +student);
            // }.bind(this));
            });
        }
    };

    group.showList();  //error title is undefined
}


// the error because forEach runs function with this = undefined by default so the attempt to access undefined.title  is made 

// that does not affect to arrow function as they dont have this 

// arrow function cant run with new 
// not having this naturally means another limitation 
// arrow function cant be used as constructor they cant be called with new 


// arrow function vs bind 
// difference between arrow function => 
// and a regualr function called with .bind(this)

//.bind this create bound version of the function 
// arrow => does not create any binding 
// the function simply does not have this 
// the lookup of this is made exactly the same way as regular variable search in the outer lex env 


// arrow have no arguments 
// arrow function also have no arguments variable 
// great for decorators when we need to forward a call with current this and arguments 

// for instance defer(f,ms) gets a function and return a wrapper around it that delays the call by ms seconds 

{
    function defer(f,ms){
        return function(){
            setTimeout(()=> f.apply(this,arguments),ms);
        };

    }
    function sayHi(who){
        console.log("Hello, " + who);
    }
    let sayHiDeffered = defer(sayHi, 2000);
    sayHiDeffered("JOhn");
    // hello John after two seconds
}

// the same without an arrow function would look like 

{
    function defer(f,ms){
        return function (...args){
            let ctx = this;
            setTimeout(function (){
                return f.apply(ctx,args);
            },ms);
        }
    }

    function sayHi(who){
        
        console.log("hey " + who);
    }

    let sayHiDeffered = defer(sayHi,2000);
    sayHiDeffered("Mon");
}

// here we had to create addtional variables args and ctx so taht the function inside setTimeout could take them 

// summary
/*
arrow function 
do not have this 
do not have arguments 
cant be called with new 
they also dont have super,
theats because they are meant for short pieces of code that do not have their own context 
but rather work in current one 
and they really shine in that case 
*/