import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IconChevronCompactUp } from "@tabler/icons-react";
import ImageFitRectangle from "../Core/ImageFitRectangle";

export const Footer = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  function nowDate() {
    const now = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    return `Última actualización ${now.toLocaleDateString("es-ES", options)}`;
  }

  return (
    <div>
      <div onClick={scrollToTop} className="to-top-btn float-up-down">
        <a href="#">
          <IconChevronCompactUp size={36} color="blue" />
        </a>
      </div>
      <div className="grid-footer-four-sections">
        <div className="colegio-notarios-wrapper">
          <div className="">
            <h1>N9 LRG</h1>
            <a
              title="enlaces externos"
              href="https://notariosveracruz.mx/directorio/"
              target="_blank"
              rel="noreferrer"
            >
              <ImageFitRectangle
                src={
                  "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Fcolegio.png?alt=media&token=dbb04603-7975-41e8-8f96-3e56845e242e"
                }
                width={"7rem"}
                height={"3rem"}
              />
            </a>
          </div>
          <div className="">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.veracruz.gob.mx/gaceta-oficial/"
            >
              <ImageFitRectangle
                src={
                  "https://www.veracruz.gob.mx/wp-content/themes/veracruz2022/images/footerEcudoVeracruz.png"
                }
                width={"3rem"}
                height={"auto"}
                title="Gaceta ofical"
              />
            </a>
          </div>
        </div>

        <div className="menu-wrapper">
          <div>
            <ul className="display-lista-footer">
              <li id="bold-title-footer">Menú</li>
              <li>Servicios</li>
              <li>Nosotros</li>
              <li>Notario</li>
              <li>Artículos</li>
              <li>FAQs</li>
              <li>Contacto</li>
            </ul>
          </div>
        </div>
        <div className="location-wrapper">
          <div
            style={{ display: "flex", flexDirection: "column", gap: ".3rem" }}
          >
            <p id="bold-title-footer">Oficinas</p>
            <p className="light-text">
              CALLE 20 ENTRE AVENIDAS 13 y 15 #1303, Federal, 94570 Córdoba,
              Veracruz de Ignacio de la Llave.
            </p>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: ".3rem" }}
          >
            <p id="bold-title-footer">Horario de Atención</p>
            <p className="light-text">
              Lunes a viernes: 08:00 – 18:00 Sábado: 09:00 – 13:00
            </p>
          </div>
        </div>
        <div className="contact-info-wrapper">
          <div>
            <p id="bold-title-footer">Teléfono</p>
            <p className="light-text">271 717 9911</p>
          </div>

          <div>
            <p id="bold-title-footer">Email</p>
            <p className="light-text"> notaria9_corvera@yahoo.com.mx</p>
          </div>
        </div>
      </div>
      <div className="footer-main">
        <div>
          <p>{nowDate()}</p>
        </div>
        <div className="foot-second">
          <Link to="/aviso-de-privacidad">Aviso de Privacidad</Link> |
          <a href="/terminos-y-condiciones.html">FAQs</a>|
          <Link to="nuestra-historia">Historia</Link>|
          <Link to="directorio">Directorio</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
