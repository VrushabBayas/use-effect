import React, { useEffect, useState } from "react";

function Counter(props) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("useEffect called on mount");
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log("useEffect called on unmount");
    };
  }, []);
  return <div>Counter :{counter} dummy text sdfsd sdfsdf</div>;
}

export default Counter;
