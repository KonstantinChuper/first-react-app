export default function Answer({ number1, number2, score, handleSubmit, handleChange, answer }) {
  return (
    <div className="quiz-field">
      <h3>
        Your score: <span>{score}</span>
      </h3>
      <div className="quiz-task">
        {number1} + {number2} = ?
      </div>
      <form onSubmit={handleSubmit}>
        <input type="number" onChange={handleChange} value={answer} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
