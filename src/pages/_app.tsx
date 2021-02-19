/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { MuiThemeProvider } from "@material-ui/core";
import Head from "next/head";
import { Provider } from "react-redux";
import mainTheme from "../styles/themes/mainTheme";
import store from "../store/store";
import "../styles/global.css";
// Component =>pageComponent
const App = ({ Component, pageProps }: AppProps) => (
  // useEffect(() => {
  //   const jssStyles = document.querySelector("#jss-server-side");
  //   if (jssStyles) {
  //     jssStyles.parentNode?.removeChild(jssStyles);
  //   }
  // }, []);

  <Provider store={store}>
    <MuiThemeProvider theme={mainTheme}>
      <Head>
        <title>Schedule Sharing</title>
      </Head>
      <Component {...pageProps} />
    </MuiThemeProvider>
  </Provider>
);
export default App;
