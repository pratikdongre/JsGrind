// in javascript we can only inherti from a single object 
// there can be only one [[prototype]] for an object 

// a class may extend only one other class 

/*
but sometimes that feels limiting 
we have a class StreetSweeper and a class Bicycle and want to make theri mix 
a StreeSweepingBicycle

or we have class User and a class EventEmitter that implement event generation and we like to add 
the functionality of EventEmitter to User so that our users can emit events

there a concept that can help here mixins

a mixing is a class contaiing methods that can be uses by other classes without a need to inherti from it 

mixing provides methods that implement a certain behavior but we do not use it alone we use it to add the behaviour to other classes 


// a mixing example 
the simplest way to implemenet a mixing in js is to make an object with useful methods so that we can easily 
merge them into prototype of any class 

for instance the mixing sayHiMixing is used to add some speech for User 
*/

{
    // mixing 
    let sayHiMixing = {
        sayHi(){
            console.log(`Hello ${this.name}`);
        },
        sayByes(){
            console.log(`Bye ${this.name}`);
        }
    };

    // usage
    class User {
        constructor(name) {
            this.name = name;
        }
    }

    // copy the methods 
    Object.assign(User.prototype,sayHiMixing);

    new User("Dude").sayByes();

}

// theres no inheritance but a simple method copying 
// so User may inherti from another class and also include the mixing to mixin the addtional methods 
/*
{
    class User extends Person {
        // ... 
    }

    Object.assign(User.prototype,sayHiMixing);
}

*/

// mixings can make use of inhertinace inside themselves 
// sayHiMixin inhertis from sayMixin
{
    let sayMixin = {
        say(phrase)
        {
            console.log(phrase);
        }
    };

    let sayHiMixin = {
        __proto__ : sayMixin,
        // or Object.setPrototypeOf to set the prototype here 

        sayHi(){
            // call parent method 
            super.say(`Hello ${this.name}`);
        },
        sayBye(){
            super.say(`Bye ${this.name}`);
        }
    };

    class User {
        constructor(name) {
            this.name = name;
        }
    }
    
    Object.assign(User.prototype,sayHiMixin);

    new User("Babe").sayHi();
    
}

// the call to parent method super.say() from SayHiMixin 
// looks for the method in the prototype of that mixing not the class 

/*
                                      sayMixing
                                      say : function 
                                      [[prototype]]
 
user.prototype                               |
constructor : user                           |
sayHi : function         [[homeObject]]  sayHiMixing 
                                            sayHi : function sayHi Bye function 
sayBye : function


[[prototype]]
user : name ...


sayHi and sayBye were intially created in SayHiMixing 
so even though they got copeid theri [[homeobject]] internal property reference SayHiMixin

as super looks for parent methods in [[homeobject]].[[prototype]]
that means it seraches in SayhiMixin.[[prototype]]

*/


// eventMixing
/*
an impt features of many broswer for(intsnace) is that they can generate events 
events are a great way to broadcaset information to anyone who want its 
so lets make a mixing that allow us to easily add event related function to any class/object

the mixin will provide a method 
.trigger(name,[...date]) to generate a event 
wehn something imp happens to it 
the name argument is a name of the even 
optioanlly followed by addational argumetns with event data 

also method .on(name,handler) that addsd handler function as the listener to events with the given name 
it will be called when an event with the tvien name trigger 
gets the arguemtns from the .trigger call

adn the method .off(name,handler) that removes the handler listener 


after adding the mixing an object user will be able to generate an even login 
when the vistor login in 

and another object say calendar may want to listen for such evens to load the calendar for the logged in person 

or a menu can generate the event select wehn a menu item is selected and tother objects may assigne handler to react on that event 


*/

{
    let eventMixin = {
        // susbscribe to event,usage
        // menu.on('select',function(item){...})
    

    on(eventName,handler){
        if(!this._eventHandler) this ._eventHandler = {};
        if(!this._eventHandler[eventName]) {
            this._eventHandler[eventName] = [];
        }

        this._eventHandler[eventName].push(handler);
    },

    // cancel the subscription,usage 
    // menu.off('select',handler)

    off(eventName,handler){
        let handlers = this._eventHandler?.[eventName];
        if(!handlers) return ;
        for(let i = 0;i< handlers.length ; i++)
        {
            if(handlers[i]=== handler){
                handlers.splice(i--,1);
            }
        }
    },


    // geenrate an event with the given name and data 
    // this.trigger ("seelct",data1,data2)
    trigger(eventName,...args){
        if(!this._eventHandler?.[eventName]){
            return ; // no handler for that event name 
        }
        this._eventHandler[eventName].forEach(handler => handler.apply(this,args));

    }
}

/*
.on(eventName,handler) assigns function handler to run wheen the event with that name occues 
_eventHandler property that stores an array of handler for each even name and it just adds to it list 

.off (eventName,handler) -removes the function from the handler list 

.trigger(eventName,...args) generates the event all handlers from _eventHandler[eventName]
are caleld with list of argumetns ...args 
*/

class Menu {
    choose(value){
        this.trigger("select",value);
    }
}
Object.assign(Menu.prototype,eventMixin);

let menu = new Menu();

menu.on("select",value => console.log(`value selected ${value}`));

menu.choose("123");
// triggers the event => handler above runs and show 
// value selecated 123 


// now if we like any code to react to a menu selection we can listen for it wthi menu.on(...)

// and eventMixin mixin makes it easy to add such behvaiour to as many class as we like 
// without interfereing the inherticance chain 

}


/*
Summary 
Mxiing is a gneric ooops term a class that contain method for other classes 

some other langu allso multiple inheritnace 
js does not support multipel inehrticane but mixings can be implementd bu copying methods into prototype 

we can use mixin as a way to agument a class by adding multipel behvaiour 
like event handling as we have 

mixin may beocme a point of conflixt if they accidently overwrite exiging calss methods 
so generaly one should thinkg well about the naming methods of a mixing 
to miinize the probabilty of that happening 

*/