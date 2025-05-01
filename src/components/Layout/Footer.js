import React, { Component } from "react";

export const Footer = () => {
  function nowDate() {
    const now = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    return `Última actualización ${now.toLocaleDateString("es-ES", options)}`;
  }
  return (
    <div className="footer-main">
      <div>
        <p>{nowDate()}</p>
      </div>
      <div className="foot-second">
        <a href="/aviso-de-privacidad.html">Aviso de privacidad </a>|
        <a href="/terminos-y-condiciones.html">FAQs</a>|
        <a href="/terminos-y-condiciones.html">Historia</a>
      </div>
    </div>
  );
};

export default Footer;
