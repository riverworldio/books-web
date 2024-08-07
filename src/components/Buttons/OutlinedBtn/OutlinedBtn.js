import React from "react";

const OutlinedBtn = ({
  text,
  fontSize = "16px",
  fontWeight = "600",
  fontColor = "black",
  margin = "0px",
  ...props
}) => {
  const style = {
    fontSize: fontSize,
    fontWeight: fontWeight,
    color: fontColor,
    backgroundColor: "transparent",
    border: "1px solid #333",
    padding: "7px 30px",
    borderRadius: "10px",
    margin: margin,
    cursor: "pointer",
  };

  return (
    <div>
      <button style={style} {...props}>
        {text}
      </button>
    </div>
  );
};

export default OutlinedBtn;
