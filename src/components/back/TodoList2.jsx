import React, { useState } from "react";
import Form2 from "./Form2";

export default function TodoList2() {
  const [listItems, setListItems] = useState([]);

  function addItem(text) {
    const newListItem = {
      id: Date.now(),
      text,
      isChecked: false,
    };
    setListItems([...listItems, newListItem]);
  }

  function deleteItem(id) {
    const updatedList = listItems.filter((item) => {
      return item.id !== id;
    });
    setListItems(updatedList);
  }

  const toggleCheckbox = (id) => {
    const updatedList = listItems.map((item) => {
      if (item.id === id) {
        return { ...item, isChecked: !item.isChecked };
      } else return item;
    });
    setListItems(updatedList);
  };

  return (
    <div className="container">
      <Form2 addItem={addItem} />
      <ul>
        {listItems.map((item) => {
          return (
            <li key={item.id}>
              <input
                type="checkbox"
                name="ch"
                id="ch"
                onChange={() => {
                  toggleCheckbox(item.id);
                }}
              />
              <span style={{ textDecoration: item.isChecked ? "line-through" : "none", color: item.isChecked ? "grey" : "black" }}>
                {item.text}
              </span>
              <button
                onClick={() => {
                  deleteItem(item.id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
