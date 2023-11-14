import React from "react";
import "./input.css";

export default function TextBox(props) {
  let { name, value, type, placeholder, handleChange, required, label } = props;

  if (!name) {
    name = "Input-box";
  }
  if (!value) {
    value = "";
  }
  if (!type) {
    type = "text";
  }
  if (!placeholder) {
    placeholder = "";
  }
  if (required === undefined) {
    required = false;
  }
  if (!label) {
    label = "";
  }

  return (
    <>
      {label && (
        <label for={label}>
          <p>{label}</p>
        </label>
      )}
      <input
        className="input-field1"
        name={name}
        value={value}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </>
  );
}
