import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk, logger))
);
