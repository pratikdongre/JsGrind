// Destructuring Assignment 

// the two most used ds in js are object and array 
// object allow us to create a single entity that stores the data item by key 
// arrays allow us to gather data items into an ordererd list 

/*
however when we pass these to a function we may not need all of it . 
the function might only requiere certain element or properties

Destrucuting assignemnt is a special syntax taht allows us to unpack array or object into bunch of variables 
as somethimes that's more convenient

Destruturing also works well with complex function that have a lot of parameters,defaults values and so on 


*/


// array destructuring 

let arr = ["pratik", "Dongre"];
// we have an array with firstName and surName

// destrucuting assignment 
let [firstName,surname] = arr;
// sets firstName = arr[0]
// surname = arr[1]

console.log(firstName);
console.log(surname);

// now we can work with variables instead of array memebers

// another one 
// it looks great when comvined with split or other array -return methods 

 [firstName, surName] = "Pratik Dongre".split(' ');
 

 console.log(firstName);
 console.log(surName);


 // syntax is simple but there are some peculiar details tho

 // Destrucuting does not mean destructive 
 // it called destructing assignement beause it destructurizes by copying item into variables 
 // the array itself is not mosdieid 

// let [firstName,surName] = arr;
// let firstName = arr[0];
// let [surName] = arr[1];

// ignore element using commas 
// 'pratik' ,'hate' ,'loves', 'sad'
// ignore hate 

let [naam,,kaam] = ["Pratik", "Hate", "Loves", "Sad"];
console.log(kaam); 
// we skipped hate and the third element is assigned to kaam and rest of the array is also skipped

// works with any iterable not only arrays 
// works with any iterable on the right side 

let [a, b, c] = "abc";
let [one,two,three] = new Set([1,2,3]);

// that works because internally a descturcing assignment works by iteraiton over the right value 
// its kind of syntax sugar for calling for..of over the value to the right of = and asisging the values 

// assign to anyting at the left-side
// we can use any assiginagle on the left side 

let user = {};

[user.name, user.surname] = "Pratik Dongre".split(' ');

console.log(user);

// looping with .entries()

// we know Object.entries(obj) returns an array of key,value

user = {
    name : "pratik",
    age : 22,
};

for(let [key,value] of Object.entries(user)){
    console.log(`${key} :- ${value}`);
}

user = new Map();
user.set("name","Pratik");
user.set("age","22");


// map iterates as [key,value] pairs very convenient for destrucing 

for(let [key,value] of user){
    console.log(`${key} :- ${value}`);
}


// swap variables trick 
// there a well know nstrick for swapping values of two var using a destructing assignment

let guest = "Leja";
let admin = "Leja re";

[guest,admin] = [admin,guest];
console.log(`${guest} and ${admin}`); 

// the rest '...'

/*
Usally if the array is longer than the list at the left , the "extra" items are omitted
in below exaple only two items are taken and rest are ignored 
*/

let [name1,name2] = ["Pratik", "is" , "Sochta" , "upar"];
console.log(name1);
console.log(name2);

// if we liek to gather all that follows 
// we can add one more paramneter that get "the rest" using "..."

let [Name1,Name2, ...rest] = ["Pratik", "is" , "Sochta" , "upar"];

// rest is an arrya of items starting from the 3rd one 
console.log(rest[0]);
console.log(rest[1]);
console.log(rest.length);

// the value of rest is the array of the remiaing array elements 
// we can use any other var in place of rest, make sure it has three dots before it and goes  last in destrucing assignemt

let [n1,n2, ...ns] = "abcdef";
console.log(n1); // a 
console.log(n2); // b 
console.log(ns); // cdef

// default values 
// if the arrayy is shorter than the list of variables on the left there will be no erros 
// absent value are consider undefined 

let [firstN,surN] = [];

console.log(firstN);


[firstN,surN = "Anonymous"] = ["Guy"];

console.log(firstN);
console.log(surN);


// default values can be more complexe expression or even funcstion calls 
// they are evaulated only if the value is not provided

// first priorty to right side assigned value and then priority given to default 

// [name = prompt("name ?"),surname = prompt("surname ? ")] = ["Pratik"];
// as pratik is present for first variable 
// so it wont go to the prompt of name ?
// default/ie prompt would run for the missing value 



// object destructuring 
// the destructing assignment alsow works with objects 

// let {var1,var2} = {var1 : ..., var2 : ....};
/*
we should have an existing object on the right side that we want to split into variables 
the left side contains an obejcts like pattern for correspoing propreties

In the simplets case theast a list of variables name in {...}

*/

let options = {
    title :  "Menu",
    width : 100,
    height : 200,
};

let {title,width,height} = options;
console.log(title);
console.log(width);
console.log(height);

// the order does not matter 
// properties options.menu is assigned to corresopoing variable that is menu and likewise others 

let {heights,widths ,titles} = {titles : "menu", heights : 200,widths : 100};

// the pattern on the left side could be more complex and specify the mapping between properties and variables 
// if we want o assign a property to a vriable with another name 
// for instance options.widht go into variable w 
// we can do this using a colon

let {width : w,height : h,title : t}= options;

console.log(title);
console.log(w);
console.log(h);


// the colon shwat what: goeswhere 
// widht goes to w , 

// for missing propeties we can set default value using =

options = {title : "menu"};
({width = 100,height = 200,title} = options) ;

// just like with arrays or function parameters ,defualt values can be any expression or even function calls 
// they will be evaluated if the value is not provided

options = {
    title : "menu",
};

// ({width = prompt("widht ?"), title = prompt("title ? ")} = options);
{
    // default values as simple expression
let [a = 10 ,b = 20] = [5];// only a get 5 and b get 20


}

{ // default values as expression
    let [x = 2*3, y= 4*4] = [4];
    // x gets 4  and y gets 16
}

{  // default values as function calls
    function getDefault(){
        return 23;
    }
    let {age = getDefault()} = {};
    console.log(age);

}


{
    // destrucing function parametes with defaustl 
    function getDefault(){
        return 23;
    }

    let {age = getDefault()} = {};

    function greet({name = "guest" , age = getDefault()}){
        console.log(`the ${name} is ${age} year old `);
    }
    greet({name : "alice"});
}


{
    let options = {title : "menu"};
    // let {width = prompt("widht ?"), title = prompt("title ?")} = options;
    // prompt gets for widht 
    // but not for title as its there already assigned on the right side 
}

{
    // we can combine both the colon and equality 
    let options = {
        title : "menu"
    };
    let {width : w = 100, height : h = 200, title} = options;
    console.log(w); //100
    console.log(width);// 100

}

{
    // if we  have more compelxt object with many poperties we can extract only what we need 
    let options = {
        title : "menu",
        widht : 100,
        height : 200,
    };

    let {title} = options;
    console.log(title);
}

{
    // the rest pattern "..."
    // what if the object has more proeprties thatn we have variables 
    // we can assigne them to rest somwhwere
    // we can use the rest parttern
    // just like we did with aray 
    {
        let arr = [1, 2, 3, 4, 5];

// Destructure the first two elements, rest goes into "rest"
let [first, second, ...rest] = arr;

console.log(first); // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]

    }
let options = {
    title : "menu",
    widht : 100,
    height : 200,
};
let {title,...rest} = options;

console.log(title);
console.log(rest); // an object as we have assigned object 


}

{
    // gotach if theres no let 
    // it works assignment and declaration done together 
    // let {...} = {...}

    // but we can aslo use exisitn varaible 
    // catch ? is 

    let widht , height, title;

    ({widht,height,title} = {title : "menu", height : 200, widht : 100});
    // the proble m is the at js treats {...} in the main code flow 
    // not sindie another expression as a code block 
    // code block { } is this 
    // so js assumes we have code block so we have to wrap {} inside () and it becomes {()}


}

// nested destructuring 
{
/*
if an object or an array contain nested object and arrays 
we can use more complex left side patterns to extract deeper portion


*/

let options = {

    size : {
        width : 200,
        height : 100,
    },

    items : ['cake','pista'],
    extra : true,
};

let {
    size : {
        widht ,
        height
    },
    items :[item1, item2],
    title = "menu"
} = options;

console.log(title);
console.log(widht);
console.log(height);
console.log(item1);
console.log(item2);
}
/*
so we have widht ,height ,item1, item2 and title from the defualt value 
note that there are no varaibles for size and items as we take theri conntent instead 
*/

// smart function parameters 
// there are times when function has many parameters 
// most of which are optional 
// thats specially true for uI
// imageine a function that creates a menu.
// it may have width , a height , a title and item list and so on.

/*
bad way to write it 

function showMenu(title = "untitled", width = 200, height = 100,itesm = []){}

in real life the problem is how to remeber the order of arguments 
ides usually helps but still 
another problem is how to call a function when most params are ok by default

showMenu("My menu", undefined,undefined, ["item1", item2])
// undefined wehre defaults are fine 

does not looks good and becomes unreachable when we deal with more params 

Destrucuting comes to rescue 
we can pass param an on object and function immediately destructurize them into variabless
*/
{
    let options = {
        title : "My menu",
        items : ["items1", "items2"],
    };

    function showMenu({title = "Untitled", height = 100, width = 200, items = []}){
        console.log(width,height,title);
        console.log(items);
    }
    
    showMenu(options);

}


{
    // we can also use more compelx destrucuting with nested objects and colon mappings 
    let options = {
        title : "menu",
        items : [
            "items1",
            "item2",
        ]
    };

    function showMenu({

        title = "Untitled",
        widht : w = 100,
        height : h = 200,
        items = [item1,item2]
    }){
        console.log(title , w,h);
        console.log(items);
    }

    showMenu(options);

   
}

{
     /*
    the full syntax is same as for destructuing assignment
    function({
        incomingProperty : varName = defaultValue
    })

    for an object of params there will variable for the incoming property with defualtvalue 
    to note that 
    destructuring assumes that showMenu() does have an argument 
    if we want all values by default , then we should speicfy empty object 

    showMenu({}) // ok all values are default 
    showMenu() // error 
    */

    // we can fixthis by making {} the defualt lvaue for the whole object of param

    function showMenu({title = "menu", widht = 100, height = 200} = {}){
        console.log(title,height,widht);
    }

    showMenu();
    //In the code above, the whole arguments object is {} by default, so there’s always something to destructurize.


    
}


/*
summary 
destrucuting assignemtn allow for instantly mapping an object or arrya into variables 

object syntax
let {prop : varName = defaultvalue, ...rest} = object

this means that properyt prop should go into variable varName and if not such property exists 
in object then the default value shoudl use 
and object propertie that have no mapping shall go rest object

array sytnax
let {item1 = defaulValue, item2 , ...rest} = array
the first item goes to item1 
the second goes to item2 
and rest items goes to rest array


It’s possible to extract data from nested arrays/objects,
 for that the left side must have the same structure as the right one.

*/


{
    // tasks1 Destrucuting assignment
    let user = {
        name : "john",
        years : 30,
    };

    let {name ,years,isAdmin = false} = user;

    console.log(name);
    console.log(years);
    console.log(isAdmin);

}


{
    // tasks 2  the maximal salary

    let salaries = {
        "john" : 200,
        "pete" : 100,
        "mery" : 150,
    };


    function topSalary(salaries){

        let answer = null;
        let MaxSalary= 0;

        for(let [key,value] of Object.entries(salaries)){
            if(value >= MaxSalary){
                answer = key;
                MaxSalary = value;
            }
        }
        return answer
    }

    console.log(topSalary(salaries));
}











