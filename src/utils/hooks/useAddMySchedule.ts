import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";
import {
  addMyScheduleAction,
  AddMyScheduleFormData,
  getMyScheduleListAction,
  getMyScheduleListActionAsync,
  addMyScheduleActionAsync
} from "../../store/reducers/scheduleReducer/myScheduleReducer";

export default function useAddMySchedule() {
  const dispatch = useDispatch();
  const getMyScheduleList = useCallback(
    (month: string) => {
      dispatch(getMyScheduleListActionAsync(month));
    },
    [dispatch]
  );
  const addMySchedule = useCallback(
    (newSchedule: AddMyScheduleFormData) => {
      dispatch(addMyScheduleActionAsync(newSchedule));
    },
    [dispatch]
  );
  return { addMySchedule, getMyScheduleList };
}
