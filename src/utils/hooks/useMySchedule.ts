import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MyScheduleFormData,
  getMyScheduleListActionAsync,
  addMyScheduleActionAsync,
  updateMyScheduleActionAsync,
  deleteMyScheduleActionAsync
} from "../../store/reducers/scheduleReducer/myScheduleReducer";
import { RootState } from "../../store/reducers/rootReducer";

export default function useMySchedule() {
  const dispatch = useDispatch();
  const myScheduleList = useSelector((state: RootState) => state.myScheduleReducer.myScheduleList);
  const getMyScheduleList = useCallback(
    (month: string) => {
      dispatch(getMyScheduleListActionAsync(month));
    },
    [dispatch]
  );
  const addMySchedule = useCallback(
    (newSchedule: MyScheduleFormData) => {
      dispatch(addMyScheduleActionAsync(newSchedule));
    },
    [dispatch]
  );
  const updateMySchedule = useCallback(
    (id: number, newSchedule: MyScheduleFormData) => {
      dispatch(updateMyScheduleActionAsync(id, newSchedule));
    },
    [dispatch]
  );

  const deleteMySchedule = useCallback(
    (id: number) => {
      dispatch(deleteMyScheduleActionAsync(id));
    },
    [dispatch]
  );
  return {
    addMySchedule,
    getMyScheduleList,
    updateMySchedule,
    deleteMySchedule,
    myScheduleList
  };
}
