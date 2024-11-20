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

let str1 = "Hello\nWorld";

let str2 = `Hello
World`;

console.log(str1 == str2);

// there are other less common special character
/*
\n 
\r\n
\' \" \` quotes
\\ backslash
\t tab 
\b \f \w faltu not used 

all special character start with \ backslash also known as escape character 

so called escaped quotes \' \" \` are used to insert a quote into the same quoted string 

*/

console.log('hi,I\'m pratik');
// we have prepend the inner quote with \'  otherwise it would have been end of stirng 
// other solution could be use "" or `` when we know inside we need single quote

console.log("hi,I'm pratik");



// 4 . String length 
// The length proprty has the string length

console.log(`My\n`.length); // M y \n 3 is the len

// length is a numeric proeprty not a function so do str.length not str.length()


// 5. Accessing Characters 
/*
to get a character at position pos ,use square bracket [pos] or call the method str.at(pos)
the first character starts from the zero position
*/

let str = "hello";

console.log(str[1]);
console.log(str.at(2));

// to get the last fucking character 

console.log(str[str.length-1]);
// or 
console.log(str.at(-2));
// the at.(pos) allow us to use negative values which start from end 

// if use negative value with [] then its undefined 
console.log(str[-2]);

// we can iterate over character using for ...of 

for(let char of "hello")
{
    console.log(char);
}

// 6 . String are immutable
// strings cant be changed in js 
// it is impossible to change a character 

str = 'Hi';

str[0] = "h";

console.log(str); // Hi 

// solution 
str = 'h' + str[1];
console.log(str); // hi


// 7. Changing the case 
// methods such as toLowerCase() and toUpperCase() chnage the case :


console.log("captial".toUpperCase());
console.log("SmallLetter".toLowerCase());

// or we just want the single or first character to be uppercase 

name = "pratik";
console.log(name[0].toUpperCase());
console.log(name);

// 8. Searching for a subString
// there are multiple ways to look for a substring within a string

// str.indexOf(substr,pos)
/*
it looks for the substr in str,starting from the given position pos, 
and returns the position where the match was found 
or -1 if nothing can be found
*/

let word = "Widget with id";
console.log(word.indexOf("id"));


console.log(word.indexOf("widget")); // -1

console.log(word.indexOf("id",1));

// if we are intersted in all occurences of "id"
// we can run indexOf in a loop.
// Every new call is made with the position after the previous match

str = "As sly as a fox, as strong as an ox";

let target = 'as';

let pos = 0;

while(true){
    let foundPos = str.indexOf(target,pos);
    if(foundPos == -1) break;

    console.log(`Found at ${foundPos}`);
    pos = foundPos + 1;
}

// shorter version 

let po = -1;
while((po = str.indexOf(target,po+1))!=-1)
{
    console.log(`Again found at ${po}`);
}

// there is another method str.lastIndexOf(substr,pos) which find the last occurence 


let newStr = "im as hot as hell but not cool as hell";
pos = 0;
console.log(newStr.lastIndexOf("hell")); 
 
while(true)
{  
    let foundPos = newStr.indexOf("hell",pos); 
    if(foundPos == -1) break;

    console.log("i found as at ",foundPos);
    pos = foundPos +1;
    
    // thought process 
    // first find the pos of index at which hell is 
    // then if got -1 that means the index where the hell is dont exsit break
    // if exist then print 
    // then increase the pos fromt he found pos +1 
}
pos = -1;
while((pos =newStr.indexOf("hell",pos+1))!=-1)
{
    console.log(`i found hell at ${pos}`);
}

// lastindexOf() gives the last occrurence but taht does not mean the index would change 
pos = newStr.length;
while(true){
    pos = newStr.lastIndexOf("hell",pos-1);

    if (pos == -1) break;

    console.log(pos);

 
}
// shorter 
pos = newStr.length;
while((pos = newStr.lastIndexOf("hell",pos -1)) != -1)
{
    console.log(pos);
}


// slight inconvienience with the indexOf in the if test 
str = "Widget with id";

if(str.indexOf("Widget")) // if the substr at zero then it become false
{
    console.log("found"); 
}
//so we should always check with -1 
if(str.indexOf("Widget")!=-1)
{
    console.log("found");
}


// includes , startsWith, endsWith
// the more modern method str.includes(substr,pos) return true /false based on wehterh the substr exist
// substr -is the substring to serachr for 
// pos :- its the position to start searching from 

//It’s the right choice if we need to test for the match, but don’t need its position:


console.log("Widget with id".includes("with"));
console.log("Hello".includes("bye"));

// the second argument of include is the position to start searching from

console.log("Widget".includes("id"));
console.log("Widget".includes("id",2));// on position 2 onwards there is not id found so false

// startswith and endswith

console.log("pratik is hot".startsWith("pratik"));
console.log("pratik is hot".endsWith("hot"));


// 9 Getting a substring 
// there are 3 methods to get a substring : substring,substr and slice.

// str.slice(start[,end]);
// returns a part of string that start from start to (but not including)end
// [,] shots that its optional

str = "Stringify";
console.log(str.slice(0,5));
console.log(str.slice(5)); // slice goest till end from 5th to end

console.log(str.slice(0,1));

// negative values for start/end are also possible.
// they mean the position is counted from string end. // when counting from back ; count from 1
console.log(str.slice(-7,-3)); 


// str.substring(start [,end]);
// return the part of the string between start and end
// its same as slice but it allows start to be bigger than end 
// in such case where start is bigger than end its swap start and end values

console.log(str.substring(2,6));
console.log(str.substring(6,2)); // same as above 

console.log(str.slice(2,6));
console.log(str.slice(6,2)); // ""

// negative arguments are not support in substring unlike slice 
// they are treated as 0

// str.substr(start [,length])
// in contrast with previosu methods this allows us to mention the lenght of sub instead of providiing end value
str= "Stringify";
console.log(str.substr(2,4)); // from 2nd index it count print till 4 as lenght is 4

// the first argument maybe negative to start from end 
console.log(str.substr(-4,3));

// substr only browser-hosted Javascript engines support it, and it’s not recommended to use it. 
// In practice, it’s supported everywhere.

/*
method 
slice (start,end)       | from start to end (not including end)     | allow negatives 
substring(start,end)    | from start to end (not including end )    | negative means 0
substr(start,length)    | from start to the length                  | allow negative at start 


substr has a drawback only supported browser -only features so non -browser env may fail to support 
while slice and substring 
slice seems to be more flexible as can work with negatives

*/

// 10 Comparing Strings

// strings are compared by char by char in alphabetical order 
//  although there are some oddities 

// 1. lowercase is always greater than uppercase
console.log('a' > "S");

// 2 .letter with diacritical marks are out of order 

console.log("Österreich" > "Zeland"); // Z should come first but diacritical marks are out of order 

/*
to understand what happens we should be aware that strings are stored in utf-16 format 
where each char has a numeric code 
there are special methods to get the char for the code and back

str.codePointAt(pos)
String.fromCodePoint(pos)

//camel case ? camelCaseThisIs 
// pascel case ? PascalCaseThisIs
// snake case ? snake_case_this_is
*/

// str.codePointAt(pos)
// returna a decimal number representing the code for the character at postion pos : 

// different case letter have different code 
console.log("Zratik".codePointAt(0));
console.log("z".codePointAt(0));
console.log("z".codePointAt(0).toString(16)); // if we need hexadecimal value

// String.fromCodePoint(pos)
// return the character by its numeric code 

console.log(String.fromCodePoint(90));
console.log(String.fromCodePoint(0x7a)); // can pass hexadecimal vlaue also or any other 


// let see the characters with codes 65...220

 str = '';

for(let i =65;i<=220;i++)
{
    str += String.fromCodePoint(i);
}


console.log(str);

// as can see lowercase comes after the capitals so they are bigger 


//correct comparison
/*
The “right” algorithm to do string comparisons is more complex than it may seem, because alphabets are different for different languages.

So, the browser needs to know the language to compare.

Luckily, modern browsers support the internationalization standard ECMA-402.
It provides a special method to compare strings in different languages, following their rules.

the call str.localCompare(str2) returns an integer indicating whether str is less ,equal or >  than str2
return negative num if str is less than str2
return 0 if str is same as str2 
return postive if str is > than str2
*/

console.log("Österreich".localeCompare("zealand"));

/*This method actually has two additional arguments specified in the documentation, 
which allows it to specify the language (by default taken from the environment, letter order depends on the language) and 
setup additional rules like case sensitivity or should "a" and "á" be treated as the same etc.
*/


/*
summary 
three types of quotes '' "" ``
backticks allow a string to span multipel and line and embed expression usign ${}

we can use special characeter such as \n

to get a char use [] or at()

to get a substring use slice or substring 
slice better as it allows negatives values 

to get lowerCase() or upperCase();

to look for a substring use indexOf, includes/startsWith/endsWith

to comapare strings according to the language use localCompare()
otherwise they are compared by character codes 



there are other severals methods 
str.trim() ....removes ('trims') spaces from the beginning and end of the string
str.repeat(n) ... repeats the string n times 

strings also have methods for doing search/replace with regualr expression

also as of now its important to know that strings are based on unicode encoding 
hence there are problem  with comaparison
*/

//tasks

//1 

/*
We can’t “replace” the first character, because strings in JavaScript are immutable.

But we can make a new string based on the existing one, with the uppercased first character:
*/
function ucFirst(str){

    let newStr =  str[0].toUpperCase()  + str.slice(1);
    
    return newStr;
}

console.log(ucFirst("john"));