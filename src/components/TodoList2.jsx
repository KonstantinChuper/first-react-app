import React, { useState } from "react";
import Form2 from "./Form2";

export default function TodoList2() {
  const [listItems, setListItems] = useState([]);

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      isChecked: false,
    };
    const updatedTask = [...listItems, newTask];
    setListItems(updatedTask);
  }

  return (
    <div className="container">
      <Form2 addTask={addTask} />
      <ul>
        {listItems.map((item) => {
          return (
            <li key={item.id}>
              <input type="checkbox" name="ch" id="ch" />
              <span>{item.text}</span>
              <button>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
