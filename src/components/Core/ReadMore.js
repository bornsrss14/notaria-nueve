import React from "react";
import { IconArrowRight } from "@tabler/icons-react";
export const ReadMore = () => {
  return (
    <div>
      <div className="show-more">
        <p className="fuente-secundaria">LEER MÁS</p>
        <IconArrowRight stroke={1.3} />
      </div>
    </div>
  );
};

export default ReadMore;
