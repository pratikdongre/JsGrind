// logical operators 
// 4 ?? || ! && 

// althorugh they are logical
// they can be applied on any value type not only boolean 
//type conversion comes to pictrure any type gets converted to boolean and then logical things happens 


// in classical_programming it works on only boolean value 
// if any of the value is true the result would be true

console.log(true || true); // t
console.log(true || false); // t 
console.log(false || true); // t 
console.log(false || false); // f


if(1 || 0){
    console.log("truthy");
}


//mostly || are used with if to check any condition matches

let workhour = 9;
let Weekend = true;

if(workhour < 7 || workhour > 4){
    console.log("time to work harder");
}

//with more conditions 
if(workhour < 7 || workhour > 4 || weekend){
    console.log("time to grind");
}

// given multiple or'ed values 
// evaluates operation from left to right 
// each operand gets converted into their boolean form 
// if all operand haves been evaluated as false then return last operand 
// the values is returned in its og form 
let result = 0 || "" || "hello world";
console.log("result " + result);

console.log(1 || 0); // 1 
console.log(null || 1); // 1 
console.log(null || 0 || 1); // 1 
console.log(undefined || null || 0 || 1); // 1 
// writes the first truthy values it founds or 
// if not then last falsy value or you could just say last value

// getting the first truthy value

let firstname = ""
let lastname = ""
let nickname  = "supercoder"

console.log(firstname || lastname || nickname || "anonymous");

// short circuite evaluation 

// the moment you got the first truthy value it wont waste time and go further to check 

true || console.log("wont print");

false || console.log("will print");



// and && operator 











