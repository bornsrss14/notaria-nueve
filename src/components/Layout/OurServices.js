import React from "react";
import {
  IconArrowRight,
  IconUsers,
  IconHeartHandshake,
  IconHeart,
  IconShield,
  IconList,
  IconFile,
  IconClipboard,
  IconPencil,
} from "@tabler/icons-react";
import { Servicios } from "../Core/Servicios";

export const OurServices = () => {
  const ourServicesArr = [
    {
      icon: IconPencil,
      advice: "Donaciones",
      description: "hftiujkhuyt kldjfhkdsjf foiiodskhf sdoidsjfhk",
    },
    {
      icon: IconFile,
      advice: "Compraventas",
      description: "hftiujkhuy dlkfsdf dsldsnf fdofjsdf dfofdsj ",
    },
    {
      icon: IconClipboard,
      advice: "Poderes",
      description:
        "Proporcionan la redacción de mandatos legales que permiten a una persona representar en gestiones jurídicas, financieros o de negocios. Ya sea un mandato amplio o específico, garantizan su plena legalidad y adaptación a las necesidades del cliente.",
    },
    {
      icon: IconUsers,
      advice: "Testamentos",
      description:
        "Acompañan a sus clientes en la planificación sucesoria mediante documentos legales y ajustados a la legislación legal. Aseguran que los deseos del testador se respeten, agilizando los trámites de sucesión y reduciendo conflictos entre herederos. También gestionan sucesiones intestadas, asegurando una distribución justa.",
    },
    {
      icon: IconHeartHandshake,
      advice: "Sociedades",
      description:
        "Gestionan la creación de empresas, cumpliendo con todos los requisitos legales. Además, intervienen con regularidad en procesos de restructuración corporativa, ofreciendo un servicio rápido y confiable para resguardar los patrimonios empresariales ",
    },
    {
      icon: IconHeart,
      advice: "Actas de Asamblea",
      description: "hftiujkhuyt ajdh dsasmdhbm ",
    },
    {
      icon: IconList,
      advice: "Adjudicaciones",
      description: "hftiujkhuyt ajdh dsasmdhbm ",
    },
  ];
  return (
    <div>
      <div className="our-services-wrapper">
        {/*Aquí se escribe el loop para gneerar todos los servicios apartir del array */}
        <div id="special-section">
          <h3>Nuestros Servicios</h3>
          <div className="show-more">
            <p className="fuente-secundaria">LEER MÁS</p>
            <IconArrowRight stroke={1.3} />
          </div>
        </div>
        {ourServicesArr.map((serv, index) => (
          <Servicios
            key={index}
            Icon={serv.icon}
            advice={serv.advice}
            description={serv.description}
          />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
