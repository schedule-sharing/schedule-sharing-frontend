import { combineReducers } from "redux";
import clubScheduleReducer from "./scheduleReducer/clubScheduleReducer";
import myScheduleReducer from "./scheduleReducer/myScheduleReducer";
import userReducer from "./userReducer/userReducer";
import visibilityReducer from "./visibilityReducer/visibilityReducer";
import clubReducer from "./clubReducer/clubReducer";

const rootReducer = combineReducers({
  visibilityReducer,
  myScheduleReducer,
  clubScheduleReducer,
  clubReducer,
  userReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
