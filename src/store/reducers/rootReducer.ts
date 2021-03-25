import { combineReducers } from "redux";
import clubScheduleReducer from "./scheduleReducer/clubScheduleReducer";
import myScheduleReducer from "./scheduleReducer/myScheduleReducer";

import visibilityReducer from "./visibilityReducer/visibilityReducer";

const rootReducer = combineReducers({
  visibilityReducer,
  myScheduleReducer,
  clubScheduleReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
