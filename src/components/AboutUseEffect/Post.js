import { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Post = () => {
  const postId = useLocation().pathname.split("/")[2];
  const [post, setPost] = useState(null);

  const fetchPosts = useCallback(async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const json = await response.json();
    setPost(json);
  }, [postId]);

  useEffect(() => {
    if (postId) {
      fetchPosts();
    }
  }, [fetchPosts, postId]);
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        <li>
          <Link to="/post/1">Post 1</Link>
        </li>
        <li>
          <Link to="/post/2">Post 2</Link>
        </li>
        <li>
          <Link to="/post/3">Post 3</Link>
        </li>
      </ul>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default Post;
