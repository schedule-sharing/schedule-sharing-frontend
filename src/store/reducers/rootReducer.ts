import { combineReducers } from "redux";
import myScheduleReducer from "./myScheduleReducer/myScheduleReducer";
import visibilityReducer from "./visibilityReducer/visibilityReducer";

const rootReducer = combineReducers({
  visibilityReducer,
  myScheduleReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
