// prime 

let n = prompt("enter no n",'2');



// Using count
for(let i =2;i<=n;i++)
{
    let count = 0;

    for(let j=1;j<=i;j++)
    {
        if(i%j==0)
        {
            count++;
        }
        if(count > 3) break;
    }
    if(count <=2)
    {
        console.log(i);
        
    }
}


// Using one varaiable Isprime = true or false

for(let i = 2;i<=n;i++)
{
    let isPrime = true;
    for(j=2;j<i;j++)
    {
        if(i%j==0)
        {
            isPrime = false;
            break;
        }
        
    }

    if(isPrime == true)
    {
        console.log(`this number is ${i}`);
        
    }
}



outerloop : for(let i=2;i<=n;i++)
{
    for(let j=2;j<i;j++);
    {
        if(i%j==0) continue outerloop;
        // if j dividees i then it would never go down to do the alert as it conitnue means next iteration
    }
    alert(i);
}


