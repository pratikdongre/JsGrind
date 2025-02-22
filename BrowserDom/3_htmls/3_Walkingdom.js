/*
Walking the dom 
the Dom allows us to do anything with elements and their content 
but first we need to reach the corresponding DOM object 

ALl operation on the DOM start with the documnet.object
that the main entry point to DOM
from it we can access any node 


HERE is how dom travels between nodes 

                            document
                            
                            document.documentElement <HTML>

                            document.body  (if inside body)


                            parent node 

previous sibling              <DIV>          nextSibling 

                            child nodes 


           first child                        lastChild
           
           
*/


/*
on Top documentElment and body 

The topmost tree nodes are available directly as document properties 
<html> = document.documentElement
the topmost document node is document.documentElement
thats the dom node of the <html> tag 

<body> = document.body
dom node document.body is for the <body> element/tag

<head> = document.head
<head> tag is for dom node document.head

*/


/*
document.body can be null
a script cant access an element that does not exist at the moment of running 

if a script is inside <head> then document.body is unavailable because the browser did not read it yet

like in walkingdom.html

in dom world null means does not exist or no such node 


*/

// Children : ChildNodes, firstChild,lastChild
/*
child nodes (or children) elements that are direct children
in other words they are nested exactly in the given one 

for instnace head, body are childrent of html element

descendants all elementds that are nested in the given one (head,body)
inlcuding children and their children and so on.


for instance body has children div and ul (and few blank text nodes)

everything descendants nested ones as well as direct children 
makes the body node

*/

// THe childNodes collection lists all child nodes including text nodes 
/*
see eg in walkingdom.html

Properties firstChild and lastCHild give fast access to the first and last children
they are just shorthands . if there exists child nodes,
then the following is always true 

elem.childNodes[0] === elemn.firstChild
elem.childNodes[elem.childNodes.length-1] === elem.lastChild

there's also special function elem.hasChildNodes() to check whether there are any child Nodes
*/

// DOM collection
/*
childNodes looks like an array
but actually it not an array but rather a collection - a special array-like iterable object 

There are two important consquences 
1. we can use for..of to iterate over it 
for(let node of document.body.childNodes){
    alert(node)
}
that because its iterable (provides the Symbol.iterator property as required)

2. Array method wont work because it not array
like alert(document.body.childNodes.filter) // undefined there is no filter method 

the first thing is nice 
the second is tolerable 
because we can use Array.from to create "real" array from the collection
if we want array methods 

alert(Array.from(document.body.childNodes).filter); // function

*/


/*
DOM collection are read-only
we cant replace a child by something else by assiging childNodes[i] = ...
changing DOm needs other methods 

DOm collection are live
Almost all dom collection with minor exception are live.
they reflect current state of DOM.

if we keep a reference to elem.childNodes and add/remove nodes into DOM 
then they appear in the collection automatically


Dont use for ..in loop over collections 
collection are iterable using for ..of 
sometimes people try to use for .. in for that 

please dont 
for in loops iterates over all enumberalbe properites 
and collection have some extra rarely used props that we dont want to get 

eg in walkingdom.html
*/


// SIblings and the parent 
/*
siblings are nodes that are children of the same parent 
for instance head and body are sibling as they have same parent html

body is said to be right or next sibling of head
head is said to be previous or left sibling of body

the next sibling is in nextSibling property and the previous one in previouSibling
the parent is avaiable as parentNode

see in siblingParent.html


*/

// Element -only navigation
/*
Navigation properties listed above refer to all nodes 
for instnace childNodes we can see textnodes , elementnodes, and even comment nodes if they exist

but for many tasks we dont want text or comment nodes 
we want to manipulate element nodes that represent tags and form the structure of the page 

*/

/*
so lets see more navaigation links that only take element nodes into the account

                    document.documentElement <HTML>
                       
                    document.body 

                    parent node 

previousElementSibling          DIV              nextELementsibling
                              children

    firstElementCHild               lastELementChild
    
    
the links are similar to those given below just with Element word inside 
children - only those that are element nodes 
firstElementCHild, lastElementCHild - first and last element children
previousElementSibling, nextElementSibling - neighbor elements 
parentElement - parentElement


why parentElement ? can the parent be not an element
the parentElement property returns the "element" 
while parentNode returns 'any node' parent 
these props are usually the same : they both get the parent

with the one exeception of document.documentELement
alert(document.documentElement.parentNode); document
alert(doument.documentElement.parentElement); null

the reason is that root node document.documentElement ie HTML has document as it parent 
but document is not an element node but a root node
so parentNode returns it and parentElement does not 

this detail may be useful when we want to travel up from an aribtrary element elem to html
but not to the document  


while(elem = elem.parentElement){
alert(elem)
}

NOdesElement.html 


and using children instead of childNodes
would show only elements 

*/


/*
more links : tables 
we have seen basci navigation props 
certain types of dom elements may provide additioanl prop
specific to their type , for convenience


Tables are great ex of that and represent particualrly imp case 


the <table> elemens supports these props in addition to the given above
table.rows  - collection of <tr> elemnts of the table 
table.caption/tHEad/tFoot - references to elements <caption>, <thead>, <tfoot>

table.tBodies - the collection of <tbody> elements 
there will be at least one even if it not in the source html
the browser will put it in the dom

<thead>, <tfoot>, <tbody> elements provide the rows property

tbody.rows  the collections of <tr> inside 

<tr>
tr.cells  the collection of td and th cells given in the tr
tr.sectionRowIndex the position(index) of the given <tr> inside the enclosing 
<thead>/<tbody>/<tbody>
tr.rowIndex - the number of the tr in teh table as whole (including all table rows )

td and th
td.callIndex the number of teh cell inside teh closing tr


*/

/*
Summary
Given a dom node we can go to its immediate negihtbors using navigation props 

there are two main sets of them
for all nodes ParentNode,childNodes, firstCHild, lastChild, previousSibling
nextSibling

for elements nodes only :- parentElement, children, firstElementCHild,
lastElemnetChild, previousELementSIbling, nextElementSibling

some types of dom elements 
tables provide additioanl props and collections to acces their content
*/

// task 2 
/*
if elem is an aribtrary dom element node 
is it true that elem.lastChild.nextSibling is always null
yes as ,elem's lastchild then there can be nextsbiling as lastchlid is lastchild 

is it true that elem.children[0].previousSibling is always null
no, as prevoiusSibling coule be text node 
if it were previousELementSibling then there is null
*/

