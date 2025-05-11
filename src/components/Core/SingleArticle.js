import React from "react";
import { LogoNotariaNueve } from "./LogoNotariaNueve";
import ReadMore from "../Core/ReadMore";
export const SingleArticle = ({ articleObject }) => {
  return (
    <>
      <article id="article-wrapper">
        <div
          className="mainTitle"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
          }}
        >
          <h3 className="numeral">{articleObject.counter}</h3>
          <h3>{articleObject.titleArticle}</h3>
        </div>
        <p className="subheading">{articleObject.subTitleArticle}</p>
        <div className="cont-img-article  ">
          <img
            className=""
            src={articleObject.imgArticle}
            alt={articleObject.altArticle}
            loading="lazy"
          ></img>
        </div>
        <p>{articleObject.briefDescription}</p>
        <ReadMore />
      </article>
    </>
  );
};

export default SingleArticle;
