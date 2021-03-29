import React from "react";
import { useParams } from "react-router-dom";
import SideMenuBar from "../../components/sidebar/SideMenuBar";
import Calendar from "./calendar/Calendar";
import ClubController from "./clubController/ClubController";
import ClubCalendar from "./calendar/ClubCalendar";

interface RouteParams {
  clubId: string;
}

const ClubCalendarLayout = () => {
  const { clubId } = useParams() as RouteParams;
  return (
    <SideMenuBar>
      <ClubController />
      <ClubCalendar clubId={clubId} />
    </SideMenuBar>
  );
};
export default ClubCalendarLayout;
