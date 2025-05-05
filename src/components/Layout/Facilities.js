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
    { icon: <IconDisabled size={32} />, label: "Entrada accesible" },
    {
      icon: <IconParkingCircleFilled size={32} />,
      label: "Estacionamiento cercano",
    },
    { icon: <IconTemperatureSnow size={32} />, label: "Oficina climatizada" },
    { icon: <IconBrandCouchdb size={32} />, label: "Sala de espera cómoda" },
    { icon: <IconWifi size={32} />, label: "Wi-Fi disponible" },
    { icon: <IconBadgeWc size={32} />, label: "Sanitarios accesibles" },
    {
      icon: <IconBus size={32} />,
      label: "Acceso por transporte público",
    },
  ];

  return (
    <div>
      <section style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Nuestras instalaciones</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1.5rem",
            marginTop: "2rem",
          }}
        >
          {facilities.map((facility, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {facility.icon}
              <span style={{ marginTop: "0.5rem" }}>{facility.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Facilities;
