import React from "react";
import MainArticle from "./MainArticle";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { allMainArticles } from "../hooks/allMainArticles";
import { ContactoFooter } from "./ContactoFooter";
import { bannerArticles } from "../hooks/bannerArticles";
import DetailedObjectArticle from "./DetailedObjectArticle";
import InicioArticulosItemContent from "./InicioArticulosItemContent";
import MainSelectedArticleBanner from "./MainSelectedArticleBanner";
import RightItem from "./RightItem";

export const DetailedArticle = () => {
  const { id } = useParams();
  const article =
    allMainArticles.find((item) => item.id === parseInt(id)) ||
    bannerArticles.find((item) => item.id === parseInt(id));
  if (!article) {
    return <p>Article not found!</p>;
  }
  return (
    <div>
      {/* <div className="articulos">
        <div className="heading-style-h1">
          <h1>{article.titleArticle}</h1>
        </div>
        <div className="paragraph-article">
          <p>{article.content}</p>
        </div>
      </div> */}
      <div>
        <MainSelectedArticleBanner articleSelectedDetail={article} />
      </div>
      <div className="container-detailed-article">
        <section>
          <div>ID del artículo: {id}</div>
          <DetailedObjectArticle objectItem={article} />
        </section>
        {/* Aquí se renderizan los articulos de la derecha en miniatura */}
        <section className="articles-thumbnail">
          {allMainArticles.map((item, index) => {
            return (
              <Link to={`/detalle-articulo/${1000 + index}`}>
                <RightItem
                  key={100 + index}
                  contentItem={item.content}
                  titleIteme={item.titleArticle}
                />
              </Link>
            );
          })}
        </section>
      </div>
      <ContactoFooter />
    </div>
  );
};
export default DetailedArticle;
