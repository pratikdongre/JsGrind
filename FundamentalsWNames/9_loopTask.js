//14
let i = 0;
while (++i < 5)
{
    console.log(`the value of i :- ${i}`);
}

// what is output 

let j = 0;
while(j++ < 5)
{
    console.log(`the value of j :- ${j}`);
}


for(let i = 0 ; i < 5 ;i++)
{
    // what would print
    /*
    0-1-2-3-4
    */


}

for(let i = 0;i<5;++i)
{
    // what would print 
    // 0-1-2-3-4

}


for(let i =2;i<= 10;i++)
{
    if(i%2 == 0){
        console.log(i);

    }
}

let z = 0;
while(z<3)
{
    console.log(`number ${i}!`);
    z++;
}


// while(true)
// {
//     let value = +prompt("Enter no greater than 100",'');
//     if(value > 100 || value == null || value == '')
//     {
//         break;
//     }

    
// }

//or using do while 
let num = 0;
do {
    num = prompt("Enter the no greater than 100 ", 0);

}while(num <=100 && num)

//num checks for empty string or null value if its that then 
// why do we require it 
// if cancel then num value is null and comparison opeartor turns num to 0

// 