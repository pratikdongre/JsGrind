let arr = [84688,81521,79712,83138,82580,83922,81318,85239];
arr.map((x)=>{
    let sixty = Math.floor((60/100) * x);
    
    let fourty =   x - sixty;
    console.log(`for ${x} the 60% is ${Math.floor(sixty)} and 40% is ${Math.floor(fourty)}`);
    
    
})