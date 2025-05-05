import React from "react";

export const HeroSection = () => {
  return (
    <>
      <section className="hero">
        <img
          src="http://localhost:3000/static/media/banner.fccf70b8bf5e8e7456d0.jpg"
          alt="banner"
        ></img>
        <div className="hero-content">
          <h1>Notaría Pública No. 9</h1>
          <p>Servicios notariales con integridad y compromiso.</p>
          <a href="#contacto" className="hero-button">
            Agenda tu cita
          </a>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
