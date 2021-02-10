import React from "react";
import "./Button.css";

export default function Button({ label, operation, double, triple, click }) {
  // let classes = 'button'
  // classes += operation? 'operation' : ""
  // classes += double? 'double' : ""
  // classes += triple? 'triple' : ""

  return (
    <button
      onClick={() => click(label)}
      className={`
    button 
    ${operation ? "operation" : ""}
    ${double ? "double" : ""}
    ${triple ? "triple" : ""}
  `}
    >
      {label}
    </button>
  );
}
