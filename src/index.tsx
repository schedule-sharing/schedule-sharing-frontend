import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./store/store";
import theme from "./styles/themes/mainTheme";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
