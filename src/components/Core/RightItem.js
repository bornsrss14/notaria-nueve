import React from "react";
import ReadMore from "./ReadMore";
import { Link } from "react-router-dom";

export const RightItem = ({ key, contentItem, titleIteme }) => {
  return (
    <>
      <div className="inicio_articulos_item">
        <h3 className="heading-style-title">{titleIteme}</h3>
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

export default RightItem;
{
}
