import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";
import {
  addMyScheduleAction,
  AddMyScheduleFormData,
  getMyScheduleListAction
} from "../../store/reducers/scheduleReducer/myScheduleReducer";

export default function useAddMySchedule() {
  const dispatch = useDispatch();
  const myScheduleList = useSelector((state: RootState) => {
    const res = async () => {
      const rr = await state.myScheduleReducer;
      return rr;
    };
    return res;
  });
  console.log(myScheduleList);

  const getMyScheduleList = useCallback(
    (month: string) => {
      dispatch(getMyScheduleListAction(month));
    },
    [dispatch]
  );
  const addMySchedule = useCallback(
    (newSchedule: AddMyScheduleFormData) => {
      dispatch(addMyScheduleAction(newSchedule));
    },
    [dispatch]
  );
  return { addMySchedule, getMyScheduleList, myScheduleList };
}
