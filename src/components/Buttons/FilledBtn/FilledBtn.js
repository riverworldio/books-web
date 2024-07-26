import React from "react";

const FilledBtn = ({
  text,
  fontSize = "16px",
  fontWeight = "600",
  fontColor = "black",
  bgColor = "#CCCCCC", 
  padding = '7px 30px',
  ...props
}) => {
  const style = {
    fontSize: fontSize,
    fontWeight: fontWeight,
    color: fontColor,
    backgroundColor: bgColor,
    border: 'none',
    padding: padding,
    borderRadius: '10px',
    cursor: 'pointer',
  };

  return (
    <div>
      <button style={style} {...props}>{text}</button>
    </div>
  );
};

export default FilledBtn;
