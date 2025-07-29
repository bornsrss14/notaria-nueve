import React from "react";
import { IconArrowRight } from "@tabler/icons-react";
export const ReadMore = () => {
  return (
    <div>
      <div className="show-more">
        <a href="#ds">
          <p className="fuente-secundaria">Leer más</p>
        </a>
        <IconArrowRight stroke={1.3} />
      </div>
    </div>
  );
};

export default ReadMore;
