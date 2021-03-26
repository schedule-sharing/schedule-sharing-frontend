import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers/rootReducer";

const persistConfig = {
  key: "root",
  storage
};
const reducer = persistReducer(persistConfig, rootReducer);
export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(reduxThunk, logger))
);
