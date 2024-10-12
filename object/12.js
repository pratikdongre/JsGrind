// constructor,operator "new"

/*
the regular {...} syntax allows us to create one object 
often times we need to create multiple similar objects 
like multiple users or items and so on 

that can be done using constructor function and the "new" operator 


constructor function technically are regular function 
there are two conventions tho
1. they are named with capital letter first 
2. they should be executed only with "new" operator 

*/


function User(name){
    // this = {} ; //implicity when called via "new" operator 
    this.name  = name;
    this.isAdmin = false;

    // return this; // implicit
}

let user =  User("Pratik");


// console.log(user.name); cant not user is undefined in this 

for(key in user)
{
    console.log(user[key]);

}


let correctUser = new User("pratik");

for(key in correctUser)
{
    console.log(correctUser[key]);
}


// so when a function is executed with new it does this 
/*
a new empty object is created and assigned to this 
the function body executes, usually modifies this add new properties to it 
the value of this is returned 

so let correctUser = new User("pratik");
would give same result as 

let correctUser = {
 name : "pratik",
 isAdmin : false
};


so like if we want to create other users we could just call 
new User("ann")

much shorted than using literal everytime 

that the main purpose of constructor - to implement reusable object creation code 

any function except arrow function as they dont have "this" can be used as constructor 
it can be run with "new" and it will execute the algorithm above 
// the cappital letter first is common aggreemnt or sign to make it clear that a function is to be run with new 
*/


/*
while creating complex object we encapsulate it 
like 

let user = new function (){
    this.name  = "john",
    this.age = 30,

    //other code for user creation
    //maybe complex logic and statements
    //local variable and stuff 
    

    // Complex logic
    let tempPassword = generateTempPassword();
    if (tempPasswordIsValid(tempPassword)) {
        this.password = tempPassword;
    } else {
        this.password = "defaultPassword";
    }

    // Private variable, not accessible outside
    let secretKey = generateSecretKey();

    // Method to get the secret key (optional)
    this.getSecretKey = function() {
        return secretKey;
    };
};

the constructor can't be called again becuase it is not saved anywhere just created anc called 
so this tricks aim to encapsulate the code that constructs the single object without future reuse



*/




// we can check whether the object was created using new or wihtout it 
// using speical new.target property 
// undefined for regulars calls and equals the function if called with "new "

function Check(){

    console.log (new.target);
}

Check(); // undefined


new Check(); // [Function : Check]


