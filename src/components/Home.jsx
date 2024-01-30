import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <ul>
        {/* <li>
          {" "}
          <Link to="/effect">About Effect</Link>
        </li> */}
        <li>
          <Link to="/inrerview/1">React Coding Interview One</Link>
        </li>
      </ul>
    </>
  );
}
