// static properties and methods 
// we can also assign a method to the class as whole 
// such method are called static 

// in a class declaration they are prepended by static keyword 

{
    class User {
        static staticMethod(){
            console.log(this === User);
        }
    }

    User.staticMethod();
}

// that actually does the same as assigining it as a property directly  

class User {};

User.staticMethod = function (){
    console.log(this === User);
}

User.staticMethod();

// the value of this in User.staticMethod calls the class constructor itself (the object before dot rule)

// Usually static methods are used implement a function that belong to the class as whole 
// but not to any particular object of it 

// for instance we have article objects need a function to compare them 

// a natural solution would be to add Article.compare static method 

{
    class Article{
        constructor(title,date){
            this.title = title;
            this.date = date;
        }

        static compare(ArticleA, ArticleB){
            return ArticleA.date - ArticleB.date;
        }

    }
    let articles = [
        new Article ("HTML", new Date(2019,1,1)),
        new Article("CSS" , new Date(2019,0,1)),
        new Article("JS", new Date(2019,11,1)),
    ]
    articles.sort(Article.compare);

    console.log(articles[0].title);
}

// here Article.compare stands above articles as a means to compare them  
// its not a method of an article ie instance of class but rather of whole class 


// another example would be so called factory method 
// let say we need multiple ways of creating an article 
// 1. Create by given parameters(title,date,etc)
// 2. Create an empty article with todays date 
// 3. or else somehow

// the first way can be implemented by the constructor 
// the second can be made by static method of the class 

// such as Article.createTodays()

{
    class Article {
        constructor(title,date){
            this.title = title;
            this.date = date;
        }

        static createTodays(){
            // remember , this = Article
            // you shall this instead of Article what if the name changes huh 
            return new this("Todays digest", new Date());
        }
    }

    let article = Article.createTodays();
    console.log(article);
}

// now everytime we need to create a todays digest we can call Article.createTodays()
// once again thats not a method of an article , but a method of the whole class 

/// static methods are alos used in datebase related classes to search/remove/save entries from the databse 

{
    // asusming Article is a speical class for managing articles 
    // static method to remove article by id 
    // Article.remove({id : 12345});
}

// static methods arent availabe for individual objects 
//static method are callable on classes not on indiivual objects 
// eg article.createTodays() // error article.createTodays is not a function 

// static properties 
// static properties are also possible they look like regular class proeprties 
// but preprended by static : 

{
    class Article {
        static publisher = "Ilaya Kantor";
    }
    console.log(Article.publisher);
}

// that is same as a direct assignemt to Article 
// Article.publishser = "ILya kantor"
// if we did not use static then its the property of instance of Article 

// Inheritance of static properties and method 
// static propertie and methods are inherited 

// Animal.compare and Animla.planet are inherited and accesisble as Rabbit.compare and Rabbit.planet

{
    class Animal {
        static planet = "Earth";

        constructor (name,speed){
            this.speed = speed;
            this.name = name;
        }

        run(speed = 0){
            this.speed += speed;
            console.log(`${this.name} runs with speed ${this.speed}`);
        }

        static compare (animalA,animalB){
            return animalA.speed - animalB.speed;
        }

    }

    class Rabbit extends Animal{
        hide(){
            console.log(`${this.name} hides!`);
        }
    }
    let rabbits = [
        new Rabbit("White Rab",100),
        new Rabbit("Black Rab",15),
        new Rabbit("Pink Rab",19),
    ];

    rabbits.sort(Rabbit.compare);

    rabbits[0].run();

    console.log(Rabbit.planet); 

}

// now when we call Rabbit.compare the inheretied Animal.commpare will be called 
// how does it work Again using prototypes 
// extend gives rabbit the [[prototype]] reference to the animal


/*
Animal has compare and planet 
Animal.protoype  has cosntructor : Animal and run : function 

as extend 
Rabbit has [[prototype]] to animal 
Rabbit.prototype has constructor : Rabbit and hide : function 

Rabbit.prototype has [[prototype]] to Animal.prototype

rabbit which has name : WHite rabbit" has [[prototype]] to Rabbit.prototype

so raabit extend animal create two [[prototype]] reference 
1. Rabbit function prototypally inherit from animal function 
2. Rabbit.prototype prototypally inhertis from Animal.prototype


*/

{
    class Animal{}
    class Rabbit extends Animal {}

    console.log(Rabbit.__proto__ === Animal);
    // for statics 

    console.log(Rabbit.prototype.__proto__ === Animal.prototype);
}



/*
Summary 
static methods are used for the functinality that belongs to the class as a whole 
it does relate to a concret class instance 

for example a method for comparision Article.compare(article1, article2) 
or a factory method 
Article.createTodays()

they are labeled by the word static in class declaration 

static properties are used when we like to store class level data also not bound to an isntance 

{
class Myclass {
static property = ...
static method (){
....
}
}
}

techincally static delcaration is the same as assigneing to the class itelsef 

Myclass.propety = ...
Myclass.method = ...

static properties and methods are inherited 

for class B extend A the protoype of class B iteself point ot A :
 B.[[prototype]] = A so if a field is not found in B the search continues at A 

*/

// task 
// class extends Object 

// as we know all objects normally inherit from Object.prototype and get access to generic object methods 
// like  hasOwnProperty etc 

{
    class Rabbit {
        constructor (name){
            this.name = name;
        }
        
    }
    let rabbit = new Rabbit("Rab");

    console.log(rabbit.hasOwnProperty('name'));

    // hasOwnProperty is a method of Object.prototype
}


// but if we speel it out explicitly like 
// class Rabbit extend OBject 
// then the resutl would be differen from simple class rabbit 

{
  
    class Rabbit extends Object {
        constructor(name){
            super(); // intialize the parent class 
            //Without super(), the this keyword cannot be used, because JavaScript needs to first set up the parent class 
            // before initializing the properties of the subclass.
            this.name = name;
        }
    }
    let rabbit = new Rabbit("Rab");

    console.log(rabbit.hasOwnProperty('name'));
}


// there still differenct between class Rabbit extends Object 
// and class Rabbit

// the extends sets two proptotypes 
/*
between prototype of the constructor function (for methods )
between the constructor function themselves (for static methods )
*/

{
    class Rabbit extends Object {}

    console.log(Rabbit.prototype.__proto__=== Object.prototype);
    console.log(Rabbit.__proto__ === Object);


}

{
    // so rabbit now provides access to the static mehtods of OBject via Rabbit like this 
    class Rabbit extends Object {}
    // normally we call Object.getOwnPropertyNames
    console.log(Rabbit.getOwnPropertyNames({a:1,b:2}));
}

// but if we dont have extends Object then Raabit.__proto+ is not set to Object 

{
    class Rabbit{}
    console.log(Rabbit.prototype.__proto__ === Object.prototype);
    console.log(Rabbit.__proto__ === Object);

    console.log(Rabbit.__proto__ ===Function.prototype );

    console.log(Rabbit.prototype.__proto__.getOwnPropertyNames({a:1,b:2})); // error 

}

// so Rabbit doesnot provide access to static methods of Object in that case 
/*
Function.prototype also has generic function methods like call,bind etc 
they are available in both case 
becasue OBject consturctor Object.__proto == Function.prototype


so class Rabbit 
Rabbit.__proto__ === Function.prototype

class Rabbit extends Object
needs to call super() in constructor 
Rabbit.__proto__ === Object

class Rabbit 

Rabbit has constructor
Rabbit [[prototype]] or __proto__ has Function.prototype

class Rabbit extends Object 

Rabbit constructor 
Rabbit [[prototype]] has Object : constructor 

Object has [[prototype]] has Function.prototype
*/