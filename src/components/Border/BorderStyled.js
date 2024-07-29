import React from 'react';

const BorderStyled = ({ borderColor = 'black', margin = '0px', borderStyle = 'dashed' ,borderWidth = "100%", borderHeight = "2px"}) => {
  const style = {
    border: 'none',
    borderTop: `${borderHeight} ${borderStyle} ${borderColor}`,
    margin: margin,
    width:borderWidth,
  };

  return <hr style={style} />;
};

export default BorderStyled;
