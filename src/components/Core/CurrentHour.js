import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
export const CurrentHour = ({ WeeklyServiceHours }) => {
  const [displayHours, setDisplayHours] = useState(false);
  const [today, setToday] = useState("");
  const [currentHour, setCurrentHour] = useState();
  useEffect(() => {
    const intervalo = setInterval(() => {
      setCurrentHour(getCurrentHour());
      setToday(getTodayDay());
    }, 60000); // 60,000 ms = 1 minuto

    // Actualiza inmediatamente también al montar el componente
    setCurrentHour(getCurrentHour());
    setToday(getTodayDay());

    return () => clearInterval(intervalo); // Limpia el intervalo al desmontar
  }, []);
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
      "sabado",
    ];

    const now = new Date();
    const dayNow = days[now.getDay()];
    return dayNow;
  }

  const horarios = [
    {
      day: "lunes",
      rangos: [
        { open: "8", close: "14" },
        { open: "16", close: "18" },
      ],
    },
    {
      day: "martes",
      rangos: [
        { open: "8", close: "14" },
        { open: "16", close: "18" },
      ],
    },
    {
      day: "miércoles",
      rangos: [
        { open: "8", close: "14" },
        { open: "16", close: "18" },
      ],
    },
    {
      day: "jueves",
      rangos: [
        { open: "8", close: "14" },
        { open: "16", close: "18" },
      ],
    },
    {
      day: "viernes",
      rangos: [
        { open: "8", close: "14" },
        { open: "16", close: "18" },
      ],
    },
    {
      day: "sábado",
      rangos: [
        { open: "8", close: "14" },
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
  function getMatchDay() {
    const matchDay = horarios.find((days) =>
      days.day.toLowerCase().includes(today.toLowerCase())
    );
    return matchDay;
  }
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
        {/* <p>Hours:</p>
        <p className="openOrClose">ABIERTO</p>
        <div className="groupSpan">
          <span className="openOrCloseSpan">Cierra:</span> <span>1:00</span>
          <span> AM /PM</span>{" "}
          <span className="openOrCloseTab">
            {" "}
            <IconCaretDownFilled size={"1.2rem"} color="#8fd7de" />
          </span>
        </div> */}
        {/*  ~----------------------------------------------------------------------------------------*/}
        <div style={{ display: "flex", gap: ".8rem" }}>
          {(currentHour >= getMatchDay()?.rangos?.[0]?.open &&
            currentHour < getMatchDay()?.rangos?.[0]?.close) ||
          (currentHour >= getMatchDay()?.rangos?.[1]?.open &&
            currentHour < getMatchDay()?.rangos?.[1]?.close) ? (
            <span style={{ color: "green" }}>ABIERTO</span>
          ) : (
            <span style={{ color: "red" }}>CERRADO</span>
          )}
          {`Hoy ${today} de ${getMatchDay()?.rangos?.[0]?.open}:00 - ${
            getMatchDay()?.rangos?.[0]?.close
          }:00  | ${getMatchDay()?.rangos?.[1]?.open}:00 - ${
            getMatchDay()?.rangos?.[1]?.close
          }:00 `}
          <span className="openOrCloseTab">
            {displayHours ? (
              <IconChevronUp size={"1.2rem"} color="#8fd7de" />
            ) : (
              <IconChevronDown size={"1.2rem"} color="#8fd7de" />
            )}
          </span>
        </div>
      </div>
      <AnimatePresence>
        {displayHours && (
          <motion.div
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
