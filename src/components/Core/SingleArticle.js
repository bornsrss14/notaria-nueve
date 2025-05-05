import React from "react";
import { LogoNotariaNueve } from "./LogoNotariaNueve";
import ReadMore from "../Core/ReadMore";
export const SingleArticle = () => {
  return (
    <>
      <div id="article-wrapper">
        <div
          className="mainTitle"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
          }}
        >
          <h3 className="numeral">01.</h3>
          <h3>Find a Lawyer</h3>
        </div>
        <p className="subheading"> Pequeño titulo abajo</p>
        <div className="cont-img-article  ">
          <img
            className=""
            src="https://www.excelsior.com.mx/800x600/filters:format(webp):quality(75)/media/pictures/2024/02/06/3071214.jpg"
            alt="testamento"
          ></img>
        </div>
        <p>
          Parrafo de relacionado con el artculo para que puedan seguir leyendo,
          por ejemplo, la importancia de el testamento
        </p>
        <ReadMore />
      </div>
    </>
  );
};

export default SingleArticle;
