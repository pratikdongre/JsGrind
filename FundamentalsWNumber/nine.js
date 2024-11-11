
// loops 
// again and again


// while loop

let i =0;

while(i<3)
{
    console.log(i);
    i++;
}

// apart from comparision loop condition can be any expression or variable 

// shorter version of (j!=0) is (j)

let j = 3;

while(j){
    console.log(j);
    j--; 
}
// you could use
j = 3;
while(j!=0) console.log(j--);
//also if only one line then can skip {}


// do while loop

let a = 0;
do{
    console.log(`assss ${a}`);
    a++;
}while(a<3)

    // in do while the executoin happens at least once even if the condition not met once 
    // why ? well because it execute the code and then checks the conditions



// for loop

for(let i = 0; i<3; i++)
{
    console.log(`i value is ${i}`);
}
// in this i is inline variable so wont be accesisble outside 


let ai=0;
for(;ai<3;ai++)
// for(ai=0;ai<3;ai++)
{
    console.log(`ai value :- ${ai}`);
}

console.log(ai);
// here ai is accesislbe and the value is also updated so it gets latest updated value



// chadde

// we can remove everything from for() loop


/*
let m = 0;
for(;m<3;m++) // we removed the begin step
*/

/*
m=0;
for(;m<3;){
console.log(m++);
}

*/


/*

for(;;)
{
repeates without limits
}
*/

// to be called as for loops it should have ?? otherwise causes syntax error


// breaking loops


let sum = 0;

while(true){
    let value = +prompt("enter a number","");
    if(!value) break;
    // what if users enter 0 even that case we go under as condition becomes false 


    sum+=value;

}

console.log(`sum is ${sum}`);


// combination of inifite loop and break
// is ideal when we want the condition to be checked at middle neither at start or at end 


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


// continue
// stop the current iteration and goes to further iteration

for(let i =0;i<=10;i++)
{
    if(i%2==0)
    {
        continue;
    }
    console.log(`odd wale ${i}`);
    
}


// dont use break/continue with ? ternary operator/conditional operator 
// you can do below 



// break/continue supports label

/*
lableName : for()
*/

outer : for(let i=0; i<3;i++)
{
    for(let j=0;j<3;j++)
    {
        let input;

        input = prompt(`value at cordinate (${i},${j})`,'');

        // what if we want to exit from here in the middle
        // lableName to rescue

        // if we use simple ordinary break it would break out of 
        // inner loop only
        if(!input) break outer;
        
    }
}

alert("done");


/*
break label;
does not work 
lables do not allwos us to jump to some abitrary place in the code 
label : 
for();

*/



/*
label : {

break label;

}

this works 
*/

