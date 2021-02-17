/* eslint-disable react/jsx-props-no-spreading */
import "../styles/globals.css";
import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { MuiThemeProvider } from "@material-ui/core";
import Head from "next/head";
import { Provider } from "react-redux";
import mainTheme from "../styles/themes/mainTheme";
import Layout from "../components/layout/Layout";
import store from "../store/store";
// Component =>pageComponent
const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode?.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <MuiThemeProvider theme={mainTheme}>
        <Head>
          <title>title</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MuiThemeProvider>
    </Provider>
  );
};

export default MyApp;
