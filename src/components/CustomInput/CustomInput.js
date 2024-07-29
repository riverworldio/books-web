import React from "react";
import "./CustomInput.css";

const CustomInput = ({
  type = "text",
  label,
  options = [],
  value,
  onChange,
  placeholder,
  style = {},
  width = "100%",
  required = false,
  variant = "box",
  margin = "20px 0px",
  ...props
}) => {
  return (
    <div style={{ margin: margin, width: width, ...style }}>
      {label && (
        <label
          style={{ display: "block", marginBottom: "8px" }}
          className="custominput-Label"
        >
          {label} {required && <span className="required-asterisk">*</span>}
        </label>
      )}
      {type === "text" && (
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`custominput-inputFeild ${variant}`}
          style={{ padding: "8px", width: "100%", ...props.inputStyle }}
          required={required}
        />
      )}
      {type === "dropdown" && (
        <select
          value={value}
          onChange={onChange}
          className={`custominput-inputFeild ${variant}`}
          style={{ padding: "8px", width: "100%", ...props.inputStyle }}
          required={required}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
      {type === "date" && (
        <input
          type="date"
          value={value}
          onChange={onChange}
          className={`custominput-inputFeild ${variant}`}
          style={{ padding: "8px", width: "100%", ...props.inputStyle }}
          required={required}
        />
      )}
    </div>
  );
};

export default CustomInput;
