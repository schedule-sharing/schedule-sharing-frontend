import { combineReducers } from "redux";
import clubScheduleReducer from "./scheduleReducer/clubScheduleReducer";
import myScheduleReducer from "./scheduleReducer/myScheduleReducer";

import visibilityReducer from "./visibilityReducer/visibilityReducer";
import clubReducer from "./clubReducer/clubReducer";

const rootReducer = combineReducers({
  visibilityReducer,
  myScheduleReducer,
  clubScheduleReducer,
  clubReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
