import React from "react";
import "./button.css";

export default function Buttons(props) {
  let { type, name, value, handleClick, bTitle, btype } = props;
  if (!name) {
    name = "Input-box";
  }
  if (!value) {
    value = "";
  }
  if (!type) {
    type = "button";
  }
  if (!handleClick) {
    handleClick = () => {};
  }

  return (
    <div
      className={
        btype === "primary"
          ? "btn-primary div-center"
          : "btn-secondary div-center"
      }
    >
      <button type={type} name={name} value={value} onClick={handleClick}>
        {bTitle}
      </button>
    </div>
  );
}
