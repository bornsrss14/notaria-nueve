import { render } from "@testing-library/react";
import React from "react";

<sectio></sectio>;
export const WeeklyServiceHours = () => {
  const horarioServicio = [
    {
      day: "Monday",
      firstHourOpen: 8,
      firstHourClose: 2,
      secondHourOpen: 16,
      secondHourClose: 18,
    },
    {
      day: "Tuesday",
      firstHourOpen: 8,
      firstHourClose: 2,
      secondHourOpen: 16,
      secondHourClose: 18,
    },
    {
      day: "Wednesday",
      firstHourOpen: 8,
      firstHourClose: 2,
      secondHourOpen: 16,
      secondHourClose: 18,
    },
    {
      day: "Thursday",
      firstHourOpen: 8,
      firstHourClose: 2,
      secondHourOpen: 16,
      secondHourClose: 18,
    },
    {
      day: "Friday",
      firstHourOpen: 8,
      firstHourClose: 2,
      secondHourOpen: 16,
      secondHourClose: 18,
    },
    {
      day: "Saturday",
      firstHourOpen: 9,
      firstHourClose: 2,
      secondHourOpen: null,
      secondHourClose: null,
    },
    {
      day: "Sunday",
      firstHourOpen: null,
      firstHourClose: null,
      secondHourOpen: null,
      secondHourClose: null,
    },
  ];
  return (
    <div>
      <section className="grid-hours">
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
