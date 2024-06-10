import { useContext } from "react";
import TodosContext from "./TodosContext";

function TodoItem({ task }) {
  const context = useContext(TodosContext);

  console.log(task);

  return (
    <li>
      <input
        type="checkbox"
        checked={task.isComplete}
        onChange={() => {
          context.toggleIsComplete(task.id);
        }}
      />
      <span
        style={{
          textDecoration: task.isComplete ? "line-through" : "none",
        }}
      >
        {task.name}
      </span>
      <button
        onClick={() => {
          context.deleteTask(task.id);
        }}
      >
        X
      </button>
    </li>
  );
}

export default TodoItem;
