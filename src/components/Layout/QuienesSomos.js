import React, { useEffect, useRef, useState } from "react";
import { SingleArticle } from "../Core/SingleArticle";
import { IconLicense, IconGavel } from "@tabler/icons-react";

export const QuienesSomos = () => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      <h1>Artículos Notariales</h1>
      <p>
        Mantente al día con las últimas actualizaciones, mejores prácticas, y
        más.
      </p>
      <div className="we-are-section">
        <div className="article-quienes-somo">
          <div id="relleno">
            <IconGavel size={359} color="black" />
          </div>

          <div className="contenido">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
              }}
            >
              <IconLicense />
              <h3>Quienes somos</h3>
            </div>
            <p>
              Somos una notaría comprometida con brindar asesoría legal clara,
              profesional y cercana. Nuestro objetivo es ayudarte a formalizar
              tus actos jurídicos con confianza y seguridad. Contamos con años
              de experiencia y un equipo capacitado para apoyarte en todo
              momento.
            </p>
            <p>CONOCENOS</p>
          </div>
        </div>
        <SingleArticle />
        <SingleArticle /> <SingleArticle />
      </div>
    </div>
  );
};

export default QuienesSomos;
