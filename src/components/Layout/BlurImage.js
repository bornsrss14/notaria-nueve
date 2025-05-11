import React, { useState } from "react";

export const BlurImage = ({ lowRes, highRes, alt, width, height }) => {
  const [loaded, setLoaded] = useState(false);
  const highResStyle = {
    opacity: loaded ? 1 : 0,
  };
  const handleImageLoad = () => {
    setLoaded(true);
  };
  return (
    <div>
      <img src={lowRes} alt="alt" className="lowResImg" />
      <img
        style={highResStyle}
        src={lowRes}
        onLoad={handleImageLoad}
        alt="alt"
        className="highResImg"
      />
    </div>
  );
};

export default BlurImage;
