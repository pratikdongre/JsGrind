//13
// loops how many times im gonna learn the same thing again and again 

// while loop

    let i = 0;
    while(i<3)
    {
        console.log(i);
        i++;
    }


    let j = 3;
    while(j!=0)
    {
        console.log(j);
        j--;
    }


// or you could use 

let z = 3;
while(z) // why this works because the condition gets converted to boolean value and we know the falsy values include 0
{
    console.log(z);
    z--;
}



//do while loop
let a = 0;
do 
{
console.log(`asssss ${a}`);
a++;
}while(a<3)
    // in do while the execution happens at least once even if the condition not met once 
    // because it executes the code and then checks the conditions 


// for loops

//i is inline variable in this -- not accessible outside 
for(let i = 0;i<3;i++){ 
    console.log(`i value ${i}`);
}

let ai = 0;
// for(;ai<3;ai++) // this works too 
for(ai = 0;ai<3;ai++) 
{
    console.log(`ai value :- ${ai}`);
}

console.log(ai);
// here ai is accesible and the value is also updated inside the loop so it gets the latest value 



// backhods
// we can remove everything from for() loop

/*
m = 0;
for(;m<3;m++) // we removed the begin step
*/


/*
m=0;
for(;m<3;)
    {
    console.log(m++);
    }
*/

/*
for(;;)
{
repeats without limits 
}

to be called as for loops it should have ;; otherwise syntax error
*/



// value = prompt("enter value");

// if (value == null)
// {
//     alert("pressed cancel");
// }
// else if (value == "")
// {
//     alert("pressed ok wihtout putting anything");
    
// }


/*
let value = null;
console.log(!value);//true if(!value) {this would execute}

*/

//combination of infinte loop and break
//ideal when the condition is to be checked at middle not begining nor at last 
let sum = 0;
while(true)
{
    let value ;
    // value = +prompt("enter a number",'');
    
    if(!value)
    {
        break;
    }

    sum += value;

}

// alert(sum);


//continue;
//stop the current iteration and goes to the further one
for(let i = 0;i<=10;i++)
{
    if(i%2 == 0 )
    {
        continue;
    }
    console.log(`all odds ${i}`);
}


// dont use continue/ break with ? ternary operator/conditional operator 


// break /continue supports label

/*
labelName : for()
*/


outer :for(let i =0;i<3;i++)
{
    for(let j =0;j<3;j++)
    {
        let input;
        //  input = prompt(`value at cords (${i}${j})`,'');
        
        //what if we want to exit from here Done!
        // labelName to rescue 
        if(!input){
            break outer;
        }



    }

}

// alert("Done!");


