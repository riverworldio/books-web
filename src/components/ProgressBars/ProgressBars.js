import React from "react";

const ProgressBars = ({
  color = "black",
  width = "100%",
  containerColor = "grey",
  containerWidth = "100%",
  containerHeight = "15px",
}) => {
  const containerStyle = {
    height: containerHeight,
    borderRadius: "10px",
    width: width,
    backgroundColor: color,
    color: color,
  };
  const containerStyle1 = {
    height: containerHeight,
    borderRadius: "10px",
    width: containerWidth,
    backgroundColor: containerColor,
  };

  return (
    <div className="w3-round" style={containerStyle1}>
      <div className="w3-container w3-round" style={containerStyle}>
        &nbsp;
      </div>
    </div>
  );
};

export default ProgressBars;
