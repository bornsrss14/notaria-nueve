import React from "react";
import MainArticle from "./MainArticle";
import InicioArticulosItemContent from "./InicioArticulosItemContent";
import BtnContacto from "./BtnContacto";

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
      <section className="section-contacto-footer">
        <div class="max-width-large">
          <div class="margin-bottom margin-xsmall">
            <h2 class="heading-style-h2">Estamos listos para atenderte.</h2>
          </div>
          <p class="text-size-medium">
            Llámanos, envíanos un correo o completa el formulario con tus datos,
            nos pondremos en contacto contigo lo más pronto posible.
          </p>
        </div>
        <div>
          <BtnContacto />
        </div>
      </section>
    </div>
  );
};
export default RelatedArticleCom;
