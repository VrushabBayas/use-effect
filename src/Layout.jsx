import React from "react";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={handleBack}>Back</button>
      {children}
    </div>
  );
};

export default Layout;
