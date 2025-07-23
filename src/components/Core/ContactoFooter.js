import React from "react";
import BtnContacto from "./BtnContacto";
import { Link } from "react-router-dom";

export const ContactoFooter = () => {
  return (
    <section className="section-contacto-footer">
      <div className="max-width-large">
        <div className="margin-bottom margin-xsmall">
          <h2 className="heading-style-h2">Estamos listos para atenderte.</h2>
        </div>
        <p className="text-size-medium">
          Llámanos, envíanos un correo o completa el formulario con tus datos,
          nos pondremos en contacto contigo lo más pronto posible.
        </p>
      </div>
      <div>
        <Link to="/formulario-contacto">
          <BtnContacto />
        </Link>
      </div>
    </section>
  );
};
