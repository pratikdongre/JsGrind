// garbage collection 

/*
memory managmeent in js is performed automatically and invisible to use 
we create primtives ,objects , function all that takes memory

what happens when something is not need any more 
how does js discover those and clean it up 

so the main concept of memory management in js is reachabitlity
simply put reachable values are those that are accesisble or usable somehow 
they are guaranteed to be stored in memory 

1) 

theres a base set of inherently reachable values that cant be deleted for obvious reasons 
for instance 
the currently executing function, its local variables and paremetes 
other functoin o nthe current chain of nested calls , their local var and params 
global variables 
there are some other  internals one as well 

these are called roots 

2)
any other value is considerd reachable if its reachable fromm root by a reference or by chain of nested calls / references 
for instance if theres an object in  global var 
which has a propert referencing to the other object 
that object is consider reachable 
and those that it references are also reachable 

theres a big process in js engine that is called garbase collector  
it monitors all objects and removes those that have become unreachable 

*/


let user = {
    name : "pratik",
};

user = null;
// now user is not referred to anyting 
// pratik has become unreachable 

// the reference to the og object is lost 
// os js garbase collection will remove it from memory 


// two refrences 
user = {};

user = {
name : "pratik",
};

let admin = user ;

// object has two references 

user = null ; 

// we stil lahve admin that referes to the object 
// so object is still reachable 

console.log(admin.name);



// interlinked objects 

// family :- object 


function marry (man,woman){

    man.wife = woman;
    woman.husband = man;

    return {
        father : man,
        mother : woman
    }

}

let family = marry(
    {
        name : "pratik",
    },
    {
        name : "sukoon"
    }

);



/*

we have marray function that takes two argumners and we have passed objects 
man = {
    name : "pratik",
};

woman = {
    name : "sukoon",
};


woman.husband = man (man is object)
man.wife = woman (woman is object)

so now we have added other variable in both and assigned value to them 

man = 
{
    name : "pratik",
    wife : {
        name :"sukoon",
        husband : {
            name : "pratik"
        }
    }
};


woman =
{
    name : "sukoon",
    husband : {
        name : "pratik",
        wife : {
        name : "tanhai"
        }
    }

}

the marray functions retunrs 
one objects wehre father is refencing to man object 
and mother is referencing to woman object 


marry returns like 
so this is what family object looks like 


{
father :  
{
    name : "pratik",
    wife : {
        name :"sukoon",
        husband : {
            name : "pratik"
        }
    }
},


mother :
{
    name : "sukoon",
    husband : {
        name : "pratik",
        wife : {
        name : "tanhai"
        }
    }

}


};

// better to look at output by consoling 

*/

// console.log(family.father.name);
// console.log(family.father.wife);




// console.log(family);
//https://javascript.info/garbage-collection
// check this out for better understanding 


// all are reachable now 
// lets delete 
delete family.father ;
delete family.mother.husband;

// its not enough to delete only one of these 
// all would still be reachable 

// but once we delete all incoming arrows 
// then it has become unreaable no matter outgoing arrows 

//outgoing reference does not matter like man object refer to woman  so what 
// incoming reference is what makes an object reachable 



family = null;
// by doing this it has become unreachable island 
// now matter the interlinked objects if its not linked to the root 



/*
The basic garbage collection algorithm is called “mark-and-sweep”.

The following “garbage collection” steps are regularly performed:

The garbage collector takes roots and “marks” (remembers) them.
Then it visits and “marks” all references from them.
Then it visits marked objects and marks their references. All visited objects are remembered, so as not to visit the same object twice in the future.
…And so on until every reachable (from the roots) references are visited.
All objects except marked ones are removed.

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

