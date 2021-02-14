import React from "react";
import { createStyles, makeStyles } from "@material-ui/core";
import SideMenuBar from "./sidebar/SideMenuBar";
import Content from "./content/Content";

const Layout = ({ children }) => (
  <>
    {/* <SideMenuBar /> */}
    <>{children}</>
  </>
);

export default Layout;
