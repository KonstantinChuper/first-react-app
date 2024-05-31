import React from "react";
import { citiesArr } from "../data/data";

export default function CitySelector({ selectedCityIndex, handleCityChange }) {
  return (
    <div>
      <form>
        <span>Choose your city:</span>
        <select onChange={handleCityChange} value={selectedCityIndex}>
          {citiesArr.map((city, index) => (
            <option key={index} value={index}>
              {city.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}
