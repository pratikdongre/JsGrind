// https://javascript.info/garbage-collection

// garbage collection

/*
memory management in js is performed automatically and invisble to use 
we create primitives,objects,function all that takes memory 

what happens when something is not need any more 
hwo does js discover those and clean it up 


so the main concept of memory management in js is reachability
simply put reachable values are those that are accessible or usable somehow.
they are guarantedd to be stored in memory


there's a base set of inherently reachable values that cannot be deleted for obvious reasons 
for instance 
the currently executing function ,its local var and parameters 
other functions on the current chain of nested calls, their local variables and params
global variables 
there are some other ;;; internal ones as well 

these are called roots 


any other value is considered reachable if its reachable from root by a reference or by chain of referenes 

for instance if there is an object in global var 
which has a property referencing to other object 
that object is consider reachable 


theres a bg process in js engine that is called garbage collector 
it monitors all objects and removes those that have become unreachable 


*/


let user = {
    name : "John", 
};

user = null; // now user does not referred to shit 
// or 
user = {
    name : "jane",
}

// the reference to the og object is lost 
// os js grabage collection will remove it from memoery 


user = {};

user = {
    name : "john"
};

let admin = user;

admin.name = "pratik";

console.log(user.name); // pratik 

user = null; // we have jsut removed one reference to the object 
// we still have admine that referes to the object 

console.log(admin.name); // pratik 



// interlinked objects 

//family


//marry function takes two objects 
// creates relationship between them by adding reference to each other 
// it then return a object representing family
function marry(man, woman)
{
    woman.husband = man;
    man.wife = woman;

    return {
        father : man,
        mother : woman
    }
}

let family = marry({
    name : "pratik"
}, {
    name : "tanhai"
});


/*

we have marry function that takes two arguments and we have passed objects 
man = {
    name : "pratik"
};

woman = {
    name : "tanhai"
};

// woman.husband = man (man is object)
// man.wife = woman (woman is object)

so now we have added other variable in both and assigned value to them 

man = {
    name : "pratik",
    wife : "woman" // wrong 
    wife : {
    name : "tanhai"
    husband = {
        name : "pratik"
    }
    }
};

woman = {
    name : "tanhai",
    husband = {
        name : "pratik"
        wife : {
            name : "tanhai"
        }
    }
};


the marry function returns 
one objects where father is referncing to man object
and mother is referencing to woman objecet 

marry returns like 
so this is what family contains 
{
    father : {
        name : "pratik",
        wife : {
            name : "tanhai"
        }
    },
    mother : {
        name : "tanhai",
        husband : {
            name : "pratik"
        }
    }
};


see its better to look at the output by consoling 
*/




console.log(family.father.name);
console.log(family.mother.husband);


// all are reachable now 
// lets delete 

delete family.father;
delete family.mother.husband;

// theres a screenshort in this pc check that to see diagram 

// its not enough to delete only one of these (line 174 175 )
// all would still be reachable 


// but it we delete both then only pratik is not reachable 


// outgoing reference does not matter like man object refer to woman  so what 
// incoming reference is what makes an object reachable 


// now it has become unreachable island if we do below this 
family = null;



/*
the basic garbage collection algorithm is called mark and sweep
steps 
the garbage collector takes root and marks/remembers them
then it visits and marks all references from them 
then it visit marked objects and marks their references 
and so on until every reachable references are visited
all object execpet marked ones are removed   


there are some optimizaiton to make garbage colelction faster and cause no delays 
like generational collection :- objects are split into two sets new ones and old ones 
// the objects that have short life span appears do their job and die fast woould be new ones 
// old ones are those who survicve long enough 
incrmental collection , idle-time execution :- the garbage collection tries to run only while the cpu is idle to reduce 
the possible effect on the execution
these are the generals ones althhough there can different tweaks with different engines  
*/


/* 
jargon to know 
garbage collection is performed automatically , we cannot force or prevent it 
objects are retained in memory while they are reachable 
being referenced is not same as reachble from root 
as we have seen a pack of interlinked objects can become unreachable as a whole - unreachable island

*/