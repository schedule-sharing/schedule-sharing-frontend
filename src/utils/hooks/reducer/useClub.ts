import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/reducers/rootReducer";
import {
  asyncGetClub as getClub,
  asyncPostClub as postClub,
  asyncRemoveClub as removeClub,
  selectClub as sClub,
  asyncModifyClub as modifyClub
} from "../../../store/reducers/clubReducer/clubReducer";

export default function useClub() {
  const dispatch = useDispatch();
  const clubs = useSelector((state: RootState) => state.clubReducer);
  const asyncGetClub = useCallback(() => {
    dispatch(getClub());
  }, [dispatch]);
  const asyncPostClub = useCallback(
    (val: Omit<clubType, "clubId">) => {
      dispatch(postClub(val));
    },
    [dispatch]
  );
  const asyncRemoveClub = useCallback((id: string) => dispatch(removeClub(id)), [dispatch]);
  const selectClub = useCallback((id: string) => dispatch(sClub(id)), [dispatch]);
  const asyncModifyClub = useCallback(
    (id: string, val: Omit<clubType, "clubId">) => {
      dispatch(modifyClub(id, val));
    },
    [dispatch]
  );
  return {
    selectClub,
    asyncGetClub,
    asyncPostClub,
    asyncRemoveClub,
    asyncModifyClub,
    clubs
  };
}
