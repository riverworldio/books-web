import React from "react";
import "./CustomInput.css";

const CustomInput = ({
  type = "text",
  label,
  options = [],
  value,
  onChange,
  defaultOption,
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
      {label && type !== "checkbox" && (
        <label
          style={{ display: "block", marginBottom: "8px" }}
          className="custominput-label"
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
          {defaultOption && (
            <option value="" disabled hidden>
              {defaultOption}
            </option>
          )}
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
      {type === "textarea" && (
        <input
          type="textarea"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`custominput-inputFeild ${variant}`}
          style={{
            padding: "8px",
            width: "100%",
            height: "70px",
            ...props.inputStyle,
          }}
          required={required}
        />
      )}
      {type === "file" && (
        <input
          type="file"
          onChange={onChange}
          className={`custominput-inputFeild ${variant}`}
          style={{ padding: "8px", width: "100%", ...props.inputStyle }}
          required={required}
        />
      )}
      {type === "checkbox" && (
        <div className="form-check">
          <input
            type="checkbox"
            checked={value}
            onChange={onChange}
            className={`form-check-input custominput-inputField ${variant}`}
            id="exampleCheck1"
            style={{ ...props.inputStyle }}
            required={required}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            {label}
          </label>
        </div>
      )}
      {type === "radio" && (
        <input
          type="radio"
          checked={value}
          onChange={onChange}
          className={`custominput-inputFeild ${variant}`}
          style={{ padding: "8px", ...props.inputStyle }}
          required={required}
        />
      )}
    </div>
  );
};

export default CustomInput;
