import React from 'react';

const TextTypo = ({ text, fontSize = '16px', fontWeight = 'normal', textAlign = 'left' }) => {
  const style = {
    fontSize: fontSize,
    fontWeight: fontWeight,
    textAlign: textAlign,
  };

  return (
    <div>
      <h1 style={style}>{text}</h1>
    </div>
  );
};

export default TextTypo;
