import React from "react";

const TableRow = ({ children, backgroundColor = "white" }) => {
  const style = {
    backgroundColor: backgroundColor,
    textAlign: "left",
  };

  return <tr style={style}>{children}</tr>;
};

export default TableRow;
