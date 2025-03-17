// reacto Hook :- SPecial function that allows funtional component 
// to use react featueres wihtout class componenets 
// (useState, useEffect, useContext,useReducer,useCallback, and more )

// useState() :- a React hook allows the creation of stateful variable
// and a setter function to update its value in the virtual dom

import react , {useState} from 'react';



function MyComponent(){
    const [name,setName] =useState("Guest");
    const [age,setAge] = useState(0);
    const [isEmployed,setIsEmployed] = useState(false);

    const updateName = ()=>{
        setName("Pratik");
    } 

    const AgeIncrement = ()=>{
       setAge(age +1);
    }

    const toggleEmployeStatus = ()=>{
        setIsEmployed(!isEmployed);
    }

    return(<>
    <div>
        <p>Name : {name}</p>
        <button onClick={updateName}>SetName</button>
        <p>Age : {age}</p>
        <button onClick={AgeIncrement}>SetAge</button>
        <p>Employed Status : {isEmployed ? "Yes" : "No"}</p>
        <button onClick = {toggleEmployeStatus}>Toggle</button>
      
    </div>
    </>);
}

export default MyComponent
