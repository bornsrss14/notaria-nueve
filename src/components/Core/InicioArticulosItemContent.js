import React from "react";
import ReadMore from "./ReadMore";

export const InicioArticulosItemContent = () => {
  return (
    <>
      <div className="inicio_articulos_item">
        <h3 className="heading-style-title">
          {" "}
          ¿Cuál es la función de un notario?
        </h3>
        <div className="text-style-item">
          <p>
            Es común ir por la calle y observar anuncios que citan: “Notario
            Público No. ###” Todos sabemos que fungen como funcionarios públicos
            pero, ¿sabemos lo que realmente hacen por nosotros?
          </p>
        </div>
        <div>
          <ReadMore />
        </div>
      </div>
    </>
  );
};

export default InicioArticulosItemContent;
