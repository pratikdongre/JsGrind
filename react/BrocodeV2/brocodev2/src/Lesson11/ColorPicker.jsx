import React, { use, useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <div className="m-2 flex flex-col items-center ">
      <p className="font-bold text-4xl">Color Picker</p>
      <div
        className="w-[200px] h-[200px] border-2"
        style={{ backgroundColor: color }}
      ></div>
      <div className="flex flex-col items-center">
        <label> Select a Color</label>
        <input type="color" value={color} onChange={handleColorChange} />
      </div>
    </div>
  );
}

export default ColorPicker;
