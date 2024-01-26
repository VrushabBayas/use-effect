import React from "react";
import { Link } from "react-router-dom";

export default function AboutEffect() {
  return (
    <>
      <ul>
        <li>
          {" "}
          <Link to="/counter">Counter</Link>
        </li>

        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>
          {" "}
          <Link to="/user-posts">Posts</Link>
        </li>
        <li>
          <Link to="/user/1">User</Link>
        </li>
      </ul>
    </>
  );
}
