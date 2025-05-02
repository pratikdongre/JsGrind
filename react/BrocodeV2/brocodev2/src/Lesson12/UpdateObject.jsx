import React, { useState } from "react";

function UpdateObject() {
  const [car, setCar] = useState({
    year: 2024,
    make: "BMW",
    model: "Benz",
  });

  const handleCarMake = (e) => {
    setCar((car) => ({ ...car, make: e.target.value }));
  };

  const handleCarModel = (e) => {
    setCar((car) => ({ ...car, model: e.targe.value }));
  };

  const handleCarYear = (e) => [
    setCar((c) => ({ ...c, year: e.target.value })),
  ];
  return (
    <div>
      <p>
        Favorite Car : {car.make} {car.model} {car.year}
      </p>
      <div className="flex flex-col gap-2">
        <input
          className="border-2"
          type="text"
          value={car.make}
          onChange={handleCarMake}
        />
        <input
          className="border-2"
          type="text"
          value={car.model}
          onChange={handleCarModel}
        />

        <input type="text" value={car.year} onChange={handleCarYear} />
      </div>
    </div>
  );
}

export default UpdateObject;
