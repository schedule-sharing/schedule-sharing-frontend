import React from "react";
import Head from "next/head";
import UserLayout from "../../components/layout/user/UserLayout";
import Applayout from "../../components/layout/common/appLayout/Applayout";

const index = () => (
  <Applayout>
    <Head>
      <title>user</title>
      <metadata />
    </Head>
    <UserLayout />
  </Applayout>
);

export default index;
