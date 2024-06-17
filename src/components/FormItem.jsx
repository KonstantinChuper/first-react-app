import { useState } from "react";

export default function FormItem({ addTask }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue !== "") {
      addTask(inputValue);
      setInputValue("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
}
