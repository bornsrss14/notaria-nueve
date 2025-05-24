import React from "react";
import BtnContacto from "./BtnContacto";

export const ContactoFooter = () => {
  return (
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
  );
};
