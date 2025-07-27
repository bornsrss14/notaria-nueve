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
  ];

  return (
    <div>
      <section id="facilities-wrapper">
        <h2>Nuestras instalaciones</h2>
        <div className="our-facilities">
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
