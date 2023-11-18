import React, { useState } from "react";
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

  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (e) => {
    setIsTyping(true);
    handleChange(e);
  };

  const handleInputBlur = () => {
    setIsTyping(false);
  };

  return (
    <>
      {label && (
        <label htmlFor={label}>
          <p>{label}</p>
        </label>
      )}
      {type === "textarea" ? (
        <textarea
          className={`input-field ${isTyping ? "typing" : ""}`}
          name={name}
          value={value}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          placeholder={placeholder}
          required={required}

        />
      ) : (
        <input
          className={`input-field ${isTyping ? "typing" : ""}`}
          name={name}
          value={value}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          type={type}
          placeholder={placeholder}
          required={required}
        />
      )}
    </>
  );
}
