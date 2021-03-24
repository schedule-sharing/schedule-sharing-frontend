import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Calendar from "./calendar/Calendar";
import SideMenuBar from "../../components/sidebar/SideMenuBar";
import ClubController from "./clubController/ClubController";

type Params = {
  id: string;
};
const CalendarLayout = ({ match }: RouteComponentProps<Params>) => {
  console.log(match);
  return (
    <SideMenuBar>
      <ClubController title={match.params.id} />
      <Calendar />
    </SideMenuBar>
  );
};

export default CalendarLayout;
