import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";
import Applayout from "../../components/layout/common/appLayout/Applayout";
import SideMenuBar from "../../components/layout/sidebar/SideMenuBar";
import CalendarLayout from "../../components/layout/calendar/CalendarLayout";

const Index = () => {
  const router = useRouter();
  return (
    <Applayout>
      <Head>
        <title>calendar</title>
        <metadata />
      </Head>
      <SideMenuBar>
        <CalendarLayout />
      </SideMenuBar>
    </Applayout>
  );
};
export default Index;
