// updater function :- a function passed as an argument to setSate()
// usually eg setYear(year => year+1)
// allow for safe updates based on previous state 
// used with multiple state updates and asyncrhonous function
// good practice to use updater function 


import react,{useState} from 'react';

function UpdaterFunction(){
    const [count,setCount] = useState(0);

    const handleIncrement = ()=> {
        // uses the current state to calculate the next state
        // set function do not trigger an update 
        //react batches together state update  for performace reasons 
        // next state becomes the current state after an update 
        // setCount(count + 1 );


        // with update function we use previous state of count 
        // and not the current state 
        //takes the pending state(not current state) to calucate the next state 
        // react puts your update function in a queeu (waiting in line)
        // during the next render , it will call them in the same order 
        setCount(c => c+1);
        setCount(c => c+1);
        setCount(c => c+1);

    }

    const handleDecrement =() => {
        // setCount(count -1);
        setCount(c => c-1);
        setCount(c => c-1);

        setCount(c => c-1);

    }

    const handleReset= ()=> {
        setCount(0);
    }

    return (<div><p>Count : {count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
    </div>)

}

export default UpdaterFunction