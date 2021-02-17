import { combineReducers } from "redux";
import visibilityReducer from "./visibilityReducer/visibilityReducer";

const rootReducer = combineReducers({
  visibilityReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
