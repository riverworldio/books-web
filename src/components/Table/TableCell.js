import React from 'react';

const TableCell = ({
  children,
  padding = '8px',
  textAlign = 'left',
  border = '1px solid black',
  fontSize = '14px',
}) => {
  const style = {
    padding: padding,
    textAlign: textAlign,
    border: border,
    fontSize: fontSize,
  };

  return <td style={style}>{children}</td>;
};

export default TableCell;
