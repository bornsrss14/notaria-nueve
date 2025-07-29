import React from "react";
import { IconFile, IconClipboard, IconPencil } from "@tabler/icons-react";
import { Servicios } from "../Core/Servicios";
import ReadMore from "../Core/ReadMore";
import { Link } from "react-router-dom";

export const OurServices = () => {
  const ourServicesArr = [
    {
      icon: IconPencil,
      advice: "Donaciones",
      description:
        "Contrato por el cual una persona (el donante) transfiere gratuitamente la propiedad de un bien a otra persona (el donatario). Este contrato debe formalizarse en escritura pública cuando se trata de bienes inmuebles o de bienes muebles cuyo valor exceda cierto límite.",
    },
    {
      icon: IconFile,
      advice: "Compraventas",
      description:
        "Facilitan la transferencia de posesión de bienes raíces mediante la creación y validación de escrituras públicas. El equipo de la Notaría pública 9 de Córdoba garantiza la validez legal y seguridad en todas las transacciones inmobiliarias, brindando apoyo integral desde el primer contacto hasta la firma definitiva. ",
    },
    {
      icon: IconClipboard,
      advice: "Poderes",
      description:
        "Proporcionan la redacción de mandatos legales que permiten a una persona representar en gestiones jurídicas, financieros o de negocios. Ya sea un mandato amplio o específico, garantizan su plena legalidad y adaptación a las necesidades del cliente.",
    },
    /*
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
      description:
        "Expiden documentos que certifican eventos relevantes, como cambios de nombre, fe de vida, constancias de propiedad, y más. Estas actas otorgan validez legal a eventos cruciales en la vida de sus clientes. ",
    },
    {
      icon: IconList,
      advice: "Adjudicaciones",
      description:
        "acto jurídico mediante el cual se formaliza la transferencia de propiedad de un bien a una persona. Puede referirse a la herencia, donde los herederos aceptan y se reparten los bienes del fallecido, o a la compraventa de un inmueble, donde se documenta la transferencia de propiedad a un nuevo dueño ",
    }, */
  ];
  return (
    <div id="nuestros-servicios">
      <div className="our-services-wrapper">
        {/*Aquí se escribe el loop para gneerar todos los servicios apartir del array */}

        <div className="special-section">
          <Link to={"todos-servicios"}>
            <h3>Nuestros Servicios</h3>
            <ReadMore />
          </Link>
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
