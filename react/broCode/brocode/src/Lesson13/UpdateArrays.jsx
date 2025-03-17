import React,{useState} from 'react';

function UpdateArrays(){

    const [foods,setFoods] = useState(['apple','orange']);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.querySelector('#foodInput').value= '';

        // setFoods([...foods,newFood]);
        setFoods(f => ([...f,newFood]));

        
    } 

    function handleRemoveFood(index){   
        setFoods(foods.filter((ele,i) => { return i!==index}))

    }

    return (
        <div>
            <h2>List of Foods :</h2>
            <ul>
                {foods.map((food,index)=> { 
                   return <li onClick={()=>handleRemoveFood(index)} key={index}>{food}</li>
                })}
            </ul>

            <input type="text" id="foodInput" placeholder="enter Food Name" />
            <button onClick={handleAddFood} >Add Food</button>
        </div>
    );
}

export default UpdateArrays