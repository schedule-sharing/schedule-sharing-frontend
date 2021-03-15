import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";
import {
  addMyScheduleAction,
  MySchedule
} from "../../store/reducers/scheduleReducer/myScheduleReducer";

export default function useAddMySchedule() {
  const dispatch = useDispatch();
  const myScheduleList = useSelector(
    (state: RootState) => state.myScheduleReducer
  );
  const addMySchedule = useCallback(
    (newSchedule: MySchedule) => {
      dispatch(addMyScheduleAction(newSchedule));
    },
    [dispatch]
  );
  return { addMySchedule, myScheduleList };
}
