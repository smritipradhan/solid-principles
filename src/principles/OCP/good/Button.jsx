import React from "react";

const Button = (props) => {
  const { text, icon } = props;

  return (
    <button className="button" {...props}>
      {text}
      <div className="m-2">{icon}</div>
    </button>
  );
};

export default Button;
