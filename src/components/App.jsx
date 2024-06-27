import Header from "./Header";
import MainPage from "./MainPage";
import ArticlesList from "./ArticlesList";
import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Article from "./Article";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:articleId" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
