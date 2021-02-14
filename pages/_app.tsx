import "../styles/globals.css";
import React from "react";
import { AppProps } from "next/app";
import { MuiThemeProvider } from "@material-ui/core";
import mainTheme from "../styles/themes/mainTheme";
import SideMenuBar from './../component/SideMenuBar';
import  { Container } from 'next/app';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps)=> {
    return(    
    <MuiThemeProvider theme={mainTheme}>
      <SideMenuBar>
        <Component {...pageProps}/>
      </SideMenuBar>
    </MuiThemeProvider>
  )
};

export default MyApp;
