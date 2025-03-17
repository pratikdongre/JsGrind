import React,{useState} from 'react';


function ColorPicker(){

    const [color,setColor] = useState('#FFFFFF');

    const handleColorChange = (e) => {
        setColor(e.target.value);
    }

    return <div className ="Color-picker-container container d-flex align-items-center">
        <h1>Color Picker</h1>
        <div className="color-container container" style={{backgroundColor : color}}>
           
        </div>
        <p>Selected Color : {color}</p>
        <label>Select a color</label>
        <input type="color" className="p-1 border-1 " value={color} onChange={handleColorChange} />
    </div>

}

export default ColorPicker