import React from "react";
import { IconCaretDownFilled, IconChevronDown } from "@tabler/icons-react";
export const CurrentHour = () => {
  return (
    <>
      <div className="hours-main-wrapper">
        <p>Hours:</p>
        <p className="openOrClose">ABIERTO</p>
        <div className="groupSpan">
          <span className="openOrCloseSpan">Cierra:</span> <span>1:00</span>
          <span> AM /PM</span>{" "}
          <span className="openOrCloseTab">
            {" "}
            <IconCaretDownFilled size={"1.2rem"} color="#8fd7de" />
          </span>
        </div>
      </div>
    </>
  );
};

export default CurrentHour;
