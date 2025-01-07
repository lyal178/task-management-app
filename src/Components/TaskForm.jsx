import React, { useState } from "react";

let TaskForm = ({ setTaskArray, setIsCreatingNewTask }) => {
  const [newTask, setNewTask] = useState({
    id: Date.now(),
    name: "",
    description: "",
    priority: "Low",
    status: "New",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleNewTask = (event) => {
    if (newTask.name.trim() !== "") {
      event.preventDefault();
      setTaskArray((prevTasks) => [...prevTasks, newTask]);
      setIsCreatingNewTask(false);
    } else {
      event.preventDefault();
      alert("Please fill at least name");
    }
  };

  const handleCancelNewTask = (event) => {
    event.preventDefault();
    setIsCreatingNewTask(false);
  };

  return (
    <div className="form-container">
      <form className="task-form">
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Task Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            value={newTask.name}
            onChange={handleChange}
            placeholder="Enter task name"
            required
          />
        </div>
        {/* Description Field */}
        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="form-textarea"
            value={newTask.description}
            onChange={handleChange}
            placeholder="Enter task description"
          />
        </div>
        {/* Priority Dropdown */}
        <div className="form-group">
          <label htmlFor="priority" className="form-label">
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            className="form-select"
            value={newTask.priority}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        {/* Status Dropdown */}
        <div className="form-group">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <select
            id="status"
            name="status"
            className="form-select"
            value={newTask.status}
            onChange={handleChange}
          >
            <option value="New">New</option>
            <option value="In progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div>
          {/*  Buttons */}
          <div className="task-actions">
            <button className="task-button edit-button" onClick={handleNewTask}>
              Create
            </button>
            <button
              className="task-button delete-button"
              onClick={handleCancelNewTask}
            >
              Close
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default TaskForm;
