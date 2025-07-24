import React from "react";
import MainArticle from "./MainArticle";
import { useParams } from "react-router-dom";

import { allMainArticles } from "../hooks/allMainArticles";
import { ContactoFooter } from "./ContactoFooter";
import { bannerArticles } from "../hooks/bannerArticles";
import DetailedObjectArticle from "./DetailedObjectArticle";
import InicioArticulosItemContent from "./InicioArticulosItemContent";
import MainSelectedArticleBanner from "./MainSelectedArticleBanner";

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
          <DetailedObjectArticle objectItem={article} />
        </section>
        <section className="articles-thumbnail">
          {allMainArticles.map((item) => {
            return (
              <InicioArticulosItemContent
                key={item.id}
                item={item}
                contentItem={item.content}
                titleIteme={item.titleArticle}
              />
            );
          })}
        </section>
      </div>
      <ContactoFooter />
    </div>
  );
};
export default DetailedArticle;
