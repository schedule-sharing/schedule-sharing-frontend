import React from "react";
import ReactCalendar from "react-calendar";
import "./CalendarStyle.module.css";
import "react-calendar/dist/Calendar.css";

const Calendar = () => (
  <ReactCalendar
    className="react-calendar"
    value={new Date()}
    onChange={(v) => alert(v.toString())}
  />
);

export default Calendar;
