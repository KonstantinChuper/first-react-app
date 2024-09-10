import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuote } from "../features/quotesSlice";

export default function Quote() {
  const dispatch = useDispatch();
  const { content, author, status, error } = useSelector((state) => state.quote);

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  const handleNewQuote = () => {
    dispatch(fetchQuote());
  };

  return (
    <div className="quote-container">
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && (
        <div>
          <p>{content}</p>
          <p>
            <strong>{author}</strong>
          </p>
        </div>
      )}
      <button onClick={handleNewQuote}>Get New Quote</button>
    </div>
  );
}
