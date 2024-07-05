import React, { useState } from "react";

export default function Form2({ addTask }) {
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
      <input type="text" placeholder="Add Task" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}
