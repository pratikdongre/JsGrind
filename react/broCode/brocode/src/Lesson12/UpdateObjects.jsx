import react,{useState} from 'react';

function Updateobjects(){

    const [car,setCar] = useState({year:2024
                                    ,make: "Ford"
                                    ,model:"Mustang"});

    const handleYearChange = (e)=> {
        // setCar({...car,year:2025});
        // setCar({...car,year : e.target.value});
        setCar(c => ({...c,year: e.target.value})); 
    };      
    
    const handleMakeChange =(e)=> {
        setCar(c=> ({...c,make : e.target.value}));
    }

    const handleModelChange= (e)=> {
        setCar(c=> ({...c,model : e.target.value}));
    }
        return (
            
            <div>
                <p>
                Your favorite car : {car.year} {car.make} {car.model}
                </p>
                <input type="number" value={car.year} onChange={handleYearChange} />
                <input type="text" value={car.make} onChange={handleMakeChange} />
                <input type="text" value={car.model} onChange={handleModelChange} />

            </div>
        );

}

export default Updateobjects