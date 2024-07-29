import React from "react";

const TextBtn = ({
  text,
  fontSize = "16px",
  fontWeight = "600",
  fontColor = "black",
  padding= '7px 30px',
  ...props
}) => {
  const style = {
    fontSize: fontSize,
    fontWeight: fontWeight,
    color: fontColor,
    backgroundColor: "transparent",
    border: 'none',
    padding: padding,
    cursor: 'pointer',
  };

  return (
    <div>
      <button style={style} {...props}>{text}</button>
    </div>
  );
};

export default TextBtn;

