let i = 0;
while(++i < 5)
{
    console.log(`the value of i :- ${i}`);
    
}

// what is the output 
/*
1<5 i = 1
2<5 2
3<5 3
4<5 4
*/


let j=0;
while(j++<5)
{
    console.log(`the value of j :- ${j}`);

}


for(let i = 0;i<5;i++)
{
    // 0 1 2 3 4 
}

for(let j = 0;i<5 ; j++)
{
    // 0 1 2 3 4 
}



for(let d = 2 ; d<=10 ; d++)
{
    if(d % 2 ==0)
    {
        console.log(d);
    }
}

// or 

for(let d=2;d<=10;d++)
{
    if(d % 2 != 0) continue;
    console.log(d);
    
}

let z = 0;
while(z<3)
{
    console.log(`number ${j}!`);
    z++;
}

// which j is used in here it not inline of any loop

while(true){
let val = prompt("enter a number greater than 100","");
// if(val < 100)

if(val > 100 || val == "" || val == null)
    {
        break;
    }    

}


// or 
let num = 0;
do{
    num = prompt("Enter a no greater than 100","");
}while(num <=100 && num)

// num checks for empty string or null vlaue if its that 
// and comapirsion operator returns 0 








