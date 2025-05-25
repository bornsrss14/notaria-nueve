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
      <ImageFitRectangle
        src={servicio.imagen}
        height={"25rem"}
        width={"100%"}
      />
      <div className="padding-global">
        <div>
          <span className="text-size-medium">
            Inicio <span>&gt;</span> {pestaña}
          </span>
          <h1 className="heading-style-h1">{servicio.titulo}</h1>
        </div>
        <div>
          <p className="text-size-medium">{servicio.resumen}</p>
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
        {/* <div id="section_servicios_layout">
          <div className="itemsListado">
            <div>
              <h3 className="heading-style-h5">Adjudicaciones por herencia</h3>
            </div>
            <p className="text-color-secondary">
              Proceso mediante el cual se transfiere la propiedad de bienes
              inmuebles a los herederos conforme a las disposiciones
              testamentarias.
            </p>
          </div>
          <div className="itemsListado">
            <div>
              <h3 className="heading-style-h5">
                Adjudicaciones por remate judicial
              </h3>
            </div>
            <p className="text-color-secondary">
              Transferencia de propiedad de bienes inmuebles a un comprador tras
              un procedimiento judicial de remate
            </p>
          </div>
          <div className="itemsListado">
            <div>
              <h3 class="heading-style-h5">Asociación en participación</h3>
            </div>
            <p className="text-color-secondary">
              Contrato en el que una persona física o moral, aporta bienes
              inmuebles a una sociedad para realizar un desarrollo inmobiliario,
              estableciendo derechos y obligaciones entre las partes.
            </p>
          </div>
          <div className="itemsListado">
            <div>
              <h3 className="heading-style-h5">
                Constitución de régimen de propiedad en condominio
              </h3>
            </div>
            <p className="text-color-secondary">
              Establecimiento de un régimen jurídico que regula la propiedad y
              el uso de unidades privativas en un edificio o conjunto, así como
              las áreas comunes.
            </p>
          </div>
          <div className="itemsListado">
            <div>
              <h3 className="heading-style-h5">Dación en pago</h3>
            </div>
            <p className="text-color-secondary">
              Proceso en el que un deudor entrega un bien inmueble como forma de
              pago de una deuda, liquidando así la obligación original.
            </p>
          </div>
          <div className="itemsListado">
            <div>
              <h3 className="heading-style-h5">Fusión de predios</h3>
            </div>
            <p className="text-color-secondary">
              Unificación de dos o más propiedades en una sola, lo que implica
              un cambio en el registro de la propiedad y la delimitación de la
              nueva unidad.
            </p>
          </div>
          <div className="itemsListado">
            <div>
              <h3 className="heading-style-h5">Subdivisión de predios</h3>
            </div>
            <p className="text-color-secondary">
              Proceso de dividir un terreno en dos o más permitiendo la venta o
              desarrollo de cada una de ellas de manera individual. .
            </p>
          </div>
        </div> */}
      </section>
      <ContactoFooter />
    </div>
  );
};

export default ServiciosNotariales;
