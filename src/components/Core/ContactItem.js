import React from "react";
import { IconMapPin, IconPhone } from "@tabler/icons-react";

export const ContactItem = ({ typeDireccion, description, Icono }) => {
  return (
    <div className="container-contacto">
      <div id="flexx">
        <Icono stroke={1} color="blue" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h4 style={{ padding: "0", margin: "0" }}>{typeDireccion}:</h4>
          <p style={{ padding: "0", margin: "0" }}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
