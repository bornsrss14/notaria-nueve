import React from "react";
import { Link } from "react-router-dom";

export const FormContacto = () => {
  function onClick() {
    console.log("Esto envía el formulario");
  }

  const actosjuridicos = [
    "Poder notarial",
    "Testamento",
    "Compra-venta",
    "Créditos INFONAVIT/FOVISSTE",
    "Sociedades",
    "Otro...",
  ];
  return (
    <div>
      <div className="main-contact-form">
        <section>
          <h1>Formulario</h1>
        </section>
        <section>
          <form onClick={onClick}>
            <fieldset>
              <legend>Información personal</legend>
              <label>Nombre:</label>
              <input placeholder="Ej. Anna Oh." type="text" id="name"></input>
              <label>Apellidos:</label>
              <input placeholder="Ej. Escobar." type="text" id="name"></input>
            </fieldset>
            <fieldset>
              <legend>Contacto</legend>

              <label> e-mail</label>
              <input type="email" placeholder="Ej. tuemail@icloud.com"></input>
              <label>Telefono:</label>
              <input></input>
            </fieldset>
            <fieldset>
              <legend> Asunto / Trámite</legend>
              <label>Acto jurídico de Interés</label>
              <select>
                {actosjuridicos.map((itemActo) => {
                  return <option> {itemActo} </option>;
                })}
              </select>
              <label for="msg">Mensaje:</label>
              <textarea
                placeholder="Introduzca un breve mensaje para comunicarnos con usted"
                id="msg"
                name="user_message"
              ></textarea>
            </fieldset>
            <fieldset>
              <legend> Ubicación</legend>
              <label>¿Reside en Córdoba, Ver?</label>
              <div>
                <input type="checkbox" id="local" name="local" value="local" />
                <label for="local"> Sí</label>
                <input
                  type="checkbox"
                  id="foraneo"
                  name="foraneo"
                  value="foraneo"
                />
                <label for="foraneo"> No, soy foraneo</label>
              </div>
            </fieldset>
            <div>
              <label>
                He leído y acepto el{" "}
                <span>
                  <Link to="/aviso-de-privacidad">aviso de privacidad </Link>
                </span>
              </label>
              <input type="checkbox" />
              <div>
                <div>
                  {" "}
                  <h3>Captcha</h3>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default FormContacto;
