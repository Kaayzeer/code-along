import React from "react";

const Button = ({ onClick, children, styles }) => {
  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
};

export default Button;
