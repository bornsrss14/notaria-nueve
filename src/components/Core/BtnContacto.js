import React from "react";
import { IconMessage } from "@tabler/icons-react";
export const BtnContacto = () => {
  return (
    <div className="btn-contacto">
      <p>Contáctanos</p>
      <div class="chat-button">
        <IconMessage color="#fff" stroke={1.24} />
      </div>
    </div>
  );
};

export default BtnContacto;
