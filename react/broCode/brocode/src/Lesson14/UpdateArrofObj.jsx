import react,{useState} from 'react';

function UpdateArrofObj(){

    const [cars, setCars] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");

    const handleAddCar = ()=> {
        const newCar = {
            year : year,
            make :make,
            model : model
        }

        setCars((c) => [...c,newCar]);

        setYear(new Date().getFullYear());
        setMake("");
        setModel("");   
    }

    const handleRemoveCar = (index)=> {
        setCars(c=>c.filter((car,i)=> i!== index));
        

    }

    const handleYearChange = (e)=> {
        setYear(e.target.value);
    }

    const handleMakeChange = (e)=> {
        setMake(e.target.value);
    }

    const handleModelChange = (e)=> {
        setModel(e.target.value);
    }

    return (
        <div>
            <p>List of Cars</p>
            <ul>
                {cars.map((car,index) => 
                     <li onClick={()=> handleRemoveCar(index)} key={index}>{car.year} {car.make} {car.model}</li>

                )}
            </ul>

          

            <input type="number" value={year} onChange ={handleYearChange} />
            <input type="text" value={make} onChange ={handleMakeChange} />
            <input type="text" value={model} onChange={handleModelChange} />
            <br />
            <button onClick={handleAddCar}>Add Car</button>

        </div>
    )
}

export default UpdateArrofObj