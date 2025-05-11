import React from "react";
import { IconArrowNarrowDown } from "@tabler/icons-react";

export const HeroSection = () => {
  return (
    <>
      <section className="hero">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Fbanner.jpg?alt=media&token=e3f3d112-e843-47d6-903f-afe683c8612a"
          alt="banner"
        ></img>
        <div className="hero-content">
          <h1>Notaría Pública No. 9</h1>
          <p>Servicios notariales con integridad y compromiso.</p>
          <a href="#nuestros-servicios" className="hero-button">
            Conocenos
            <IconArrowNarrowDown stroke={1} />
          </a>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
