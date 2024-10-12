// for loop to walk in over all keys of an object
// for in loop 

/*
for ( key in object ){

}

*/


let user = {
    name : "Pratik",
    age : 30,
    isAdmin : true,
};

for (let key in user)
{
    // alert(key);
    // alert(user[key]);

    console.log(`${key} --> ${user[key]}`);
}

// we could any other variable instead of key like prop


// are objects ordered ? if we loop over an object, do we get all properties in the same order they were added 

/*
integer properties are sorted otherwise ,other appear in creation order 

integer properties are those that string that can converted to-and-from an integer without a change 

*/

let codes = {
    "49" : "Germany",
    "48" : "India",
    "20" : "uae",
    "1" : "usa",

};

//we get values in sorted order 
for (prop in codes )
{
    // console.log(`${prop} :- ${codes.prop}`); // this wont work :- codes.prop --- prop is a variable dot notation does not work 
    console.log(`${prop} :- ${codes[prop]}`);

}


/*
integer properties 
"49" // yes
"+49" //no
"1.2" // no

*/

// what if we dont want the codes to appear sorted we could simply add + with each of them 
// like "+49" "+1" so it will appear as the og order 



/*
summary 
Objects are associative arrays with several special features.
associative array :- collection of key-value pairs , where each key is associated with specific value 

they store properties (key-value) pairs 

to access a property 
1) dot notation
2) square notation :- either literal strings or variable

additional operator:- 
To delete :- delete obj.prop
to check if key exist in object :- "key" in obj
to Iterate over an object :- for (let key in obj)

there are other kinds of js 
array,
Date,
Error,

*/