import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";
import {
  addMyScheduleAction,
  AddMyScheduleFormData
} from "../../store/reducers/scheduleReducer/myScheduleReducer";

export default function useAddMySchedule() {
  const dispatch = useDispatch();
  const myScheduleList = useSelector(
    (state: RootState) => state.myScheduleReducer
  );
  const addMySchedule = useCallback(
    (newSchedule: AddMyScheduleFormData) => {
      dispatch(addMyScheduleAction(newSchedule));
    },
    [dispatch]
  );
  return { addMySchedule, myScheduleList };
}
