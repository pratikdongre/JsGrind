
let input = 'sometthig that contain > < "" & ';


// sql injection example 
function escapeSQL(input){
    return input.replace("/'/g","''"); // escape single quotes
}

// while regex works but parameterized queries are used for sql injection

console.log(typeof input);
//preventing xss
function escapeHtml(input){
    if(typeof input !=="string"){
        throw new Error("input must be a string");
    }
return input.replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;");
   // .replace("/&/g", "&amp;")  wrong 
}

console.log(escapeHtml(input)); 