// Prototypal inheritance 
// in programming we often want to take something and extend it 

// for instace we have a user object with its proprties and methods and want to make admine and guest 
// as slight modified variants of it 
// we like to reuse what we have in user 
// not copy / reimplmeent its methods 
// just build a new object on top of it 

// prototypal inheritance is a lang feature that helps in that 

// [[Prototype]]
// in js objects have a special hidden property [[Prototype]]
// that is either null or references another object 
// that object is called prototype

// when we read a property from object and its missing 
// js automatically takes it from the prototype 
// in programming this is called prototypal inheritane 

// the property [[property]] is internal and hidden but there are many ways to see it 

// one of them is to use the special name __proto__ 

{
    let birds = {
        drinks : true
    };

    let sparrow = {
        hairs : true
    };
     
    sparrow.__proto__ = birds;

    // now if we read a property from sparrow and its missing
    // js will automatically take it from birds 


}

{
    let animal = {
        eats : true
    };

    let lion = {
        roar : true
    };
    lion.__proto__ = animal; // we set hte prototype for lion :- animal

    console.log(lion.roar);
    console.log(lion.eats);

    // when console tries to read a property lion.eats it not in the lion
    // so js follow the [[prototype]] that is animal 

    // so if animal has lot of useful properties and methods then they become automatically 
    // available to rabbit 
    // such properties are called inherited 


}


{
    // if we had a method in animal // it can be called in lion

    let animal = {
        eats : true,
        walk(){
            console.log("animal walks because talks is not their thing ");
        }
    };

    let lion = {
        roar : true,
    };

    lion.__proto__ = animal;
    // console.log(lion.walk()); // what do you think this would give 
    lion.walk();

}

// the prototype chain can be longer 

{
    let animal = {
        eats : true,
        walk(){
            console.log("Animal walk");
        }
    };

    let lion = {
        roar : true,
        __proto__ : animal,
    };

    let beard = {
        color : "brown",
        __proto__ : lion,
    };

    beard.walk();
}

/*
now if we read something from beard and its missing 
js will look for it in lion and then in animal 

there are only two limitations 
1. the reference cant go in circles 
js will throw an error if we try to assign __proto__ in a circle 

2. the value of __proto__ can be either an object or null 
other types are ignored 

also it may be obv but still there can be only one [[prototype]]
an object may not inherit from two others 

__proto__ is a historicacl getter/setter for [[prototype]]

__proto__ is not the same as [[prototype]] property 
its a getter/setter for [[prototype]] 


// the __proto__ property is a bit outdated 
// it exists for historical reasons mdoern js suggest that we should use 
Object.getPrototypeOf/ object.setPrototypeOf function instead that get/set the prototype

__proto__ must only be supprted by browser 
// all env including server-side- support __proto__ 

*/

// Writing does not use prototype 

// the prototype is only used for reading properties 
// write/delete ops work direcly with the object 

// in the bewlo eg we assign its onw walk method to lion
{
    let animal = {
        eats : true,
        walk(){
            // wont be used by rabbit 
        }
    };

    let lion = {
        roar : true,
        __proto__ : animal
    };

    lion.walk = function(){
        console.log("Tick tock tick tock");
    };

    lion.walk();

    // from now onw lion.walk() calls find the method immediately in the object and executes it 
    // without using the protoype 


}

// accessor properties are an exception as assignemnet is handled by a setter function 
// so writing to such  property is actually the same as callin a function 

// for that reason admin.fullName works correctly

{
    let user = {
        name : "JOhn",
        surname : "Smith",

        set FullName(value){
            [this.name,this.surname] = value.split(" ");
        },

        get FullName(){
            return `${this.name} ${this.surname}`;
        }

    };

    let admin = {
        __proto__ : user,
        isAdmin : true,
    };

    console.log(admin.FullName); // admin.fullName has a getter in the prototype user so it is called 

    admin.FullName = "pratik dongre"; // the proeprty has a setter in the prototype so it is called 
    console.log(admin.FullName);

    console.log(user.FullName); // state of user that is JOhn smiht is protetected

}

// the value of this 

/*
an interesting question may arise 
// whats the value of this inside set fullName(value) ? 
where are the rpoperties this.name and this.surname writtent itno user or admin?

this is not affected by prototypes at all

no matter where the method is found in an object or its prototype in a method call this is always the object before the dot 

so the setter call admin.fullName = uses admin as this not user 

we may have big object with many methods and have objects that inherit from it 
and when the inheriting object run the inherited methods 
they will modify only their own states not the state of the big object 

// animal represents method storage and lion make use of it 
the call lion.sleep() sets this.isSleeping on the lion object 

*/

{
    let animal = {
        walk(){
            if(!this.isSleeping){
                console.log("i walk");
            }
        },
        sleep(){
            this.isSleeping = true;
        }
    };

    let lion = {
        name : "White Lion",
        __proto__ : animal,
    };

    lion.sleep();

    console.log(lion.isSleeping);
    console.log(animal.isSleeping);


    // so if we had objects likes bird,snake etc inheriting from animal 
    // the would also gain access to methods of aanimal 
    // but this in each method cal lwould be corresponding object evaluated at the call before the dot , 
    // not animal 
    // so when we write data into this it is stored into these objects
    
    // as a result methods are shared but the object state is not 


}

// for .. in loop 
// the for ...in loop iterators over inherited properites too 

{
    let animal = {
        eats : true,
    };

    let lion = {
        roar: true,
        __proto__ : animal,
    };

    console.log(Object.keys(lion));
    // only returns own keys 

    // for ..in loops overs both oand in heited keys 
    for(let prop in lion){
        console.log(prop);
    }
}
// if we want to exclude inherited propretiers that a hublin method 
// Object.hasOnwpropertyKey it returns true if obj has its own (not inherited) poprety named key
// so we can filter out inherited properties 

{
    let animal = {
        eats : true,
    };

    let lion = {
        roar : true,
    __proto__ : animal,
    }

    for(let prop in lion)
    {
        let isOwn = lion.hasOwnProperty(prop);
        if(isOwn){
            console.log(`our ${prop}`);
        }
        else {
            console.log(`inherited ${prop}`);
        }
    }

// here we have follwing inheritance chain 
// lion inherit form animal 
// animl inherits from Object.prototype 
// because animal is a literal object {...}
// so its by default 
// and then null above it 


}

/*
where is the method lion.hasOwnProperty coming from 
// we did not define it 
// looking ath echanig we can see that method is provided by Object.prototype.hasOwnProperty
// in other words its inherited 

but why does hasOwnProperty not appeas in for ..in looop like eats and roar do 
if for ..in list inherited properties 
the anser is its not enumerable 
just liek all properties of object.prototype it has enumrable : false flag 
and for ..in only list enumerable properties 
// that why it and the rest of the Object.prototype properties are not listed 


*/

// almost all other kyes /value getting methods ignore inherited properites 
// such as Object.keys,Object.values and so ignore inherited properties

// they only operate on the object itself 
// properties from the prototype are not taken into account 


/*
Summary 
in js all objects have a hidden [[prototype]] property thats eithera another object or null 
we can use obj.__proto__ to access it 
(a historical getter/setter)

the object reference [[prototype]] is called prototype

if we want to read a property of obj or call a method and it does not exits then js tries to find it in the prototype

write/delete operation act direcly on the object they dont use the prototype (assuming its a data property not a setter)

if we call obj.method() and method is taken from the prototype this still reference obj.
so method always work with the current object even if they are inherited 

the for .. in loop iterators over both its own and as well as its inherited properties 
// all other key/value geting method only operatd on the object itself 

*/

// task 1 
// working with prototype
{
    let animal = {
        jumps : null
    };

    let lion = {
        __proto__ : animal,
        jumps : true,
    };

    console.log(lion.jumps);  // true taken from lion 
    delete lion.jumps;
    console.log(lion.jumps);  // takesn from animal 
    delete animal.jumps;
    console.log(lion.jumps);  // undefine there no such property anymore 
    
}


// task 2 

{
    let head = {
        glasses : 1,
    };

    let table = {
        pen : 3,
        __proto__: head,

    };

    let bed = {
        sheet : 1,
        pillow : 2,
        __proto__ : table,
    };

    let pockets = {
        money : 2000,
        __proto__ : bed,
    };

    console.log(pockets.pen);
    console.log(bed.glasses);
    console.log(table.money);

    // in modern engines perfromance wise there no differnce whethere we take a proeprty from an object 
    // or its prototype 
    // they remember where the property was found and reuse it in the next request 

    // for instance pockets.glassses they remever where they found glasses(in head) and next 
    // time wil lserach right there 
    // they are also smart enough to update internal caches if something changes 
    // so optimization is safe 
}


// task 3 
{
    let animal = {
        eat(){
            this.full = true;
        }
    };

    let lion = {
        __proto__ : animal,
    };

    lion.eat();
    console.log(animal.full); // undefined as animal.eat() was not called 
    console.log(lion.full); // true

    /*
    this is an object before the dot so lion.eat() modifies lion
    property lookup and execution are two different things 

    lion.eat is first round in the prototype then executed with this = lion

    */
}

// tasks 4 
{
    let hamster = {
        // stomach : [],
        eat(food){
            // this.stomach = []; we can do this to make it personal for each 

            // this.stomach.push(food); // this adds food into the stomach of the prototype
            this.stomach = [food];
            // assigne to this.stomach which would make it personal for each 
        }
    };

    let speedy = {
        __proto__ : hamster,
    };

    let lazy = {
        __proto__ : hamster,
    };

    speedy.eat("apple");
    console.log(speedy.stomach);

    console.log(lazy.stomach);
}

{
    let hamster = {
        stomach : [],
        eat(food){
           this.stomach.push(food);
        }
    };

    let speedy = {
        stomach : [],
        __proto__ : hamster,
    };

    let lazy = {
        stomach : [],
        __proto__ : hamster,
    };

    speedy.eat("apple");
    console.log(speedy.stomach);

    console.log(lazy.stomach);

    // in this case all properties that describe the state of a particualte object like stomach 
    // should be writtent into that object 
    // the prevents the problem 
}