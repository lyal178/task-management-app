import { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";

// {
//   id: Date.now(),
//   name: "Пробна таска",
//   description: "Перевірка довжини тексту і не тільки треба тут шось",
//   priority: "Green",
//   status: "In progress",
// },

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
      <>
        <header>
          <h1 className="absolute top-0 left-0 w-full bg-gray-800 text-white p-4">
            To do list
          </h1>
          <button
            className="absolute top-10 left-0 w-full bg-gray-800 text-white p-4"
            onClick={() => {
              setIsCreatingNewTask(true);
            }}
          >
            Add
          </button>
        </header>
        <TaskList
          handleNewTaskInfo={handleNewTaskInfo}
          taskArray={taskArray}
          handleRemoveTask={handleRemoveTask}
        ></TaskList>
      </>
    );
  }
}

export default App;
