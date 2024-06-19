import React, { useEffect, useState } from "react";
import styles from "../styles/PostList.module.css";

export default function PostList({posts}) {
  return (
    <div className={styles.postList}>
      <h1 className={styles.header}>Список постов</h1>
      <div>
        {posts.map((post) => {               
           return (
             <div>
               <h4 key={post.id}>{post.title}</h4>
               <p key={post.id}>{post.text}</p>
             </div>
           );
        })} 
      </div>
    </div>
  );
}
