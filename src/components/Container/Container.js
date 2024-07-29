import React from "react";

const Container = ({
  children,
  margin = "0px",
  padding = "0px",
  width = "100%",
  bgColor = "transparent",
  border = "none",
}) => {
  const style = {
    margin: margin,
    padding: padding,
    width: width,
    align: "center",
    backgroundColor: bgColor,
    border: border,
  };

  return <div style={style}>{children}</div>;
};

export default Container;
