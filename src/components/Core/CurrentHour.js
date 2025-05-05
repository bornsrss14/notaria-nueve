import React, { useState } from "react";
import { IconCaretDownFilled, IconChevronDown } from "@tabler/icons-react";
export const CurrentHour = ({ WeeklyServiceHours }) => {
  const [displayHours, setDisplayHours] = useState(false);
  function handleConsola() {
    setDisplayHours((prevState) => {
      console.log("Estado previo", prevState);
      return !prevState;
    });
  }
  return (
    <div onClick={handleConsola} className="renderizado-wrapper">
      {/*Esto se renderiza en caso de ser falso  */}
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

      <div>{displayHours && <WeeklyServiceHours />}</div>
    </div>
  );
};

export default CurrentHour;
