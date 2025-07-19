import React from "react";
import { IconMessage } from "@tabler/icons-react";
export const BtnContacto = () => {
  return (
    <div className="btn-contacto">
      <p>Contáctanos</p>
      <div className="chat-button">
        <IconMessage color="#fff" stroke={1.9} />
      </div>
    </div>
  );
};

export default BtnContacto;
