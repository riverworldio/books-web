import React from 'react';

const BorderStyled = ({ borderColor = 'black', margin = '0px', borderStyle = 'dashed' ,borderWidth = "100%"}) => {
  const style = {
    border: 'none',
    borderTop: `2px ${borderStyle} ${borderColor}`,
    margin: margin,
    width:borderWidth,
  };

  return <hr style={style} />;
};

export default BorderStyled;
