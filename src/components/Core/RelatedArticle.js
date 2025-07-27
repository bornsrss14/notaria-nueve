import React, { useState } from "react";
import MainArticle from "./MainArticle";
import InicioArticulosItemContent from "./InicioArticulosItemContent";
import BtnContacto from "./BtnContacto";
import { allMainArticles } from "../hooks/allMainArticles";
import { Link } from "react-router-dom";
import { ContactoFooter } from "./ContactoFooter";
import CarouselArticles from "./CarouselArticles";
import { bannerArticles } from "../hooks/bannerArticles";

export const RelatedArticleCom = () => {
  const [allArticles, setAllArticles] = useState(allMainArticles);

  return (
    <div>
      <div className="articulos">
        <div className="">
          <h1 className="heading-style-h1">Artículos notariales</h1>
        </div>
        <div className="paragraph-article">
          <p>
            Explora nuestros artículos para conocer más sobre la función del
            notariado y su papel fundamental en la seguridad jurídica.
          </p>
        </div>
      </div>
      <div>
        <CarouselArticles />
      </div>
      <div id="inicio_articulos_item-content">
        {/* todos los articulos inicio_articulos_item-content */}
        {allArticles.map((itemArticle) => {
          return (
            <Link
              to={`/detalle-articulo/${itemArticle.id}`}
              key={itemArticle.id}
            >
              <InicioArticulosItemContent
                titleIteme={itemArticle.titleArticle}
                contentItem={itemArticle.content}
              />
            </Link>
          );
        })}
      </div>
      <ContactoFooter />
    </div>
  );
};
export default RelatedArticleCom;
