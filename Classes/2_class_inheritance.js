// Class inheritance 
/*
class inheritacne is a way for one class to extend another class
so we can create ne functionaality on top of existing 

the extends keywords 
*/

{
    class Animal {
        constructor(name){
            this.speed = 0;
            this.name = name;
        }
        run(speed){
            this.speed = speed;
            console.log(`${this.name} runs with speed ${this.speed}.`);
        }

        stop(){
            this.speed = 0;
            console.log(`${this.name} stands still`);
        }            
    }
    let animal = new Animal("My animal");

    animal.run(20);
    animal.stop();
}

/*
Animal --> prototype ----> Animal.protoype 

Animal.protoype has constructor : Animal
                    run : function
                    stop : function
                                           < ------            
new Animal has name : "my Animal" -- [[prototpye]] |
*/

// we like to create another class Rabbit

// as Rabbits are animals class should be based on animal 
// have access to animal methods so that rabbits can do what generic animal can do

// the syntax to extend another class is class Child extends Parent

{
    class Animal {
        constructor(name){  
            this.speed = 0;
            this.name = name;
        }

        run(speed){
            this.speed =speed;
            console.log(`${this.name} runs with speed ${this.speed}`);

        }

        stop(){
            this.speed = 0;
            console.log(`${this.name} stands still`);
        }
    }

    class Rabbit extends Animal {
        hide(){
            console.log(`${this.name} hides!`);
        }
    }

    let rabbit = new Rabbit("White Rabbit");

    rabbit.run(5);
    rabbit.hide();
}


/*
Object of Rabbit class have access both to Rabbit methos such as rabbit.hide() and also to 
Animal method such as rabbit.run()

Internally extends keyword work using the good old prototype mechanics 
it sets Rabbit.propotype.[[prototype]] to Animal prototype
// so if a method is not founc in Rabbit.prototype js takes it from Animal.prototype

Animal 
constructor ---protoype > Animal.protoype
                        constructor : Animal
                        run : function
                        stop : function 

                                              extends 
                            [[prototype]]
                               ^
Rabbit                         |
constuctor ---prototype >   Rabbit.protoype
                            constructor : Rabbit
                            hide : function 

                            [[prototype]]
                            ^
                            |
                        new Rabbit 
                        name : "White Rabbit"
*/

/*
for instance to find rabbit.run method the engine checks bottom to up on the above picture 
1. the rabbiit object (has no run)
2. its prototype that is Rabbit.prototype (has hide , but no run)
3. its prototype that is (due to extends) Animal.prototype that finally has the run method 


as we can call js itself uses protoypal inheritance for buitl in object 
ie Date.prototype.[[prototype]] is Object.prototype
that why deas have access to generic methods 


// any expression is allowed after extends 
Class syntax allows to specify not just a class but any expression after extends 

a function call that generates the parent class 
*/

{
    function f(phrase){
        return class {
            sayHi() {
                console.log(phrase);
            }
        };
    }

    class User extends f("hello") {};
    new User().sayHi();
}

// here class User inherits from the result of f("hello")
// may be used in advaned programming pattersn when we use function to generate classes
// depending on many condition and can inherti from them 



// Overriding method 
//by default all method that are not specified in class rabbit are taken from class Animal
// but if we specify our own method in Rabbit , such as stop() , then it will be used instead 

/*
{
    class Rabbits extends animal{
        stop(){
            // now this wil lbe used for rabbit.stop()
            // instead of stop() from class Animal
        }
    }
}

usually howeve we dont want to tally replace a parent method but rather to build on to of it to tweak or 
extend its functionality 
we do something in our method 
but call the parent method before/after it or in process 

class provide super keyword for that 
super.method(...) to call a parent method 
super(...) to call a parent constructor(inside our constructor only)

for instance let our rabbit autohide when stopped 
*/

{
    class Animal{
        constructor(name) {
            this.speed = 0;
            this.name = name;
        }

        run(speed){
            this.speed = speed;
            console.log(`${this.name} runs with speed ${this.speed}`);
        }

        stop(){
            this.speed = 0;
            console.log(`${this.name} stands still`);
        }


    }

    class Rabbit extends Animal {
        hide(){
            console.log(`${this.name} hides!`);
        }
        stop(){
            super.stop(); // call from parent stop 
            this.hide(); // and then hide 
        }
    }

    let rabbit = new Rabbit("White Rab");

    rabbit.run(10);
    rabbit.stop();
}


/*
now rabbit has the stop method that calls the parent super.stop() in the process 

arrow function have no super 
if accessed its taken from the outer function 

class Rabbit extends Animal {
        stop(){
                setTimeout(()=> super.stop(),1000); // calls parent stop after 1 sec
            }
    }

    the super in the arrow function is the same as in stop() 
    so it works an intended 
    if we speicifed a regualr function here ther be an error 

    setTimeout(function () {super.stop()},1000);

    we may need to gind like 
    delayedstop (){
        const boundStop = function (){
        super.stop();}.bind(this);
    } 
        setTimeout(boundSstop,1000); // calls the bound function

    
*/


// Overriding constructor 
// with constructor it gets a little bit tricky 
// until now Rabbit did not have it own constructor 
// if a class extend another class and has no constructore then the follwing empty constructor is generated 


/*
class Rabbit extends Animal{
    // generated for extending classes without own constructor 
    constructor (...args){
    super(...args);
    }
}

it basically calls the parent constructor passing it all the argument 
// that happens if we dont write a constructor of own automatically

add custom constructor to Rabbit 
it will specify the earLenght in addtion to name 

*/

{
    class Animal {
        constructor(name) {
            this.speed = 0;
            this.name = name;
        }


    }
    class Rabbit extends Animal {
        constructor (name,earLength){
            this.speed = 0;
            this.name = name;
            this.earLength = earLength;
        }
    }

    // let rabbit = new Rabbit("white rab", 10); 
    // error this is not defined 
    // because 
    // constructor in inheriting class/derive class must call super(...) 

    
}

/*
in js theres distinction between a construction fucntion of an inherting /derived class
and other function 
a derived constructor has a special internal property 
[[constructorKind]] : "Derived" 
// that speiccal internal lable 

that levle affect its behavior with new 
when a reugalr function is executed with new 
it creates an empty object and assign it to this 

but when a dervied constructor runs it doesnot do this 
it expect the parent constructor to do this job 

so a derived constrcutor must call super in order to execute it parent (base) constructor 
otherwise objet for this wont be created and we wil get an erro 

for the rabbit cosntructor to work it neeed to call super() before using this 
*/

{
    class Animal{
        constructor(name) {
            this.speed = 0;
            this.name = name;
        }
    }

    class Rabbit extends Animal {
        constructor(name,earLength){
            super(name);
            this.earLength = earLength;
        }
    }

    let rabbit = new Rabbit("white rab",10);
    console.log(rabbit);
}


// overriding class fields 
// we can override not only method but also class fields 
// although theres tricky behaviour when we access an overridden field in parent constructor 
// quite different from most other programming lang 

{
    class Animal{
        name = 'animal';
        constructor(){
            console.log(this.name);
        }
    }

    class Rabbit extends Animal {
        name = "rabbit";
    }
    new Animal(); // animal 
    new Rabbit(); // animal 
}

/*
class Rabbit extends and overrides the name field with its own value 

there no own constructor in rabbit so animal constructor is called 

in both cases 
new Animal() and new Rabbit() the console.log() show animal

the parent constructor always uses its onw field value not the overriden one 


*/
// smae code but instead of this.name field we call this.showName() methd 
{

    class Animal{
        showName(){
            console.log("animal");
        }

        constructor(){
            this.showName();
        }

    }

    class Rabbit extends Animal {
        showName(){
            console.log("Rabbit");
        }
    }

    new Animal();
    new Rabbit();
}

