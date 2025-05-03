import { render } from "@testing-library/react";
import React from "react";

export const WeeklyServiceHours = () => {
  return (
    <div className="grid-hours">
      <p>Monday</p>
      <p className="morning-shift">8AM - 2PM</p>
      <p className="afternoon-shift">4PM - 6PM</p>

      <p>Tuesday</p>
      <p className="morning-shift">8AM - 2PM</p>
      <p className="afternoon-shift">4PM - 6PM</p>

      <p>Wednesday</p>
      <p className="morning-shift">8AM - 2PM</p>
      <p className="afternoon-shift">4PM - 6PM</p>

      <p>Thursday</p>
      <p className="morning-shift">8AM - 2PM</p>
      <p className="afternoon-shift">4PM - 6PM</p>

      <p>Friday</p>
      <p className="morning-shift">8AM - 2PM</p>
      <p className="afternoon-shift">4PM - 6PM</p>

      <p>Saturday</p>
      <p className="morning-shift">9AM - 2PM</p>
      <p className="afternoon-shift"> </p>

      <p>Sunday</p>
      <p className="morning-shift">Closed</p>
      <p className="afternoon-shift"></p>
    </div>
  );
};
export default WeeklyServiceHours;
