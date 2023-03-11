import React from "react";

const Error: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div className="error bg-danger text-white fs-3 rounded d-flex justify-content-center align-items-center p-3 my-3">
      {children}
    </div>
  );
};

export default Error;
