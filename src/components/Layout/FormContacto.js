import React, { useState } from "react";
import { IconPhone, IconMail, IconMapPin } from "@tabler/icons-react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "@formspree/react";
import { Link } from "react-router-dom";

export const FormContacto = () => {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [aviso, setAviso] = useState(false);
  const [state, handleSubmit] = useForm("mkgzjrpr");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  const handleToggle = () => {
    setAviso((prev) => !prev);
  };

  const actosjuridicos = [
    "Poder notarial",
    "Testamento",
    "Compra-venta",
    "Créditos INFONAVIT/FOVISSTE",
    "Sociedades",
    "Otro...",
  ];
  return (
    <div className="section-form">
      <div className="main-contact-form ">
        <section className="section-tres-contactos">
          <p>¿Buscas más información?</p>
          <h1>Contáctanos</h1>
          <p>Envía el formulario con tus datos o contáctanos directamente</p>

          <div>
            <div className="item-contacto">
              <div className="hours-main-wrapper">
                <IconPhone />
                <p>+52 (271) 717 9911</p>
              </div>
            </div>
            <div className="item-contacto">
              <div className="hours-main-wrapper">
                <IconMail />
                <p>notaria9_corvera@yahoo.com.mx</p>
              </div>
            </div>
            <div className="item-contacto">
              <div className="hours-main-wrapper">
                <IconMapPin />
                <p>
                  CALLE 20 ENTRE AVENIDAS 13 y 15 #1303, Federal, 94570 Córdoba,
                  Ver.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <form
            className="form-contacto"
            onSubmit={(e) => {
              if (!captchaValue) {
                e.preventDefault();
                alert("Please, verfy the reCAPTCHA");
                return;
              }
              handleSubmit(e);
            }}
          >
            <fieldset id="contact-fieldset">
              <legend className="contact-legend">Información personal</legend>
              <label className="contact-label">Nombre:</label>
              <input
                name="user_name"
                placeholder="Ej. Anna Oh."
                type="text"
                id="name"
                required
              ></input>
              <label>Apellidos:</label>
              <input
                name="user_secondName"
                placeholder="Ej. Escobar."
                type="text"
                id="name"
                required
              ></input>
            </fieldset>
            <fieldset id="contact-fieldset">
              <legend className="contact-legend">Contacto</legend>

              <label> e-mail</label>
              <input
                name="user_email"
                type="email"
                placeholder="Ej. tuemail@icloud.com"
                required
              ></input>
            </fieldset>
            <fieldset id="contact-fieldset">
              <legend className="contact-legend"> Asunto / Trámite</legend>
              <label>Acto jurídico de Interés</label>
              <select name="user_actojuridico" required>
                {actosjuridicos.map((itemActo) => {
                  return <option> {itemActo} </option>;
                })}
              </select>
              <label for="msg">Mensaje:</label>
              <textarea
                className="contact-textarea"
                placeholder="Introduzca un breve mensaje para comunicarnos con usted"
                id="msg"
                name="user_message"
              ></textarea>
            </fieldset>

            <div className="div-captcha-btn-env">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <input
                  onChange={handleToggle}
                  name="user-check"
                  type="checkbox"
                  required
                />
                <label>
                  He leído y acepto el{" "}
                  <span>
                    <Link to="/aviso-de-privacidad">aviso de privacidad </Link>
                  </span>
                </label>
              </div>
              {aviso && (
                <div>
                  <ReCAPTCHA
                    sitekey={process.env.REACT_APP_SITE_KEY}
                    onChange={(value) => setCaptchaValue(value)}
                  />
                </div>
              )}

              <button
                type="submit"
                className="contact-button"
                disabled={state.submitting}
              >
                {state.submitting ? "Enviando..." : "Enviar"}
              </button>

              {state.succeeded && (
                <p style={{ color: "green" }}>
                  ¡Gracias! Hemos recibido tu mensaje.
                </p>
              )}
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default FormContacto;
// Make sure to run npm install @formspree/react
