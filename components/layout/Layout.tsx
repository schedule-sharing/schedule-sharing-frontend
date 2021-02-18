import React from "react";
import SideMenuBar from "./sidebar/SideMenuBar";
import Content from "./content/Content";
import globals from "../../styles/globals";

const Layout = ({ children }) => {
  const classes = globals();
  return (
    <>
      <SideMenuBar />
      <div className={classes.root}>
        <>{children}</>
      </div>
    </>
  );
};

export default Layout;
