import React from "react";

const FlexContainer = ({
  children,
  direction = "row",
  justify = "space-between",
  align = "stretch",
  wrap = "nowrap",
  gap = "10px",
  padding = "0",
  margin = "0",
  width = "",
}) => {
  const style = {
    display: "flex",
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    flexWrap: wrap,
    gap: gap,
    padding: padding,
    margin: margin,
    width: width,
  };

  return <div style={style}>{children}</div>;
};

export default FlexContainer;
