/*
DOM tree
the backbone of an html document is tags 

according to the dom every html tag is an object 
nested tags are children of the enclosing one 

the text inside a tage is an object as well 

all these objects are accesible using js and wee can use to modify the page 

for eg document.body is the object represeting the <body> tag 

*/

{
    document.body.style.background = "red";// make the bg red 

    setTimeout(() => document.body.style.background = "", 3000);
}

/*
here we used style.background to change the bg color of document.body but there are many other prop as well 
such as 
innerHTML - HTML contents of the code 
offsetWidth - the node width (in pixels)
*/

// an example of the dom 
/*
<!DOCTYPE html>
<html>
<head>
    <title>About elk</title>
</head>

<body>
    The truth about elk.
</body>
</html>
*/

/*
THe Dom represent HTML as a tree structure of tags
HTML
    HEAD
        #text 
        TITLE
            #text about elk
        #text 
    #text
    BODY
        #text THe truth about elk        
*/

/*
on the picture we can click on element nodes and their childern will open/collapes

every tree node is an object 

Tages are element nodes (or just elements) and forms the tree structure
<html> is at the root 
then <head> and <body> are its children etc

the text inside elemetns form text nodes labelleda s #text 
a text node contains only a string 
it may not have childer and is always a leaf of the tree 

for instance the <title> tag has the text "about elk"

to note speical char in text nodes 
a new line in js known as \n 
a space 

spaces and newline are totally valid chracs like letters and digits 
they form text nodes and become a part 
of the dom 
so of instance 
<head> tag contains some space before <title>
and that text becomes a #text node (it contains a newline and some spaces only)


There are only two top-level exclusions 
1. spaces and newlines before head are ignored 
2. if we put something after</body> then that is automatically moved inside the body 
at the end as the HTML spec requires that all content must be inside <body>
so there cant be any spaces after </body>

in other case everything strfwd 
if tehre are spaces in the doc 
then they becomes text nodes in the DOM 
and if we remove them then there wont be any 

here are no space only text nodes
<!DOCTYPE HTML>
<html><head><title>About elk</title></head><body>THe trught about elk.</body></html>

HTML
    HEAD
        TITLE
            #text About elk
    BODY
        #text the trught about elk.        



spaces at string start/end and space only text node are usually hidden in tools 

Browser tolls that work with dom usually do not show spaces at the start/end of the text 
and empty text nodes between tags

Developers tools save screen space 

*/

// AutoCorrection
/*
if the browser encounters malformed html 
it automatically correct it when making the dom 

for instnace the top tag is always <html>
even if it does not exist in the document it will exists in the dom 
because the browser will create it the same goes for <body>

as an example if the html file is the single word "Hello"
 the browser will wrap it into the <html> & <body>
 and add the required <head> and dom will be 
 HTML
    HEAD
    BODY
        #text Hello


while generating the DOM browser automatically process the error in document 
close tags and so on 

a docuemnt with unclosed tags 
<p> HEllo
<li>MOm
<li> Dad
<li> Sister

will becomes ta normal DOM as the browser reads tags and restores the missing parts 
HTML
    HEAD
    BODY
        P
            #text Hello
        li 
            #text Mom
        li 
            #text Dad
        li 
            #text Sister        
*/


/*
tables always have <tbody>
as intersting special case is tables 
by dom specification they must have <tbody> tag 
but html may omit it 
then the browser creates <tbody> in dom automatically

for the HTML
<table id ="table"> <tr> <td> 1 </td> </tr> </table>

dom structure will be 
TABLE
    TBODY
        TR
            TD 
                #text 1 

the <tbody> apperared out of nowhere 
                
*/


// other node types 
// there are some other nodes types besides element and text nodes 
/*
<!DOCTYPE html>
<html>


<body>
    THe truth about elk
    <ol>
        <li>AN elk is a smart </li>
        <!-- comment --!>
        <li> ... and cunning animal </li>
    </ol>    
</body>

</html>


the dom for this 
HTML
    HEAD
    BODY
        #text the truth about elk
        OL
            #text _ _ (space and enter)
            LI
                # text AN elk is a smart
            # text _ _
            # comment comment
            # text _ _ 
            LI
                #text ... and cunning animal
            # text _ _ 
            
        # text _ _     
    

we can see here a new tree type noe 
comment node lableed as # comment  between two nodes 

why do we have comment when it does affect visual representation
there a rule if somethigns in html then it also must be in dom tree

Everything in html even comment becomes part of the dom 

even <!DOCTYPE html> directive at the very beginning of html is also a DOM node 
its in the DOM tree right before <html>

The docuement object that represents the whole document is formally a node as well

there are 12 nodes types 
in practice we usually work with 4 of them

1. document - the entry point into DOM
2. element nodes - HTML tags, the tree building blocks
3. text nodes  -contains text
4. comments - sometimes we can put information there 
it wont be shown but js can read it from the DOM

*/


// See it for yourself 
/*
To See the dom structure in real time 
// https://software.hixie.ch/utilities/js/live-dom-viewer/
another way is developer tools in the element tabs 


we can see the dom by clicking on elements 
to note that dom structure in dev tools is simplified
text nodes are shown jsut as text 
and there are no "blank" text nodes at all
its fine anyway as we are interested in element nodes only


we can do inspect by clicing on element or theres button at top left you know 

at the right we have 
Styles  - we can see CSS aplied to the current elemetn rule by rule
including built in rule )gray
almost eveyrhting can be edited in place including the dimension/padding of the box

Computed to see CSS applied to the element by property
for each property we can seel rule that gives it 
(including CSS inhertance and such)

Event listeners :_ to see event listeners attached to DOM elements 

*/


// interatcion with console 
/*
as we work the dom 
we also may want to apply js to it 
like a get a node run some code to modify it , to see the result s

few tips to travel between Elements and console tab
1. select the first <li> in the elements tab
2. Press ESc it will open console tab below elemetn tab 

now the last selected element is available 
*/

/*
if theres a variable referecing to a dom node 
then we can use the cmd inspect(node) in console to see it in the elements pane 
or we can just output the dom node in the console and explore in place 
like document.body

that for debugging purpose 

*/


/*
an HTML/XML document is represented inside the browser as the DOM tree 
tags become element nodes and from the structure 
text becomes text nodes 
etc everything in HTML has it place in DOM even comments 

*/