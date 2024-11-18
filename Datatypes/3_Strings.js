// 1. STRINGS 
// in js the textual data is stored as strings.
// there are no separate type for a single character 
// the interal format for string is UTF-16 it is not tied to page encoding 
// what does it mean page encoding 
// when data is sent to js from server or web page 
// it coudl be in UTF -8 or iso-8859 or stuff 
// it gets to the UTF 16 format 

//x = "foo", where, "foo" is a string literal with value foo


// 2. QUOTES 
//  lets recall the kinds of quotes '' "" ``
let single = 'single - quoted';
let double = "double - quoted";
let backticks = `back ticks`;

// single,double quotes are same 
// however backticks allow us to embed any expression into string, this is known as string interpolation
// by wrapping it in ${...}

function sum(a,b){
    return a + b;
}
console.log(`1 + 2 = ${sum(1,2)}`);

// apart from embedding expression into strings
// another advantage of backticks is they allow strings to span multiple lines

let PratikLoves = `List : 
   * Chocolate
   * CHocolate cookies
   * CHocolate cake
   * Chocolate girls
   * Chocolate on girls 
   * Girls on chocolate

`;

console.log(PratikLoves);

// in single quotes or double quotes multiple lines does not work and gives error 

/*
Backticks also allow us to specify a “template function” before the first backtick.
 The syntax is: func`string`. The function func is called automatically, receives the string and embedded expressions and can process them. 
 This feature is called “tagged templates”, 
 it’s rarely seen, but you can read about it in the MDN: Template literals.

lets break this down 
1. template literals := are nothing but '' backticks which allow string interplation and mutiple lines string
2. Tagged Templates :=  a special featurre where you attach a function called (a tag function) to a template literal.
func'template literal';
the function process the template literal and interpolated parts before returning a result ;

here what happens 
tag function inovked 
it recieves 
    a)an array of strings :- the literal part 
    b)argument of expression :- the interpolated expression in the template 

    let see example 
*/

function tag(strings, ...values){
    // the ...value collections all aditiontal argument beyond the first argument  passed to the tag function  into an array
    // its called rest paramter // its part of rest syntax or spread syntax depends on the context 
    
    console.log(strings);  // Array of strings
    console.log(values); // Array of interpolate values
    return "Processed result";
}

let name = "pratik";
let company = "pinnacle";

let result = tag`Hi I'm ${name} from ${company}`;
console.log(result);

// you can process the literals and values to return a custom string or anything else ;
// use cases escapint and santizing strings 
// avoid security risks like sql injection or
// xss attacks by escaping special characters 
//xss cross site scripting that allows attackers to inject malicious code into a website from which they can steal cookies and stuff 

/*
array.reduce((accumulator, currentValue, currentIndex, array) => {
    // Logic to process
}, initialValue);

result (or "accumulator"): The accumulated value (starts as the empty string "" because of the initialValue).
str (or "currentValue"): The current element in the strings array.
i (or "currentIndex"): The index of the current element in the strings array.

tag`hello i'm ${name} and i'm ${age} old`
strings "hello i'm " , and i'm, old
values :- "pratik",22
*/

function escapeHtml(strings, ...values ){
    return strings.reduce((result,str,i) =>
        result +
        str +
        (values[i] ? 
            String(values[i]).replace(/</g, "&lt;").replace(/>/g, "&gt;") :
            ""), "");
}
            /*
1st Iteration (i = 0):
result = "" (initial value).

str = "Safe content: " (from strings[0]).

values[0] exists, so:

values[0] = "<script>alert('XSS')</script>".
Escape < and >:

String(values[0]).replace(/</g, "&lt;").replace(/>/g, "&gt;");
// Result: "&lt;script&gt;alert('XSS')&lt;/script&gt;"

result = "" + "Safe content: " + "&lt;script&gt;alert('XSS')&lt;/script&gt;";

2nd Iteration (i = 1):
str = "" (from strings[1]).

values[1] is undefined (no more interpolated values), so nothing is added.

Final result:
result = "Safe content: &lt;script&gt;alert('XSS')&lt;/script&gt;";

why is this important 
security by escaping < and > 
any html tags in the interpolated values are neutralized
preventing injection attacks like XSS


< > 
&lt; is safe equivlaent of < 
&gt; is safe equivalent of >

/< is regular expression (regex) patterns used to match < and > characters in the string.
The forward slashes / delimit the regular expression

g global flag to find all the occurences 

literal string "apple"
regular expression "/apple/g"

can work with regular expression expliclity using RegExp objet
let regex = new RegExp("<", "g");
console.log("<div>".replace(regex, "&lt;")); // "&lt;div>"

            */
    
    



let unsafe = "<script>alert('XSS')</script>";

console.log(escapeHtml`Unsafe content : ${unsafe}`);

/*
 tagged templates allow you to preprocess template literals by attaching a custom function.
  While not commonly used, they can be invaluable in scenarios requiring advanced string manipulation, security, or formatting.
*/

let input = "sometthig that contain > <  & ";


// sql injection example 
function escapeSQL(input = "sometthig that contain > <  &"){
    return input.replace(/'/g,"''"); // escape single quotes
}

// while regex works but parameterized queries are used for sql injection

console.log(typeof input);
//preventing xss
function escapism(input){
    if(typeof input !=="string"){
        throw new Error("input must be a string");
    }
return input.replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;");
   // .replace("/&/g", "&amp;")  wrong 
}

console.log(escapism(input)); 

// console.log(escapeHtml(`${input}`));
// console.log(escapeHtml('> < "" &'));


// so should regex be used 
// it work but not ideal
/*

Libraries/Tools Exist:
For SQL: Use parameterized queries instead of manual escaping.
For HTML: Use libraries like DOMPurify for comprehensive XSS protection.
Performance Concerns:
If you’re working on very large strings, heavy regex usage can slow down processing.
*/

// preventing sql injection through parameterized queries

// let query = "select * from users where username = ? and password = ?";
// db.query(query,[username,password]);
// here ? is a placeholder 


// bas bhai kha liya pura pet bhar gya 

// 3. SPECIAL CHARACTERS

/*
it is still possible to create multiline strings with singel and double quotes
by using so called newline \n which denotes a line break;

*/

let guesslist = "PratikLoves : \n * Her \n * Her nose \n * Her smile \n * Her eyes \n All others tissues,muscles and cells of her."

console.log(guesslist);