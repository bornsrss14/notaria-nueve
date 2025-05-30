import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import React, { useRef, useState } from "react";
import LogoNotariaNueve from "../Core/LogoNotariaNueve";
import { Link } from "react-router-dom";
import ImageFitRectangle from "../Core/ImageFitRectangle";
import { IconMenu2, IconX } from "@tabler/icons-react";

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
        <Link to="/" className="logo-wrapper">
          <ImageFitRectangle
            title={"logo-notaria-9"}
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2zCu2kiZGUZaj7TJAax178d5E8fKJS5zw2A&s"
            }
            width={"3rem"}
            height={"3rem"}
          />
          <div className="logo-letters">
            <p id="not-nueve">Notaría Pública 9</p>
            <p id="lic-lilia">LIC. LILIA REYES GOMEZ</p>
          </div>
        </Link>
        {/* Necesito una función manejadora del handlerChangeIconHamburger */}
        <button onClick={handlerChangeIconHamburger} className="hamburger">
          {toggleHamburger ? <IconMenu2 /> : <IconX />}
        </button>
        <nav className={`nav ${toggleHamburger ? "" : "open"}`}>
          <ul className="nav-list">
            <li>
              <div style={{ display: "flex", gap: ".5rem" }}>
                <a href="#secc1">Servicios</a>
                <div>
                  <IconChevronDown stroke={1} color="blue" size={24} />
                </div>
              </div>
              <ul className="submenu">
                <li>
                  <Link to="servicios/desarrollo-inmobiliario">
                    Desarrollo Inmobiliario
                  </Link>
                </li>
                <li>
                  <Link to="servicios/sociedades-y-poderes">
                    Sociedades y poderes
                  </Link>
                </li>
                <li>
                  <Link to="servicios/vivienda">Vivienda</Link>
                </li>
                <li>
                  <Link to="servicios/nuestros-servicios">Otros servicios</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/sobre-nosotros">Nosotros</Link>
            </li>
            <li>
              <Link to="/directorio">Directorio</Link>
            </li>
            <li>
              <a href="#secc4">FAQ</a>
            </li>
            <li>
              <Link to="/articulos-notariales"> Articulos</Link>
            </li>
          </ul>
          <button className="contact-button">Contacto</button>
        </nav>
      </header>
    </>
  );
};

export default HeaderComponent;
