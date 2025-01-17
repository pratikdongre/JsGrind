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
    document.body.style.background = "red";
    // change the bg color to red 

    // change it back after 1 sec
    setTimeout(() => {document.body.style.background = ""},1000);
}

// here we used document.body.style , but there much more 
// properties and methods and stuff 
