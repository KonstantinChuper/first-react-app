import React from "react";

export default function CityCard({ city }) {
  return (
    <div className="city-card">
      <h2>{city.name}</h2>
      <img src={city.image} alt={city.name} style={{ width: "35vw", height: '20vw' }} />
      <p className="city-card-description">{city.description}</p>
      <h4>Interesting Facts:</h4>
      <ul>
        {city.interesting_facts.map((fact) => {
          return <li>{fact}</li>;
        })}
      </ul>
    </div>
  );
}
