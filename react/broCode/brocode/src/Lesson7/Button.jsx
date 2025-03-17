// click event : an interaction when user click on a specific element
// we can respond to the click by passing an callback function 
// to the onclick event handler 

// jargon if we have parameters then we need to paass the callback inside a function 

function Button(){
    const handleClick = ()=>{
        console.log("OUCh");
        
    }

    const handleClick2 = (name) => {
        console.log(`${name} stop clicking me`);
        
    }
    let count = 0;
    const handleClick3 = (name)=>{
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} times`);
        } else if(count > 5){
            console.log('ENought goddammit');
            
        }
        
        else {
            count++;
            console.log(`${name} stop click me `);
            
        } 
    } 

   const handleClick4 = (e) => e.target.innerText = "OUCH";
    

    return (<button onDoubleClick={(e)=> handleClick4(e)}> Click me </button>)

}

export default Button