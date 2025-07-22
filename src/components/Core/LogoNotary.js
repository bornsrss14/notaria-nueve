import React from "react";
import ImageFitRectangle from "./ImageFitRectangle";
import { Link } from "react-router-dom";

export const LogoNotary = ({ colorLogoFuente }) => {
  return (
    <Link to="/" className="logo-wrapper">
      <ImageFitRectangle
        title={"logo-notaria-9"}
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2zCu2kiZGUZaj7TJAax178d5E8fKJS5zw2A&s"
        }
        width={"3rem"}
        height={"3rem"}
      />
      <div className="logo-letters">
        <p style={{ color: colorLogoFuente }} id="not-nueve">
          Notaría Pública 9
        </p>
        <p style={{ color: colorLogoFuente }} id="lic-lilia">
          LIC. LILIA REYES GOMEZ
        </p>
      </div>
    </Link>
  );
};

export default LogoNotary;
