import { useState } from "react";
import Answer from "./Answer";
import "./styles.css";

export default function MathQuiz() {
  const [a, setA] = useState(Math.floor(Math.random() * 10) + 1);
  const [b, setB] = useState(Math.floor(Math.random() * 10) + 1);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");

  function handleChange(e) {
    setAnswer(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (answer === String(a + b)) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
    setA(Math.floor(Math.random() * 10) + 1);
    setB(Math.floor(Math.random() * 10) + 1);
    setAnswer("");
  }

  return (
    <div>
      <h1>Math Quiz</h1>
      <Answer number1={a} number2={b} score={score} handleSubmit={handleSubmit} handleChange={handleChange} answer={answer}/>
    </div>
  );
}
