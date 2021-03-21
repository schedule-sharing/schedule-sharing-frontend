import { combineReducers } from "redux";
import visibilityReducer from "./visibilityReducer/visibilityReducer";
import clubReducer from "./clubReducer/clubReducer";

const rootReducer = combineReducers({
  visibilityReducer,
  clubReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
