import React, { useState } from "react";

export default function FormItem({ addItem }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      addItem(inputValue);
    }
    setInputValue("");
  };

  return (
    <form className="add-item-input-form" onSubmit={handleSubmit}>
      <input
        className="add-item-input"
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button className="add-item-btn" type="submit">
        Add
      </button>
    </form>
  );
}
