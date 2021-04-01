import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";
import {
  addClubScheduleActionAsync,
  AddClubScheduleFormData,
  deleteClubScheduleActionAsync,
  getClubScheduleListActionAsync,
  updateClubScheduleActionAsync,
  UpdateClubScheduleFormData
} from "../../store/reducers/scheduleReducer/clubScheduleReducer";

export default function useClubSchedule() {
  const dispatch = useDispatch();

  const clubScheduleList = useSelector((state: RootState) => state.clubScheduleReducer.clubScheduleList);
  const getClubScheduleList = useCallback(
    (clubId: number, yearMonth: string) => {
      dispatch(getClubScheduleListActionAsync(clubId, yearMonth));
    },
    [dispatch]
  );
  const addClubSchedule = useCallback(
    (newSchedule: AddClubScheduleFormData) => {
      dispatch(addClubScheduleActionAsync(newSchedule));
    },
    [dispatch]
  );
  const updateClubSchedule = useCallback(
    (id: number, newSchedule: UpdateClubScheduleFormData) => {
      dispatch(updateClubScheduleActionAsync(id, newSchedule));
    },
    [dispatch]
  );

  const deleteClubSchedule = useCallback(
    (id: number) => {
      dispatch(deleteClubScheduleActionAsync(id));
    },
    [dispatch]
  );
  return {
    getClubScheduleList,
    addClubSchedule,
    updateClubSchedule,
    deleteClubSchedule,
    clubScheduleList
  };
}
