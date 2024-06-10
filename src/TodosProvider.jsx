import { useState } from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodosContext from "./TodosContext";

function TodosProvider() {
  const [tasks, setTasks] = useState([]);

  function addTask(newTaskName) {
    const newTask = {
      id: Date.now(),
      name: newTaskName,
      isComplete: false,
    };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    setTasks(
      tasks.filter((task) => {
        if (task.id !== id) {
          return true;
        } else {
          return false;
        }
      })
    );
  }

  function toggleIsComplete(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id !== id) return task;
        return {
          ...task,
          isComplete: !task.isComplete,
        };
      })
    );
  }

  return (
    <TodosContext.Provider
      value={{
        tasks: tasks,
        addTask: addTask,
        deleteTask: deleteTask,
        toggleIsComplete: toggleIsComplete,
      }}
    >
      <TodoForm />
      <TodoList />
    </TodosContext.Provider>
  );
}

export default TodosProvider;
