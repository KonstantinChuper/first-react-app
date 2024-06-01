import React from "react";
import { citiesArr } from "../data/data";

export default function CitySelector({ selectedCityIndex, handleCityChange }) {
  return (
    <div className="city-selector">
      <span className="city-selector-text">Choose your city:</span>
      <select onChange={handleCityChange} value={selectedCityIndex}>
        {citiesArr.map((city, index) => (
          <option key={index} value={index}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}
