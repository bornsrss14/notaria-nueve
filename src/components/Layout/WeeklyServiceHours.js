<sectio></sectio>;
export const WeeklyServiceHours = ({ horarios, getMatchDay }) => {
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

  return (
    <div>
      <section className="grid-hours">
        {/* //className="grid-hours */}
        {horarios.map((day, index) => (
          <div key={index} className="single-range-hour border">
            <p style={{ fontWeight: "bold" }}>{day.day}</p>
            {day.rangos.map((rango, index) => (
              <div key={index}>
                <p>
                  {rango.open ? (
                    `${rango.open}:00 - ${rango.close}:00`
                  ) : (
                    <span className="close-span">cerrado</span>
                  )}
                </p>
              </div>
            ))}
          </div>
        ))}
        {/* {`Los horarios de hoy ${today} son de ${matchDay.rangos[0].open} a 14:00 `} */}
      </section>
    </div>
  );
};
export default WeeklyServiceHours;
