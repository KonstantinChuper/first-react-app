import { useState } from "react";
import { citiesArr } from "../data/data";
import CityCard from "./CityCard";
import CitySelector from "./CitySelector";
import "./styles.css";

function App() {
  const [selectedCityIndex, setSelectedCityIndex] = useState(0);
  const selectedCity = citiesArr[selectedCityIndex];
  const handleCityChange = (e) => {
    setSelectedCityIndex(e.target.value);
  };
  return (
    <div>
      <h1>Europian Cities Tour</h1>
      <CitySelector handleCityChange={handleCityChange} selectedCityIndex={selectedCityIndex} />
      <CityCard city={selectedCity} />
    </div>
  );
}

export default App;
