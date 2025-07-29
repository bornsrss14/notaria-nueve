import React from "react";
import { ContactoFooter } from "../Core/ContactoFooter";
import ReadMore from "../Core/ReadMore";
import FAQComp from "../Layout/FAQ";
import objetoContenido from "../hooks/servicios.json";
import { Link } from "react-router-dom";
export const NuestrosServicios = () => {
  return (
    <div style={{ background: "#0f0377" }}>
      <div style={{ padding: "0rem 0rem 2rem 0rem" }}>
        <div className="articulos">
          <div className="">
            <h1 className="heading-style-h1">Servicios</h1>
          </div>
          <div className="paragraph-article">
            <p>
              Ofrecemos un conjunto integral de servicios notariales adaptados a
              tus necesidades, con profesionalismo y eficiencia.
            </p>
          </div>
        </div>
        <div
          style={{ background: "white", padding: "0 0 4rem" }}
          className="container-main-services"
        >
          {objetoContenido.map((serv) => {
            return (
              <div className="special-section">
                <h3 className="heading-style-h4">{serv.titulo}</h3>
                <p className="text-style-item-5lines">{serv.resumen}</p>
                <Link to={"todos-servicios"}>
                  <ReadMore />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <section>
        <FAQComp paramColor={"#0f0377"} />
      </section>
      <section>
        <ContactoFooter />
      </section>
    </div>
  );
};

export default NuestrosServicios;
