import React from 'react';

const TableCell = ({ children, padding = '8px', textAlign = 'left', border = '1px solid black' }) => {
  const style = {
    padding: padding,
    textAlign: textAlign,
    border: border,
  };

  return <td style={style}>{children}</td>;
};

export default TableCell;
