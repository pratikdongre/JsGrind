//15
let n = prompt("Enter the no n",'2');
//prime no 

// 2....10
for (let i = 2 ;i<=n;i++)
{
    let count = 0;

    for(let j=1;j<=i;j++)
    {
        if(i%j==0)
        {
            count++;
        }
        if(count >2)
        {
            break;
        }
      
    }
    if(count<=2)
    {
        console.log(i);
    }

    
}



for(let i = 2 ; i<=n;i++)
{
    let val = true;
    for(j=2;j<i;j++)
    {
        if(i%j==0) {
            val = false;
            break;
        }


    }

    if (val == true){
        console.log("this one " + i);
    }


}





loopa :for(let i =2;i<=n;i++)
{
    for(let j = 2;j<i;j++)
    {
        if(i%j ==0) continue loopa;
    }

    alert(i);
}
