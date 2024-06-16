import React from "react";

export default function FormItem({ listItem, setListItem }) {
  const [inputValue, setInputValue] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue !== '') {
      setListItem([...listItem, inputValue]);
      setInputValue("");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="messageInput"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
