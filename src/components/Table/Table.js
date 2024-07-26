import React from 'react';

const Table = ({ children, border = '1px solid black', width = '100%', margin = '0', padding = '0' }) => {
  const style = {
    border: border,
    width: width,
    margin: margin,
    padding: padding,
    borderCollapse: 'collapse',
  };

  return <table style={style}>{children}</table>;
};

export default Table;