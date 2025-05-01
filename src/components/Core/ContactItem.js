import React from "react";
import { IconMapPin, IconPhone } from "@tabler/icons-react";

export const ContactItem = () => {
  return (
    <div className="container-contacto">
      <div id="flexx">
        <IconMapPin stroke={1} color="blue" />
        <div>
          <h4>Dirección:</h4>
          <p>
            Calle 20 entre evenidas 13 y 15 #1303, Federal, 94570 Córdoba, Ver.
          </p>
        </div>
      </div>
    </div>
  );
};
