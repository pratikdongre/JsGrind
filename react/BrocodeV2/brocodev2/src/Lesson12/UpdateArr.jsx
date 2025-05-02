import React, { useState } from "react";

function UpdateArr() {
  const [foods, setFoods] = useState(["apple", "mango", "banana"]);

  const [newFood, setNewFood] = useState("");

  const [editingIndex, setEditingIndex] = useState(null);

  const handleRemove = (index) => {
    const AfterRemoval = foods.filter((food, i) => i !== index);
    setFoods(AfterRemoval);
  };
  const handleAddFood = (newfood) => {
    if (newfood.trim() != "") {
      setFoods([...foods, newfood]);

      setNewFood("");
    } else {
      console.log(foods);
    }
  };

  const editFood = (index) => {
    setNewFood(foods[index]);
    setEditingIndex(index);
  };

  const handleAddOrUpdateFood = (newfood) => {
    if (editingIndex !== null) {
      console.log("we are editing");
      const updatedFoods = [...foods];
      updatedFoods[editingIndex] = newfood;
      setFoods(updatedFoods);
      setEditingIndex(null);
    } else {
      handleAddFood(newFood);
    }

    setNewFood("");
  };

  return (
    <div>
      <ul>
        {foods.map((food, index) => (
          <li key={index} className="flex flex-row gap-2 m-2">
            <p>{food} </p>
            <button
              className="bg-red-500"
              onClick={() => {
                handleRemove(index);
              }}
            >
              Remove
            </button>

            <button onClick={() => editFood(index)}>Update</button>
          </li>
        ))}
      </ul>

      <hr />
      <input
        className="border-1"
        type="text"
        placeholder="add new Food"
        value={newFood}
        onChange={(e) => setNewFood(e.target.value)}
      />
      <button
        className="bg-green-600"
        onClick={(newfood) => handleAddOrUpdateFood(newFood)}
      >
        {editingIndex ? "Updated Food" : "Added Food"}
      </button>
    </div>
  );
}

export default UpdateArr;
