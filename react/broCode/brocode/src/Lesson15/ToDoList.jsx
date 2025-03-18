import react, { useState } from "react";
import styles from "./TodoLIst.module.css";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "take a shower",
    "walk the dog",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="container container-sm ms-4 d-flex flex-column align-items-center">
      <h1 className="text-center">To Do List</h1>
      <div className="input-group d-flex justify-content-center">
        <input
          type="text"
          placeholder="Enter a Task..."
          value={newTask}
          onChange={(e) => handleInputChange(e)}
        />
        <button className="btn btn-primary" onClick={addTask}>
          Add
        </button>
      </div>

      <ol className="list-group">
        {tasks.map((task, i) => (
          <li className="list-group-item" key={i}>
            <span className="taskNames">{task}</span>
            <div className="btn-groups d-flex gap-2">
              <button className="btn btn-danger" onClick={() => deleteTask(i)}>
                Delete
              </button>
              <button onClick={() => moveTaskUp(i)} className="btn btn-success">
                Up
              </button>
              <button
                onClick={() => moveTaskDown(i)}
                className="btn btn-secondary"
              >
                Down
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
