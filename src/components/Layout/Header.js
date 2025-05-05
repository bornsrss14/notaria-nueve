import React from "react";
import LogoNotariaNueve from "../Core/LogoNotariaNueve";
export const Header = () => {
  return (
    <div>
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
              <a href="#secc1">Servicios</a>
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
    </div>
  );
};

export default Header;
