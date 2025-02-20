//Searching : getElements*, querySelector*
/*
dom navigation props are great when element are close to each other 
what if they are not ? 
How to get an arbitrary element of the page 

*/

// document.getElementById or just id 
/*
if an element has the id attribute we can get the element using the method 
document.getElementById(id)
no matter where it is 


*/


/*
also theres a global variable named by id that refernces the element 
suppsoe 
<div id = 'elem' > </div>

so this div is not globally can be accesed by elem directly 
that unless we declrare a js variable with teh same name then it takes that precedenece 

let elem =  5 // not elem is 5 , not a reference to <div id ="elem">

alert(5) not 
*/


/*
please dont use id -named global variable to access element 
the browser tries to help ys by mixing namespaces of js and dom 
thats fine for simple scripts inlined into html
but generally is not good thing 

there maybe naming conflicts 
also when one read js code and does not have html in view 
it not obvious where the variable came from 


in real life document.getElementById is preferred method 

the id must be unique 
there can be only one element in the document with the given id 
if there are multiple elemnts with the same id 
then the behaviour of method that use it is unpredictable 
eg.document.getElementById may return any of such element at random
so better be unique id 


only document.getElementById , not anyElem.getElementById

the method getElementById can vve called only on document object 
it looks for given id in the whole document 
*/


//querySelectorALl
/*
elem.querySelectorAll(css) returns all method inside elem matching the given CSS selector 

looks for all li eleemnt that are last children 

<ul>
  <li>The</li>
  <li>test</li>
</ul>
<ul>
  <li>has</li>
  <li>passed</li>
</ul>
<script>
  let elements = document.querySelectorAll('ul > li:last-child');

  for (let elem of elements) {
    alert(elem.innerHTML); // "test", "passed"
  }
</script>

// this method is indeed powerful because any css selector can be used 

can use psuedo-classes as well
psuedo-classes in the css selector like :hover and :active are also supported
for instance document.querySelectorAll(':hover') will return the collection with elements that the pointer is over now
in nesting -order from the outermost <html> to the most nested one 

*/


/*
querySElector

the call to elem.querySelector(css) return the first element for the given CSS selector 
in other words the resutl is same as elem.querySelectorALl(css)[0]
but the latter is looking for all elements and pcking one 
while elem.querySelector just looks for one 
so its faster and also shorter to write 
*/

/*
Matches
previous method were seraching the dom
the elem.matches(css) does not look for anything 
it merely checks if elem matches the given css-seelctor 
and return true or false 

the method comes in handy when we are iterating over elements 
like( in an array or something ) and trying to filter ouuter those that interest us 

two.html

*/

