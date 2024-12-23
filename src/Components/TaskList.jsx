import React from "react";
import TaskItem from "./TaskItem";
import "../App.css";

const TaskList = ({ taskArray, handleRemoveTask,handleNewTaskInfo}) => {
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
            ></TaskItem>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TaskList;
