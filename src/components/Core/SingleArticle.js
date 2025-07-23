import React from "react";
import { LogoNotariaNueve } from "./LogoNotariaNueve";
import ReadMore from "../Core/ReadMore";
import BlurImage from "../Layout/BlurImage";
export const SingleArticle = ({ articleObject }) => {
  const styleP = {
    marginTop: "19px",
  };
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
          {/* <img
            className=""
            src={articleObject.imgArticle}
            alt={articleObject.altArticle}
            loading="lazy"
          ></img> */}

          <BlurImage
            lowRes="https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Flow-res-blur.jpg?alt=media&token=c84fb025-091e-4a38-8959-18a1741190e1"
            highRes={articleObject.bannerArticle}
            alt={articleObject.bannerArticle}
            height="100%"
            width="100%"
            loading="lazy"
          />
        </div>

        <p style={styleP}>{articleObject.content}</p>
        <div className="stick-bottom ">
          <ReadMore />
        </div>
      </article>
    </>
  );
};

export default SingleArticle;
