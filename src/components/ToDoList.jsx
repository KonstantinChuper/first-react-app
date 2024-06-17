import { useState } from "react";
import FormItem from "./FormItem";

export default function ToDoList() {
  const [listItems, setListItems] = useState([]);
  function addTask(text) {
    setListItems(listItems.concat({ text, isChecked: false }));
  }
  return (
    <div className="container">
      <FormItem addTask={addTask} />
      <ul>
        {listItems.map((item, index) => {
          return (
            <li key={index}>
              <input type="checkbox" name="" id="" />
              <span>{item.text}</span>
              <button>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
