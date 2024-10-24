//12
// same as ifs but gives more descriptive way for multiple variants 


let a = '1'
let b = 0;


switch (+a)
{
    
    case b+1 :
        console.log("this run because b+1 gives 1 that is equal to a that is 1 only");
        break;

    default:
        console.log("this doesnt run");
}


//grouping of case is the dein of not using break;


let x = 3;

switch(x)
{
    case 4 :
        console.log("right");
        break;

    case 3 :
    case 5 :
        console.log("gajab");
        break;

    default:
        console.log("padai kar ");   
}


// equality check is strict 
// type matter 

let arg = prompt("Enter a value");
// arg has string type value

switch (arg){


    case '0' :
    case '1' :{
        alert("one or zero");
        break;
    }

    case "2" :
        {
            alert("two");
        }

    case 3 :
        {
            alert("this wont ever execute as the arg is in form of strings ");
        }    
    default:
        {
            alert("unknown fucking value");
        }    




}



//rewerite 

let browser = prompt("Enter something");

if (browser == 'Edge')
{
    console.log("You've got the Edge");
}
else if (browser=="Chrome" || browser=="Firefox" || browser=="Safari"|| browser=="Opera")
{
    console.log("okay we support those browser too");
}

else {
    console.log("I hope this page looks good ");
}




// 
let y = +prompt("y?",'');

switch(y)
{
    case 0 :
        {
            alert(0);
            break;
        }
    case 1 :
        {
            alert(1);
            break;
        }    
    case 2:
    case 3:
        {
            alert('2,3');
            break;
        }

}        