import React from "react";
import ReadMore from "./ReadMore";

export const InicioArticulosItemContent = ({
  item,
  contentItem,
  titleIteme,
}) => {
  return (
    <>
      <div className="inicio_articulos_item caja">
        <h3 className="heading-style-h5">{titleIteme}</h3>
        <div className="text-style-item">
          <p>{contentItem}</p>
        </div>
        <div>
          <ReadMore />
        </div>
      </div>
    </>
  );
};

export default InicioArticulosItemContent;
