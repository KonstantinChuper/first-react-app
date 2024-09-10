import React from "react";
import "./styles.css";
import Quote from "./components/Quote";

export default function App() {
  return (
    <div className="container">
      <h1 style={{ color: "red" }}>Random Quotes</h1>
      <Quote />
    </div>
  );
}
