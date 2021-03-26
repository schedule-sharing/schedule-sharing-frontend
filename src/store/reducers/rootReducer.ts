import { combineReducers } from "redux";
import visibilityReducer from "./visibilityReducer/visibilityReducer";
import clubReducer from "./clubReducer/clubReducer";
import userReducer from "./userReducer/userReducer";

const rootReducer = combineReducers({
  visibilityReducer,
  clubReducer,
  userReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
