import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

export const CurrentHour = ({ WeeklyServiceHours }) => {
  const [displayHours, setDisplayHours] = useState(false);
  const [today, setToday] = useState("");
  const [currentHour, setCurrentHour] = useState();

  useEffect(() => {
    const intervalo = setInterval(() => {
      setCurrentHour(getCurrentHour());
      setToday(getTodayDay());
      console.log(currentHour, today);
    }, 60000);

    setCurrentHour(getCurrentHour());
    setToday(getTodayDay());

    return () => clearInterval(intervalo);
  }, [currentHour, today]);

  function getCurrentHour() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    return `${hours}`;
  }

  function getTodayDay() {
    const days = [
      "domingo",
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sábado",
    ];
    const now = new Date();
    return days[now.getDay()];
  }

  const horarios = [
    {
      day: "lunes",
      ranges: [
        { open: "8", close: "14" },
        { open: "16", close: "18" },
      ],
    },
    {
      day: "martes",
      ranges: [
        { open: "8", close: "14" },
        { open: "16", close: "18" },
      ],
    },
    {
      day: "miércoles",
      ranges: [
        { open: "8", close: "14" },
        { open: "16", close: "18" },
      ],
    },
    {
      day: "jueves",
      ranges: [
        { open: "8", close: "14" },
        { open: "16", close: "18" },
      ],
    },
    {
      day: "viernes",
      ranges: [
        { open: "8", close: "14" },
        { open: "16", close: "18" },
      ],
    },
    {
      day: "sábado",
      ranges: [
        { open: "9", close: "14" },
        { open: null, close: null },
      ],
    },
    {
      day: "domingo",
      ranges: [
        { open: null, close: null },
        { open: null, close: null },
      ],
    },
  ];

  function getEstadoHorario() {
    const now = new Date();
    const horaActual = now.getHours();
    const minutosActuales = now.getMinutes();
    const horaDecimal = horaActual + minutosActuales / 60;

    const dias = [
      "domingo",
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sábado",
    ];
    const todayIndex = now.getDay();

    for (let i = 0; i < 7; i++) {
      const dia = dias[(todayIndex + i) % 7];
      const diaHorario = horarios.find((h) => h.day === dia);
      if (!diaHorario) continue;

      for (const rango of diaHorario.ranges) {
        const openTo = parseFloat(rango.open);
        const closeTo = parseFloat(rango.close);

        if (isNaN(openTo) || isNaN(closeTo)) continue;

        if (i === 0 && horaDecimal >= openTo && horaDecimal < closeTo) {
          return {
            abierto: true,
            mensaje: `ABIERTO — Cierra hoy a las ${closeTo}H`,
            color: "green",
          };
        }

        if (i === 0 && horaDecimal < openTo) {
          return {
            abierto: false,
            mensaje: `CERRADO — Abre hoy a las ${openTo}H`,
            color: "red",
          };
        }

        if (i > 0) {
          return {
            abierto: false,
            mensaje: `CERRADO — Abre a las ${openTo}H el ${dia}`,
            color: "red",
          };
        }
      }
    }

    return {
      abierto: false,
      mensaje: "CERRADO:Sin horarios disponibles",
      color: "red",
    };
  }

  function handleConsola() {
    setDisplayHours((prev) => {
      console.log("Estado previo", prev);
      return !prev;
    });
  }

  const estado = getEstadoHorario();

  return (
    <div onClick={handleConsola} className="renderizado-wrapper">
      <div className="hours-main-wrapper">
        {/*primer mensaje  */}
        <span style={{ color: estado.color }}>{estado.mensaje}</span>

        {/* segundo mensaje */}
        {/* <div className="">
          <span className="hr-close-open">
            {`Horarios de hoy (${today}): ${
              horarios
                .find((h) => h.day === today)
                ?.rangos.map((r) =>
                  r.open && r.close ? `${r.open}H - ${r.close}H` : null
                )
                .filter(Boolean)
                .join(" | ") || "Sin atención"
            }`}
          </span>

          <span className="openOrCloseTab">
            {displayHours ? (
              <IconChevronUp stroke={3} size={"1.2rem"} color="#8fd7de" />
            ) : (
              <IconChevronDown stroke={3} size={"1.2rem"} color="#8fd7de" />
            )}
          </span>
        </div> */}
        <span className="openOrCloseTab">
          {displayHours ? (
            <IconChevronUp
              className="icon-chevron"
              stroke={3}
              size={"1.2rem"}
              color="#044396"
            />
          ) : (
            <IconChevronDown stroke={3} size={"1.2rem"} color="#044396" />
          )}
        </span>
      </div>

      <AnimatePresence>
        {displayHours && (
          <motion.div
            className="hr-close-open"
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <WeeklyServiceHours horarios={horarios} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CurrentHour;
