import React from "react";
import Calendar from "./calendar/Calendar";
import SideMenuBar from "../../components/sidebar/SideMenuBar";

const CalendarLayout = () => (
  <SideMenuBar>
    <Calendar />
  </SideMenuBar>
);

export default CalendarLayout;
