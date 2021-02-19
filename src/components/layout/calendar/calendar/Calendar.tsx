import React from "react";
import ReactCalendar from "react-calendar";

const Calendar = () => (
  <ReactCalendar value={new Date()} onChange={(v) => alert(v.toString())} />
);

export default Calendar;
