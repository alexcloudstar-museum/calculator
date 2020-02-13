import React from "react";
import "./Number.css";

const Number = props => {
  return <span className="btn" onClick={props.onClick}>{props.number}</span>;
};

export default Number;
