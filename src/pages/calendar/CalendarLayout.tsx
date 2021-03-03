import React from "react";
import Calendar from "./calendar/Calendar";
import SideMenuBar from "../../components/sidebar/SideMenuBar";

const CalendarLayout = () => (
  <div>
    <SideMenuBar>
      <Calendar />
    </SideMenuBar>
  </div>
);

export default CalendarLayout;
