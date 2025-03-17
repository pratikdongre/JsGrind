import React , {useState} from 'react';

function Counter(){

    const [count,setCount] = useState(0);

    const increment = ()=>{
        setCount(count +1);
    }

    const decrement = ()=>{
        setCount(count - 1 );
    }

    const reset = ()=> {
        setCount(0);
    }
    return (<div className="container text-center p-2">
            <p className="fs-4">{count}</p>
            
            <button className="btn btn-danger me-2 rounded-3 " onClick = {decrement}>Decrement</button>
            <button className="btn btn-success me-2 rounded-3" onClick={increment}>Increment</button>
            <button className="btn btn-primary me-2 rounded-3" onClick={reset}>Reset</button>
        </div>);
}

export default Counter