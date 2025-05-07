import { render } from "@testing-library/react";
import React from "react";

<sectio></sectio>;
export const WeeklyServiceHours = () => {
  function getTodayDay() {
    const days = [
      "domingo",
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sabado",
    ];

    const now = new Date();
    return days[now.getDay()];
  }

  const diasFestivos = [
    {
      dateFeriado: "2025-12-25",
      cerrado: true,
    },
    {
      dateFeriado: "2025-05-10",
      cerrado: true,
    },
    {
      dateFeriado: "2025-11-02",
      rangos: [{ open: "10:00", close: "14:00" }],
    },
  ];
  const horarios = [
    {
      day: "lunes",
      rangos: [
        { open: "08:00", close: "14:00" },
        { open: "16:00", close: "18:00" },
      ],
    },
    {
      day: "martes",
      rangos: [
        { open: "08:00", close: "14:00" },
        { open: "16:00", close: "18:00" },
      ],
    },
    {
      day: "miércoles",
      rangos: [
        { open: "08:00", close: "14:00" },
        { open: "16:00", close: "18:00" },
      ],
    },
    {
      day: "jueves",
      rangos: [
        { open: "08:00", close: "14:00" },
        { open: "16:00", close: "18:00" },
      ],
    },
    {
      day: "viernes",
      rangos: [
        { open: "08:00", close: "14:00" },
        { open: "16:00", close: "18:00" },
      ],
    },
    {
      day: "sábado",
      rangos: [
        { open: "08:00", close: "14:00" },
        { open: null, close: null },
      ],
    },
    {
      day: "domingo",
      rangos: [
        { open: null, close: null },
        { open: null, close: null },
      ],
    },
  ];

  return (
    <div>
      <section className="grid-hours">
        {/* //className="grid-hours */}
        {horarios.map((day, index) => (
          <div key={index} className="single-range-hour border">
            <p>{day.day}</p>
            {day.rangos.map((rango, index) => (
              <div key={index}>
                <p>
                  {rango.open ? (
                    `${rango.open} -`
                  ) : (
                    <span className="close-span">cerrado</span>
                  )}
                </p>
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};
export default WeeklyServiceHours;
