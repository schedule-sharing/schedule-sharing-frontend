import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import App from "./App";
import store from "./store/store";
import theme from "./styles/themes/mainTheme";

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistStore(store)}> */}
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <App />
        </MuiPickersUtilsProvider>
      </BrowserRouter>
    </ThemeProvider>
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById("root")
);
