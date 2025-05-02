import React, { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([]);

  const [taskInput, setTaskInput] = useState("");

  const handleInput = (e) => {
    setTaskInput(e.target.value);
  };

  const handleAdd = (e) => {
    setTasks([...tasks, taskInput]);
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  const handleUpp = (index) => {
    if (index === 0) return;
    const newTasks = [...tasks];
    [newTasks[index - 1], newTasks[index]] = [
      newTasks[index],
      newTasks[index - 1],
    ];

    setTasks(newTasks);
  };

  const handleDown = (index) => {
    if (index === tasks.length - 1) {
      return 0;
    }
    const newTasks = [...tasks];

    [newTasks[index + 1], newTasks[index]] = [
      newTasks[index],
      newTasks[index + 1],
    ];

    setTasks(newTasks);
  };

  return (
    <div className="w-full h-screen bg-red-700 text-amber-50 flex flex-col items-center gap-3">
      <p className="font-bold text-3xl ">TO Do List</p>

      <div className="border-2 rounded-2xl overflow-hidden">
        <input
          type="text"
          className="focus:outline-none focus:border-none"
          placeholder="Enter a task..."
          value={taskInput}
          onChange={(e) => handleInput(e)}
        />
        <button className="bg-gray-400 p-2 " onClick={(e) => handleAdd(e)}>
          Add
        </button>
      </div>

      <hr />
      <div>
        {tasks.map((task, index) => {
          return (
            <li className="gap-2 m-2 flex flex-row " key={index}>
              {task}{" "}
              <button
                className="bg-red-400"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
              <button className="bg-green-600" onClick={() => handleUpp(index)}>
                Up
              </button>
              <button
                className="bg-green-600"
                onClick={() => handleDown(index)}
              >
                Down
              </button>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
