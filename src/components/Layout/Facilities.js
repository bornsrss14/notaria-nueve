import React, { Component } from "react";
import {
  IconDisabled,
  IconParkingCircleFilled,
  IconTemperatureSnow,
  IconBrandCouchdb,
  IconWifi,
  IconBadgeWc,
  IconBus,
} from "@tabler/icons-react";

const Facilities = () => {
  const facilities = [
    { icon: <IconDisabled size={28} />, label: "Entrada accesible" },
    {
      icon: <IconParkingCircleFilled size={28} />,
      label: "Estacionamiento cercano",
    },
    { icon: <IconTemperatureSnow size={28} />, label: "Oficina climatizada" },
    { icon: <IconBrandCouchdb size={28} />, label: "Sala de espera cómoda" },
    { icon: <IconWifi size={28} />, label: "Wi-Fi disponible" },
    { icon: <IconBadgeWc size={28} />, label: "Sanitarios accesibles" },
    {
      icon: <IconBus size={28} />,
      label: "Acceso por transporte público",
    },
  ];

  return (
    <div>
      <section id="facilities-wrapper">
        <h2>Nuestras instalaciones</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: "1.5rem",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            maxWidth: "100%",
            marginTop: "2rem",
          }}
        >
          {facilities.map((facility, index) => (
            <div key={index} className="icon-facilities">
              {facility.icon}
              <span className="facilitie-label">{facility.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Facilities;
