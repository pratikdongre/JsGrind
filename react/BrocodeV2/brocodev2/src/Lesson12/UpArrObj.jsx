import React, { useState } from "react";
import { date } from "zod";

function UpArrObj() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const [editing, setEditing] = useState(null);

  const handleAddorupdateCar = () => {
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel,
    };
    if (editing !== null) {
      let newCars = [...cars];
      newCars[editing] = newCar;
      setCars(newCars);
    } else {
      setCars([...cars, newCar]);
    }

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  };

  const handleYearChange = (e) => {
    setCarYear(e.target.value);
  };

  const handleMakeChange = (e) => {
    setCarMake(e.target.value);
  };

  const handleModelChange = (e) => {
    setCarModel(e.target.value);
  };

  const handleDelete = (index) => {
    const newCars = cars.filter((car, i) => i !== index);
    setCars(newCars);
  };

  const handleUpdate = (index) => {
    setCarYear(cars[index].year);
    setCarMake(cars[index].make);
    setCarModel(cars[index].model);
    setEditing(index);
  };

  return (
    <div>
      List of Car Objects
      <hr />
      <ul>
        {cars.map((car, index) => {
          return (
            <li key={index} className="gap-2">
              {car.make} {car.year} {car.model}{" "}
              <button onClick={() => handleDelete(index)}> Delete</button>{" "}
              <button onClick={() => handleUpdate(index)}>Update</button>
            </li>
          );
        })}
      </ul>
      <div className="bg-amber-400 flex flex-row gap-2 p-4">
        <input
          type="text"
          placeholder="Car Year"
          className="border p-2 flex-1"
          value={carYear}
          onChange={(e) => handleYearChange(e)}
        />
        <input
          type="text"
          placeholder="Car Make"
          className="border p-2 flex-1"
          onChange={(e) => handleMakeChange(e)}
          value={carMake}
        />
        <input
          type="text"
          placeholder="Car Model"
          className="border p-2 flex-1"
          onChange={(e) => handleModelChange(e)}
          value={carModel}
        />
      </div>
      <button onClick={(e) => handleAddorupdateCar(e)}>Add New Car</button>
    </div>
  );
}

export default UpArrObj;
