import React, { useEffect, useRef, useState } from "react";
import { SingleArticle } from "../Core/SingleArticle";
import { IconLicense, IconGavel } from "@tabler/icons-react";
import { allMainArticles } from "../hooks/allMainArticles";
export const QuienesSomos = () => {
  const relatedArticles = [
    {
      titleArticle: "¿Qué es un testamento?",
      subTitleArticle: " ¿Por qué hacer un testamento?",
      imgArticle:
        "https://cdn2.mediotiempo.com/uploads/media/2020/09/08/testamento-instrumento-legal-otorgado-notario.jpg",
      briefDescription:
        "Un testamento es un documento legal donde una persona, en pleno uso de sus facultades, dispone el destino de sus bienes y derechos tras su fallecimiento.",
      altArticle: "testamento",
      linkMainArticle: "#",
    },
    {
      titleArticle: "Donar en vida o heredar",
      subTitleArticle: " Pequeño titulo de dos",
      imgArticle:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD7fS7SaYJeR7lufGKmnn0JopYWdSinKg_LDg7mwDJg4q9Ok1fKxJlGN_vWEOLQP6S59g&usqp=CAU",
      briefDescription:
        "Conoce las opciones para asegurar el bienestar de tus seres queridos, eligiendo entre donar en vida o heredar después.",
      altArticle: "Herencias y Donaciones",
    },
    {
      titleArticle: "Protege tu patrimonio",
      subTitleArticle: " Pequeño titulo de uno",
      imgArticle:
        "https://media.informabtl.com/wp-content/uploads/2020/12/1cb2927b-bigstock-the-gray-roof-house-is-placed-350287879.jpg",
      briefDescription:
        "Conoce por qué escriturar una propiedad es fundamental para garantizar tu seguridad legal y evitar problemas futuros.",
      altArticle: "Escrituración de inmuebles",
    },
  ];
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
        <h2>Articulos notariales</h2>
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
                <h3>Quienes somos</h3>
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
