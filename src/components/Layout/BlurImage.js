import React, { useState } from "react";

export const BlurImage = ({ lowRes, highRes, alt, width, height }) => {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };
  return (
    <div style={{ width, height, position: "relative" }}>
      <img
        src={lowRes}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          filter: "blur(10px)",
          transition: "filter 0.3s ease, opacity 0.3s ease",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <img
        src={highRes}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.3s ease",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default BlurImage;
