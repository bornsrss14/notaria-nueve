import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import React, { useRef, useState } from "react";
import LogoNotariaNueve from "../Core/LogoNotariaNueve";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo-wrapper">
          <LogoNotariaNueve />
          <div className="logo-letters">
            <p id="not-nueve">Notaría Pública 9</p>
            <p id="lic-lilia">LIC. LILIA REYES GOMEZ</p>
          </div>
        </div>
        <nav className="nav">
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
                  <a href="#secc2">Desarrollo Inmobiliario</a>
                </li>
                <li>
                  <a href="#se">Sociedades y poderes</a>
                </li>
                <li>
                  <a href="#er">Vivienda</a>
                </li>
                <li>
                  <a href="#45">Otros servicios</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#secc2">Nosotros</a>
            </li>
            <li>
              <a href="#secc3">Directorio</a>
            </li>
            <li>
              <a href="#secc4">FAQ</a>
            </li>
            <li>
              <a href="#secc5">Articulos</a>
            </li>
          </ul>
          <button className="contact-button">Contacto</button>
        </nav>
      </header>
    </>
  );
};

export default Header;
