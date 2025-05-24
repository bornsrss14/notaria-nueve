import React from "react";
import MainArticle from "./MainArticle";
import InicioArticulosItemContent from "./InicioArticulosItemContent";
import BtnContacto from "./BtnContacto";
import { ContactoFooter } from "./ContactoFooter";

export const RelatedArticleCom = () => {
  return (
    <div>
      <div className="articulos">
        <div className="heading-style-h1">
          <h1>Artículos notariales</h1>
        </div>
        <div className="paragraph-article">
          <p>
            Explora nuestros artículos para conocer más sobre la función del
            notariado y su papel fundamental en la seguridad jurídica.
          </p>
        </div>
      </div>
      <div>
        <MainArticle />
      </div>
      <div id="inicio_articulos_item-content">
        {/* todos los articulos inicio_articulos_item-content */}
        <InicioArticulosItemContent />
        <InicioArticulosItemContent />
        <InicioArticulosItemContent />
        <InicioArticulosItemContent />
        <InicioArticulosItemContent />
        <InicioArticulosItemContent />
      </div>
      <ContactoFooter />
    </div>
  );
};
export default RelatedArticleCom;
