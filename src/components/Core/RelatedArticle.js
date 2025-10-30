import { useState } from "react";
import InicioArticulosItemContent from "./InicioArticulosItemContent";
import { allMainArticles } from "../hooks/allMainArticles";
import { Link } from "react-router-dom";
import { ContactoFooter } from "./ContactoFooter";
export const RelatedArticleCom = () => {
  const [allArticles] = useState(allMainArticles);

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

      {/*   <div>
    cambia esto antes de tu commit
        <CarouselArticles />
      </div> */}
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
