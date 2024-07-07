import React, { useState } from "react";

export default function Form2({ addItem }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue !== "") {
      addItem(inputValue);
    }
    setInputValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}
