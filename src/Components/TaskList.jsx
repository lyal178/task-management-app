import React, { useState } from "react";
import TaskItem from "./TaskItem";
import "../App.css";

const TaskList = ({ taskArray, handleRemoveTask, handleNewTaskInfo }) => {
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleEditStart = (taskId) => {
    setEditingTaskId(taskId);
  };

  const handleEditEnd = () => {
    setEditingTaskId(null);
  };
  return (
    <>
      <div className="task-list-container">
        <ul className="task-list">
          {taskArray.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleRemoveTask={handleRemoveTask}
              handleNewTaskInfo={handleNewTaskInfo}
              isEditing={editingTaskId === task.id}
              onEditStart={() => handleEditStart(task.id)}
              onEditEnd={handleEditEnd}
            ></TaskItem>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TaskList;
