import { useState } from "react";
import FormItem from "./FormItem";

export default function ListItem() {
  const [listItem, setListItem] = useState([]);

  // useEffect(() => {
  //   console.log("Компонент ListItem обновлен");
  // }, [listItem]); //ошибка для EsLint

  return (
    <div className="container">
      <h1>List of Items</h1> 
      <FormItem listItem={listItem} setListItem={setListItem} />
      <ul>
        {listItem.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
