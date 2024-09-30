import React from "react";
import "./CustomInput.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField, OutlinedInput, InputAdornment } from "@mui/material";

const CustomInput = ({
  type = "text",
  label,
  labelText = "",
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
      {type === "integer" && (
        <input
          type="number"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`custominput-inputFeild ${variant}`}
          style={{ padding: "8px", width: "100%", ...props.inputStyle }}
          required={required}
        />
      )}
      {type === "number" && (
        <FormControl fullWidth sx={{}}>
          <InputLabel htmlFor="outlined-adornment-amount">
            {labelText}
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">h</InputAdornment>}
            label="Amount"
            value={value}
            onChange={onChange}
          />
        </FormControl>
      )}
      {type === "textarea" && (
        <TextField
          fullWidth
          id="outlined-multiline-flexible"
          label={labelText}
          value={value}
          multiline
          maxRows={4}
          onChange={onChange}
        />
      )}
      {type === "hidden" && <></>}
      {type === "dropdown" && (
        <FormControl sx={{ minWidth: 120 }} fullWidth size="medium">
          <InputLabel id="demo-simple-select-label">{labelText}</InputLabel>
          <Select
            value={value}
            label={labelText}
            onChange={onChange}
            style={{ height: "45px", fontSize: "15px" }}
          >
            {options.map((option, index) => (
              <MenuItem value={option?.label} style={{ fontSize: "15px" }}>
                {option?.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
      {type === "time" && (
        <input
          type="time"
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
