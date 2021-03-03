import React from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calendar = () => (
  <ReactCalendar value={new Date()} onChange={(v) => alert(v.toString())} />
);

export default Calendar;
