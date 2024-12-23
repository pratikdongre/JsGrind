// Property flags and Descriptor 
// as we know object can store properties
/*
until now property was simple key-value pair to us 
but an object property is actually more flexible and powerful thing 

*/

// Property Flags 
/*
Object properties besides a value , have three special attributes (so called flags)
writable - if true , the value can be changed , otherwise its read only 
enumerable - if true then listed in loops otherwise not listed 
configurable - if true ,the property cant be deleted and these attributes can be modified otherwise not 

we did not see them yet because they do not generally show up
when we create a property the usual way all of them are true.

but we can also change them anytime 

let see how to get those flags 
the method Object.getOwnPropertyDescriptor allows us to query the full infomration about a property 

let descriptor = Object.getOwnPropertyDescriptor(obj,propertyName);

obj 
the object to get information from 

propertyName the name of the property

the Returned value is so called property Descriptor object  
it contains the value and all the flags 

*/

{
    let user ={
        name : "Pratik"
    };

    let descriptor = Object.getOwnPropertyDescriptor(user,"name");
    
    console.log(JSON.stringify(descriptor,null,2));
}

/*
"value": "Pratik",
  "writable": true,
  "enumerable": true,
  "configurable": true

*/

// to change the flag we can use Object.defineProperty
// syntax :- Object.defineProperty(obj,PropertyName,descriptor)

// obj, PropertyName
// the object and its property to apply descriptor

// descriptor 
// property descriptor object to apply`

// if the property exists defineProperty updates its flags 
// otherwise it creates the proeprty with the given value and flags 
// if a flag is not supplied it is assumed false 

{
    let user = {};

    Object.defineProperty(user,"name",{
        value : "John"
    });

    let descriptor = Object.getOwnPropertyDescriptor(user,"name");

    console.log(JSON.stringify(descriptor,null,2));
}

/*
compare it with normally created user.name above 
all flags are falsy 
if that not what we want then we better set them to true in descriptor 

*/

// Non Writable 
// user.name  non writable (can't be reassigned ) by changing writable flag

{
    let user = {
        name : "JOhn",

    };

    Object.defineProperty(user,"name",{
        writable : false
    });

    let descriptor = Object.getOwnPropertyDescriptor(user,"name");

    // console.log(JSON.stringify(descriptor,null,2));

    user.name = "Pete";


    // console.log(user.name); // could not change user.name =  "Pete"
    
}


// now no one can change the name of our use unless they apply their own defineProperty to override ours.
// error appear only in strict mode 
// in non strict mode no errors occurs when writing to non-writable properties and such 
// but the operation still wont succed 
// flag violating are just silently ignored in non strict 

{
    let user = {};

    Object.defineProperty(user,"name",{
        value : "Pratik",
        enumerable : true,
        configurable : true,
    });

    console.log(user.name);
    user.name = "Pete";
}

// non enumerable 
// lets add a custom toString to user

// normally a builtin toString for objects is non numerable 
// it does not show up in for ..in 
// but if we add a toString of our own 
// then by default it shows up in for .. in 

{
    let user = {
        name : "Disco",
        toString(){
            return this.name;
        }
    };

    for(let key in user) console.log(key);
}

// if we dont like it we can set enumerable : false 
// then it wont appear in a for.. in loop just like the built one 

{
    let user = {
        name : "DHanno",
        toString(){
            return this.name;
        }
    };

    Object.defineProperty(user, "toString",{
        enumerable : false
    });

    for(let key in user) console.log(key);

    // non numerable properties are also excluded from object.keys

    console.log(Object.keys(user));
}

// non configurable 

// the non configurable flag (configurable: false) is sometimes preset for built in object and properties 
// a non configurable property cant be deleted , its attributes cant be modified 

// for instance Math.PI is non-writable, non-enumerable, non-configurable

{
    // let Math = {};

    // console.log(Math.PI);

    let descriptor = Object.getOwnPropertyDescriptor(Math,"PI");

    // console.log(typeof descriptor);
    // console.log(descriptor);
    console.log(JSON.stringify(descriptor,null,2));

    Math.PI = 3;
    // error because it has writable : false 
    // delete Math.PI wont work either 

    // we also cant cahnge Math.PI to be writable again 

    // Object.defineProperty(Math,"PI",{writable : true});
    // error because of configurable : false

    // making a proprty non configurable is a one way road 
    // we cannot change it back with defineProperty

    // configurable : false  prevent changes of property flags and its deletion while allowint to change its value

    // here user.name is non-configurable but we can still change its value 
    // if is writable: true;

}

{
    let user = {
        name : "Dajiba"
    };

    Object.defineProperty(user,"name",{
        configurable : false
    });

    user.name = "Pete";
    // console.log(user.name);
    // delete user.name;  not working 

    let descriptor = Object.getOwnPropertyDescriptor(user,"name");

    // console.log(descriptor);
}



