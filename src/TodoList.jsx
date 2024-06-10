import { useContext } from "react";
import TodoItem from "./TodoItem";
import TodosContext from "./TodosContext";

function TodoList() {
  const { tasks } = useContext(TodosContext);

  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TodoList;
