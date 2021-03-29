import React from "react";
import SideMenuBar from "../../components/sidebar/SideMenuBar";
import Calendar from "./calendar/Calendar";
import ClubController from "./clubController/ClubController";

const CalendarLayout = () => (
  <SideMenuBar>
    <ClubController />
    <Calendar />
  </SideMenuBar>
);
export default CalendarLayout;
