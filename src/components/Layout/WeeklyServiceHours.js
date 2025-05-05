import { render } from "@testing-library/react";
import React from "react";

<sectio></sectio>;
export const WeeklyServiceHours = ({ horarioServicio }) => {
  return (
    <div>
      <section className="grid-hours">
        {console.log(horarioServicio)}
        {horarioServicio.map((horario, index) => (
          <>
            <p>{horario.day}</p>
            <p className="morning-shift">
              {horario.firstHourOpen
                ? `${horario.firstHourOpen}AM -`
                : "Cerrado"}
              {horario.firstHourClose ? `${horario.firstHourClose}PM` : ""}
            </p>
            <p className="afternoon-shift">
              {horario.secondHourOpen
                ? `${horario.secondHourOpen}PM -`
                : "Cerrado"}

              {horario.secondHourClose ? `${horario.secondHourClose}PM` : ""}
            </p>
          </>
        ))}
      </section>
    </div>
  );
};
export default WeeklyServiceHours;
