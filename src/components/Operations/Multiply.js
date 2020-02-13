import React from "react";
import "./Operation.css";

const Multiply = props => {
  return <div className="Multiply btn" onClick={props.onClick}>{props.sign}</div>;
};

export default Multiply;
