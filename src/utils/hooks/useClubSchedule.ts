import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  getClubScheduleListActionAsync,
  addClubScheduleAction
} from "../../store/reducers/scheduleReducer/clubScheduleReducer";

export default function useClubSchedule() {
  const dispatch = useDispatch();
  const getClubScheduleList = useCallback(
    (clubId: number, yearMonth: number) => {
      dispatch(getClubScheduleListActionAsync(clubId, yearMonth));
    },
    [dispatch]
  );
  const addClubSchedule = useCallback(
    (newSchedule) => {
      dispatch(addClubScheduleAction(newSchedule));
    },
    [dispatch]
  );
  return { getClubScheduleList, addClubSchedule };
}
