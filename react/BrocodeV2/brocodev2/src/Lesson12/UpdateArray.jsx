import React, { useState } from "react";

function UpdateArray() {
  let editing = "";

  const [foods, setFoods] = useState(["Apple", "Orange", "Aam"]);

  const [newfood, setNewFood] = useState("");

  const handleAddFood = () => {
    editing = "adding";
    if (newfood.trim() !== "") {
      setFoods([...foods, newfood]);
      setNewFood("");
    }
  };

  const removeFood = (index) => {
    const afterRemoving = foods.filter((food, i) => i != index);

    setFoods(afterRemoving);
  };

  const editFood = (index) => {
    editing = "editing";
    const a = prompt("enter food name");
    const newSet = foods.map((food, i) => (i === index ? a : food));
    setFoods(newSet);
  };

  let valueEqual = "";
  if (editing == "editing") {
    valueEqual = a;
  } else {
    valueEqual = newfood;
  }

  return (
    <div>
      <p>List of Foods</p>

      <ul>
        {foods.map((food, index) => (
          <li key={index}>
            <p>
              {food}{" "}
              <span onClick={() => removeFood(index)} className="font-bold">
                X
              </span>
              <span onClick={() => editFood(index)}>Edit Food</span>
            </p>
          </li>
        ))}
      </ul>

      <input
        type="text"
        id="foodInput"
        placeholder="add food"
        value={valueEqual}
        onChange={(e) => setNewFood(e.target.value)}
      />
      <button onClick={handleAddFood}>Add food</button>
    </div>
  );
}

export default UpdateArray;
