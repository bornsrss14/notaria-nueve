import React from "react";

export const ImageFitRectangle = ({ src, width, height }) => {
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };
  const containerStyle = {
    width,
    height,
    margin: "1rem 1rem",
    overflow: "hidden",
  };
  return (
    <div style={containerStyle}>
      <img style={imageStyle} src={src} alt="dos" />
    </div>
  );
};

export default ImageFitRectangle;
