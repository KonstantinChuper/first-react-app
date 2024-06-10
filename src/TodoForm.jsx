import { useContext } from "react";
import TodosContext from "./TodosContext";

function TodoForm() {
  const { addTask } = useContext(TodosContext);

  function handleSubmit(e) {
    e.preventDefault();
    const newTaskName = e.target.elements.todo_name.value;
    addTask(newTaskName);
    e.target.elements.todo_name.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="todo_name" />
      <button>Add +</button>
    </form>
  );
}

export default TodoForm;
