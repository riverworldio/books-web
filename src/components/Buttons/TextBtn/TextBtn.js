import React from "react";

const TextBtn = ({
  text,
  fontSize = "16px",
  fontWeight = "600",
  fontColor = "black",
  ...props
}) => {
  const style = {
    fontSize: fontSize,
    fontWeight: fontWeight,
    color: fontColor,
    backgroundColor: "transparent",
    border: 'none',
    padding: '7px 30px',
    cursor: 'pointer',
  };

  return (
    <div>
      <button style={style} {...props}>{text}</button>
    </div>
  );
};

export default TextBtn;

