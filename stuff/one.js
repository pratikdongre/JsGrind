let arr = [83110,79922,80297,84923];
arr.map((x)=>{
    let sixty = Math.floor((60/100) * x);
    
    let fourty =   x - sixty;
    console.log(`for ${x} the 60% is ${Math.floor(sixty)} and 40% is ${Math.floor(fourty)}`);
    
    
})