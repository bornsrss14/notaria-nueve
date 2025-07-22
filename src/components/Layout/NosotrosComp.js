import React from "react";
import { IconMapPin } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import TeamMember from "../Core/TeamMember";
import { ContactoFooter } from "../Core/ContactoFooter";
import FacilitiesGallery from "./FacilitiesGallery";

export const NosotrosComp = () => {
  return (
    <div className="" style={{ padding: "5rem 0rem 0rem" }}>
      <div className="nosotros_gallery_content padding-global">
        <div>
          <h2 className="heading-style-h1">Acerca de nosotros</h2>
          <p>
            Contamos con un equipo de profesionales altamente capacitados,
            dedicados a ofrecer servicios notariales de alta calidad. Con
            experiencia garantizamos un servicio confiable y eficiente.
          </p>
        </div>
        <div style={{ margin: "1rem" }}>
          <Link to="/" className="logo-wrapper">
            <div style={{ width: "5rem", height: "5rem", overflow: "hidden" }}>
              <img
                style={{ width: "100%", height: "auto" }}
                title={"title"}
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2zCu2kiZGUZaj7TJAax178d5E8fKJS5zw2A&s"
                }
                alt="dos"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "0 .5rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p style={{ color: "white" }} id="not-nueve">
                Notaría Pública 9
              </p>
              <p style={{ color: "white" }} id="lic-lilia">
                LIC. LILIA REYES GOMEZ
              </p>
            </div>
          </Link>
        </div>
      </div>
      <section className="padding-section-large">
        <div className="submenu-about-us">
          <div className="nosotros_sobre-nosotros-item">
            <h3 className="heading-style-h3">Misión</h3>
            <p>
              Brindamos certeza y seguridad jurídica a nuestros clientes con
              atención especializada, personalizada y eficaz, utilizando
              herramientas innovadoras para ofrecer un servicio notarial de
              excelencia.
            </p>
          </div>
          <div>
            <div className="nosotros_sobre-nosotros-item">
              <h3 className="heading-style-h3">Visión</h3>
              <p>
                Ser la mejor opción en servicios notariales en Mazatlán y
                Sinaloa, aplicando altos estándares de calidad con agilidad y
                compromiso, y siendo una empresa socialmente responsable.
              </p>
            </div>
          </div>
          <div>
            <div className="nosotros_sobre-nosotros-item">
              <h3 className="heading-style-h3">Valores</h3>
              <p>
                Comprometidos con resultados sobresalientes, actuamos con ética
                y responsabilidad. Atendemos a nuestros clientes con excelencia
                y eficacia, contribuyendo al bienestar de la comunidad.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          style={{ background: "white" }}
          className="nosotros_gallery_content padding-global"
        >
          <div className="nuestras-oficinas-color">
            <h2 className="heading-style-h1">Nuestras Oficinas</h2>
            <div className="cordoba-ver">
              <IconMapPin></IconMapPin>
              <p>Córdoba, Veracruz.</p>
            </div>
          </div>
          <div className="nuestras-oficinas-color">
            <p>
              Nuestras oficinas están ubicadas en el corazón de Córdoba,
              Veracruz, en un espacio diseñado para brindarte una atención
              profesional y cercana. La Notaría 9 cuenta con varias salas de
              firmas y cómodas salas de espera, todas climatizadas y
              acondicionadas para tu confort mientras realizas tus trámites.
            </p>
          </div>
        </div>
      </section>
      <section>
        <FacilitiesGallery />
      </section>
      <section>
        <div
          style={{ display: "flex", flexDirection: "column" }}
          className="padding-global bg-color-white"
        >
          <div className="conoce-equip-title">
            <h1 className="heading-style-h1">Conoce al equipo</h1>
            <p>
              Potenciamos al máximo nuestro talento para brindar un servicio
              centrado en el cliente y generar resultados de excelencia.
            </p>
          </div>

          <div className="team-container">
            <TeamMember
              photo={
                "https://cdn.prod.website-files.com/6747ae021bab1a092e992b6c/6748c04545ad9d0766427fa6_Victoria-Celestine-Ilse-Koepsell%201-p-500.png"
              }
              name="Lic. Lilia Reyes Gomez"
              title="Notario titular"
              notario={true}
            />
            <TeamMember
              photo={
                "https://cdn.prod.website-files.com/6747ae021bab1a092e992b6c/6748c04cdc5fe3af7bae16e9_Jose-Rafael-Ruelas-Lopez%202-p-500.png"
              }
              name="Lic. José Rafael Ruelas López"
              title="Licenciado en Derecho"
            />
            <TeamMember
              photo={
                "https://cdn.prod.website-files.com/6747ae021bab1a092e992b6c/6748c1569e0a31b7a40f94a5_Karla-Lindegren-Mora%201-p-500.png"
              }
              name="Lic. Janeth Maceda Rojano"
              title="Licenciado en Derecho"
            />
            <TeamMember
              photo={
                "https://cdn.prod.website-files.com/6747ae021bab1a092e992b6c/6748c04cdc5fe3af7bae16e9_Jose-Rafael-Ruelas-Lopez%202-p-500.png"
              }
              name="Lic. José Rafael Ruelas López"
              title="Licenciado en Derecho"
            />
            <TeamMember
              photo={
                "https://cdn.prod.website-files.com/6747ae021bab1a092e992b6c/6748c0f3a26f57f8d8a16611_Aimee-Sanchez-Solis%201-p-500.png"
              }
              name="Alejandra Beristain Sanchez "
              title="Lic. Derecho"
            />
            <TeamMember
              photo={
                "https://cdn.prod.website-files.com/6747ae021bab1a092e992b6c/6748c04cdc5fe3af7bae16e9_Jose-Rafael-Ruelas-Lopez%202-p-500.png"
              }
              name="Lic. José Rafael Ruelas López"
              title="Licenciado en Derecho"
            />
          </div>
        </div>
        <div>
          <ContactoFooter />
        </div>
      </section>
    </div>
  );
};
export default NosotrosComp;
