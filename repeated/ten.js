// switch 
// same as ifs but mores descriptive way for multiple variants 


let a = '2'
let b = 1;


switch(b)
{
    case 0:
        console.log("zero");
        break;
    case 1:
        console.log("One");
        break;
    case 2 :
        console.log("two");
        break;
    default: 
        console.log("default");
           
            
                
}


switch(b)
{
    case 0:
        console.log("zero");
        break;
    case 1:
        console.log("executed one ");

    case 2 :
        console.log("executed two");
        
    default: 
        console.log("exectued default");           
                
}



// both switch and case allows aribitray expression

switch (+a){
    case 1 : 
        console.log("ok");
        break;
    case b+1:
        console.log("this runs because +a is 2 and b+1 gives 2 ");
        break;

    default:
        console.log("does not run");
        



}




// grouping of case happens due to not using break;

let y = 0;

switch(y){
    case 1:
        console.log("Right");
        break;
    case 0:
    case 2:
        console.log("Wrong");
        console.log("why dont you ask her out");
        break;

    default :
        console.log("dont ask her out");
                 
        
            
}



// type matter
// we have strict equality check in switch

let arg = prompt("enter a value");

switch(arg)
{
    case '0':
    case '1':
        {
            console.log("one or zero");
            break;
        }

     case "2":
        {
            console.log("two");
            break;
        }
    case 3 : 
    {
        console.log("this wont exectute as type is number and in swithc theres string");
        break;
    }
    default :
    console.log("unknown fucking vlaue");
    
           
}

//rewrite










