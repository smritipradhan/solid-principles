import React from "react";
import Button from "./Button";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";
import "../Style.css";

const OCP = () => {
  return (
    <div className="button-wrapper">
      <Button text="Go Home" icon={<HiOutlineArrowNarrowRight />} />
      <Button text="Go Back" icon={<HiOutlineArrowNarrowLeft />} />
      <Button text="Up" icon={<HiUp />} />
    </div>
  );
};

export default OCP;
