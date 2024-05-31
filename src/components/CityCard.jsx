import React from "react";

export default function CityCard({ city }) {
  return (
    <div>
      <h2>{city.name}</h2>
      <img src={city.image} alt={city.name} style={{ width: "35vw" }} />
      <p>{city.description}</p>
      <p>Interesting Facts:</p>
      <ol>
        {city.interesting_facts.map((fact) => {
          return <li>{fact}</li>;
        })}
      </ol>
    </div>
  );
}
