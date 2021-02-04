import "../styles/globals.css";
import React from "react";
import { AppProps } from "next/app";

const MyApp = ({ Component /* pageProps 명시해야됨 */ }: AppProps) => (
  <Component />
);

export default MyApp;
