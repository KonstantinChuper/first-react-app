import { useState } from "react";

export default function List() {
  const [people, setPeople] = useState([
    { id: 1, name: "Иван", age: 20 },
    { id: 2, name: "Мария", age: 22 },
    { id: 3, name: "Алексей", age: 21 },
    { id: 4, name: "Марина", age: 19 },
    { id: 5, name: "Даша", age: 23 },
    { id: 6, name: "Глеб", age: 24 },
    { id: 7, name: "Дима", age: 18 },
    { id: 8, name: "Гриша", age: 20 },
    { id: 9, name: "Серафим", age: 21 },
  ]);

  const personDelete = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <div className="peopleListContainer">
      <h2>Список людей с их именами и возрастами:</h2>
      <ul className="peopleList">
        {people.map((person) => {
          return (
            <li key={person.id} className="peopleListelement">
              <p>Имя: {person.name}</p>
              <p>Возраст: {person.age}</p>
              <button className="listButton" onClick={() => personDelete(person.id)}>
                Удалить
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
