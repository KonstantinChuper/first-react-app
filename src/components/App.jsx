import "../styles/styles.css";
import Header from "./Header";
import PostForm from "./PostForm";
import PostList from "./PostList";
import { API_URL } from "../utils/utils";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((responce) => {
        if (responce.status === 200) {
          setPosts(responce.data);
        }
      })
      .catch((error) => {});
  }, []);

  function addNewPost(newPost) {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <div>
      <Header />
      <main>
        <PostList posts={posts} />
        <PostForm addNewPost={addNewPost} />
      </main>
    </div>
  );
}

export default App;
