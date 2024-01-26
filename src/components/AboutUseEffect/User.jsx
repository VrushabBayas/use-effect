import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState(null);
  const userId = useLocation().pathname.split("/")[2];

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
          {
            cancelToken: source.token,
          }
        );
        const data = response.data;
        setUser(data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled");
        } else {
          console.log("Error:", error);
        }
      }
    };

    if (userId) {
      fetchData();
    }

    return () => {
      source.cancel();
      console.log("Unmounting...");
    };
  }, [userId]);

  return (
    <div>
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      ) : (
        "Loading..."
      )}

      <div>
        <Link to="/user/1">User 1</Link>
      </div>
      <div>
        <Link to="/user/2">User 2</Link>
      </div>
      <div>
        <Link to="/user/3">User 3</Link>
      </div>
      <div>
        <Link to="/user/4">User 4</Link>
      </div>
    </div>
  );
};

export default User;
