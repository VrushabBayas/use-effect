import React, { useEffect, useState } from "react";

const RenderPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    fetch("https://jsonplaceholder.typicode.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        alert("Posts fetched");
        setPosts(data);
        console.log("Posts fetched finished");
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Request aborted");
        } else {
          console.log("Error:", error);
        }
      });
    return () => {
      abortController.abort();
      console.log("Unmounting...");
    };
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default RenderPosts;
