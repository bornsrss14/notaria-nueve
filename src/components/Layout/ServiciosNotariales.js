import React from "react";
import objetoContenido from "../hooks/servicios.json";
import ImageFitRectangle from "../Core/ImageFitRectangle";
import { ContactoFooter } from "../Core/ContactoFooter";
import { useParams } from "react-router-dom";

export const ServiciosNotariales = ({ pestaña = "Servicios" }) => {
  const { id } = useParams();

  const servicio = objetoContenido.find((s) => s.id === id);
  if (!servicio) return <p>service not available </p>;
  return (
    <div>
      <div className="container-img-bannerDescription">
        <ImageFitRectangle
          src={servicio.imagen}
          height={"25rem"}
          width={"100%"}
        />
        <div className="padding-global">
          <div className="inicio-servicios-servicio">
            <span className="text-size-medium">
              Inicio <span>&gt;</span> {pestaña}
            </span>
            <h1 className="servicio-secciones-serv heading-style-h1">
              {servicio.titulo}
            </h1>
          </div>
          <div>
            <p className=" text-size-medium">{servicio.resumen}</p>
          </div>
        </div>
      </div>
      <div className="padding-section-large"></div>
      <section>
        <div id="section_servicios_layout">
          {servicio.secciones.map((seccion, i) => (
            <div key={i} className="itemsListado">
              <div>
                <h3 className="heading-style-h5">{seccion.titulo}</h3>
              </div>
              <p className="text-color-secondary">{seccion.contenido}</p>
            </div>
          ))}
        </div>
      </section>
      <ContactoFooter />
    </div>
  );
};

export default ServiciosNotariales;
