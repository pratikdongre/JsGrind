// Browser env, specs 
/*
the js lang was intially created for web broswer 
since then it has eveolved into a lnag with many uses and platforms 

a platfom may be browser or web server or naother host or even a smart coffee machien 
if it can run js 
each of thse provides platform specifc functionality 
the js speification calls that host env 


a host env provides its own objects and function in add to lang core 
web browser give means to control web pages 
node.js provides server side features and so on 



                    window 
DOM                  BOM               Javascript  
document            navigator          Object 
                    screen             Array
                    location           Function
                    frames
                    history 
                    XMLHttprequest


theres a root object called window 
it has two rules 
1. it is global object for js code 
2. it repsenresnt the browser window and provide methods to control it                     
*/
{
    function SayHi(){
        alert("Hello");
    }

    // global function are methods of global object 
    window.SayHi(); // hello
}

// and we can use it as a browser window to show the window height 
{
    alert(window.innerHeight); // inner window height eg 945 
}

// there are more window specific methods and properties 




// DOM Document object model
/*
The dom represnts all page content as object that can be modifed 
the document object is the main entry point to the page 
we can change or create anything on the page using it 
*/
{
    // document.body.style.background = "red";
    // change the bg color to red 

    // change it back after 1 sec
    // setTimeout(() => {document.body.style.background = ""},1000);
}

// here we used document.body.style , but there much more 
// properties and methods and stuff 

/*
the dom is not only for browser 
the dom specification explains the strucutre of a document and provides objects to manipulate it 
there are non browser instructuments that uses dom as well 

for instnace 
server side scripts that donwload html pagees and process them can also use the dom 
they may support only a part of the speicification though 
*/

/*
css object model for css rules and stylesheets 
that explains how they are represented as objects and how to read and write them 

the cssom is used together with the dom when we modify style rules for the docu
in practice csssom is rarely used because we rarely need to modify css rules from js 

usually we add/remove css classes not modify their css rules - but that possibel tho
*/


// BOM
/*
The browser object model BOM represents additional objects provided by the browser (host env) 
for working with everything except the document 

for instance 
THe navigator object provides bg information about the browser and the os 
there are many props but the most widely known are
navigator.userAgent - about the current browser 
and navigator.platform - about the os 

the location object allows us to read the current url and can redirect the browser to the new one 

// how we can use the location object 
*/
{
    alert(location.href);
    if(confirm("go to github/pratikdongre?")) {
        location.href = "https://github.com/pratikdongre";
        // redirect the browser to another URL

        // alert(location.href);
    }   
}

/*
the function alert/confirm/prompt are also a part of the bom 
they are not directly related to the document 
but represent pure browser methods for communcation with the user 
*/

/*
the bom is a part of the general HTML specification
apart from tags and attributes it also covers bunch of objects ,methods and browser - specific dom extensions 
*/

/*
summary 
DOM Specification
describes the documents strucutre, manipulations and events

CSSOM Specification 
describes the stylesheets and style rules , mainpulation with them and their binding to documents

HTML specifications 
Describes the HTML language eg tag and also the bom(Browser object model)
various browser function
setTImeout , alert, location and so on 
it takes the dom specifcation and extends it with many additional prop and methods 

*/