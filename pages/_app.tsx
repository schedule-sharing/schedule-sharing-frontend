import "../styles/globals.css";
import React from "react";
import { AppProps } from "next/app";
import { MuiThemeProvider } from "@material-ui/core";
import mainTheme from "../styles/themes/mainTheme";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MuiThemeProvider theme={mainTheme}>
    <Component />
  </MuiThemeProvider>
);

export default MyApp;
