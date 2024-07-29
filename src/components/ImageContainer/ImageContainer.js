import React from "react";

const ImageContainer = ({
  imgLink = "",
  margin = "0px",
  borderRadius = "0px",
  imageWidth = "100%",
  imageHeight = "100%",
  alt = "books-fin",
}) => {
  const style = {
    margin,
    borderRadius,
    width: imageWidth,
    height: imageHeight,
  };
  return <img src={imgLink} alt={alt} style={style} />;
};

export default ImageContainer;
