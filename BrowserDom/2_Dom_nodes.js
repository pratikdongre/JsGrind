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

