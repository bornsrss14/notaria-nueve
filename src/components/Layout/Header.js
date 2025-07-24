import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconMenu2, IconX } from "@tabler/icons-react";
import LogoNotary from "../Core/LogoNotary";

export const HeaderComponent = () => {
  const [toggleHamburger, setToggleHamburguer] = useState(true);
  function handlerChangeIconHamburger() {
    console.log(
      "lo que uqiero hacer aqui es cambiar el estado de cerrado a abierto y vicebersa"
    );
    setToggleHamburguer(() => !toggleHamburger);
    console.log(toggleHamburger);
  }
  return (
    <>
      <header className="header">
        <LogoNotary />
        {/* Necesito una función manejadora del handlerChangeIconHamburger */}
        <button onClick={handlerChangeIconHamburger} className="hamburger">
          {toggleHamburger ? <IconMenu2 /> : <IconX />}
        </button>
        <nav className={`nav ${toggleHamburger ? "" : "open"}`}>
          <ul className="nav-list">
            <li onClick={handlerChangeIconHamburger}>
              <div
                style={{ display: "flex", gap: ".5rem", alignItems: "center" }}
              >
                <a className="font-navs" href="#secc1">
                  Servicios
                </a>
                <div>
                  <IconChevronDown stroke={1} color="blue" size={24} />
                </div>
              </div>
              <ul className="submenu">
                <li onClick={handlerChangeIconHamburger}>
                  <Link to="servicios/desarrollo-inmobiliario">
                    Desarrollo Inmobiliario
                  </Link>
                </li>
                <li onClick={handlerChangeIconHamburger}>
                  <Link to="servicios/sociedades-y-poderes">
                    Sociedades y poderes
                  </Link>
                </li>
                <li onClick={handlerChangeIconHamburger}>
                  <Link to="servicios/vivienda">Vivienda</Link>
                </li>
                <li onClick={handlerChangeIconHamburger}>
                  <Link to="servicios/nuestros-servicios">Otros servicios</Link>
                </li>
              </ul>
            </li>
            <li onClick={handlerChangeIconHamburger}>
              <Link className="font-navs" to="/sobre-nosotros">
                Nosotros
              </Link>
            </li>
            <li onClick={handlerChangeIconHamburger}>
              <a className="font-navs" href="/#horarios-servicio">
                Horarios
              </a>
            </li>
            <li onClick={handlerChangeIconHamburger}>
              <a className="font-navs" href="#secc4">
                FAQ
              </a>
            </li>
            <li onClick={handlerChangeIconHamburger}>
              <Link className="font-navs" to="/articulos-notariales">
                {" "}
                Articulos
              </Link>
            </li>
            <Link
              onClick={handlerChangeIconHamburger}
              to="/formulario-contacto"
            >
              <button className="contact-button">Contacto</button>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default HeaderComponent;
