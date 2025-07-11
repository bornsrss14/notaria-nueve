import React from "react";
import { IconArrowNarrowDown } from "@tabler/icons-react";
import BlurImage from "./BlurImage";
import ImageFitRectangle from "../Core/ImageFitRectangle";

export const HeroSection = () => {
  return (
    <>
      <section className="hero">
        <video className="hero__video" autoPlay loop muted playsInline>
          <source
            src="https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2FnotariaCordoba.mp4?alt=media&token=3e21cd38-1c8c-4030-bd01-60c737549ca1"
            type="video/mp4"
          />
          Tu navegador no soporta el video.
        </video>
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <h1>Bienvenida a la Notaría</h1>
          <p>Tu confianza, nuestro compromiso</p>
        </div>
        {/* <img
          src=""
          alt="banner"
        ></img> */}
        {/* <ImageFitRectangle
          src={
            "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Fbanner.jpg?alt=media&token=e3f3d112-e843-47d6-903f-afe683c8612a"
          }
          width={"100%"}
          height={"100%"}
        /> */}

        {/*  <BlurImage
          lowRes="https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Flow-res-blur.jpg?alt=media&token=c84fb025-091e-4a38-8959-18a1741190e1"
          highRes={
            "https://firebasestorage.googleapis.com/v0/b/bornsrss-8ab5d.appspot.com/o/notary-nine%2Fbanner.jpg?alt=media&token=e3f3d112-e843-47d6-903f-afe683c8612a"
          }
          alt={"notaria-9"}
          height="100%"
          width="100%"
          loading="lazy"
        /> */}
        {/* <div className="hero-content">
          <h1>Notaría Pública No. 9</h1>
          <p>Servicios notariales con integridad y compromiso.</p>
          <a href="#nuestros-servicios" className="hero-button">
            Conócenos
            <IconArrowNarrowDown stroke={1} />
          </a>
        </div> */}
      </section>
    </>
  );
};

export default HeroSection;
