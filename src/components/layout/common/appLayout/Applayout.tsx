import React from "react";
import styles from "./appLayoutStyle";

type AppLayoutProps = {
  children: React.ReactNode;
};
const Applayout: React.FC<AppLayoutProps> = ({ children }) => {
  const classes = styles();
  return <div className={classes.root}>{children}</div>;
};

export default Applayout;
