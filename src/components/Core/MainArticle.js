import React from "react";
import { ReadMore } from "./ReadMore";

import ImageFitRectangle from "./ImageFitRectangle";
import InicioArticulosItemContent from "./InicioArticulosItemContent";
import BtnContacto from "./BtnContacto";

export const MainArticle = () => {
  return (
    <div className="background-articles">
      <div id="grid-main-article">
        <div className="wrapper-mark-up">
          <div className="mark-up-new">
            <p className="">Nuevo</p>
          </div>
          <div>
            <h2>
              ¿Quién cuidará de ellos si tú no estás? Tutela Testamentaria
            </h2>
            <div>
              <p>
                Nuestros hijos son lo más valioso que tenemos y si eres mamá
                seguramente te has preguntado, al menos una vez en tu vida, qué
                pasaría con ellos en caso de que ambos padres faltaran. El
                Código Civil Federal establece, en su Capítulo II (artículos
                470-481), la posibilidad de nombrar un Tutor Testamentario, es
                decir, elegir a la persona que cuidaría de ellos en caso de ser
                necesario.
              </p>
            </div>
          </div>

          <ReadMore />
        </div>
        <div className="banner-img-article">
          <ImageFitRectangle
            width="clamp(100%, 10vw, 720px)"
            height="clamp(150px, 25vw, 300px)"
            src={
              "https://cdn.prod.website-files.com/6747ae021bab1a092e992b6c/6747dc6c4287b656e5dbaa46_2200x900-1799x899.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MainArticle;
