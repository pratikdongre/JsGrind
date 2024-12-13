// global object 
/*
the global ojbect provides variables and function that are available anywhere.
by default those are built into language or the env 

in a browser it is named as window
 for node js it is global,
for other env it may have another name 

globalThis was added to the lang as a standarized name for a global object 
that should be supportted across all env 

we use window here assuming our env is a browser 

all properties of the global object can be accesed direclty 
*/
{
    alert("hello");
    // is same as 

    globalThis.alert("hello");
}


// in a browser global function and variable declared with var (not let/const) become the the property of the global object 

var gVar = 5;
alert(window.gVar);
// 5 becamse a property of the global object 

// function declaration have the same effect 

{
    let gLEt = 5;
    alert(window.gLEt); // undefined 
}

{
    // if a value is so important that you like to make it global write it directly as property 

    window.currentUser = {
        name: "john",
    };

    alert(currentUser.name);

    alert(window.currentUser.name);

    // that said using global variables is generally discouraage 
    // there shoud be as few global var asp ossible 
    /*
    the code diesn where a function get input var 
    and produces certain outcome is clearer and less prone to error and easier to test thant if it usees 
    outer or global variables 
    */
}

{
    /*
    Using for polyfills 
    we use the global object to test for support of modern language features 

    test if a bultin Promise object exists 
    it does not in really old browser
    */

    if(!window.Promise)
    {
        alert("your browser is really old ");
    }
    /*
    
    let say we are in old browser we can creat polyfills : add function that are not supported by the env 
    but exists in the modern standard 

    */

    if(!window.Promise)
    {
        window.Promise = 5 // ... /// custom implemntation of the moder lang feature 
    }


}


/*
summary 
the global object holds var that should be avaialbe anywhehre 
that includes js builtin such as array and env specifc values such as 
window.innerHeight - the window height in the browser 

the global object has a universal name globalThis
in browser the global object is window
in node js its global 

we should store value in the global object only if there are truly global for our project 
and keep theri number at minimum 

in broswer unless wer are using modules ,glboal function and var declared with var become a property of the global object 

the make our code future porff easier to understand 
we should access proeprties of the global object directly as window.x


*/