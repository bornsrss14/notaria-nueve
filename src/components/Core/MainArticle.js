import React from "react";
import { ReadMore } from "./ReadMore";
import { Link } from "react-router-dom";
import ImageFitRectangle from "./ImageFitRectangle";
import { bannerArticles } from "../hooks/bannerArticles";
export const MainArticle = () => {
  return (
    <Link to={`/detalle-articulo/${bannerArticles[0].id}`}>
      <div className="background-articles">
        <div id="grid-main-article">
          <div className="wrapper-mark-up">
            <div className="mark-up-new">
              <p className="">Nuevo</p>
            </div>
            <div>
              <h2>{bannerArticles[0].titleArticle}</h2>
              <div>
                <p>{bannerArticles[0].content}</p>
              </div>
            </div>

            <ReadMore />
          </div>
          <div className="banner-img-article">
            <ImageFitRectangle
              width="clamp(100%, 10vw, 720px)"
              height="clamp(150px, 25vw, 300px)"
              src={bannerArticles[0].bannerImage}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MainArticle;
