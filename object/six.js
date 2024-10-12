// object.assign 
// Object.assign(dest, ...sources)
// the first argument dest is the target object 
// further argument is a list of source object 

// it copies the properites of all objects to the des object 
// and return it as the result 

let user = {
    name : "Pratik",
};

let permission1 = { canView : true};
let permission2 = { canEdit : false};

Object.assign(user, permission1,permission2, {name : "Monu"});
// if the copied value name already exist, it gets overwritten

for(let key in user)
{
    console.log(user[key]);
}


// we can also use Object.assign() to perform simple object cloning 

let clone = Object.assign({},user);

for(let key in clone)
{
    // console.log(clone[key]); 
}

// cloning methods 
// either we use for loop to run over all element and create copy those 
// or could use Object.assign()     

//////////////    nested cloning topic name 
// till now we seen that all properties of user(let say) are primitive 
// but properties can be referenced to other objects 


user = {};
clone = {};
user = {
    name : "John",
    sizes : {
        height : 180,
        width : 82,
    }
};


console.log(user.sizes.height); 

clone = Object.assign({}, user);

// but now its not enough to copy user.sizes = clone.sizes 
// cause sizes itself is object so it will be copied by reference 
// so it would refere to same "sizes"(value)

// proof that clone is referring to same sizes that is referring to user 

user.sizes.height = 10;

console.log(clone.sizes.height); // see 10


// so to fix this and make user and clone truly separate object 
// we should use deep cloning 

// we have structuredClone(object) that clones with all the nested properties 


clone = {};

clone = structuredClone(user);

console.log(user.sizes == clone.sizes); // false 
// user and clone are totally unrelated now 

user.sizes.height = 100; // change property from one place 

console.log(clone.sizes.height);//10 checked if it has modified other also or not 




