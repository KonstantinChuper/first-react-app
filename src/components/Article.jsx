import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function Article() {

  const params = useParams();
  const loc = useLocation();
  const navigate = useNavigate();

  function goBack() {
    navigate("/articles");
  }

  return (
    <div className="article-box">
      <h3>Article {params.articleId}</h3>
      <p>Inhalt of article {params.articleId}...</p>
      <p>Current location: {loc.pathname}</p>
      <button onClick={goBack}>Back</button>
    </div>
  );
}
