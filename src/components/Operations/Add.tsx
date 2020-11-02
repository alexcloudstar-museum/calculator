import React from "react";
import "./Operation.css";

const Add = props => {
  return <div className="Add btn" onClick={props.onClick}>{props.sign}</div>;
};

export default Add;
