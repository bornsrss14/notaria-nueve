import React, { useEffect, useRef, useState } from "react";
import { SingleArticle } from "../Core/SingleArticle";
import { IconLicense, IconGavel } from "@tabler/icons-react";
import { allMainArticles } from "../hooks/allMainArticles";
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
      <div className="articulos-notariales">
        <h3 className="heading-style-h3 ">Articulos notariales</h3>
        <p>mantente al día con nuestros articulos sobre el sector notarial</p>
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
                <h4 className="heading-style-h5-white">Quienes somos</h4>
              </div>
              <p>
                Nos comprometemos a ofrecer asesoría legal clara y profesional,
                asegurando la formalización de tus actos jurídicos con confianza
                y seguridad. Contamos con un equipo altamente capacitado y años
                de experiencia para brindarte el apoyo que necesitas.
              </p>
              <p>CONOCENOS</p>
            </div>
          </div>
          {allMainArticles.slice(0, 3).map((article, index) => (
            <SingleArticle
              counter={index}
              key={index}
              articleObject={article}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
