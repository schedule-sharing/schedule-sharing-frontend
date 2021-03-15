import { combineReducers } from "redux";
import myScheduleReducer from "./scheduleReducer/myScheduleReducer";
import visibilityReducer from "./visibilityReducer/visibilityReducer";

const rootReducer = combineReducers({
  visibilityReducer,
  myScheduleReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
