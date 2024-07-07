import React, { useState } from "react";
import FormItem from "./FormItem";

export default function List() {
  const [listItems, setListItems] = useState([]);

  const addItem = (text) => {
    const newItem = {
      id: Date.now(),
      text,
      isChecked: false,
    };
    setListItems([...listItems, newItem]);
  };

  const deleteItem = (id) => {
    const updatedList = listItems.filter((item) => {
      return item.id !== id;
    });
    setListItems(updatedList);
  };

  const toggleCheckbox = (id) => {
    const updatedList = listItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isChecked: !item.isChecked,
        };
      } else return item;
    });
    setListItems(updatedList);
  };

  return (
    <div>
      <FormItem addItem={addItem} />
      <ul>
        {listItems.map((item) => {
          return (
            <li key={item.id}>
              <div>
                <label class="cr-wrapper">
                  <input
                    type="checkbox"
                    className="item-checkbox"
                    onChange={() => {
                      toggleCheckbox(item.id);
                    }}
                  />
                  <div class="cr-input"></div>
                  <span
                    style={{ textDecoration: item.isChecked ? "line-through" : "none", color: item.isChecked ? "#bab6b6" : "black" }}
                  >
                    {item.text}
                  </span>
                </label>
              </div>
              <button
                className="remove-button"
                onClick={() => {
                  deleteItem(item.id);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
