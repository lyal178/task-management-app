import { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";

function App() {
  const [taskArray, setTaskArray] = useState(() => {
    const savedTaskArray = localStorage.getItem("taskArray");
    return savedTaskArray ? JSON.parse(savedTaskArray) : [];
  });
  const [isCreatingNewTask, setIsCreatingNewTask] = useState(false);

  useEffect(() => {
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
  }, [taskArray]);

  const handleNewTaskInfo = (id, newObj) => {
    setTaskArray((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setTaskArray((prevTasks) => [...prevTasks, newObj]);
  };

  const handleRemoveTask = (idToRemove) => {
    setTaskArray((prevTasks) =>
      prevTasks.filter((task) => task.id !== idToRemove)
    );
  };

  if (isCreatingNewTask) {
    return (
      <>
        <TaskForm
          setTaskArray={setTaskArray}
          setIsCreatingNewTask={setIsCreatingNewTask}
        ></TaskForm>
      </>
    );
  } else {
    return (
      <div>
        <header className="header">
          <h1 className="header-title">
            To do list
          </h1>
          <div
            className="floating-button"
            onClick={() => {
              setIsCreatingNewTask(true);
            }}
          >
            +
          </div>
        </header>
        <TaskList
          handleNewTaskInfo={handleNewTaskInfo}
          taskArray={taskArray}
          handleRemoveTask={handleRemoveTask}
        ></TaskList>
      </div>
    );
  }
}

export default App;
