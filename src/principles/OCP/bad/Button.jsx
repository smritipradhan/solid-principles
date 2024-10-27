import React from "react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

const Button = (props) => {
  const { text, role } = props;

  return (
    <button className="button" {...props}>
      {text}
      <div className="m-2">
        {role === "forward" && <HiOutlineArrowNarrowRight />}
        {role === "back" && <HiOutlineArrowNarrowLeft />}
        {/* {role === "Up"} */}
      </div>
    </button>
  );
};

export default Button;
