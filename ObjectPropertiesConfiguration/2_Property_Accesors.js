// Property getter and setters 

// there are two kinds of object properties 

// the first kind is data properties 
// the second kind is something new 
// its an accessor property 
// they are essentially function that execute on getting and setting a value 
// but look like regular properties to an external code 

// Getters and Setters 

// Accessor properties are represented by getter and setter methods 
// in an object literal they are denoted by get and set 

{
    let obj = {
        get propName(){
            // getter,the code executed on getting obj.propName
        },
        set propName(value){
            // setter, the code executed on getting obj.propName = value
        }
    };

    // the getter works when obj.propName is read 
    // the setter works when is is assigned

    obj = {};

    let user = {
        name : "John",
        surname : "Smith",

        get FullName(){
            return `${this.name} ${this.surname}`;
        }
    };

    // now we want to add a fullName Property that should be John Smith 
    // ofcourse we dont want to copy paste exsiting information 
    // we can implement it as an accessor   
    console.log(user.FullName);


}

 // from the outside an acessor property looks like a regualr one 
 // thas the idea of accessor properties 
 //we  dont call user.fullName as a function ,
// we read it normally the getter runs behind the scenes 

// as of now fullName has only a getter 
// if we attempt to assign user.fullName = there will be an error 

{
    let user  = {
        get FullName(){
            return '...';
        }
    };

    user.FullName = "test"; // error property has only a getter 
    // console.log(user.FullName);

    
}

// lets add a setter for user.fullName
{
    let user = {
        name : "John",
        surname : "smith",

        get FullName(){
            return `${this.name} ${this.surname}`;
        },

        set FullName(value){
            [this.name,this.surname]= value.split(" ");
        }
    };

    user.FullName = "Alice Dong";

    console.log(user.FullName);

    // as a result we have a virtual proeprty fullName it is readable and writable 

    // console.log(user);

}

// accessor descriptors
// Descriptor for accessor properties are different from those for data properties 

// for accessor properties there is no value or writable 
// there are only get and set functions 

// that is an accessor descriptor may have 
// get - a function without arguments that works when a property is read 
// set - a function with one argument that is called when the property is set,
// enumerable - same as for data properties 
// configurable - same as for data properties 

// for instance to create an accessor fullName with definePropeorty we can pass a descriptor with get and set 

{
    let user = {
        name : "prat",
        surname : 'Don',
    };

    Object.defineProperty(user,'FullName',{
        get(){
            return `${this.name} ${this.surname}`;
        },

        set(value){
            [this.name,this.surname]= value.split(" ");
        }
        
    });

    console.log(user.FullName);

    for(let key in user){
        console.log(key);
    }

}

// to note that a property can be either an accessor has /get/set methods 
// or a data property that has a value not both 

// if we try to supply both get and value in the same descriptor 
// there will be an error 
// invalid property descriptor 
/*

{
    Object.defineProperty({},'prop',{
        get(){
            return 1 ;
        },
        value : 2
    });
}

*/


// smarter getter/setters 
// can be used as wrapper over real property values to gain mroe contorl over operations with them 

// for instance if we want to forbid too short names for user 
// we can have a setter name and keep the value in a separate property _name

{
    let user = {
        get name(){
            return this._name;
        },
    
        set name(value){
            if(value.length < 4)
            {
                console.log("Name is too short , need at least 4 chars");
                return ;
            }
            else 
            this._name = value;
        }
    };

    user.name = "Pete";

    console.log(user.name);

    user.name = "";

}

// the name is stored in _name property and the access is done via getter and setter 
// external code is able to access the name directly by using user._name 
// but there is a widely known convertion that propertiers starting with an underscore _ 
// are intenral and should not be touched from outside the object 

// using for compatiblity 
// one of the great uses of accessor is that they allow to take contorl overa regular ddta property at any moment 
// by repliacing it with a getting and setter and tweak its behavior

// implementing user objects using data properties name and age 

{
    function User(name,age){
        this.name = name;
        this.age = age;
    }
    let john = new User("John",23);

    console.log(john.age);

    // ut sooner or later things may change 
    // isntead of age we may decide to store birthday 
    // because its more precise and convinient

   
}

{
    function User(name,birthday){
        this.name =name;
        this.birthday = birthday;
    }

    john = new User ("John", new Date(2001,12,26));

    console.log(john.birthday);

}

// now what to do with the old code that still uses age property 

// we can try to find all such places and fix them 
// that takes time and can be hard to do if that code is used by many other people 
// and besides age is nice thing to have in user right ?

// lets keep it 

// adding a getter for age sovles the problem 

{
    function User(name,birthday){
        this.name = name;
        this.birthday = birthday;
        Object.defineProperty(this,"age",{
            get(){
                let todayYear = new Date().getFullYear();
                return todayYear - this.birthday.getFullYear();
            }
        })
    }

    let john =new User("John", new Date(2001,12,26));
    console.log(john.age);
    console.log(john);
    console.log(john.birthday);
}
// now the old code works too and we got nice addtional property