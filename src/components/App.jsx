import ValueDisplay from "./ValueDisplay";
import React, { useState } from 'react'
import "./styles.css";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <ValueDisplay value={value} />
    </div>
  );
}

export default App;
