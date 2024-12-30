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