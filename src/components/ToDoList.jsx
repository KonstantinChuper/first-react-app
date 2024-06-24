import { useEffect, useState } from "react";
import FormItem from "./FormItem";

export default function ToDoList() {
  const [listItems, setListItems] = useState([]);

  function addTask(text) {
    const newTask = { id: Date.now(), text, isChecked: false };
    const updatedList = [...listItems, newTask];
    setListItems(updatedList);
    localStorage.setItem("tasks", JSON.stringify(updatedList));
  }

  function deleteTask(id) {
    const updatedList = listItems.filter((item) => {
      return item.id !== id;
    });
    setListItems(updatedList);
    localStorage.setItem("tasks", JSON.stringify(updatedList));
  }

  function toggleCheckbox(id) {
    const updatedList = listItems.map((item) => {
      if (item.id === id) {
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });
    setListItems(updatedList);
    localStorage.setItem("tasks", JSON.stringify(updatedList));
  }

  console.log(listItems);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setListItems(JSON.parse(storedTasks));
    }
  }, []);

  return (
    <div className="container">
      <FormItem addTask={addTask} />
      <ul>
        {listItems.map((item, index) => {
          return (
            <li key={index}>
              <input type="checkbox" checked={item.isChecked} onChange={() => {toggleCheckbox(item.id)}} />
              <span>{item.text}</span> 
              <button onClick={() => deleteTask(item.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
