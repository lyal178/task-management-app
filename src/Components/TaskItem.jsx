import React, { useState } from "react";
import "../App.css";

const TaskItem = ({
  task,
  handleRemoveTask,
  handleNewTaskInfo,
  isEditing,
  onEditStart,
  onEditEnd,
}) => {
  const [taskInfo, setTaskInfo] = useState(task);

  return (
    <li className="form-container">
      <div className="task-info">
        {/* task name */}
        {isEditing ? (
          <>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Task Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={taskInfo.name}
                onChange={(event) => {
                  setTaskInfo((task) => ({
                    ...task,
                    name: event.target.value,
                  }));
                }}
                placeholder="Enter task name"
                required
              />
            </div>
          </>
        ) : (
          <h2 className="task-name">{taskInfo.name}</h2>
        )}
        {/* task description */}
        {isEditing ? (
          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="form-textarea"
              value={taskInfo.description}
              onChange={(event) => {
                setTaskInfo((task) => ({
                  ...task,
                  description: event.target.value,
                }));
              }}
              placeholder="Enter task description"
            />
          </div>
        ) : (
          <p className="task-description">{taskInfo.description}</p>
        )}

        <p className="task-meta">
          {/* task priority */}
          {isEditing ? (
            <div className="form-group">
              <label htmlFor="priority" className="form-label">
                Priority
              </label>
              <select
                id="priority"
                name="priority"
                className="form-select"
                value={taskInfo.priority}
                onChange={(event) => {
                  setTaskInfo((task) => ({
                    ...task,
                    priority: event.target.value,
                  }));
                }}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          ) : (
            <span className="task-priority">Priority: {taskInfo.priority}</span>
          )}
          {/* task status */}
          {isEditing ? (
            <div className="form-group">
              <label htmlFor="status" className="form-label">
                Status
              </label>
              <select
                id="status"
                name="status"
                className="form-select"
                value={taskInfo.status}
                onChange={(event) => {
                  setTaskInfo((task) => ({
                    ...task,
                    status: event.target.value,
                  }));
                }}
              >
                <option value="New">New</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          ) : (
            <span className="task-status">Status: {taskInfo.status}</span>
          )}
        </p>
      </div>
      <div className="task-actions">
        {/* save/edit button */}
        {isEditing ? (
          <button
            className="task-button edit-button"
            onClick={() => {
              if (taskInfo.name.trim() !== "") {
                handleNewTaskInfo(taskInfo), onEditEnd();
              } else {
                alert("Fill name");
              }
            }}
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => {
              onEditStart(task.id);
            }}
            className="task-button edit-button"
          >
            Edit
          </button>
        )}
        {/* Cancel/delete button */}
        {isEditing ? (
          <button
            onClick={() => {
              onEditEnd();
              setTaskInfo(task);
            }}
            className="task-button delete-button"
          >
            Cancel
          </button>
        ) : (
          <button
            onClick={() => handleRemoveTask(taskInfo.id)}
            className="task-button delete-button"
          >
            Delete
          </button>
        )}
      </div>
    </li>
  );
};

export default TaskItem;
