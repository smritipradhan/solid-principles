import React from "react";
import Button from "./Button";
import "../Style.css";

const OCP = () => {
  return (
    <div className="button-wrapper">
      <Button text="Go Home" role="forward" />
      <Button text="Go Back" role="back" />
      <Button text="Upwards" role="up" />{" "}
    </div>
  );
};

export default OCP;
